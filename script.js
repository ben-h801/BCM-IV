document.addEventListener('DOMContentLoaded', () => {
  // 1. Variables Globales de la Vista
  const WEEKS_MAP = {
    1: [1, 2, 3, 4, 5],
    2: [6, 7, 8, 9, 10, 11],
    3: [12, 13, 14, 15, 16, 17, 18] 
  };

  const SIMULATION_TARGETS = {
    5: [1, 2, 3, 4],
    11: [6, 7, 8, 9, 10],
    17: [12, 13, 14, 15, 16],
    18: [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16] 
  };

  const WEEKS_DESC = {
    1: "Sistema Nervioso Humano, eje hipotálamo-hipófisis-periferia y sinapsis autonómicas.",
    2: "Metabolismo energético, páncreas endocrino, regulación de glicemia y antagonismo SNA.",
    3: "Glándulas tiroides y suprarrenales. Regulación magno y parvocelular.",
    4: "Asas de retroalimentación, regulación del sistema reproductor e integración neuroendocrina.",
    6: "Fisiología y evaluación renal, función del nefrón y regulación de volemia/osmolaridad.",
    7: "Aclaramiento renal, balances hidrosalino y ácido-base.",
    8: "Fisiología cardiovascular, electrofisiología, ECG y mecánica cardíaca.",
    9: "Variables hemodinámicas, mecánica y regulación autonómica cardíaca.",
    10: "Flujo, presión y lecho vascular. Circulación menor y coronaria.",
    12: "Sistema respiratorio, mecánica ventilatoria e intercambio gaseoso.",
    13: "Regulación autonómica de la función respiratoria y reflejos.",
    14: "Anatomía gastrointestinal, procesos de digestión y absorción.",
    15: "Procesos mecánicos/químicos intestinales y fisiología hepática.",
    16: "Enzimas Digestivas y Cinética Enzimática Gastrointestinal"
  };

  const nav = document.querySelector('nav');
  const weeksContainer = document.getElementById('weeks-container');
  const mainView = document.querySelector('main');
  const examView = document.getElementById('exam-view');
  const questionsContainer = document.getElementById('questions-container');

  const loadedWeeksCache = new Map();

  // 2. Funciones de Carga y Renderizado Principal
  async function loadWeekData(weekNum) {
    if (loadedWeeksCache.has(weekNum)) return loadedWeeksCache.get(weekNum);

    const formattedNum = String(weekNum).padStart(2, '0');
    try {
      await import(`./semana${formattedNum}.js`);
      const weekData = window[`datosSemana${weekNum}`];
      loadedWeeksCache.set(weekNum, weekData);
      return weekData;
    } catch (err) {
      console.warn(`No se pudo cargar semana${formattedNum}.js:`, err);
      return null;
    }
  }

  async function renderWeeks(pruebaId) {
    const weekNumbers = WEEKS_MAP[pruebaId] || [];
    weeksContainer.innerHTML = '<p class="loading-text">Cargando evaluaciones...</p>';

    const weeksData = await Promise.all(weekNumbers.map(num => loadWeekData(num)));

    weeksContainer.innerHTML = weeksData.map((data, index) => {
      const weekNum = weekNumbers[index];
      const isEvaluation = [5, 11, 17, 18].includes(weekNum);
      const title = data?.tituloSemana || (weekNum === 18 ? 'Examen Final' : `Semana ${weekNum}`);
      
      const descHTML = WEEKS_DESC[weekNum] 
        ? `<p class="week-desc">${WEEKS_DESC[weekNum]}</p><hr class="week-divider">` 
        : '';

      let examsHTML = '';
      
      if (isEvaluation) {
        const btnText = weekNum === 18 ? 'Examen Final' : `Prueba ${weekNum === 5 ? 1 : weekNum === 11 ? 2 : 3}`;
        examsHTML = `
          <button type="button" class="sim-exam-btn" data-sim="${weekNum}">
            ${btnText}
          </button>
        `;
      } else {
        const examenes = data?.examenes || [];
        examsHTML = examenes.length > 0 
          ? examenes.map((e, idx) => `
              <button type="button" class="exam-btn" data-week="${weekNum}" data-exam="${e.idExamen}" aria-label="${e.tituloExamen}">
                ${idx + 1}
              </button>
            `).join('')
          : '<span class="no-exams">Sin exámenes disponibles</span>';
      }

      return `
        <article class="week-banner ${isEvaluation ? 'evaluation' : ''}" data-week="${weekNum}">
          <header class="week-header">
            <h2>${title}</h2>
            ${descHTML}
          </header>
          <div class="exams-grid">
            ${examsHTML}
          </div>
        </article>
      `;
    }).join('');
  }

  // 3. Funciones del Examen (Aleatoriedad y Apertura)
  let currentExamData = null;
  let currentWeekTitle = "";

  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function openExam(examData, weekTitle) {
    currentExamData = examData;
    currentWeekTitle = weekTitle;
    mainView.classList.add('hidden');
    examView.classList.remove('hidden');
    examView.setAttribute('aria-hidden', 'false');
    
    document.getElementById('submit-exam-btn').style.display = 'block';
    document.getElementById('exam-results').classList.add('hidden');
    document.getElementById('exam-title').textContent = weekTitle;

    const shuffledQuestions = shuffleArray(examData.preguntas);

    questionsContainer.innerHTML = shuffledQuestions.map((q, index) => `
      <article class="question-card" data-id="${q.id}">
        <p class="question-text"><strong>${index + 1}.</strong> ${q.pregunta}</p>
        <div class="options-group">
          ${q.opciones.map((opt, optIdx) => `
            <label class="option-label">
              <input type="radio" name="${q.id}" value="${optIdx}">
              <span class="custom-radio"></span>
              <span class="option-text">${opt}</span>
            </label>
          `).join('')}
        </div>
      </article>
    `).join('');

    history.pushState({ inExam: true }, '', '#examen');
    examView.scrollTo(0, 0);
  }

  // Generador de Simulaciones (Recibe el botón directamente para evitar fallos)
  async function startSimulation(weekNum, btn) {
    const originalContent = btn.innerHTML;
    btn.innerHTML = 'Generando...';
    btn.style.opacity = '0.7';

    const targetWeeks = SIMULATION_TARGETS[weekNum];
    let allQuestionsPool = [];

    const loadedData = await Promise.all(targetWeeks.map(num => loadWeekData(num)));
    
    loadedData.forEach(week => {
      if (week && Array.isArray(week.examenes)) {
        week.examenes.forEach(ex => {
          if (ex && Array.isArray(ex.preguntas)) {
            allQuestionsPool = allQuestionsPool.concat(ex.preguntas);
          }
        });
      }
    });

    const shuffledPool = shuffleArray(allQuestionsPool);
    const selectedQuestions = shuffledPool.slice(0, 30);

    btn.innerHTML = originalContent;
    btn.style.opacity = '1';

    if (selectedQuestions.length === 0) {
      alert("No hay suficientes preguntas cargadas en estas semanas para generar la evaluación.");
      return;
    }

    const simTitle = weekNum === 18 ? 'Examen Final' : `Prueba ${weekNum === 5 ? 1 : weekNum === 11 ? 2 : 3}`;

    const syntheticExam = {
      idExamen: 'sim-' + weekNum,
      tituloExamen: 'Simulación: ' + simTitle,
      preguntas: selectedQuestions
    };

    openExam(syntheticExam, simTitle);
  }

  // Lógica de Validación y Retroalimentación
  document.getElementById('submit-exam-btn').addEventListener('click', () => {
    if (!currentExamData) return;

    let puntajeObtenido = 0;
    let puntajeTotal = 0;
    let correctas = 0;

    const questionCards = questionsContainer.querySelectorAll('.question-card');
    
    questionCards.forEach(card => {
      const qId = card.dataset.id;
      const questionData = currentExamData.preguntas.find(p => p.id === qId);
      if (!questionData) return;

      puntajeTotal += questionData.puntaje;

      const selectedInput = card.querySelector(`input[name="${qId}"]:checked`);
      const selectedIdx = selectedInput ? parseInt(selectedInput.value) : -1;
      const isCorrect = selectedIdx === questionData.respuesta;

      card.querySelectorAll('input').forEach(input => input.disabled = true);

      const optionsLabels = card.querySelectorAll('.option-label');
      optionsLabels.forEach(label => {
        const inputVal = parseInt(label.querySelector('input').value);
        if (inputVal === questionData.respuesta) {
          label.classList.add('is-correct');
        } else if (inputVal === selectedIdx && !isCorrect) {
          label.classList.add('is-wrong');
        }
      });

      const feedbackHTML = `
        <div class="feedback-box ${isCorrect ? 'correct' : 'incorrect'}">
          <strong>${isCorrect ? 'Correcto' : 'Incorrecto'}</strong>
          <p style="margin-top:0.5rem">${questionData.explicacion}</p>
        </div>
      `;
      card.insertAdjacentHTML('beforeend', feedbackHTML);

      if (isCorrect) {
        puntajeObtenido += questionData.puntaje;
        correctas++;
      }
    });

    let nota = 1.0;
    const porcentaje = puntajeObtenido / puntajeTotal;
    if (porcentaje >= 0.6) {
      nota = 4.0 + 3.0 * ((porcentaje - 0.6) / 0.4);
    } else {
      nota = 1.0 + 3.0 * (porcentaje / 0.6);
    }
    nota = nota.toFixed(1);

    document.getElementById('submit-exam-btn').style.display = 'none';
    const resultsDiv = document.getElementById('exam-results');
    resultsDiv.classList.remove('hidden');
    resultsDiv.innerHTML = `
      <h3>Resumen de la Evaluación</h3>
      <p>Respuestas correctas: <strong>${correctas} / ${currentExamData.preguntas.length}</strong></p>
      <p>Puntaje obtenido: <strong>${puntajeObtenido} / ${puntajeTotal}</strong></p>
      <h2 style="color: ${nota >= 4.0 ? '#198754' : '#dc3545'};">Nota: ${nota}</h2>
      
      <div class="result-buttons">
        <button type="button" id="retry-btn" class="action-btn retry">Reintentar</button>
        <button type="button" id="menu-btn" class="action-btn menu">Volver al menú</button>
      </div>
    `;

    document.getElementById('retry-btn').addEventListener('click', () => {
      openExam(currentExamData, currentWeekTitle);
    });

    document.getElementById('menu-btn').addEventListener('click', () => {
      history.back();
    });
    
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
  });

  // 4. Listeners de Eventos
  nav.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button || button.getAttribute('aria-pressed') === 'true') return;

    nav.querySelectorAll('button').forEach(btn => btn.setAttribute('aria-pressed', 'false'));
    button.setAttribute('aria-pressed', 'true');
    renderWeeks(button.dataset.prueba);
  });

  weeksContainer.addEventListener('click', (e) => {
    const simBtn = e.target.closest('.sim-exam-btn');
    if (simBtn) {
      // Pasamos el botón directamente a la función de simulación
      startSimulation(parseInt(simBtn.dataset.sim), simBtn);
      return;
    }

    const examBtn = e.target.closest('.exam-btn');
    if (!examBtn) return;

    const { week, exam } = examBtn.dataset;
    const weekData = loadedWeeksCache.get(Number(week));
    const selectedExam = weekData?.examenes.find(ex => ex.idExamen === exam);

    if (selectedExam) openExam(selectedExam, weekData.tituloSemana);
  });

  window.addEventListener('popstate', (e) => {
    if (!e.state || !e.state.inExam) {
      examView.classList.add('hidden');
      examView.setAttribute('aria-hidden', 'true');
      mainView.classList.remove('hidden');
    }
  });

  document.getElementById('back-btn').addEventListener('click', () => {
    history.back(); 
  });

  // 5. Carga Inicial
  renderWeeks(1);
});