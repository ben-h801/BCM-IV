window.datosSemana3 = {
    numeroSemana: 3,
    tituloSemana: "Semana 3",
    examenes:[
    // examen1
        {
            idExamen: "e1",
            tituloExamen: "Examen 1",
            preguntas: [
    {
        "id": "p1",
        "pregunta": "En el eje hipotálamo-hipófisis, una interrupción del sistema porta hipofisario afectaría selectivamente la secreción de:",
        "opciones": [
            "Vasopresina y oxitocina a nivel de los núcleos supraóptico y paraventricular.",
            "ACTH y TSH, manteniendo intacta la producción axonal de oxitocina.",
            "CRH y ADH, bloqueando toda secreción posterior del lóbulo anterior y posterior.",
            "Prolactina y GH, manteniendo conservada la síntesis adenohipofisaria de ACTH."
        ],
        "respuesta": 1,
        "puntaje": 3,
        "explicacion": "El sistema porta transporta factores liberadores e inhibidores desde el hipotálamo a la adenohipófisis. Las hormonas de la neurohipófisis (vasopresina y oxitocina) viajan por vía axonal, no vascular porta."
    },
    {
        "id": "p2",
        "pregunta": "Respecto a la sinapsis autonómica, el mecanismo de recaptación de norepinefrina (NET) es un punto crítico. ¿Qué efecto tendría la inhibición farmacológica de este transportador en una fibra postganglionar simpática?",
        "opciones": [
            "Una disminución marcada de la respuesta postsináptica por agotamiento vesicular.",
            "Una potenciación de la respuesta postsináptica por mayor permanencia del transmisor.",
            "Un bloqueo total de la exocitosis vesicular mediada por voltaje en la terminal.",
            "Una activación refleja de la liberación colinérgica en los ganglios paravertebrales."
        ],
        "respuesta": 1,
        "puntaje": 4,
        "explicacion": "La NET recicla la NE desde la hendidura sináptica. Bloquearla aumenta la disponibilidad del neurotransmisor para unirse a los receptores adrenérgicos, amplificando la señal postsináptica."
    },
    {
        "id": "p3",
        "pregunta": "Un paciente presenta hipofunción hipotalámica específica que compromete la regulación del sistema parvocelular. ¿Cuál de las siguientes hormonas verá su eje periférico disminuido?",
        "opciones": [
            "La hormona estimulante del tiroides sintetizada en la adenohipófisis anterior.",
            "La oxitocina liberada directamente hacia los capilares fenestrados sistémicos.",
            "La vasopresina secretada por los axones terminales en la neurohipófisis.",
            "La melatonina sintetizada de forma rítmica en la glándula pineal."
        ],
        "respuesta": 0,
        "puntaje": 2,
        "explicacion": "El sistema parvocelular hipotalámico secreta hormonas liberadoras (como TRH) que controlan la adenohipófisis. TSH es una hormona adenohipofisaria regulada por este sistema."
    },
    {
        "id": "p4",
        "pregunta": "En la regulación autonómica del corazón, la estimulación de los receptores M2 mediante acetilcolina induce:",
        "opciones": [
            "La apertura de canales de Ca2+ tipo L incrementando la contractilidad miocárdica.",
            "El cierre selectivo de canales de potasio dependientes de acetilcolina (GIRK).",
            "La inhibición de la adenilato ciclasa y la apertura de canales de K+ acoplados a proteína G.",
            "La estimulación directa de la fosfolipasa C en las células del nodo sinusal."
        ],
        "respuesta": 2,
        "puntaje": 3,
        "explicacion": "Los receptores M2 están acoplados a proteína Gi, que inhibe la adenilato ciclasa y abre canales de K+ (efecto cronotrópico negativo)."
    },
    {
        "id": "p5",
        "pregunta": "La secreción de la adenohipófisis está controlada principalmente por retroalimentación de asa larga. En el caso del eje tiroideo, esto implica que:",
        "opciones": [
            "La TSH regula de forma directa la síntesis de TRH a nivel del núcleo paraventricular.",
            "Las hormonas T3 y T4 libres circulantes inhiben tanto a la hipófisis como al hipotálamo.",
            "La TRH estimula a la TSH, mientras que la T4 inhibe exclusivamente a la adenohipófisis.",
            "El hipotálamo carece de receptores para realizar retroalimentación con hormonas tiroideas."
        ],
        "respuesta": 1,
        "puntaje": 3,
        "explicacion": "El asa larga implica la retroalimentación de la hormona del órgano blanco (T3/T4) sobre el hipotálamo y la hipófisis anterior."
    },
    {
        "id": "p6",
        "pregunta": "Considerando la fisiología del sistema nervioso autónomo, ¿cuál de los siguientes pares pre/postganglionar es correcto?",
        "opciones": [
            "Simpático: fibras preganglionares de gran longitud y postganglionares cortas.",
            "Parasimpático: fibras preganglionares largas y postganglionares cortas.",
            "Parasimpático: fibras preganglionares de menor tamaño y postganglionares extensas.",
            "Ambos sistemas: fibras pre y postganglionares con dimensiones totalmente idénticas."
        ],
        "respuesta": 1,
        "puntaje": 2,
        "explicacion": "La organización anatómica del parasimpático dicta ganglios cercanos o dentro del órgano efector, resultando en fibras preganglionares largas y postganglionares cortas."
    },
    {
        "id": "p7",
        "pregunta": "En el contexto de la regulación endocrina, ¿cuál es la diferencia funcional clave entre el sistema magno y parvocelular hipotalámico?",
        "opciones": [
            "El magno secreta factores liberadores; el parvocelular vierte hormonas directas a la sangre.",
            "El magno proyecta a la neurohipófisis; el parvocelular lo hace al sistema porta hipofisario.",
            "El parvocelular regula la osmolaridad plasmática; el magno controla la actividad tiroidea.",
            "No existen diferencias funcionales destacables, tratándose de una división anatómica pura."
        ],
        "respuesta": 1,
        "puntaje": 4,
        "explicacion": "El magno proyecta a la neurohipófisis (ADH/Oxitocina); el parvocelular proyecta a la eminencia media para regular la adenohipófisis."
    },
    {
        "id": "p8",
        "pregunta": "Si administramos un agonista α1 adrenérgico, el efecto fisiológico esperado en el músculo liso vascular periférico será:",
        "opciones": [
            "Una marcada vasodilatación sistémica mediada por la vía del GMP cíclico.",
            "Una vasoconstricción local por aumento del calcio citosólico mediado por IP3.",
            "Una relajación tisular directa por cierre de canales de calcio dependientes de voltaje.",
            "Un efecto nulo debido a la ausencia fisiológica de estos receptores en los vasos."
        ],
        "respuesta": 1,
        "puntaje": 3,
        "explicacion": "Los receptores α1 están acoplados a Gq, lo cual activa la fosfolipasa C, generando IP3 y liberando calcio, lo que induce vasoconstricción."
    },
    {
        "id": "p9",
        "pregunta": "El tono simpático basal se mantiene principalmente a través de:",
        "opciones": [
            "Un disparo continuo de las neuronas preganglionares en los centros del tronco encefálico.",
            "Una liberación episódica y rítmica de catecolaminas desde la médula adrenal.",
            "Una actividad refleja regulada exclusivamente por los quimiorreceptores periféricos.",
            "Una estimulación constante de las fibras parasimpáticas vagales sobre el endotelio."
        ],
        "respuesta": 0,
        "puntaje": 3,
        "explicacion": "El tono simpático es una actividad basal constante (frecuencia de disparo) originada en los centros vasomotor y autonómico del tronco encefálico."
    },
    {
        "id": "p10",
        "pregunta": "Un incremento brusco en la osmolaridad plasmática detectado por los osmorreceptores hipotalámicos provocará:",
        "opciones": [
            "La inhibición inmediata de la vasopresina para prevenir cuadros de hiponatremia aguda.",
            "La estimulación y liberación de vasopresina desde las terminales de la adenohipófisis.",
            "La estimulación y liberación de vasopresina desde las terminales de la neurohipófisis.",
            "Un incremento sostenido en la excreción renal obligatoria de agua libre circulante."
        ],
        "respuesta": 2,
        "puntaje": 3,
        "explicacion": "La alta osmolaridad activa osmorreceptores que disparan la liberación de ADH (vasopresina) en la neurohipófisis para conservar agua."
    }]},
        // Examen 2
        {}
]};