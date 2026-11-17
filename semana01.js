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
            "pregunta": "En el eje hipotálamo-hipófisis, ¿qué consecuencia endocrina directa produciría una interrupción selectiva de los vasos del sistema porta hipofisario?",
            "opciones": [
                "Disminuye la liberación de vasopresina y oxitocina, pero conserva intacta la secreción de TSH y ACTH.",
                "Suprime la síntesis hipotalámica de TRH y CRH, bloqueando simultáneamente la liberación de vasopresina.",
                "Disminuye la secreción de ACTH y TSH adenohipofisarias, pero conserva la liberación axonal de oxitocina.",
                "Reduce la secreción de prolactina y GH, mientras incrementa de forma refleja la liberación de TSH."
            ],
            "respuesta": 2,
            "puntaje": 3,
            "explicacion": "El sistema porta hipofisario transporta las hormonas hipofisiotrópicas desde la eminencia media hasta la adenohipófisis, por lo que su interrupción reduce ACTH, TSH, GH, FSH y LH (mientras la prolactina aumenta al perder el freno dopaminérgico). En cambio, oxitocina y vasopresina viajan por transporte axonal hacia la neurohipófisis."
        },
        {
            "id": "p2",
            "pregunta": "Respecto a la sinapsis autonómica adrenérgica, ¿qué efecto fisiológico produce la inhibición farmacológica del transportador de recaptación de noradrenalina (NET) en una terminal postganglionar simpática?",
            "opciones": [
                "Disminución de la respuesta postsináptica por agotamiento rápido de las reservas vesiculares de noradrenalina.",
                "Potenciación y prolongación de la respuesta postsináptica al aumentar la concentración de noradrenalina en la hendidura.",
                "Bloqueo de la exocitosis de vesículas sinápticas por hiperpolarización de la terminal nerviosa postganglionar.",
                "Inhibición directa de los receptores adrenérgicos postsinápticos por desensibilización inmediata de la proteína G."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "La recaptación neuronal mediante el transportador NET (captación 1) es el mecanismo principal para finalizar la acción de la noradrenalina en la unión neuroefectora simpática. Al bloquearlo, el neurotransmisor permanece más tiempo en la hendidura y amplifica la activación de los receptores adrenérgicos."
        },
        {
            "id": "p3",
            "pregunta": "En la organización estructural y funcional de las sinapsis autonómicas periféricas, ¿qué característica distingue a las uniones neuroefectoras postganglionares respecto a la placa motora somática?",
            "opciones": [
                "Presentan varicosidades axonales en rosario que liberan neurotransmisores de forma difusa sobre receptores metabotrópicos.",
                "Presentan botones terminales únicos con zonas activas focalizadas donde la acetilcolina activa canales nicotínicos musculares.",
                "Carecen de vesículas sinápticas convencionales y transmiten el impulso exclusivamente mediante uniones en hendidura eléctricas.",
                "Liberan noradrenalina exclusivamente en hendiduras sinápticas estrechas con alta concentración de acetilcolinesterasa basal."
            ],
            "respuesta": 0,
            "puntaje": 3,
            "explicacion": "A diferencia de la unión neuromuscular somática (focalizada, rápida y mediada por receptores nicotínicos ionotrópicos $N_M$), los axones autonómicos postganglionares poseen dilataciones seriadas llamadas varicosidades que liberan neurotransmisores hacia el espacio intersticial sobre receptores acoplados a proteína G (muscarínicos o adrenérgicos)."
        },
        {
            "id": "p4",
            "pregunta": "En la regulación autonómica del corazón, <br> ¿qué cascada de señalización intracelular desencadena la acetilcolina al estimular los receptores muscarínicos $M_2$?",
            "opciones": [
                "Activación de proteína $G_s$ que estimula la adenilato ciclasa y abre canales de calcio tipo L en el miocardio.",
                "Activación de proteína $G_q$ que estimula la fosfolipasa C y eleva el calcio citosólico mediante inositol trifosfato.",
                "Activación de tirosina quinasa intrínseca que cierra canales de potasio rectificadores tardíos durante la diástole.",
                "Activación de proteína $G_i$ que inhibe la adenilato ciclasa y abre canales de potasio acoplados a proteína G."
            ],
            "respuesta": 3,
            "puntaje": 3,
            "explicacion": "Los receptores muscarínicos $M_2$ cardíacos están acoplados a proteína $G_i$: la subunidad $\\alpha_i$ inhibe la adenilato ciclasa (reduciendo el AMPc y las corrientes $I_f$ e $I_{Ca,L}$), mientras que las subunidades $\\beta\\gamma$ abren directamente canales de potasio $K_{ACh}$ (GIRK), hiperpolarizando las células nodales y reduciendo la frecuencia cardíaca."
        },
        {
            "id": "p5",
            "pregunta": "La secreción de la adenohipófisis está controlada principalmente por retroalimentación negativa de asa larga. En el caso del eje tiroideo, ¿qué interacción define este mecanismo?",
            "opciones": [
                "La TSH adenohipofisaria inhibe directamente la síntesis y secreción de TRH en el núcleo paraventricular hipotalámico.",
                "Las fracciones libres de $T_3$ y $T_4$ inhiben tanto la secreción de TSH hipofisaria como la de TRH hipotalámica.",
                "La $T_4$ libre inhibe exclusivamente a la adenohipófisis, mientras que el hipotálamo carece de receptores tiroideos.",
                "La TRH hipotalámica actúa de forma autocrina sobre sus propias neuronas para frenar la descarga hacia el sistema porta."
            ],
            "respuesta": 1,
            "puntaje": 3,
            "explicacion": "En la retroalimentación negativa de asa larga, las hormonas secretadas por la glándula periférica diana ($T_3$ y $T_4$ libres circulantes) actúan tanto sobre las células tirotropas de la adenohipófisis como sobre las neuronas parvocelulares productoras de TRH en el hipotálamo para frenar su secreción."
        },
        {
            "id": "p6",
            "pregunta": "Considerando la organización anatomofuncional del sistema nervioso autónomo, ¿qué característica distingue correctamente a la división parasimpática de la simpática?",
            "opciones": [
                "Sus neuronas preganglionares nacen en segmentos toracolumbares y hacen sinapsis en ganglios paravertebrales cercanos a la médula.",
                "Sus fibras postganglionares son largas, amielínicas y liberan mayoritariamente noradrenalina sobre receptores adrenérgicos tisulares.",
                "Sus fibras preganglionares son largas y hacen sinapsis en ganglios terminales cercanos o inmersos en la pared del órgano efector.",
                "Sus neuronas preganglionares liberan noradrenalina en los ganglios autonómicos para activar receptores nicotínicos neuronales."
            ],
            "respuesta": 2,
            "puntaje": 2,
            "explicacion": "La división parasimpática posee origen craneosacro y sitúa sus ganglios muy cerca o dentro de la pared de los órganos diana, determinando fibras preganglionares largas y postganglionares muy cortas (ambas colinérgicas). En cambio, la división simpática tiene origen toracolumbar y ganglios cercanos a la columna vertebral."
        },
        {
            "id": "p7",
            "pregunta": "En el contexto de la regulación neuroendocrina hipotalámica, ¿cuál es la diferencia funcional clave entre el sistema magnocelular y el sistema parvocelular?",
            "opciones": [
                "El magnocelular proyecta axones hacia la neurohipófisis; el parvocelular secreta neurohormonas hacia el sistema porta.",
                "El magnocelular libera factores tróficos al sistema porta; el parvocelular vierte hormonas directamente en la neurohipófisis.",
                "El parvocelular regula la osmolaridad mediante vasopresina; el magnocelular controla la tiroides mediante secreción de TRH.",
                "El magnocelular inerva directamente la corteza adrenal; el parvocelular controla la liberación de adrenalina medular."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Las neuronas magnocelulares de los núcleos supraóptico y paraventricular proyectan sus axones por el tracto hipotálamo-hipofisario hasta la neurohipófisis para liberar ADH y oxitocina. Las neuronas parvocelulares proyectan hacia la eminencia media y liberan factores liberadores o inhibidores en el sistema porta hipofisario."
        },
        {
            "id": "p8",
            "pregunta": "Si se administra un agonista selectivo de los receptores adrenérgicos $\\alpha_1$, ¿qué efecto y vía de transducción se desencadenan en el músculo liso vascular periférico?",
            "opciones": [
                "Vasodilatación mediada por activación de proteína $G_s$, aumento de AMPc e inhibición de la quinasa de cadena ligera.",
                "Vasodilatación mediada por activación de guanilato ciclasa soluble, aumento de GMPc y apertura de canales de potasio.",
                "Vasoconstricción mediada por activación de proteína $G_i$, descenso de AMPc y cierre de canales de potasio rectificadores.",
                "Vasoconstricción mediada por activación de proteína $G_q$, producción de $IP_3$ y aumento del calcio citosólico libre."
            ],
            "respuesta": 3,
            "puntaje": 3,
            "explicacion": "Los receptores adrenérgicos $\\alpha_1$ están acoplados a proteína $G_q$, cuya activación estimula la fosfolipasa C para hidrolizar $PIP_2$ en $IP_3$ y DAG. El $IP_3$ libera calcio desde el retículo sarcoplásmico hacia el citosol, activando la quinasa de cadena ligera de miosina y produciendo vasoconstricción."
        },
        {
            "id": "p9",
            "pregunta": "¿Qué mecanismo neurofisiológico mantiene el tono simpático vasoconstrictor basal sobre el sistema cardiovascular en condiciones de reposo?",
            "opciones": [
                "La secreción pulsátil continua de adrenalina y noradrenalina desde las células cromafines de la médula suprarrenal en reposo.",
                "La descarga tónica continua de neuronas premotoras del tronco encefálico sobre las neuronas preganglionares espinales toracolumbares.",
                "La descarga basal de las neuronas preganglionares simpáticas ubicadas en los núcleos motores craneales del bulbo raquídeo.",
                "La inhibición tónica ejercida por los quimiorreceptores periféricos sobre los ganglios simpáticos paravertebrales cervicales."
            ],
            "respuesta": 1,
            "puntaje": 3,
            "explicacion": "El tono simpático basal se origina en la descarga continua de neuronas premotoras ubicadas en el centro vasomotor del tronco encefálico (bulbo ventrolateral rostral), cuyos axones descienden para excitar tónicamente a las neuronas preganglionares simpáticas del asta intermediolateral de la médula espinal toracolumbar."
        },
        {
            "id": "p10",
            "pregunta": "Un incremento brusco de la osmolaridad plasmática efectiva detectado por los osmorreceptores hipotalámicos provocará como respuesta directa:",
            "opciones": [
                "Inhibición de las neuronas magnocelulares supraópticas para reducir la vasopresina y aumentar la excreción de agua libre.",
                "Estimulación directa de la corteza suprarrenal para liberar aldosterona y promover la excreción renal de sodio.",
                "Activación de osmorreceptores hipotalámicos que estimulan la liberación de vasopresina desde la neurohipófisis.",
                "Liberación de péptido natriurético auricular desde el hipotálamo para disminuir la permeabilidad tubular al agua."
            ],
            "respuesta": 2,
            "puntaje": 3,
            "explicacion": "El ascenso de la osmolaridad plasmática deshidrata las neuronas osmorreceptoras de los órganos circunventriculares anteriores (OVLT y órgano subfornical), despolarizando las neuronas magnocelulares de los núcleos supraóptico y paraventricular para liberar vasopresina (ADH) en la neurohipófisis y conservar agua."
        }
    ]
}
]};