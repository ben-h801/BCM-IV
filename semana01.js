window.datosSemana1 = {
    numeroSemana: 1,
    tituloSemana: "Semana 1",
    examenes: [
        // Examen 1
        {
            idExamen: "e1",
            tituloExamen: "Examen 1",
            preguntas: [
            {
                "id": "p1",
                "pregunta": "En el eje hipotálamo-hipófisis, una interrupción del sistema porta hipofisario afectaría selectivamente la secreción de:",
                "opciones": ["Vasopresina y oxitocina.", "ACTH y TSH, pero no la de oxitocina.", "CRH y ADH, bloqueando toda secreción posterior.", "Prolactina y GH, manteniendo intacta la producción de ACTH."],
                "respuesta": 1,
                "puntaje": 3,
                "explicacion": "El sistema porta transporta factores liberadores e inhibidores desde el hipotálamo a la adenohipófisis. Las hormonas de la neurohipófisis (vasopresina y oxitocina) viajan por vía axonal, no vascular porta."
            },
            {
                "id": "p2",
                "pregunta": "Respecto a la sinapsis autonómica, el mecanismo de recaptación de norepinefrina (NET) es un punto crítico. ¿Qué efecto tendría la inhibición farmacológica de este transportador en una fibra postganglionar simpática?",
                "opciones": ["Disminución de la respuesta postsináptica por agotamiento del neurotransmisor.", "Potenciación de la respuesta postsináptica y un posible aumento del tono basal debido al mayor tiempo de permanencia en la hendidura.", "Bloqueo total de la exocitosis de vesículas sinápticas.", "Activación refleja de la liberación de acetilcolina en terminales simpáticas."],
                "respuesta": 1,
                "puntaje": 4,
                "explicacion": "La NET recicla la NE desde la hendidura sináptica. Bloquearla aumenta la disponibilidad del neurotransmisor para unirse a los receptores adrenérgicos, amplificando la señal postsináptica."
            },
            {
                "id": "p3",
                "pregunta": "Un paciente presenta hipofunción hipotalámica específica que compromete la regulación del sistema parvocelular. ¿Cuál de las siguientes hormonas verá su eje periférico disminuido?",
                "opciones": ["Hormona estimulante del tiroides (TSH).", "Oxitocina.", "Vasopresina.", "Melatonina."],
                "respuesta": 0,
                "puntaje": 2,
                "explicacion": "El sistema parvocelular hipotalámico secreta hormonas liberadoras (como TRH) que controlan la adenohipófisis. TSH es una hormona adenohipofisaria regulada por este sistema."
            },
            {
                "id": "p4",
                "pregunta": "En la regulación autonómica del corazón, la estimulación de los receptores M2 mediante acetilcolina induce:",
                "opciones": ["Apertura de canales de Ca2+ tipo L, aumentando la contractilidad.", "Cierre de canales de potasio dependientes de acetilcolina (GIRK).", "Inhibición de la adenilato ciclasa y apertura de canales de K+ activados por proteína G.", "Estimulación de la fosfolipasa C."],
                "respuesta": 2,
                "puntaje": 3,
                "explicacion": "Los receptores M2 están acoplados a proteína Gi, que inhibe la adenilato ciclasa y abre canales de K+ (efecto cronotrópico negativo)."
            },
            {
                "id": "p5",
                "pregunta": "La secreción de la adenohipófisis está controlada principalmente por retroalimentación de asa larga. En el caso del eje tiroideo, esto implica que:",
                "opciones": ["La TSH inhibe directamente la secreción de TRH en el hipotálamo.", "La T3 y T4 libres circulantes inhiben tanto a la hipófisis como al hipotálamo.", "La TRH estimula a la TSH, pero la T4 inhibe exclusivamente a la hipófisis.", "El hipotálamo no recibe retroalimentación de las hormonas tiroideas periféricas."],
                "respuesta": 1,
                "puntaje": 3,
                "explicacion": "El asa larga implica la retroalimentación de la hormona del órgano blanco (T3/T4) sobre el hipotálamo y la hipófisis anterior."
            },
            {
                "id": "p6",
                "pregunta": "Considerando la fisiología del sistema nervioso autónomo, ¿cuál de los siguientes pares pre/postganglionar es correcto?",
                "opciones": ["Simpático: fibras preganglionares largas y postganglionares cortas.", "Parasimpático: fibras preganglionares largas y postganglionares cortas.", "Parasimpático: fibras preganglionares cortas y postganglionares largas.", "Ambos: fibras preganglionares y postganglionares de longitud idéntica."],
                "respuesta": 1,
                "puntaje": 2,
                "explicacion": "La organización anatómica del parasimpático dicta ganglios cercanos o dentro del órgano efector, resultando en fibras preganglionares largas y postganglionares cortas."
            },
            {
                "id": "p7",
                "pregunta": "En el contexto de la regulación endocrina, ¿cuál es la diferencia funcional clave entre el sistema magno y parvocelular hipotalámico?",
                "opciones": ["El sistema magno secreta factores de liberación; el parvocelular, hormonas directamente a la sangre.", "El sistema magno proyecta a la neurohipófisis; el parvocelular, al sistema porta hipofisario.", "El sistema parvocelular regula la osmolaridad; el magno, la actividad tiroidea.", "No existen diferencias funcionales, solo anatómicas."],
                "respuesta": 1,
                "puntaje": 4,
                "explicacion": "El magno proyecta a la neurohipófisis (ADH/Oxitocina); el parvocelular proyecta a la eminencia media para regular la adenohipófisis."
            },
            {
                "id": "p8",
                "pregunta": "Si administramos un agonista α1 adrenérgico, el efecto fisiológico esperado en el músculo liso vascular periférico será:",
                "opciones": ["Vasodilatación mediada por aumento de GMPc.", "Vasoconstricción por aumento de Ca2+ citosólico mediado por IP3.", "Relajación por cierre de canales de calcio dependientes de voltaje.", "No hay efecto, ya que los vasos carecen de receptores α1."],
                "respuesta": 1,
                "puntaje": 3,
                "explicacion": "Los receptores α1 están acoplados a Gq, lo cual activa la fosfolipasa C, generando IP3 y liberando calcio, lo que induce vasoconstricción."
            },
            {
                "id": "p9",
                "pregunta": "El tono simpático basal se mantiene principalmente a través de:",
                "opciones": ["Disparo continuo de las neuronas preganglionares simpáticas en los núcleos del tronco encefálico.", "Liberación episódica de catecolaminas desde la médula adrenal.", "Actividad refleja mediada exclusivamente por quimiorreceptores periféricos.", "Estimulación constante de las fibras parasimpáticas vagales."],
                "respuesta": 0,
                "puntaje": 3,
                "explicacion": "El tono simpático es una actividad basal constante (frecuencia de disparo) originada en los centros vasomotor y autonómico del tronco encefálico."
            },
            {
                "id": "p10",
                "pregunta": "Un incremento brusco en la osmolaridad plasmática detectado por los osmorreceptores hipotalámicos provocará:",
                "opciones": ["Inhibición de la secreción de vasopresina para evitar la hiponatremia.", "Estimulación de la liberación de vasopresina desde la adenohipófisis.", "Estimulación de la liberación de vasopresina desde la neurohipófisis.", "Aumento en la excreción de agua libre por el riñón."],
                "respuesta": 2,
                "puntaje": 3,
                "explicacion": "La alta osmolaridad activa osmorreceptores que disparan la liberación de ADH (vasopresina) en la neurohipófisis para conservar agua."
            }]},
        // Examen 2
        {}
]};