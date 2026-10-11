window.datosSemana12 = {
    numeroSemana: 12,
    tituloSemana: "Semana 12",
    tituloExamen: "Semana 12: Mecánica Ventilatoria e Intercambio Gaseoso",
    examenes:[
    // examen1
        {
            idExamen: "e1",
            preguntas: [
    {
        "id": "p1",
        "pregunta": "En el análisis de la mecánica ventilatoria y las fuerzas que expanden el pulmón, ¿cómo se define la presión transpulmonar y cuál es su rol físico al final de la inspiración tranquila?",
        "opciones": [
            "Es la diferencia entre la presión alveolar y la presión intrapleural ($P_{tp} = P_{alv} - P_{pl}$); al final de la inspiración, mantiene el pulmón distendido contrarrestando la tendencia elástica natural de retroceso hacia adentro del parénquima pulmonar.",
            "Es la diferencia entre la presión barométrica y la presión alveolar, la cual se vuelve negativa para permitir la entrada de flujo turbulento.",
            "Representa la presión hidrostática generada por el líquido pleural en las bases pulmonares durante la espiración forzada.",
            "Es la fuerza ejercida por los músculos intercostales externos directamente sobre la pleura parietal para disminuir el volumen residual."
        ],
        "respuesta": 0,
        "puntaje": 4,
        "explicacion": "La presión transpulmonar mide la fuerza de distensión aplicada al pulmón. Dado que la presión intrapleural siempre es negativa durante la ventilación normal, la presión transpulmonar mantiene el pulmón abierto frente a su tendencia intrínseca a colapsarse."
    },
    {
        "id": "p2",
        "pregunta": "Respecto a la función del surfactante pulmonar sintetizado por los neumocitos tipo II y su relación con la ley de Laplace ($P = 2T/r$), ¿cuál es su principal consecuencia fisiológica en los alvéolos de distintos tamaños?",
        "opciones": [
            "Incrementa de forma lineal la tensión superficial en los alvéolos pequeños para acelerar su vaciado durante la espiración.",
            "Reduce la tensión superficial de manera proporcional a la disminución del radio alveolar, igualando las presiones de retracción en alvéolos grandes y pequeños, previniendo así el colapso (atelectasia) y la inestabilidad alveolar.",
            "Aumenta la viscosidad del líquido alveolar para facilitar el transporte activo de oxígeno a través de la membrana de difusión.",
            "Estimula la contracción rítmica de los fibroblastos septales para generar un gradiente osmótico transpulmonar."
        ],
        "respuesta": 1,
        "puntaje": 5,
        "explicacion": "Según la ley de Laplace, un alvéolo pequeño requeriría una presión muy alta para mantenerse abierto a menos que su tensión superficial disminuya. El surfactante reduce más la tensión superficial en alvéolos pequeños que en grandes, estabilizando los espacios aéreos y evitando que colapsen."
    },
    {
        "id": "p3",
        "pregunta": "En el proceso de intercambio gaseoso a través de la membrana alvéolo-capilar (regido por la ley de difusión de Fick), ¿cuál de las siguientes condiciones optimiza la tasa de transferencia difusional del oxígeno?",
        "opciones": [
            "Un incremento en el grosor de la membrana basal y una disminución del área de sección transversal disponible.",
            "Una gran área superficial total, un espesor de membrana sumamente delgado y un gradiente de presión parcial de oxígeno elevado entre el alvéolo y la sangre capilar.",
            "Una baja solubilidad del gas en el plasma combinada con un tiempo de tránsito capilar extremadamente corto.",
            "La saturación completa de la hemoglobina antes de cruzar el primer tercio del capilar pulmonar."
        ],
        "respuesta": 1,
        "puntaje": 4,
        "explicacion": "La ley de Fick indica que la difusión de un gas es directamente proporcional al área superficial y al gradiente de presiones, e inversamente proporcional al grosor de la membrana. Una membrana delgada y amplia maximiza la difusión del O₂."
    },
    {
        "id": "p4",
        "pregunta": "Durante el transporte de oxígeno en la sangre, ¿cómo afecta el denominado efecto Bohr a la afinidad de la hemoglobina por el oxígeno a nivel de los tejidos metabólicamente activos?",
        "opciones": [
            "El aumento de la concentración de iones hidrógeno (pH bajo) y del dióxido de carbono ($PCO_2$ elevada) desplaza la curva de disociación de la oxihemoglobina hacia la derecha, reduciendo su afinidad por el $O_2$ y facilitando su liberación hacia los tejidos.",
            "La disminución de la temperatura y la alcalosis tisular incrementan la afinidad de la hemoglobina, atrapando el oxígeno en los capilares sistémicos.",
            "El incremento del 2,3-difosfoglicerato (2,3-DPG) inhibe de forma alostérica la unión cooperativa de las cuatro subunidades de la globina.",
            "La saturación de oxígeno se vuelve completamente independiente de la presión parcial de oxígeno cuando el pH desciende de 7.35."
        ],
        "respuesta": 0,
        "puntaje": 4,
        "explicacion": "El efecto Bohr describe cómo un entorno tisular ácido (pH bajo) y rico en $CO_2$ debilita la unión del oxígeno a la hemoglobina (desplazamiento a la derecha de la curva), lo que favorece que el $O_2$ se disocie y se entregue eficientemente a las células que lo consumen."
    },
    {
        "id": "p5",
        "pregunta": "En relación con el transporte de dióxido de carbono ($CO_2$) y el fenómeno de desplazamiento de cloruro (fenómeno de Hamburger) en los eritrocitos, ¿qué ocurre en el interior del glóbulo rojo a nivel tisular?",
        "opciones": [
            "El $CO_2$ hidratado por la anhidrasa carbónica genera $HCO_3^-$; este ion sale del eritrocito hacia el plasma mediante un intercambiador aniónico, mientras que el ion cloruro ($Cl^-$) ingresa a la célula para mantener la electroneutralidad.",
            "El cloro abandona el eritrocito para unirse directamente a la molécula de carbaminohemoglobina en el plasma.",
            "El bicarbonato plasmático ingresa al eritrocito para ser convertido en monóxido de carbono por acción enzimática directa.",
            "Los iones hidrógeno se desplazan hacia el intersticio tisular sin la participación de proteínas transportadoras de membrana."
        ],
        "respuesta": 0,
        "puntaje": 5,
        "explicacion": "En los tejidos, el exceso de $CO_2$ entra al eritrocito y es convertido en bicarbonato ($HCO_3^-$). Para evitar el desbalance eléctrico, el bicarbonato sale al plasma a través del intercambiador aniónico (banda 3), lo que obliga a que el ion cloruro ($Cl^-) importe su lugar (fenómeno de Hamburger)."
    },
    {
        "id": "p6",
        "pregunta": "En las simulaciones experimentales de PhysiEx sobre volúmenes y capacidades pulmonares, ¿cómo se define la Capacidad Vital (CV) y qué volúmenes la componen?",
        "opciones": [
            "Es la suma del volumen corriente, el volumen de reserva inspiratoria y el volumen de reserva espiratoria; representa el volumen máximo de aire que se puede expulsar de los pulmones después de una inspiración máxima.",
            "Es el volumen de gas que permanece en los pulmones después de una espiración forzada máxima (volumen residual más capacidad funcional residual).",
            "Es el volumen total de aire que entra y sale de los pulmones durante un minuto de respiración basal en reposo.",
            "Corresponde exclusivamente al volumen de reserva inspiratoria multiplicado por la frecuencia respiratoria."
        ],
        "respuesta": 0,
        "puntaje": 3,
        "explicacion": "La capacidad vital es el volumen máximo que una persona puede exhalar tras una inspiración máxima completa. Reúne el volumen corriente (VT) más el volumen de reserva inspiratoria (VRI) y el volumen de reserva espiratoria (VRE)."
    },
    {
        "id": "p7",
        "pregunta": "En el contexto de la relación ventilación/perfusión ($V/Q$) regional a lo largo del pulmón vertical, ¿qué características predominan en las regiones basales (inferiores) del pulmón en comparación con las regiones apicales?",
        "opciones": [
            "Tanto la ventilación como la perfusión son mayores en la base debido a la gravedad, pero el incremento relativo de la perfusión es mayor, lo que resulta en una relación $V/Q$ menor que 1.",
            "La ventilación es casi nula y la perfusión supera ampliamente los límites de intercambio gaseoso, generando un espacio muerto fisiológico masivo.",
            "Ambos parámetros disminuyen simétricamente, manteniendo una relación $V/Q$ homogénea e infinita en todo el parénquima.",
            "La presión alveolar supera a la presión arterial y venosa, colapsando los capilares basales."
        ],
        "respuesta": 0,
        "puntaje": 4,
        "explicacion": "Debido a la gravedad, tanto la ventilación como la perfusión son mayores en las bases pulmonares que en los vértices. Sin embargo, la gravedad afecta aún más a la perfusión (columna hidrostática sanguínea), por lo que la relación $V/Q$ en la base es menor de 1 (y mayor de 1 en el vértice)."
    },
    {
        "id": "p8",
        "pregunta": "¿Cómo se altera la distensibilidad pulmonar (compliance) en una patología restrictiva avanzada como la fibrosis pulmonar intersticial?",
        "opciones": [
            "La distensibilidad disminuye drásticamente debido al depósito de colágeno y tejido cicatricial rígido en el intersticio, lo que exige una mayor presión transpulmonar para lograr un volumen inspiratorio determinado.",
            "La distensibilidad aumenta de forma exponencial por la pérdida de fibras elásticas alveolares.",
            "La compliance permanece inalterada y los cambios se limitan exclusivamente al incremento del espacio muerto anatómico.",
            "Se produce un aumento de la resistencia de la vía aérea superior que simula un cuadro obstructivo crónico."
        ],
        "respuesta": 0,
        "puntaje": 4,
        "explicacion": "En la fibrosis pulmonar, la sustitución del tejido elástico por tejido fibroso rígido reduce la elasticidad y disminuye la distensibilidad (compliance), haciendo que el pulmón sea 'duro' y difícil de inflar."
    },
    {
        "id": "p9",
        "pregunta": "Durante el intercambio gaseoso en los tejidos y órganos blancos, ¿en qué consiste el efecto Haldane y cómo facilita la eliminación del dióxido de carbono en los pulmones?",
        "opciones": [
            "La oxigenación de la hemoglobina en los capilares pulmonares reduce su afinidad por el dióxido de carbono y desplaza protones, lo que favorece la liberación de $CO_2$ desde el bicarbonato para ser espirado.",
            "El aumento de la presión parcial de $CO_2$ en los tejidos acelera la síntesis hepática de urea y proteínas plasmáticas.",
            "La unión del $O_2$ a la mioglobina muscular inhibe la actividad de la enzima anhidrasa carbónica tisular.",
            "La acumulación de ácido láctico en los tejidos periféricos bloquea el transporte pasivo de gases a través de la membrana celular."
        ],
        "respuesta": 0,
        "puntaje": 5,
        "explicacion": "El efecto Haldane es el reverso del efecto Bohr: cuando la sangre llega a los pulmones y la hemoglobina se une al oxígeno ($O_2$), disminuye su capacidad para transportar $CO_2$ e iones hidrógeno, facilitando la conversión de $HCO_3^-$ de nuevo en $CO_2$ gaseoso para su eliminación alveolar."
    },
    {
        "id": "p10",
        "pregunta": "En la regulación central y periférica de la ventilación pulmonar, ¿cuál es el estímulo primario directo que excita a los quimiorreceptores centrales ubicados en la superficie ventral del bulbo raquídeo?",
        "opciones": [
            "Los cambios en la concentración de iones hidrógeno ($H^+$) en el líquido cefalorraquídeo (LCR), los cuales varían secundariamente ante la difusión de $CO_2$ a través de la barrera hematoencefálica.",
            "La caída directa de la presión parcial de oxígeno arterial por debajo de $60\text{ mmHg}$.",
            "La concentración sérica de bicarbonato medida por los astrocitos corticales.",
            "La tensión mecánica generada en los propioceptores de los músculos intercostales externos."
        ],
        "respuesta": 0,
        "puntaje": 5,
        "explicacion": "Los quimiorreceptores centrales no responden directamente al $O_2$, sino al pH del líquido cefalorraquídeo. El $CO_2$ difunde rápidamente desde la sangre al LCR, donde se hidrata y libera $H^+$, estimulando los centros respiratorios para ajustar la ventilación."
    }]},
        // Examen 2
        {}
]};