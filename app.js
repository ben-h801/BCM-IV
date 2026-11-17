document.addEventListener("DOMContentLoaded", () => {
    // --- 1. BARRA DE NAVEGACIÓN Y MEMORIA DE PESTAÑA ---
    const nav = document.getElementById("js-nav");
    const pointer = document.getElementById("js-pointer");
    const links = nav ? nav.getElementsByTagName("a") : [];
    const seccionesPruebas = document.querySelectorAll(".container");
    let pestanaActiva = 0;

    function activarPestana(indice, actualizarHistorial = true) {
        pestanaActiva = indice;

        if (pointer) {
            pointer.style.transform = `translate3d(${indice * 100}%, 0, 0)`;
        }

        seccionesPruebas.forEach((seccion, idx) => {
            if (idx === indice) {
                seccion.classList.remove("oculto");
            } else {
                seccion.classList.add("oculto");
            }
        });

        if (actualizarHistorial) {
            history.replaceState({ tab: indice, inExam: false }, "", `#prueba${indice + 1}`);
        }
    }

    if (pointer && links.length > 0) {
        pointer.style.width = `calc((100% - 0.4em) / ${links.length})`;

        for (let i = 0; i < links.length; i++) {
            const indice = i;
            links[i].addEventListener("click", (e) => {
                e.preventDefault();
                activarPestana(indice, true);
            });
        }
    }

    const hashInicial = window.location.hash;
    if (hashInicial === "#prueba2") activarPestana(1, false);
    else if (hashInicial === "#prueba3") activarPestana(2, false);
    else activarPestana(0, true);

    // --- 2. UTILIDAD DE ALEATORIEDAD Y RENDERIZADO DE FÓRMULAS ---
    function mezclarArray(array) {
        const copia = [...array];
        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia;
    }

    function repararEscapesLatex(texto) {
        if (!texto || typeof texto !== "string") return texto;
        return texto.replace(/\$([^$]+)\$/g, (_, expr) => {
            const reparada = expr
                .replace(/\t(ext|imes|au|heta|an|o|riangle)/g, "\\t$1")
                .replace(/\f(rac|orall)/g, "\\f$1")
                .replace(/[\b](eta|ar|inom)/g, "\\b$1")
                .replace(/\r(ho|ight)/g, "\\r$1")
                .replace(/\n(u|abla|eq|ot)/g, "\\n$1");
            return `$${reparada}$`;
        });
    }

    function renderizarFormulas(contenedor) {
        if (!contenedor) return;

        if (typeof renderMathInElement === "function") {
            renderMathInElement(contenedor, {
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "$", right: "$", display: false }
                ],
                throwOnError: false
            });
        } else {
            // Respaldo por si se abre sin conexión a internet
            contenedor.innerHTML = contenedor.innerHTML.replace(/\$([^$]+)\$/g, (_, expr) => {
                return expr
                    .replace(/\\text\{([^}]+)\}/g, "$1")
                    .replace(/_\{([^}]+)\}/g, "<sub>$1</sub>")
                    .replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>")
                    .replace(/_([A-Za-z0-9+-]+)/g, "<sub>$1</sub>")
                    .replace(/\^([A-Za-z0-9+-]+)/g, "<sup>$1</sup>");
            });
        }
    }

    // --- 3. REFERENCIAS DE LA VISTA DEL EXAMEN ---
    const examView = document.getElementById("exam-view");
    const examHeader = document.querySelector(".exam-header");
    const examTitleEl = document.getElementById("exam-title");
    const quizProgressNav = document.getElementById("quiz-progress-nav");
    const questionsContainer = document.getElementById("questions-container");
    const submitExamBtn = document.getElementById("submit-exam-btn");
    const examResultsDiv = document.getElementById("exam-results");
    const backBtn = document.getElementById("back-btn");

    let examenOriginalActual = null;
    let examenRenderizadoActual = null;
    let tituloVistaActual = "";
    let tickingScroll = false;

    // --- 4. BARRA LATERAL DE BARRITAS ---
    function marcarPillActiva(indice) {
        if (!quizProgressNav) return;
        const pills = quizProgressNav.querySelectorAll(".quiz-pill");
        pills.forEach((pill, idx) => {
            pill.classList.toggle("active", idx === indice);
        });
    }

    function actualizarPillPorScroll() {
        if (!examView || examView.classList.contains("hidden")) return;
        const cards = questionsContainer.querySelectorAll(".question-card");
        if (cards.length === 0) return;

        if (examView.scrollTop + examView.clientHeight >= examView.scrollHeight - 24) {
            marcarPillActiva(cards.length - 1);
            return;
        }

        const offsetHeader = (examHeader ? examHeader.offsetHeight : 60) + 32;
        const lineaLectura = examView.scrollTop + offsetHeader;
        let indiceActual = 0;

        cards.forEach((card, idx) => {
            if (card.offsetTop <= lineaLectura) {
                indiceActual = idx;
            }
        });

        marcarPillActiva(indiceActual);
    }

    examView.addEventListener("scroll", () => {
        if (!tickingScroll) {
            window.requestAnimationFrame(() => {
                actualizarPillPorScroll();
                tickingScroll = false;
            });
            tickingScroll = true;
        }
    });

    questionsContainer.addEventListener("change", (e) => {
        if (e.target.matches('input[type="radio"]')) {
            const card = e.target.closest(".question-card");
            if (!card || !quizProgressNav) return;
            const qIdx = parseInt(card.getAttribute("data-qindex"), 10);
            const pill = quizProgressNav.children[qIdx];
            if (pill) {
                pill.classList.add("answered");
            }
        }
    });

    function construirBarraProgreso(totalPreguntas) {
        if (!quizProgressNav) return;
        quizProgressNav.classList.toggle("compact", totalPreguntas > 15);

        quizProgressNav.innerHTML = Array.from({ length: totalPreguntas }, (_, idx) => `
            <button type="button" class="quiz-pill ${idx === 0 ? "active" : ""}" data-target="${idx}" aria-label="Ir a pregunta ${idx + 1}"></button>
        `).join("");

        quizProgressNav.querySelectorAll(".quiz-pill").forEach((pill) => {
            pill.addEventListener("click", () => {
                const targetIdx = parseInt(pill.getAttribute("data-target"), 10);
                const cards = questionsContainer.querySelectorAll(".question-card");
                const targetCard = cards[targetIdx];
                if (!targetCard) return;

                const offsetHeader = (examHeader ? examHeader.offsetHeight : 60) + 16;
                examView.scrollTo({
                    top: targetCard.offsetTop - offsetHeader,
                    behavior: "smooth"
                });
                marcarPillActiva(targetIdx);
            });
        });
    }

    // --- 5. ABRIR EXAMEN CON ALEATORIEDAD ---
    function abrirExamen(examenOriginal, tituloHeader) {
        examenOriginalActual = examenOriginal;
        tituloVistaActual = tituloHeader;

        const clon = JSON.parse(JSON.stringify(examenOriginal));
        clon.preguntas = mezclarArray(clon.preguntas);

        clon.preguntas.forEach((p) => {
            const opcionesMapeadas = p.opciones.map((texto, idx) => ({
                texto,
                esCorrecta: idx === p.respuesta
            }));
            const mezcladas = mezclarArray(opcionesMapeadas);
            p.opciones = mezcladas.map((o) => o.texto);
            p.respuesta = mezcladas.findIndex((o) => o.esCorrecta);
        });

        examenRenderizadoActual = clon;

        examTitleEl.textContent = tituloHeader;
        submitExamBtn.style.display = "block";
        examResultsDiv.classList.add("hidden");
        examResultsDiv.innerHTML = "";

        questionsContainer.innerHTML = clon.preguntas.map((q, index) => `
            <article class="question-card" data-qindex="${index}">
                <p class="question-text"><strong>${index + 1}.</strong> ${repararEscapesLatex(q.pregunta)}</p>
                <div class="options-group">
                    ${q.opciones.map((opt, optIdx) => `
                        <label class="option-label">
                            <input type="radio" name="pregunta_${index}" value="${optIdx}">
                            <span class="custom-radio"></span>
                            <span class="option-text">${repararEscapesLatex(opt)}</span>
                        </label>
                    `).join("")}
                </div>
            </article>
        `).join("");

        // Renderizar símbolos matemáticos y químicos en preguntas y alternativas
        renderizarFormulas(questionsContainer);
        construirBarraProgreso(clon.preguntas.length);

        examView.classList.remove("hidden");
        examView.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        examView.scrollTo(0, 0);

        if (!history.state || !history.state.inExam) {
            history.pushState({ inExam: true, tab: pestanaActiva }, "", "#examen");
        }
    }

    function cerrarExamenVisualmente() {
        examView.classList.add("hidden");
        examView.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    // --- 6. BOTONES DE SEMANAS NORMALES ---
    document.querySelectorAll(".contenedor-botones button").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const contenedor = e.target.closest(".contenedor-botones");
            const numSemana = contenedor.getAttribute("data-semana");
            const idxExamen = parseInt(e.target.getAttribute("data-examen"), 10);

            const datosSemana = window[`datosSemana${numSemana}`];
            if (datosSemana && Array.isArray(datosSemana.examenes) && datosSemana.examenes[idxExamen]) {
                const examenElegido = datosSemana.examenes[idxExamen];
                if (Array.isArray(examenElegido.preguntas) && examenElegido.preguntas.length > 0) {
                    const tituloSemana = datosSemana.tituloSemana || `Semana ${numSemana}`;
                    abrirExamen(examenElegido, tituloSemana);
                } else {
                    alert("Este examen aún no tiene preguntas cargadas.");
                }
            } else {
                alert(`Aún no hay preguntas cargadas para la Semana ${numSemana} (Botón ${idxExamen + 1}).`);
            }
        });
    });

    // --- 7. BOTONES DE EVALUACIONES GLOBALES ---
    function generarExamenDesdeSemanas(listaSemanas, titulo, cantidad = 30) {
        let pool = [];
        listaSemanas.forEach((s) => {
            const datosS = window[`datosSemana${s}`];
            if (datosS && Array.isArray(datosS.examenes)) {
                datosS.examenes.forEach((ex) => {
                    if (ex && Array.isArray(ex.preguntas)) {
                        pool = pool.concat(ex.preguntas);
                    }
                });
            }
        });
        const mezcladas = mezclarArray(pool);
        return {
            tituloExamen: titulo,
            preguntas: mezcladas.slice(0, cantidad)
        };
    }

    document.querySelectorAll(".cuadrado-examen-especial").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const sem = parseInt(e.target.getAttribute("data-semana"), 10);
            let examenGlobal = null;
            let tituloHeader = "";

            if (sem === 5) {
                tituloHeader = "Prueba 1";
                examenGlobal = generarExamenDesdeSemanas([1, 2, 3, 4], tituloHeader, 30);
            } else if (sem === 11) {
                tituloHeader = "Prueba 2";
                examenGlobal = generarExamenDesdeSemanas([6, 7, 8, 9, 10], tituloHeader, 30);
            } else if (sem === 17) {
                tituloHeader = "Prueba 3";
                examenGlobal = generarExamenDesdeSemanas([12, 13, 14, 15, 16], tituloHeader, 30);
            } else if (sem === 18) {
                tituloHeader = "Examen Final";
                examenGlobal = generarExamenDesdeSemanas([1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16], tituloHeader, 30);
            }

            if (examenGlobal && examenGlobal.preguntas.length > 0) {
                abrirExamen(examenGlobal, tituloHeader);
            } else {
                alert("No hay suficientes preguntas cargadas en estas semanas para generar la evaluación.");
            }
        });
    });

    // --- 8. ENTREGAR Y CORREGIR EXAMEN ---
    submitExamBtn.addEventListener("click", () => {
        if (!examenRenderizadoActual) return;

        let puntajeObtenido = 0;
        let puntajeTotal = 0;
        let correctas = 0;

        const cards = questionsContainer.querySelectorAll(".question-card");
        const pills = quizProgressNav ? quizProgressNav.querySelectorAll(".quiz-pill") : [];

        cards.forEach((card, qIdx) => {
            const qData = examenRenderizadoActual.preguntas[qIdx];
            if (!qData) return;

            const peso = qData.puntaje || 1;
            puntajeTotal += peso;

            const selectedInput = card.querySelector(`input[name="pregunta_${qIdx}"]:checked`);
            const selectedIdx = selectedInput ? parseInt(selectedInput.value, 10) : -1;
            const isCorrect = selectedIdx === qData.respuesta;

            if (pills[qIdx]) {
                pills[qIdx].classList.remove("answered");
                pills[qIdx].classList.add(isCorrect ? "is-correct" : "is-wrong");
            }

            card.querySelectorAll("input").forEach((inp) => (inp.disabled = true));

            card.querySelectorAll(".option-label").forEach((label) => {
                const val = parseInt(label.querySelector("input").value, 10);
                if (val === qData.respuesta) {
                    label.classList.add("is-correct");
                } else if (val === selectedIdx && !isCorrect) {
                    label.classList.add("is-wrong");
                }
            });

            if (qData.explicacion) {
                const feedbackHTML = `
                    <div class="feedback-box ${isCorrect ? "correct" : "incorrect"}">
                        <strong>${isCorrect ? "Correcto" : "Incorrecto"}</strong>
                        <p style="margin-top:0.5rem">${repararEscapesLatex(qData.explicacion)}</p>
                    </div>
                `;
                card.insertAdjacentHTML("beforeend", feedbackHTML);
            }

            if (isCorrect) {
                puntajeObtenido += peso;
                correctas++;
            }
        });

        // Renderizar símbolos matemáticos y químicos en las explicaciones recién mostradas
        renderizarFormulas(questionsContainer);

        let nota = 1.0;
        if (puntajeTotal > 0) {
            const porcentaje = puntajeObtenido / puntajeTotal;
            if (porcentaje >= 0.6) {
                nota = 4.0 + 3.0 * ((porcentaje - 0.6) / 0.4);
            } else {
                nota = 1.0 + 3.0 * (porcentaje / 0.6);
            }
        }
        const notaFinal = nota.toFixed(1);

        submitExamBtn.style.display = "none";
        examResultsDiv.classList.remove("hidden");
        examResultsDiv.innerHTML = `
            <h3>Resumen de la Evaluación</h3>
            <p>Respuestas correctas: <strong>${correctas} / ${examenRenderizadoActual.preguntas.length}</strong></p>
            <p>Puntaje obtenido: <strong>${puntajeObtenido} / ${puntajeTotal}</strong></p>
            <h2 style="color: ${parseFloat(notaFinal) >= 4.0 ? "#198754" : "#dc3545"};">Nota: ${notaFinal}</h2>

            <div class="result-buttons">
                <button type="button" id="retry-btn" class="action-btn retry">Reintentar</button>
                <button type="button" id="menu-btn" class="action-btn menu">Volver al menú</button>
            </div>
        `;

        document.getElementById("retry-btn").addEventListener("click", () => {
            abrirExamen(examenOriginalActual, tituloVistaActual);
        });

        document.getElementById("menu-btn").addEventListener("click", () => {
            history.back();
        });

        examResultsDiv.scrollIntoView({ behavior: "smooth", block: "end" });
    });

    // --- 9. NAVEGACIÓN ATRÁS ---
    backBtn.addEventListener("click", () => {
        if (history.state && history.state.inExam) {
            history.back();
        } else {
            cerrarExamenVisualmente();
        }
    });

    window.addEventListener("popstate", (e) => {
        if (!e.state || !e.state.inExam) {
            cerrarExamenVisualmente();
            if (e.state && typeof e.state.tab === "number") {
                activarPestana(e.state.tab, false);
            }
        }
    });
});
