window.datosSemana9 = {
    numeroSemana: 9,
    tituloSemana: "Semana 9",
    tituloExamen: "Semana 9: Mecánica Cardíaca, Hemodinamia y Regulación Autonómica",
    examenes:[
    // examen1
        {
            idExamen: "e1",
            preguntas: [
    {
        "id": "p1",
        "pregunta": "En el contexto de la mecánica cardíaca y la regulación de la función ventricular, ¿cómo influye el aumento del retorno venoso (precarga) sobre el volumen sistólico de eyección según el mecanismo de Frank-Starling?",
        "opciones": [
            "El estiramiento inicial de los sarcómeros miocárdicos incrementa la sensibilidad al calcio de los miofilamentos y optimiza la superposición espacial entre los filamentos gruesos de miosina y delgados de actina, generando una contracción más vigorosa y un mayor volumen sistólico.",
            "La distensión auricular activa de forma directa los barorreceptores de alta presión en el cayado aórtico, liberando masivamente acetilcolina para aumentar la velocidad de conducción en el nodo AV.",
            "El estiramiento pasivo disminuye la tensión de la pared ventricular al final de la diástole, lo que reduce la presión hidrostática necesaria para abrir la válvula aórtica.",
            "La sobrecarga de volumen estimula la síntesis local de péptidos natriuréticos, los cuales relajan inmediatamente el músculo liso ventricular para evitar la hipertrofia concéntrica."
        ],
        "respuesta": 0,
        "puntaje": 4,
        "explicacion": "La ley de Frank-Starling establece que cuanto mayor es el llenado ventricular (precarga), mayor es el volumen diastólico final y el estiramiento de las fibras miocárdicas, lo que optimiza la geometría de los sarcómeros para un acoplamiento actina-miosinico más eficaz, incrementando el volumen eyectado."
    },
    {
        "id": "p2",
        "pregunta": "Analizando las variables hemodinámicas fundamentales del sistema circulatorio (según la ley de Poiseuille y los principios de flujo vascular), ¿qué variable ejerce el mayor impacto matemático y fisiológico sobre la resistencia vascular sistémica?",
        "opciones": [
            "La viscosidad dinámica de la sangre, ya que es directamente proporcional a la concentración de eritrocitos y cambia de forma lineal con el ejercicio extremo.",
            "La longitud total del lecho vascular arterial, la cual se adapta de manera instantánea mediante reflejos metabólicos locales.",
            "El radio del vaso sanguíneo, debido a que la resistencia es inversamente proporcional a la cuarta potencia del radio.",
            "La presión arterial media de perfusión, la cual regula el flujo independientemente del tono vasomotor."
        ],
        "respuesta": 2,
        "puntaje": 4,
        "explicacion": "De acuerdo con la ley de Poiseuille, la resistencia al flujo es inversamente proporcional al radio elevado a la cuarta potencia ($R \propto 1/r^4$), lo que significa que pequeños cambios en el calibre arteriolar (vasoconstricción o vasodilatación) alteran de manera drástica la resistencia y el flujo sanguíneo."
    },
    {
        "id": "p3",
        "pregunta": "Durante la regulación autonómica de la actividad cardíaca, ¿cuál es el mecanismo electroquímico y molecular exacto mediante el cual la estimulación simpática (noradrenalina sobre receptores $\beta_1$) incrementa la frecuencia cardíaca en las células marcapasos del nodo sinusal?",
        "opciones": [
            "Aumenta los niveles intracelulares de monofosfato de adenosina cíclico (AMPc) vía proteína Gs, lo que desplaza el umbral de activación de los canales 'funny' (If) hacia potenciales más positivos y acelera la pendiente de despolarización diastólica espontánea.",
            "Estimula los canales de potasio dependientes de acetilcolina (GIRK), hiperpolarizando la membrana celular e impidiendo el alcance del umbral de disparo.",
            "Inhibe de forma irreversible la entrada de calcio a través de los canales tipo L, prolongando el tiempo de latencia entre potenciales de acción sucesivos.",
            "Activa receptores muscarínicos M2 que disminuyen la corriente de entrada de sodio en la fase 0 del potencial de acción nodal."
        ],
        "respuesta": 0,
        "puntaje": 5,
        "explicacion": "La activación simpática vía $\beta_1$-adrenérgicos aumenta el AMPc intracelular, abriendo con mayor facilidad los canales marcapasos (If) y estimulando los canales de Ca²⁺ de tipo L, lo que eleva la pendiente de la fase 4 y reduce el tiempo necesario para alcanzar el umbral, aumentando la frecuencia cardíaca (efecto cronotrópico positivo)."
    },
    {
        "id": "p4",
        "pregunta": "En el marco de la hemodinámica y la relación entre presión, flujo y resistencia, si el gasto cardíaco permanece constante pero se produce una vasoconstricción arteriolar generalizada en los tejidos periféricos, ¿qué ocurre inmediatamente con la presión arterial media (PAM)?",
        "opciones": [
            "Disminuye de forma proporcional a la caída de la velocidad del flujo sanguíneo capilar.",
            "Se eleva de manera directa, ya que la presión arterial media es el producto del gasto cardíaco por la resistencia vascular periférica total ($\text{PAM} = \text{GC} \times \text{RVP}$).",
            "Permanece completamente invariable debido a los mecanismos compensadores de los barorreceptores carotídeos de baja presión.",
            "Desciende debido al colapso del lecho venoso capacitancia por redistribución del volumen intravascular."
        ],
        "respuesta": 1,
        "puntaje": 3,
        "explicacion": "Aplicando la ecuación hemodinámica fundamental análoga a la ley de Ohm ($\text{Presión} = \text{Flujo} \times \text{Resistencia}$), si el gasto cardíaco (flujo) no cambia y aumenta la resistencia vascular periférica, la presión arterial media debe incrementarse de manera correlativa."
    },
    {
        "id": "p5",
        "pregunta": "En las simulaciones experimentales de PhysiEx enfocadas en la dinámica del sistema cardiovascular y hemodinámica, ¿cómo influye una modificación en la viscosidad sanguínea sobre el caudal (flujo) medido a lo largo de un vaso con gradiente de presión constante?",
        "opciones": [
            "Un incremento de la viscosidad reduce inversamente el flujo a través del vaso, simulando condiciones patológicas como la policitemia.",
            "Un aumento de la viscosidad acelera el flujo laminar al incrementar la fricción contra las paredes endoteliales elásticas.",
            "La viscosidad no ejerce ningún efecto sobre el flujo siempre que la temperatura del sistema se mantenga constante a $37^\circ\text{C}$.",
            "Un incremento de la viscosidad produce una dilatación refleja inmediata que normaliza el volumen minuto."
        ],
        "respuesta": 0,
        "puntaje": 3,
        "explicacion": "La viscosidad es inversamente proporcional al caudal en la ley de Poiseuille; una sangre más espesa (mayor viscosidad) ofrece mayor resistencia al desplazamiento de las capas laminares, disminuyendo el flujo sanguíneo resultante a un mismo gradiente de presión."
    },
    {
        "id": "p6",
        "pregunta": "¿Cómo modula la estimulación parasimpática (vagal) la contractilidad del miocardio auricular y ventricular durante la regulación autonómica del corazón?",
        "opciones": [
            "Produce un potente efecto inotrópico positivo tanto en aurículas como en ventrículos mediante la fosforilación de la fosfolambán.",
            "Genera un fuerte efecto inotrópico negativo significativo principalmente en las aurículas (debido a la densa inervación vagal y la reducción de la entrada de Ca²⁺), con un efecto inotrópico ventricular muy escasamente representado o nulo.",
            "Aumenta la velocidad de conducción a través del nodo AV al bloquear la liberación de acetilcolina en los terminales presinápticos.",
            "Incrementa drásticamente la tensión parietal sistólica al inducir una constricción refleja de las arterias coronarias epicárdicas."
        ],
        "respuesta": 1,
        "puntaje": 4,
        "explicacion": "El sistema parasimpático inerva profusamente el nodo sinusal, el nodo AV y el miocardio auricular (produciendo efecto inotrópico negativo y cronotrópico negativo), pero los ventrículos reciben una inervación parasimpática muy escasa, por lo que su impacto directo sobre la contractilidad ventricular (inotropía) es mínimo en comparación con el simpático."
    },
    {
        "id": "p7",
        "pregunta": "En relación con el ciclo cardíaco y la apertura/cierre de las válvulas sigmoideas (aórtica y pulmonar), ¿qué condición hemodinámica específica determina el inicio de la fase de eyección ventricular rápida?",
        "opciones": [
            "Cuando la presión intraventricular desciende por debajo de la presión atrial izquierda al final de la diástole.",
            "Cuando la presión generada en el interior del ventrículo supera la presión diastólica presente en la raíz de la aorta (o arteria pulmonar), abriendo mecánicamente las válvulas semilunares.",
            "Cuando se produce la repolarización completa de las fibras de Purkinje en el ápex cardíaco.",
            "Cuando el volumen sistólico alcanza su capacidad máxima de distensión elástica."
        ],
        "respuesta": 1,
        "puntaje": 3,
        "explicacion": "Las válvulas sigmoideas (aórtica y pulmonar) permanecen cerradas durante la contracción isovolumétrica hasta que la presión en el ventrículo supera la presión de la aorta o de la arteria pulmonar, momento en el cual se abren de golpe para permitir el vaciado rápido de la sangre."
    },
    {
        "id": "p8",
        "pregunta": "Durante la regulación a corto plazo de la presión arterial, ¿cuál es la vía de integración central y la respuesta efectora desencadenada por el reflejo barorreceptor ante una caída súbita de la presión arterial (por ejemplo, al ponerse de pie)?",
        "opciones": [
            "Los barorreceptores carotídeos disminuyen su tasa de descarga aferente hacia el centro vasomotor en el bulbo raquídeo; esto reduce la actividad parasimpática e incrementa la eferencia simpática, provocando vasoconstricción periférica, taquicardia y aumento de la contractilidad.",
            "Los quimiorreceptores periféricos detectan el descenso de flujo y activan el nervio vago para deprimir la frecuencia cardíaca y restablecer el equilibrio hídrico.",
            "El núcleo amigdalino libera factores natriuréticos que relajan el músculo liso arteriolar para evitar el colapso de la microcirculación cerebral.",
            "Se inhibe la liberación de vasopresina hipofisaria para favorecer una rápida excreción de sodio y disminuir la resistencia vascular total."
        ],
        "respuesta": 0,
        "puntaje": 5,
        "explicacion": "Una caída de presión reduce el estiramiento de los barorreceptores, disminuyendo sus impulsos inhibitorios hacia el centro vasomotor bulbar. Esto desata una respuesta simpática refleja (aumento de frecuencia cardíaca, inotropía y vasoconstricción) y una retirada del tono vagal para elevar la presión de vuelta a la normalidad."
    },
    {
        "id": "p9",
        "pregunta": "En el análisis de las propiedades mecánicas y el perfil de presión de los vasos del sistema circulatorio, ¿qué sector vascular concentra la mayor caída de presión hidrostática y actúa como el principal sitio de resistencia regulable frente al flujo?",
        "opciones": [
            "Las grandes arterias elásticas (como la aorta), debido a su capacidad de amortiguación (windkessel).",
            "Los capilares sistémicos, ya que su sección transversal total es la más alta de todo el árbol vascular.",
            "Las arteriolas (pequeñas arterias musculares), debido a que su luz reducida y su capa de músculo liso bien desarrollado oponen la mayor resistencia al flujo sanguíneo.",
            "Las venas de gran calibre, por la presencia de válvulas unidireccionales y baja distensibilidad."
        ],
        "respuesta": 2,
        "puntaje": 4,
        "explicacion": "Las arteriolas se conocen como los 'vasos de resistencia' de la circulación. Su pequeño radio y capacidad de vasoconstricción por tono vasomotor explican por qué en este segmento se registra la caída más pronunciada de la presión arterial media antes de llegar a los capilares."
    },
    {
        "id": "p10",
        "pregunta": "En el contexto de la función cardíaca integrada, ¿cómo se define y qué relevancia clínica posee la fracción de eyección (FE, ejection fraction) ventricular?",
        "opciones": [
            "Es el cociente entre el volumen sistólico eyectado y el volumen diastólico final ($\text{FE} = \text{VS}/\text{VDF}$), expresado en porcentaje; constituye un índice clínico fundamental para evaluar la eficiencia contractilidad del ventrículo (normalmente entre 55% y 70%).",
            "Es la velocidad máxima con la que la sangre atraviesa la válvula mitral durante el llenado pasivo temprano medido por ecocardiografía.",
            "Representa el porcentaje de sangre que permanece en el ventrículo al final de la sístole respecto a la masa total miocárdica.",
            "Es la relación matemática entre el gasto cardíaco y la presión venosa central en condiciones de reposo basal."
        ],
        "respuesta": 0,
        "puntaje": 4,
        "explicacion": "La fracción de eyección mide la proporción de sangre que el ventrículo logra expulsar en cada latido en relación con el volumen total que contenía al final de su llenado (volumen diastólico final). Es un parámetro clínico clave para diagnosticar disfunciones sistólicas cuando sus valores disminuyen."
    }]},
        // Examen 2
        {}
]};