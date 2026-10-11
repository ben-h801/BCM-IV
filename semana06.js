window.datosSemana6 = {
    numeroSemana: 6,
    tituloSemana: "Semana 6",
    examenes:[
    // examen1
        {
            idExamen: "e1",
            tituloExamen: "Fisiología Renal",
            preguntas: [
    {
        "id": "p1",
        "pregunta": "En el transporte transepitelial de solutos a lo largo del nefrón, ¿cuál es el mecanismo electroquímico exacto que impulsa la reabsorción obligatoria de sodio y agua en el túbulo contorneado proximal?",
        "opciones": [
            "El cotransportador SGLT2 dependiente de gradiente eléctrico directo generado por la bomba de sodio-potasio basolateral, creando una presión oncótica intersticial elevada.",
            "La actividad de la Na⁺/K⁺-ATPasa en la membrana basolateral que mantiene baja la concentración intracelular de Na⁺, impulsando su cotransporte apical con glucosa/aminoácidos y la consiguiente vía paracelular pasiva de agua.",
            "La apertura masiva de canales epiteliales de sodio (ENaC) en la membrana luminal, regulada de forma estricta por los niveles circulantes de aldosterona y la presión hidrostática capilar peritubular.",
            "El transporte activo secundario mediado por el intercambiador NHE3 en el dominio apical, el cual acopla la extrusión neta de protones a la difusión facilitada de bicarbonato a través de transportadores GLUT."
        ],
        "respuesta": 1,
        "puntaje": 4,
        "explicacion": "La Na⁺/K⁺-ATPasa basolateral establece un gradiente de concentración de Na⁺ que es aprovechado por los cotransportadores apicales (como SGLT2 y NHE3) para la reabsorción de solutos, generando gradientes osmóticos locales que arrastran agua por vías transcelulares y paracelulares."
    },
    {
        "id": "p2",
        "pregunta": "Respecto a las propiedades funcionales de los distintos segmentos del nefrón y el establecimiento del gradiente corticomedular, ¿qué característica estructural y funcional define al segmento fino ascendente del asa de Henle?",
        "opciones": [
            "Es altamente permeable al agua mediante acuaporina-1 constitutiva, pero impermeable al cloruro de sodio, permitiendo la concentración del líquido tubular hacia la médula interna.",
            "Posee una alta permeabilidad pasiva al cloruro de sodio debido a la expresión densa de canales paracellular-cloruro, manteniendo una impermeabilidad casi absoluta al agua.",
            "Contiene el cotransportador apical Na⁺-K⁺-2Cl⁻ (NKCC2), el cual es inhibido específicamente por diuréticos de asa como la furosemida en condiciones de carga osmótica elevada.",
            "Presenta un transporte activo primario de urea mediado por transportadores UT-A2, el cual es estimulado de forma directa por la vasopresina plasmática."
        ],
        "respuesta": 1,
        "puntaje": 4,
        "explicacion": "El segmento fino ascendente es permeable al NaCl (que difunde pasivamente hacia el intersticio medular gracias al alto gradiente) pero impermeable al agua, lo que contribuye fundamentalmente a la dilución del líquido tubular y al mantenimiento de la hiperosmolaridad medular."
    },
    {
        "id": "p3",
        "pregunta": "Durante la regulación renal de la volemia y la osmolaridad plasmática, ¿cómo actúa de manera integrada el complejo yuxtaglomerular ante una disminución brusca de la presión de perfusión en la arteriola aferente?",
        "opciones": [
            "Las células de la mácula densa detectan un aumento en la carga filtrada de cloruro de sodio y liberan adenosina paracrina, induciendo una contracción inmediata de las células mesangiales intrasegmentarias.",
            "Las células granulares del músculo liso modificado de la arteriola aferente reducen su síntesis de renina debido al estiramiento mecánico directo mediado por canales de calcio mecanosensibles.",
            "La disminución en la entrega de NaCl a la mácula densa inhibe la captación luminal por el cotransportador NKCC2, reduciendo el transporte intracelular de cloro y estimulando la liberación paracrina de prostaglandinas hacia las células granulares para secretar renina.",
            "El sistema simpático renal estimula directamente los receptores beta-2 adrenérgicos en las células principales del túbulo colector cortical para incrementar la reabsorción neta de agua libre de solutos."
        ],
        "respuesta": 2,
        "puntaje": 5,
        "explicacion": "La caída en la presión de perfusión reduce el filtrado glomerular y, con ello, la llegada de NaCl a la mácula densa. Esto disminuye la señal de entrada por NKCC2, activando vías de señalización (como prostaglandinas y adenosina reducida) que promueven la liberación de renina por las células granulares."
    },
    {
        "id": "p4",
        "pregunta": "En relación con la fisiología del túbulo distal temprano y su farmacología asociada, ¿cuál es el sitio y mecanismo de acción principal de los diuréticos tiazídicos en este segmento?",
        "opciones": [
            "Inhiben competitivamente al cotransportador Na⁺-Cl⁻ (NCC) ubicado en la membrana apical de las células del túbulo contorneado distal, reduciendo la capacidad de dilución urinaria sin afectar significativamente la osmolaridad medular profunda.",
            "Bloquean los canales epiteliales de sodio (ENaC) en la membrana luminal de las células principales del túbulo colector cortical, previniendo la pérdida excesiva de potasio e hidrogeniones.",
            "Inhiben la anhidrasa carbónica intracelular en el borde en cepillo del túbulo proximal, disminuyendo la reabsorción de bicarbonato y generando una acidosis metabólica hiperclorémica.",
            "Bloquean el contratransporte de Na⁺-K⁺-2Cl⁻ en la rama gruesa ascendente del asa de Henle, interfiriendo de manera directa con el mecanismo multiplicador de contracorriente."
        ],
        "respuesta": 0,
        "puntaje": 3,
        "explicacion": "Las tiazidas actúan inhibiendo el simportador Na⁺-Cl⁻ (NCC) en el túbulo contorneado distal, sitio donde se diluye la orina al reabsorberse solutos sin agua, lo que disminuye la excreción urinaria de calcio y aumenta la de sodio."
    },
    {
        "id": "p5",
        "pregunta": "Al evaluar la función renal mediante el cálculo del aclaramiento (clearence) plasmático de sustancias marcadoras, ¿qué propiedad fisiológica fundamental debe cumplir una sustancia exógena como la inulina para medir con exactitud la tasa de filtración glomerular (TFG)?",
        "opciones": [
            "Debe ser filtrada libremente a través de la membrana glomerular, sin ser sintetizada, secretada, reabsorbida ni metabolizada en ninguna porción de los túbulos renales, además de no alterar la hemodinámica renal.",
            "Debe unirse reversiblemente a las proteínas plasmáticas en un porcentaje mayor al 95% para asegurar que su filtración ocurra exclusivamente en función del flujo plasmático renal efectivo.",
            "Debe ser secretada de manera activa y completa en el túbulo proximal por transportadores de ácidos orgánicos (OAT), de modo que su concentración urinaria refleje el 100% del flujo plasmático renal.",
            "Debe difundir libremente a través del epitelio tubular en ambas direcciones impulsada por los gradientes de urea medulares, permitiendo estimar el volumen urinario minuto."
        ],
        "respuesta": 0,
        "puntaje": 3,
        "explicacion": "Para que el aclaramiento de una sustancia sea igual a la TFG, la sustancia (como la inulina) tiene que filtrarse completamente en el glomérulo y no sufrir modificaciones netas (ni reabsorción ni secreción ni metabolismo tubular)."
    },
    {
        "id": "p6",
        "pregunta": "En condiciones de deshidratación severa y alta concentración de vasopresina (ADH), ¿cómo se modifica la permeabilidad al agua y a la urea en los conductos colectores medulares internos?",
        "opciones": [
            "La ADH induce la translocación de acuaporina-3 y acuaporina-4 hacia la membrana apical, mientras que disminuye por completo la expresión de los transportadores de urea UT-A1 para retener solutos osmóticamente activos.",
            "La ADH estimula la inserción de acuaporina-2 en la membrana apical de las células principales y activa simultáneamente los transportadores de urea UT-A1 y UT-A3 en el segmento medular interno, permitiendo el reciclaje de urea que refuerza la hiperosmolaridad intersticial.",
            "La ADH bloquea la actividad de las acuaporinas basolaterales, impidiendo el flujo retrógrado de agua hacia los vasos rectos y facilitando un lavado medular rápido que elimina la carga osmótica.",
            "La ADH promueve la apertura de canales iónicos no selectivos dependientes de GMP cíclico, generando una caída en el gradiente corticomedular y un aumento en el volumen urinario libre de solutos."
        ],
        "respuesta": 1,
        "puntaje": 5,
        "explicacion": "La vasopresina (ADH) actúa a través de receptores V2 y AMPc para insertar AQP2 en la membrana apical (reabsorción de agua) y activa transportadores de urea (UT-A1/UT-A3) en el conducto colector medular interno, lo que eleva la concentración de urea en el intersticio y maximiza la capacidad de concentrar la orina."
    },
    {
        "id": "p7",
        "pregunta": "Desde el punto de vista de la hemodinámica renal y la autorregulación, ¿cuál es el efecto neto sobre la tasa de filtración glomerular (TFG) y el flujo sanguíneo renal (FSR) de una vasoconstricción moderada y selectiva de la arteriola eferente?",
        "opciones": [
            "Un descenso abrupto tanto de la TFG como del FSR debido al incremento masivo en la resistencia vascular total del circuito postglomerular.",
            "Un aumento inicial o mantenimiento de la TFG a pesar de una reducción leve en el FSR, debido al incremento de la presión hidrostática en los capilares glomerulares, acompañado de una disminución en la presión neta de ultrafiltración al final del capilar.",
            "Una elevación simultánea del FSR y de la TFG mediada por la activación de reflejos miógenos intrínsecos en el músculo liso arteriolar.",
            "Una disminución marcada de la TFG por colapso del lecho capilar glomerular, mientras que el FSR permanece completamente inalterado gracias al sistema de retroalimentación tubuloglomerular."
        ],
        "respuesta": 1,
        "puntaje": 4,
        "explicacion": "La constricción de la arteriola eferente actúa como una 'pinza' que eleva la presión hidrostática dentro del capilar glomerular, manteniendo o aumentando la TFG a pesar de que el flujo sanguíneo renal total (FSR) disminuye por el aumento de la resistencia."
    },
    {
        "id": "p8",
        "pregunta": "En relación con el manejo renal del potasio y los mecanismos de intercambio iónico en el túbulo colector cortical, ¿qué factor estimula directamente la secreción neta de potasio por parte de las células principales?",
        "opciones": [
            "Una reducción en los niveles circulantes de aldosterona combinada con un aumento en la carga luminal de cloro no reabsorbible.",
            "Un incremento en la concentración plasmática de potasio (hiperpotasemia) que despolariza parcialmente la membrana basolateral, estimulando la actividad de la Na⁺/K⁺-ATPasa y aumentando la densidad de canales de potasio (ROMK) en la membrana luminal.",
            "La disminución del flujo tubular distal por debajo de los niveles basales, lo cual prolonga el tiempo de contacto y permite una mayor difusión pasiva de potasio hacia el intersticio medular.",
            "La acidemia sistémica aguda que inhibe de forma alostérica los canales de potasio dependientes de voltaje en el dominio apical de las células intercaladas de tipo A."
        ],
        "respuesta": 1,
        "puntaje": 4,
        "explicacion": "La hiperpotasemia estimula directamente la corteza suprarrenal para liberar aldosterona y actúa sobre las células principales incrementando la captación intracelular de K⁺ vía Na⁺/K⁺-ATPasa, lo que favorece su gradiente de salida hacia la luz tubular a través de canales apicales como ROMK."
    },
    {
        "id": "p9",
        "pregunta": "Durante un experimento de laboratorio de función renal (Lab #2), se administra una carga osmótica de manitol intravenoso a un sujeto de prueba. ¿Qué alteración hemodinámica y tubular esperaría observar en la formación de orina?",
        "opciones": [
            "Una disminución drástica en el volumen urinario minuto debido a la hiperosmolaridad plasmática que desvía agua hacia el espacio intracelular hepático.",
            "Un aumento en la diuresis osmótica caracterizada por una excreción fraccional elevada de sodio y agua, debido a que el manitol ejerce una presión osmótica en la luz del túbulo proximal que impide el acoplamiento pasivo de la reabsorción de agua.",
            "Un bloqueo selectivo de la secreción tubular de protones mediado por la inactivación reversible de la anhidrasa carbónica en las células intercaladas.",
            "Una concentración máxima de la orina en el conducto colector medular debido a la impermeabilidad absoluta del epitelio tubular al manitol filtrado."
        ],
        "respuesta": 1,
        "puntaje": 4,
        "explicacion": "El manitol es un soluto osmóticamente activo que se filtra libremente pero no se reabsorbe de forma significativa; al permanecer en la luz tubular, genera una presión osmótica que contrarresta la reabsorción pasiva de agua, provocando una diuresis osmótica con mayor eliminación de agua y sodio."
    },
    {
        "id": "p10",
        "pregunta": "En el marco de la regulación neuroendocrina y renal del equilibrio ácido-base, ¿cómo responden las células intercaladas de tipo A presentes en los segmentos distales del nefrón ante una acidosis metabólica crónica?",
        "opciones": [
            "Incrementan la expresión y actividad de las bombas de protones (H⁺-ATPasa) y la intercambiadora Cl⁻/HCO₃⁻ (pendrina) en la membrana luminal para secretar activamente hidrogeniones hacia la orina y reabsorber bicarbonato nuevo hacia el intersticio.",
            "Reducen la síntesis neta de amoníaco a partir de la glutamina en el túbulo proximal para evitar la pérdida excesiva de cationes tamponantes en la orina.",
            "Aumentan la secreción neta de bicarbonato hacia la luz tubular mediante la activación de la proteína intercambiadora aniónica basolateral kAE1.",
            "Disminuyen la reabsorción de fosfatos disueltos para favorecer la excreción exclusiva de ácidos titulables sin alterar la producción de amonio."
        ],
        "respuesta": 0,
        "puntaje": 5,
        "explicacion": "Ante la acidosis, las células intercaladas de tipo A aumentan la secreción de H⁺ hacia la luz tubular (mediante H⁺-ATPasa y H⁺/K⁺-ATPasa apicales) y facilitan la reabsorción y generación de nuevo bicarbonato, complementado por la amoniogénesis aumentada en el túbulo proximal."
    }]},
        // Examen 2
        {}
]};