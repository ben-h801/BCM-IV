window.datosSemana12 = {
    numeroSemana: 12,
    tituloSemana: "Semana 12",
    tituloExamen: "Semana 12: Mecánica Ventilatoria e Intercambio Gaseoso",
    examenes: [
        // Examen 1
        {
            idExamen: "e1",
            preguntas: [
                {
                    "id": "p1",
                    "pregunta": "Desde el punto de vista de la relación estructura-función en el árbol traqueobronquial, ¿qué característica distingue a los bronquíolos terminales de los bronquíolos respiratorios en la transición hacia la zona de intercambio?",
                    "opciones": [
                        "Los bronquíolos terminales carecen de alvéolos en sus paredes y forman parte del espacio muerto anatómico, mientras que los respiratorios presentan evaginaciones alveolares donde inicia la hematosis.",
                        "Los bronquíolos terminales poseen anillos cartilaginosos completos que impiden su colapso espiratorio, mientras que los respiratorios dependen exclusivamente de músculo liso para mantener su calibre.",
                        "Los bronquíolos terminales realizan intercambio gaseoso directo a través de neumocitos tipo I, mientras que los respiratorios transportan aire por convección sin participar en la difusión tisular.",
                        "Los bronquíolos terminales presentan el mayor porcentaje de resistencia al flujo aéreo total, mientras que los respiratorios carecen de fibras elásticas en su tejido intersticial circundante."
                    ],
                    "respuesta": 0,
                    "puntaje": 4,
                    "explicacion": "La zona de conducción finaliza en los bronquíolos terminales (generación 16), donde no hay intercambio gaseoso (espacio muerto anatómico). A partir de los bronquíolos respiratorios (generación 17) aparecen alvéolos en sus paredes, iniciando la zona respiratoria."
                },
                {
                    "id": "p2",
                    "pregunta": "En la mecánica ventilatoria en reposo, ¿qué determina el equilibrio mecánico del sistema toracopulmonar al alcanzar la Capacidad Residual Funcional (CRF) tras una espiración tranquila?",
                    "opciones": [
                        "La presión alveolar se vuelve fuertemente negativa respecto a la atmosférica, generando una presión transpulmonar nula que impide el colapso de las vías aéreas de pequeño calibre.",
                        "La fuerza de retroceso elástico hacia adentro del parénquima pulmonar iguala exactamente la fuerza de expansión hacia afuera de la pared torácica, manteniendo negativa la presión intrapleural.",
                        "La contracción tónica residual del diafragma equilibra la tensión superficial alveolar, igualando la presión intrapleural con la presión barométrica en el interior del espacio pleural.",
                        "El cierre pasivo de los esfínteres precapilares pulmonares estabiliza el volumen alveolar, haciendo que la presión transpulmonar adopte un valor negativo al final de la espiración basal."
                    ],
                    "respuesta": 1,
                    "puntaje": 4,
                    "explicacion": "Al final de una espiración normal (CRF), los músculos respiratorios están relajados y el pulmón tiende a colapsarse mientras la caja torácica tiende a expandirse. Estas fuerzas opuestas se equilibran y generan una presión intrapleural subatmosférica (aprox. -5 cmH₂O)."
                },
                {
                    "id": "p3",
                    "pregunta": "Respecto al rol del surfactante pulmonar (dipalmitoilfosfatidilcolina) y la ley de Laplace ($P = 2T/r$), ¿por qué los alvéolos pequeños no colapsan vaciando su contenido hacia los alvéolos más grandes?",
                    "opciones": [
                        "Porque el surfactante incrementa la rigidez del colágeno septal en los alvéolos pequeños, elevando su presión de retracción para impedir el paso de aire a través de los poros de Kohn.",
                        "Porque el surfactante aumenta la tensión superficial de manera inversamente proporcional al radio alveolar, igualando la distensibilidad entre regiones apicales y basales del pulmón.",
                        "Porque el surfactante se concentra con mayor densidad por unidad de área en los alvéolos pequeños, reduciendo su tensión superficial en mayor proporción y estabilizando su presión interna.",
                        "Porque el surfactante estimula la secreción continua de líquido intersticial hacia el lumen alveolar, generando una presión hidrostática positiva que contrarresta el retroceso elástico."
                    ],
                    "respuesta": 2,
                    "puntaje": 5,
                    "explicacion": "Según la ley de Laplace ($P = 2T/r$), a igual tensión superficial ($T$), un alvéolo de menor radio ($r$) tendría mayor presión interna y se vaciaría en uno grande. El surfactante reduce más $T$ en los alvéolos pequeños al compactar sus moléculas, igualando las presiones."
                },
                {
                    "id": "p4",
                    "pregunta": "Durante una espiración forzada máxima, ¿por qué el flujo espiratorio alcanza un límite independiente del esfuerzo muscular (compresión dinámica de las vías aéreas) a volúmenes pulmonares medios y bajos?",
                    "opciones": [
                        "Porque la activación refleja de receptores muscarínicos $M_3$ bronquiales induce broncoconstricción sostenida, reduciendo el radio de la tráquea y aumentando la turbulencia del flujo aéreo.",
                        "Porque el descenso rápido de la presión alveolar por debajo de la presión atmosférica colapsa los alvéolos basales, eliminando el gradiente de presión necesario para expulsar el aire.",
                        "Porque el aumento de la viscosidad del gas espirado al enfriarse en la vía aérea superior duplica la resistencia laminar, neutralizando la fuerza contráctil de los músculos abdominales.",
                        "Porque la elevada presión intrapleural positiva comprime las vías aéreas no cartilaginosas aguas abajo del punto de igual presión, aumentando su resistencia conforme mayor es el esfuerzo."
                    ],
                    "respuesta": 3,
                    "puntaje": 5,
                    "explicacion": "En la espiración forzada, la presión intrapleural se vuelve muy positiva y supera la presión intraluminal de los bronquíolos sin cartílago más allá del punto de igual presión, colapsándolos parcialmente y limitando el flujo máximo sin importar cuánto esfuerzo adicional se aplique."
                },
                {
                    "id": "p5",
                    "pregunta": "En las prácticas de espirometría como PhysioEx, ¿qué volúmenes o capacidades pulmonares NO pueden medirse directamente con un espirómetro simple y qué ocurre en un patrón obstructivo como el asma?",
                    "opciones": [
                        "La Capacidad Vital y el Volumen Corriente requieren pletismografía corporal; en el patrón obstructivo aumenta el $VEF_1$ debido a la mayor velocidad de vaciado por retroceso elástico.",
                        "El Volumen de Reserva Espiratoria y la Capacidad Inspiratoria son indirectos; en el patrón obstructivo disminuye el Volumen Residual por hiperinsuflación dinámica de los espacios aéreos.",
                        "El Volumen Residual, la CRF y la Capacidad Pulmonar Total no son medibles directamente; en el patrón obstructivo aumenta el Volumen Residual y disminuye el índice $VEF_1/CVF$ bajo el $70\\%$.",
                        "La Capacidad Inspiratoria y la Capacidad Vital Forzada requieren dilución de helio; en el patrón obstructivo la Capacidad Pulmonar Total se reduce drásticamente por fibrosis intersticial."
                    ],
                    "respuesta": 2,
                    "puntaje": 4,
                    "explicacion": "Un espirómetro simple solo mide el aire movilizado, por lo que el Volumen Residual ($VR$) y las capacidades que lo contienen ($CRF$ y $CPT$) requieren dilución de helio o pletismografía. En patologías obstructivas el atrapamiento aéreo eleva el $VR$ y reduce $VEF_1/CVF$."
                },
                {
                    "id": "p6",
                    "pregunta": "Al analizar en PhysioEx los efectos separados de reducir el radio de las vías aéreas frente a eliminar el surfactante pulmonar, ¿qué diferencia funcional se observa en los parámetros ventilatorios?",
                    "opciones": [
                        "Reducir el radio disminuye la tensión superficial alveolar en las bases pulmonares, mientras que eliminar el surfactante incrementa el espacio muerto anatómico sin alterar los volúmenes.",
                        "Reducir el radio incrementa la resistencia y disminuye el flujo espiratorio ($VEF_1$), mientras que eliminar el surfactante reduce la distensibilidad y aumenta el trabajo elástico inspiratorio.",
                        "Reducir el radio aumenta la Capacidad Vital Forzada por compresión dinámica precoz, mientras que eliminar el surfactante duplica el Volumen Corriente al facilitar la expansión torácica.",
                        "Reducir el radio bloquea la difusión de $CO_2$ a través de los neumocitos tipo I, mientras que eliminar el surfactante disminuye la resistencia de los bronquios segmentarios cartilaginosos."
                    ],
                    "respuesta": 1,
                    "puntaje": 4,
                    "explicacion": "Por la ley de Poiseuille ($R \\propto 1/r^4$), disminuir el radio bronquial dispara la resistencia al flujo aéreo y cae el $VEF_1$. En cambio, suprimir el surfactante eleva la tensión superficial alveolar, disminuyendo la distensibilidad (compliance) y colapsando alvéolos."
                },
                {
                    "id": "p7",
                    "pregunta": "En el intercambio gaseoso a través de la barrera hematogaseosa (ley de difusión de Fick), ¿por qué la transferencia de oxígeno en un sujeto sano en reposo se considera limitada por la perfusión?",
                    "opciones": [
                        "Porque la presión parcial de $O_2$ capilar se equilibra con la alveolar en el primer tercio del tránsito capilar, por lo que solo un aumento del flujo sanguíneo incrementa su captación neta.",
                        "Porque la solubilidad del $O_2$ en el plasma es veinte veces superior a la del $CO_2$, permitiendo que la hemoglobina se sature lentamente durante todo el recorrido del capilar pulmonar.",
                        "Porque el espesor de la membrana alvéolo-capilar impide el equilibrio de presiones parciales durante el reposo, haciendo que la difusión dependa exclusivamente del gradiente barométrico.",
                        "Porque la unión covalente del $O_2$ al grupo hemo mantiene nula la presión parcial plasmática de oxígeno hasta que el eritrocito abandona completamente el lecho capilar de la circulación menor."
                    ],
                    "respuesta": 0,
                    "puntaje": 4,
                    "explicacion": "En reposo, el eritrocito tarda unos $0.75\\text{ s}$ en cruzar el capilar pulmonar, pero la $PO_2$ sanguínea alcanza los $100\\text{ mmHg}$ alveolares en apenas $0.25\\text{ s}$. Al igualarse el gradiente tan rápido, la única forma de transferir más $O_2$ es aumentar la perfusión."
                },
                {
                    "id": "p8",
                    "pregunta": "A nivel de los capilares sistémicos en tejidos metabólicamente activos (como el músculo esquelético en ejercicio), ¿cómo opera el efecto Bohr para optimizar la entrega tisular de oxígeno?",
                    "opciones": [
                        "El aumento de temperatura y la alcalosis metabólica desplazan la curva hacia la izquierda, disminuyendo la $P_{50}$ de la hemoglobina y acelerando la disociación cooperativa del oxígeno.",
                        "La caída de la $PCO_2$ tisular y el incremento del pH estabilizan la conformación relajada (R) de la globina, facilitando la cesión de oxígeno hacia las mitocondrias de las fibras activas.",
                        "El descenso del pH y el alza de $PCO_2$ estabilizan la conformación tensa (T) de la hemoglobina, desplazando la curva hacia la derecha y elevando la $P_{50}$ para ceder más $O_2$ al tejido.",
                        "La unión competitiva del lactato al átomo de hierro ferroso ($Fe^{2+}$) oxida la hemoglobina a metahemoglobina, liberando las cuatro moléculas de oxígeno de forma simultánea en el capilar."
                    ],
                    "respuesta": 2,
                    "puntaje": 5,
                    "explicacion": "El aumento de $H^+$ (menor pH) y $CO_2$ en los tejidos activos favorece la forma desoxigenada tensa (T) de la hemoglobina, reduciendo su afinidad por el $O_2$ (desplazamiento a la derecha y aumento de $P_{50}$) para descargar mayor cantidad de oxígeno."
                },
                {
                    "id": "p9",
                    "pregunta": "Respecto al transporte sanguíneo de dióxido de carbono desde los tejidos hacia los pulmones, ¿qué relación funcional existe entre el fenómeno de Hamburger y el efecto Haldane?",
                    "opciones": [
                        "En los tejidos el $Cl^-$ abandona el eritrocito junto con protones por cotransporte activo, mientras que en los pulmones la desoxigenación de la hemoglobina aumenta la formación de carbamatos.",
                        "En los tejidos la anhidrasa carbónica plasmática convierte el $CO_2$ en ácido carbónico, mientras que en los pulmones el aumento de $PO_2$ incrementa la afinidad de la globina por el $CO_2$.",
                        "En los tejidos el bicarbonato ingresa al glóbulo rojo mediante canales de sodio epiteliales, mientras que en los pulmones la caída del pH capilar bloquea la disociación del ácido carbónico.",
                        "En los tejidos el $HCO_3^-$ sale del eritrocito intercambiándose por $Cl^-$ vía banda 3, mientras que en los pulmones la oxigenación de la hemoglobina facilita la liberación de $CO_2$ espirado."
                    ],
                    "respuesta": 3,
                    "puntaje": 5,
                    "explicacion": "En los tejidos, el $HCO_3^-$ formado en el eritrocito sale al plasma a cambio de $Cl^-$ (desplazamiento de cloruro o fenómeno de Hamburger). En los pulmones, la unión de $O_2$ a la hemoglobina reduce su afinidad por $CO_2$ y $H^+$ (efecto Haldane), promoviendo su espiración."
                },
                {
                    "id": "p10",
                    "pregunta": "Al comparar el vértice (ápice) con la base pulmonar en bipedestación, ¿cómo varían la relación ventilación/perfusión ($V/Q$) y la respuesta vascular local ante una hipoxia alveolar regional?",
                    "opciones": [
                        "En el vértice la relación $V/Q$ es menor que $1$ debido al mayor flujo sanguíneo apical, y la hipoxia alveolar desencadena vasodilatación mediada por óxido nítrico para aumentar la perfusión.",
                        "En el vértice la relación $V/Q$ es mayor que $1$ porque la perfusión cae más que la ventilación por gravedad, y la hipoxia alveolar induce vasoconstricción arteriolar para redirigir el flujo.",
                        "En la base pulmonar la relación $V/Q$ tiende al infinito por colapso capilar gravitacional, y la hipoxia alveolar dilata los capilares perialveolares para corregir el cortocircuito fisiológico.",
                        "En ambas regiones la relación $V/Q$ permanece constante en $0.8$ gracias al surfactante, y la hipoxia alveolar contrae las venas pulmonares para elevar la presión hidrostática de filtración."
                    ],
                    "respuesta": 1,
                    "puntaje": 5,
                    "explicacion": "Por efecto de la gravedad, tanto la ventilación como la perfusión son menores en el ápice que en la base, pero el descenso de la perfusión es mucho más pronunciado, dando un cociente $V/Q > 1$ en el vértice y $V/Q < 1$ en la base. Además, la hipoxia alveolar provoca vasoconstricción hipóxica local."
                }
            ]
        },
        {
    idExamen: "e2",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "En relación con la estructura histológica de la unidad alvéolo-capilar, ¿qué especialización funcional diferencia a los neumocitos tipo I de los neumocitos tipo II en el epitelio alveolar?",
            "opciones": [
                "Los neumocitos tipo II cubren más del noventa por ciento de la superficie alveolar y forman una barrera escamosa ultradelgada que maximiza la difusión pasiva de gases hacia el endotelio capilar.",
                "Los neumocitos tipo I constituyen una barrera escamosa extensa y delgada ideal para la hematosis, mientras que los tipo II sintetizan surfactante pulmonar y actúan como células progenitoras.",
                "Los macrófagos alveolares forman uniones estrechas continuas con las células endoteliales capilares, regulando el paso activo de oxígeno mediante transportadores dependientes de energía.",
                "La lámina basal fusionada posee un espesor superior a cinco micrómetros para impedir la filtración de plasma, reduciendo la conductancia difusional del dióxido de carbono en condiciones basales."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "Los neumocitos tipo I son células epiteliales escamosas muy delgadas que tapizan cerca del 95% de la superficie alveolar para minimizar la distancia de difusión. Los neumocitos tipo II son células cúbicas que producen, almacenan y secretan surfactante pulmonar y pueden diferenciarse en neumocitos tipo I tras una lesión."
        },
        {
            "id": "p2",
            "pregunta": "Durante el inicio de una inspiración tranquila en reposo, ¿qué secuencia de eventos biomecánicos y cambios de presión permite el ingreso de aire hacia los alvéolos?",
            "opciones": [
                "La contracción de los intercostales internos eleva las costillas superiores y vuelve positiva la presión intrapleural, impulsando el aire atmosférico hacia los alvéolos por convección forzada.",
                "El descenso del diafragma reduce el diámetro vertical del tórax y aumenta la presión alveolar por encima de la barométrica, disminuyendo la presión transpulmonar durante la inspiración tranquila.",
                "La relajación simultánea del diafragma y los músculos abdominales expande la pared torácica, igualando la presión alveolar con la intrapleural para generar un flujo laminar hacia los bronquios.",
                "La contracción del diafragma y los intercostales externos negativiza aún más la presión intrapleural, aumentando la presión transpulmonar y reduciendo la presión alveolar bajo la atmosférica."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "Al contraerse el diafragma y los intercostales externos, el volumen intratorácico aumenta y la presión intrapleural desciende (de -5 a aprox. -8 cmH₂O). Esto incrementa la presión transpulmonar ($P_{tp} = P_{alv} - P_{pl}$), distiende los alvéolos y vuelve ligeramente negativa la presión alveolar (-1 cmH₂O) respecto a la atmosférica."
        },
        {
            "id": "p3",
            "pregunta": "Al comparar las curvas de presión-volumen de un pulmón aislado insuflado con aire frente a uno lleno de solución salina, ¿qué ocurre con la distensibilidad (compliance) y la histéresis pulmonar?",
            "opciones": [
                "La distensibilidad aumenta notablemente y la histéresis casi desaparece, ya que la solución salina elimina la interfase aire-líquido y suprime las fuerzas de tensión superficial alveolar.",
                "La distensibilidad disminuye a la mitad y la histéresis se duplica, debido a que el líquido salino incrementa la rigidez de las fibras de colágeno y elastina del intersticio perialveolar.",
                "La distensibilidad permanece inalterada respecto al pulmón insuflado con aire, puesto que las fuerzas elásticas tisulares representan el único determinante del retroceso elástico pulmonar.",
                "La curva de insuflación se desplaza hacia la derecha exigiendo mayores presiones transpulmonares, porque la solución salina inactiva los neumocitos tipo II y bloquea la expansión alveolar."
            ],
            "respuesta": 0,
            "puntaje": 5,
            "explicacion": "La tensión superficial en la interfase aire-líquido representa cerca de dos tercios del retroceso elástico pulmonar y es la principal responsable de la histéresis entre insuflación y desinsuflación. Al llenar el pulmón con solución salina se elimina dicha interfase, aumentando la distensibilidad."
        },
        {
            "id": "p4",
            "pregunta": "A lo largo del árbol traqueobronquial de un adulto sano, ¿en qué segmento anatómico se localiza la mayor parte de la resistencia al flujo aéreo y cuál es su explicación física?",
            "opciones": [
                "En los bronquíolos terminales y respiratorios menores a un milímetro, debido a que la ausencia completa de cartílago provoca su cierre pasivo durante toda la fase inspiratoria en reposo.",
                "En los conductos y sacos alveolares periféricos, donde la elevada viscosidad del surfactante pulmonar genera un flujo turbulento que concentra más del ochenta por ciento de la resistencia.",
                "En los bronquios lobares y segmentarios de tamaño mediano, debido a su menor área transversal total conjunta y a la presencia de flujo aéreo turbulento y transicional en sus bifurcaciones.",
                "En los alvéolos subpleurales de las bases pulmonares, puesto que la compresión hidrostática de los capilares perialveolares estrecha el lumen aéreo e impide el desplazamiento convectivo."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "Aunque cada bronquíolo pequeño tiene un radio reducido, existen miles en paralelo, por lo que su área de sección transversal total es enorme y su resistencia combinada es baja (<20%). La mayor resistencia reside en los bronquios de tamaño mediano (generaciones 4 a 7)."
        },
        {
            "id": "p5",
            "pregunta": "En el análisis espirométrico basado en PhysioEx, ¿cómo se calcula la Capacidad Inspiratoria (CI) y qué perfil funcional caracteriza a un trastorno ventilatorio restrictivo puro?",
            "opciones": [
                "La Capacidad Inspiratoria equivale a $VRI + VRE$; en un patrón restrictivo aumenta la Capacidad Pulmonar Total y el índice $VEF_1/CVF$ cae sistemáticamente por debajo del cincuenta por ciento.",
                "La Capacidad Inspiratoria equivale a $VT + VRI$; en un patrón restrictivo disminuyen la $CVF$ y la $CPT$, mientras que el cociente $VEF_1/CVF$ se mantiene normal o incluso ligeramente elevado.",
                "La Capacidad Inspiratoria equivale a $VT + VR$; en un patrón restrictivo se eleva el Volumen de Reserva Espiratoria y disminuye el $VEF_1$ por aumento de la distensibilidad parenquimatosa.",
                "La Capacidad Inspiratoria equivale a $CRF + VRE$; en un patrón restrictivo la $CVF$ permanece normal gracias al retroceso elástico, pero el Volumen Residual aumenta por atrapamiento aéreo."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "La Capacidad Inspiratoria ($CI$) es el volumen máximo que puede inspirarse desde el nivel de reposo espiratorio ($VT + VRI$). En patologías restrictivas (como fibrosis), todos los volúmenes y capacidades ($CVF$, $CPT$) se reducen proporcionalmente, por lo que la relación $VEF_1/CVF$ se conserva normal o aumentada."
        },
        {
            "id": "p6",
            "pregunta": "Si dos individuos mantienen exactamente la misma ventilación minuto ($\\dot{V}_E = 6000\\text{ mL/min}$), uno con respiración lenta y profunda y otro con respiración rápida y superficial, ¿cómo difiere su ventilación alveolar ($\\dot{V}_A$)?",
            "opciones": [
                "Ambos patrones producen idéntica ventilación alveolar neta, ya que el espacio muerto anatómico se ajusta proporcionalmente al volumen corriente para mantener constante la $PCO_2$ arterial.",
                "La respiración rápida y superficial maximiza la ventilación alveolar, porque reduce el tiempo de tránsito en las vías de conducción y disminuye el volumen del espacio muerto fisiológico.",
                "La respiración rápida y superficial duplica el intercambio gaseoso alveolar, dado que el incremento de la frecuencia ventilatoria recluta alvéolos apicales previamente no ventilados.",
                "La respiración lenta y profunda logra mayor ventilación alveolar, porque en cada ciclo una proporción mucho menor del volumen corriente queda retenida en el espacio muerto anatómico."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "La ventilación alveolar efectiva es $\\dot{V}_A = (V_T - V_D) \\times f$. Como el espacio muerto anatómico ($V_D \\approx 150\\text{ mL}$) es fijo en cada respiración, aumentar el volumen corriente ($V_T$) y reducir la frecuencia ($f$) maximiza el aire fresco que alcanza los alvéolos."
        },
        {
            "id": "p7",
            "pregunta": "En la evaluación clínica de la barrera hematogaseosa, ¿por qué se utiliza monóxido de carbono ($CO$) para medir la capacidad de difusión pulmonar ($D_{LCO}$) a diferencia del óxido nitroso ($N_2O$)?",
            "opciones": [
                "El $CO$ posee tan alta afinidad por la hemoglobina que su presión parcial plasmática permanece casi nula, manteniendo un gradiente continuo limitado únicamente por la difusión de la membrana.",
                "El $CO$ presenta una solubilidad lipídica veinticuatro veces mayor que el oxígeno, saturando el plasma capilar en la primera décima de segundo y dependiendo exclusivamente del flujo sanguíneo.",
                "El $CO$ inhibe de manera irreversible la anhidrasa carbónica endotelial, impidiendo su combinación con el grupo hemo y haciendo que su captación dependa del gasto cardíaco del ventrículo derecho.",
                "El $CO$ atraviesa los poros intercelulares del epitelio alveolar por transporte activo secundario, de modo que la velocidad de transferencia está determinada por la presión venosa mixta."
            ],
            "respuesta": 0,
            "puntaje": 5,
            "explicacion": "El $CO$ se une con extrema avidez a la hemoglobina sin generar presión parcial disuelta significativa en el plasma capilar. Así, su transferencia no se equilibra durante el tránsito capilar (limitada por difusión), reflejando fielmente el área y el grosor de la membrana alvéolo-capilar."
        },
        {
            "id": "p8",
            "pregunta": "¿Qué papel desempeña el 2,3-bisfosfoglicerato (2,3-BPG) en la regulación alostérica de la hemoglobina adulta ($\\text{HbA}$) y por qué la hemoglobina fetal ($\\text{HbF}$) presenta una curva desplazada hacia la izquierda?",
            "opciones": [
                "El 2,3-BPG se une al grupo hemo de las cadenas $\\gamma$ de la $\\text{HbF}$ para reducir su afinidad por el oxígeno, desplazando su curva hacia la derecha respecto a la hemoglobina materna.",
                "La $\\text{HbF}$ posee cuatro subunidades $\\beta$ que fijan el 2,3-BPG con máxima afinidad, elevando su $P_{50}$ por encima de los $35\\text{ mmHg}$ para acelerar la descarga de oxígeno fetal.",
                "El 2,3-BPG estabiliza la forma desoxigenada de la $\\text{HbA}$ adulta favoreciendo la entrega tisular, mientras que la $\\text{HbF}$ liga menos 2,3-BPG y tiene mayor afinidad por el oxígeno.",
                "La disminución de 2,3-BPG durante la hipoxia de altura desplaza la curva de la $\\text{HbA}$ hacia la derecha, mientras que la $\\text{HbF}$ carece de efecto Bohr frente a cambios de pH fetal."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "El 2,3-BPG se aloja en la cavidad central entre las cadenas $\\beta$ de la desoxihemoglobina adulta, reduciendo su afinidad por el $O_2$ (desplazamiento a la derecha). La $\\text{HbF}$ ($\\alpha_2\\gamma_2$) une débilmente el 2,3-BPG, lo que mantiene alta su afinidad por el $O_2$ y facilita la transferencia placentaria."
        },
        {
            "id": "p9",
            "pregunta": "Respecto a la distribución cuantitativa del transporte de dióxido de carbono ($CO_2$) en la sangre venosa mixta que retorna desde los tejidos hacia los pulmones, ¿qué proporción corresponde a cada forma química?",
            "opciones": [
                "Cerca del setenta por ciento viaja unido directamente al hierro ferroso del grupo hemo, un veinte por ciento disuelto físicamente en el plasma y un diez por ciento como ion bicarbonato.",
                "Aproximadamente un setenta por ciento se transporta como bicarbonato plasmático, alrededor de un veinte por ciento como compuestos carbamínicos y cerca de un diez por ciento disuelto en plasma.",
                "Más del sesenta por ciento se transporta como ácido carbónico intacto dentro del eritrocito, un treinta por ciento unido a la albúmina sérica y un diez por ciento como monóxido de carbono.",
                "Alrededor del ochenta por ciento circula como carbaminohemoglobina en las arterias sistémicas, un quince por ciento disuelto en los lípidos de membrana y un cinco por ciento como bicarbonato."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "El $CO_2$ se transporta principalmente como ion bicarbonato ($HCO_3^-$, ~70%) gracias a la anhidrasa carbónica eritrocitaria; cerca del 20% se une a grupos amino terminales de proteínas formando carbaminohemoglobina, y un 7-10% viaja físicamente disuelto."
        },
        {
            "id": "p10",
            "pregunta": "De acuerdo con el modelo hidrostático de las zonas de West en el pulmón vertical en bipedestación, ¿qué diferencia hemodinámica distingue a la zona 2 respecto a la zona 3 basal?",
            "opciones": [
                "En la zona 2 la presión venosa supera a la presión alveolar ($P_v > P_A$), mientras que en la zona 3 la presión alveolar excede a la arterial provocando el colapso completo de los capilares.",
                "En la zona 2 el flujo sanguíneo depende de la diferencia arteriovenosa ($P_a - P_v$), mientras que en la zona 3 la resistencia vascular aumenta debido al estrechamiento capilar gravitacional.",
                "En la zona 2 el flujo está determinado por el gradiente arterial-alveolar ($P_a - P_A$), mientras que en la zona 3 ambas presiones vasculares superan a la alveolar ($P_a > P_v > P_A$).",
                "En la zona 2 predomina la vasodilatación hipóxica por baja ventilación apical, mientras que en la zona 3 el reclutamiento capilar se detiene porque la presión alveolar supera la venosa."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "En la zona 2 ($P_a > P_A > P_v$), la presión alveolar comprime el extremo venoso del capilar (efecto cascada o resistencia de Starling), por lo que el flujo depende de $P_a - P_A$. En la zona 3 ($P_a > P_v > P_A$), los capilares están distendidos y el flujo depende de $P_a - P_v$."
        }
    ]
},
{
    idExamen: "e3",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "Durante el paso del aire inspirado a través de las vías aéreas superiores de conducción hasta alcanzar la tráquea, ¿cómo se modifica la composición parcial de los gases inspirados debido al acondicionamiento mucoso?",
            "opciones": [
                "El aire se satura completamente con vapor de agua a temperatura corporal ($P_{H_2O} = 47\\text{ mmHg}$), lo que diluye los demás gases y reduce la $PO_2$ inspirada desde $159$ hasta $150\\text{ mmHg}$.",
                "La mucosa nasal absorbe selectivamente nitrógeno atmosférico para concentrar el oxígeno alveolar, elevando la presión parcial inspirada de oxígeno por encima de los $165\\text{ mmHg}$.",
                "El enfriamiento progresivo del gas en la laringe disminuye la presión de vapor de agua a $15\\text{ mmHg}$, incrementando la fracción molar de dióxido de carbono antes de llegar a los bronquios.",
                "La secreción seromucosa neutraliza la presión barométrica total en la faringe, manteniendo inalterada la $PO_2$ traqueal en $159\\text{ mmHg}$ independientemente de la temperatura ambiental."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Al calentarse a $37^\\circ\\text{C}$ y humidificarse al $100\\%$ en las vías aéreas superiores, el aire adquiere una presión de vapor de agua ($P_{H_2O}$) de $47\\text{ mmHg}$. Así, a nivel del mar ($P_B = 760\\text{ mmHg}$), la presión parcial de oxígeno traqueal pasa a ser $0.21 \\times (760 - 47) \\approx 150\\text{ mmHg}$."
        },
        {
            "id": "p2",
            "pregunta": "En contraste con la ventilación tranquila en reposo, ¿qué grupos musculares se reclutan específicamente durante una inspiración máxima forzada y una espiración activa intensa?",
            "opciones": [
                "Los intercostales internos y el recto abdominal elevan el esternón en la inspiración forzada, mientras que los escalenos y el diafragma deprimen las costillas durante la espiración activa.",
                "Los esternocleidomastoideos y escalenos elevan la caja torácica en la inspiración forzada, mientras que los abdominales e intercostales internos la comprimen en la espiración activa.",
                "El diafragma y los intercostales externos se relajan activamente para expandir el vértice pulmonar, mientras que los serratos posteriores aumentan la presión pleural en la espiración.",
                "Los músculos transversos del abdomen descienden el centro frénico durante la inspiración máxima, mientras que los esternocleidomastoideos reducen el diámetro anteroposterior torácico."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "En reposo, la inspiración depende del diafragma y los intercostales externos, y la espiración es pasiva. En la ventilación forzada, los escalenos y esternocleidomastoideos elevan las costillas y el esternón al inspirar, mientras que los músculos abdominales e intercostales internos aumentan la presión intraabdominal e intrapleural al espirar."
        },
        {
            "id": "p3",
            "pregunta": "Al analizar el trabajo mecánico de la respiración (componente elástico frente a componente resistivo), ¿qué patrón ventilatorio adopta espontáneamente un paciente para minimizar el gasto energético?",
            "opciones": [
                "Ante una disminución de la distensibilidad pulmonar adopta respiraciones rápidas y superficiales, mientras que frente a un aumento de resistencia aérea adopta respiraciones lentas y profundas.",
                "Ante una fibrosis intersticial adopta respiraciones muy lentas y profundas para reducir el trabajo elástico, mientras que en el asma aguda hiperventila con volúmenes corrientes mínimos.",
                "Ante un aumento de la resistencia de la vía aérea incrementa la frecuencia respiratoria para reducir el flujo turbulento, mientras que en la fibrosis aumenta el volumen corriente basal.",
                "En ambos trastornos el centro respiratorio duplica simultáneamente la frecuencia y el volumen corriente, dado que el trabajo elástico y el resistivo disminuyen al elevar el flujo aéreo."
            ],
            "respuesta": 0,
            "puntaje": 5,
            "explicacion": "El trabajo elástico aumenta con el volumen corriente ($V_T$), por lo que pacientes con pulmones rígidos (baja distensibilidad) respiran rápido y superficialmente. Por el contrario, el trabajo resistivo aumenta con la velocidad de flujo, llevando a pacientes con obstrucción bronquial a respirar lento y profundo."
        },
        {
            "id": "p4",
            "pregunta": "De acuerdo con la ecuación del gas alveolar ($P_AO_2 = P_IO_2 - P_aCO_2 / R$), ¿qué ocurre con la presión parcial alveolar de oxígeno ($P_AO_2$) si un individuo hipoventila duplicando su $P_aCO_2$ arterial mientras respira aire ambiente?",
            "opciones": [
                "La $P_AO_2$ permanece constante en $100\\text{ mmHg}$, debido a que la vasoconstricción hipóxica compensa automáticamente la acumulación alveolar de dióxido de carbono sin alterar el gradiente.",
                "La $P_AO_2$ aumenta proporcionalmente al incremento de la $P_aCO_2$, puesto que la mayor acidez intraluminal desplaza el oxígeno unido al surfactante hacia el espacio aéreo alveolar.",
                "La $P_AO_2$ desciende de forma marcada, ya que el aumento de la $P_aCO_2$ alveolar desplaza al oxígeno según el cociente respiratorio ($R$), provocando hipoxemia por hipoventilación.",
                "La $P_AO_2$ se iguala con la presión venosa mixta de $40\\text{ mmHg}$ únicamente si el cociente respiratorio supera el valor de $1.5$, manteniéndose inalterada cuando $R$ equivale a $0.8$."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "Según la ecuación del gas alveolar ($P_AO_2 = P_IO_2 - \\frac{P_aCO_2}{R}$), si $P_aCO_2$ sube de $40$ a $80\\text{ mmHg}$ con $R = 0.8$ y $P_IO_2 = 150\\text{ mmHg}$, la $P_AO_2$ cae de $100\\text{ mmHg}$ a $150 - (80 / 0.8) = 50\\text{ mmHg}$, causando hipoxemia con gradiente alvéolo-arterial ($A-a$) normal."
        },
        {
            "id": "p5",
            "pregunta": "¿Por qué el intercambio alveolar de oxígeno, que en reposo está limitado por la perfusión, puede volverse parcialmente limitado por la difusión durante el ejercicio físico extenuante o en la fibrosis pulmonar?",
            "opciones": [
                "Porque la disminución del gasto cardíaco prolonga el tiempo de tránsito capilar por encima de dos segundos, saturando prematuramente la hemoglobina antes de alcanzar el extremo venoso.",
                "Porque la anhidrasa carbónica endotelial se inactiva por el aumento de temperatura corporal, bloqueando la disociación del ácido carbónico y reduciendo el gradiente difusional de $O_2$.",
                "Porque la dilatación máxima de los capilares apicales aumenta la distancia radial entre eritrocitos, anulando el efecto Bohr y reduciendo la solubilidad plasmática del oxígeno disuelto.",
                "Porque el acortamiento del tiempo de tránsito capilar a unos $0.25\\text{ s}$ o el engrosamiento de la barrera impiden que la $PO_2$ capilar alcance el equilibrio con la $PO_2$ alveolar."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "Durante el ejercicio intenso, el gasto cardíaco aumenta y el tiempo que el eritrocito permanece en el capilar pulmonar cae de $0.75\\text{ s}$ a cerca de $0.25\\text{ s}$. Si además existe engrosamiento de la membrana (fibrosis), el tiempo disponible no basta para equilibrar la $PO_2$ capilar con la alveolar."
        },
        {
            "id": "p6",
            "pregunta": "En un paciente con anemia ferropénica severa ($[\\text{Hb}] = 7\\text{ g/dL}$) sin enfermedad pulmonar, ¿cómo se encuentran su presión parcial arterial de oxígeno ($P_aO_2$), su saturación ($S_aO_2$) y su contenido arterial total de $O_2$ ($C_aO_2$)?",
            "opciones": [
                "Tanto la $P_aO_2$ como el porcentaje de saturación de la hemoglobina disponible son normales, pero el contenido arterial total de $O_2$ ($C_aO_2$) se encuentra reducido casi a la mitad.",
                "La $P_aO_2$ desciende por debajo de $55\\text{ mmHg}$ debido a la menor capacidad transportadora del plasma, aunque el contenido arterial total de $O_2$ se mantiene normal por compensación.",
                "El porcentaje de saturación de la hemoglobina cae por debajo del sesenta por ciento, mientras que la $P_aO_2$ se eleva compensatoriamente por encima de $130\\text{ mmHg}$ en sangre arterial.",
                "Tanto la $P_aO_2$ como el contenido arterial total de $O_2$ permanecen normales, porque la fracción de oxígeno físicamente disuelto en el plasma aumenta diez veces para suplir a la globina."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "La $P_aO_2$ depende del intercambio alvéolo-capilar (normal en la anemia, ~100 mmHg), y a esa presión la hemoglobina presente se satura normalmente (~97-98%). Sin embargo, como $C_aO_2 = (1.34 \\times [\\text{Hb}] \\times S_aO_2) + (0.003 \\times P_aO_2)$, al caer $[\\text{Hb}]$ a la mitad, el contenido total de $O_2$ cae proporcionalmente."
        },
        {
            "id": "p7",
            "pregunta": "Al comparar la curva de disociación de la mioglobina muscular con la de la hemoglobina adulta, ¿qué característica estructural y funcional permite a la mioglobina actuar como reserva de oxígeno en el músculo esquelético?",
            "opciones": [
                "Presenta una curva sigmoidea con alta cooperatividad entre cuatro cadenas polipeptídicas, liberando oxígeno rápidamente cuando la $PO_2$ tisular desciende por debajo de los $40\\text{ mmHg}$.",
                "Posee una curva desplazada hacia la derecha respecto a la hemoglobina ($P_{50} \\approx 45\\text{ mmHg}$), lo que facilita la captación directa de oxígeno desde los capilares en reposo.",
                "Es una proteína monomérica con curva hiperbólica y $P_{50}$ muy baja (cercana a $3\\text{ mmHg}$), reteniendo oxígeno hasta que la contracción muscular reduce drásticamente la $PO_2$ local.",
                "Su afinidad por el oxígeno disminuye intensamente ante el descenso del pH intracelular por efecto Bohr, transfiriendo oxígeno hacia la hemoglobina capilar durante la fase de relajación."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "La mioglobina consta de una sola subunidad proteica con un grupo hemo, por lo que carece de cooperatividad y muestra una curva hiperbólica muy desplazada a la izquierda ($P_{50} \\approx 2.5 - 5\\text{ mmHg}$). Solo libera su $O_2$ cuando la $PO_2$ intracelular cae a niveles muy bajos durante la contracción intensa."
        },
        {
            "id": "p8",
            "pregunta": "¿Por qué la administración de oxígeno al $100\\%$ ($F_IO_2 = 1.0$) corrige eficazmente la hipoxemia causada por hipoventilación o alteraciones de la difusión, pero resulta poco efectiva frente a un cortocircuito (shunt) intrapulmonar verdadero?",
            "opciones": [
                "Porque el oxígeno puro provoca vasoconstricción refleja en los alvéolos bien ventilados, desviando todo el flujo sanguíneo hacia las unidades parenquimatosas que carecen de ventilación.",
                "Porque la sangre que atraviesa regiones perfundidas pero no ventiladas ($V/Q = 0$) no contacta con el gas alveolar enriquecido, y la sangre de alvéolos sanos ya estaba casi saturada.",
                "Porque las altas concentraciones de oxígeno inspirado inactivan el surfactante pulmonar en minutos, colapsando los alvéolos sanos y convirtiendo todo el pulmón en espacio muerto.",
                "Porque el oxígeno al cien por ciento bloquea la formación de oxihemoglobina por inhibición alostérica, impidiendo que el exceso de $PO_2$ alveolar incremente el oxígeno disuelto."
            ],
            "respuesta": 1,
            "puntaje": 5,
            "explicacion": "En un cortocircuito verdadero ($V/Q = 0$), la sangre venosa mixta pasa al lado arterial sin pasar por alvéolos ventilados. En las unidades sanas, la hemoglobina ya está saturada al ~98% con aire ambiente, por lo que dar $O_2$ al $100\\%$ apenas añade una mínima cantidad de $O_2$ disuelto insuficiente para compensar la mezcla venosa."
        },
        {
            "id": "p9",
            "pregunta": "En los capilares de los tejidos periféricos, el dióxido de carbono difunde desde las células hacia la sangre con un gradiente de presión parcial de apenas $6\\text{ mmHg}$ ($46$ frente a $40\\text{ mmHg}$), mientras el oxígeno requiere unos $60\\text{ mmHg}$. ¿A qué se debe esta diferencia?",
            "opciones": [
                "A que el endotelio de los capilares sistémicos posee canales proteicos activos acoplados a ATPasas que bombean el $CO_2$ intracelular hacia el plasma contra su gradiente electroquímico.",
                "A que el peso molecular del dióxido de carbono es cuatro veces menor que el del oxígeno molecular, acelerando su velocidad de difusión térmica según la ley de Graham en el intersticio.",
                "A que la presión hidrostática intersticial supera ampliamente la presión oncótica capilar, arrastrando el $CO_2$ por flujo masivo de solvente desde las mitocondrias hacia la luz vascular.",
                "A que el $CO_2$ es cerca de veinte veces más soluble en los medios acuosos y tejidos que el oxígeno, otorgándole un coeficiente de difusión mucho mayor a través de las membranas celulares."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "De acuerdo con la ley de Fick, la velocidad de difusión es proporcional a la solubilidad del gas e inversamente proporcional a la raíz cuadrada de su peso molecular. Aunque el $CO_2$ es ligeramente más pesado que el $O_2$, su solubilidad es ~24 veces mayor, logrando una difusibilidad ~20 veces superior."
        },
        {
            "id": "p10",
            "pregunta": "En la simulación de PhysioEx sobre volúmenes y capacidades pulmonares durante el ejercicio aeróbico moderado, ¿cómo se redistribuyen los volúmenes dinámicos respecto a los valores de reposo?",
            "opciones": [
                "La Capacidad Pulmonar Total ($CPT$) y la Capacidad Vital ($CV$) se duplican por reclutamiento de alvéolos apicales, mientras que el Volumen Residual ($VR$) disminuye hasta casi cero.",
                "El Volumen Corriente ($VT$) disminuye para evitar la fatiga diafragmática, compensándose mediante un incremento de tres veces en el Volumen de Reserva Inspiratoria ($VRI$) basal.",
                "El Volumen Corriente ($VT$) aumenta a expensas de reducir tanto el Volumen de Reserva Inspiratoria ($VRI$) como el Espiratoria ($VRE$), manteniendo constante la Capacidad Vital ($CV$).",
                "El Volumen de Reserva Espiratoria ($VRE$) aumenta progresivamente durante el ejercicio intenso, desplazando el nivel de Capacidad Residual Funcional ($CRF$) por encima de la $CV$."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "Durante el ejercicio, las dimensiones anatómicas máximas del tórax no cambian, por lo que la Capacidad Vital ($CV$) y la Capacidad Pulmonar Total ($CPT$) permanecen prácticamente constantes. Para aumentar la ventilación, el Volumen Corriente ($VT$) crece invadiendo tanto el $VRI$ como el $VRE$."
        }
    ]
},
{
    idExamen: "e4",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "Respecto a la organización histológica de las vías aéreas de conducción desde la tráquea hasta los bronquíolos terminales, ¿qué cambio estructural ocurre conforme disminuye su calibre?",
            "opciones": [
                "Desaparecen progresivamente las placas de cartílago y las glándulas submucosas, disminuyen las células caliciformes y el epitelio pasa de cilíndrico ciliado a cúbico simple.",
                "Aumentan los anillos cartilaginosos completos para resistir la presión positiva intratorácica, mientras el epitelio escamoso estratificado reemplaza a las células ciliadas.",
                "Se incrementa la densidad de glándulas mucosas submucosales y células caliciformes en los bronquíolos terminales, protegiendo al epitelio alveolar frente a partículas inhaladas.",
                "El músculo liso bronquial desaparece completamente a nivel de los bronquíolos lobulillares, siendo sustituido por fibras de colágeno rígido que fijan el diámetro luminal."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "A medida que el árbol bronquial se ramifica hacia los bronquíolos terminales, el cartílago de sostén, las glándulas submucosas y las células caliciformes desaparecen para evitar que el moco obstruya las vías pequeñas, mientras el epitelio se adelgaza a cúbico simple con células club (Clara) y predominio relativo de músculo liso."
        },
        {
            "id": "p2",
            "pregunta": "Si una herida penetrante comunica el espacio pleural con la atmósfera (neumotórax abierto), ¿qué sucede con las presiones y los volúmenes del pulmón y la pared torácica afectados?",
            "opciones": [
                "La presión intrapleural desciende a valores fuertemente negativos, aumentando la presión transpulmonar hasta expandir el pulmón al máximo de su capacidad pulmonar total.",
                "La presión intrapleural se iguala con la atmosférica anulando la presión transpulmonar, por lo que el pulmón colapsa por su retroceso elástico y el tórax se expande.",
                "La presión transpulmonar se duplica al igualarse las presiones alveolar e intrapleural, provocando que tanto el pulmón como la caja torácica reduzcan su volumen basal.",
                "El pulmón se mantiene distendido gracias a la tensión superficial del líquido pleural, mientras la pared torácica se retrae hacia adentro por acción de los intercostales."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "En condiciones normales, la presión intrapleural negativa mantiene acoplados el pulmón y la pared torácica. Al entrar aire al espacio pleural, $P_{pl}$ sube a $0\\text{ cmH}_2\\text{O}$ (igual a la atmosférica), la presión transpulmonar ($P_{tp} = P_{alv} - P_{pl}$) cae a cero, el pulmón colapsa hacia su volumen mínimo y el tórax se expande hacia afuera."
        },
        {
            "id": "p3",
            "pregunta": "En un paciente con enfisema pulmonar avanzado debido a la destrucción de las fibras elásticas parenquimatosas, ¿cómo se altera la curva estática de presión-volumen del pulmón?",
            "opciones": [
                "La curva se desplaza hacia abajo y hacia la derecha, indicando una disminución de la distensibilidad pulmonar y una reducción marcada de la Capacidad Residual Funcional.",
                "La pendiente de la curva disminuye a volúmenes altos y bajos, reflejando un aumento del retroceso elástico pulmonar que exige mayores presiones para lograr inspirar.",
                "La curva se desplaza hacia arriba y hacia la izquierda con mayor pendiente, evidenciando un aumento de la distensibilidad y una reducción del retroceso elástico pulmonar.",
                "La curva mantiene su pendiente basal pero aumenta la histéresis espiratoria, debido a que la pérdida de elastina incrementa la tensión superficial de los alvéolos."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "La destrucción de las fibras de elastina en el enfisema reduce la fuerza de retroceso elástico del pulmón, haciéndolo excesivamente fácil de distender (alta compliance). Como resultado, la curva presión-volumen se desplaza hacia arriba y a la izquierda, y el nuevo equilibrio toracopulmonar ocurre a una Capacidad Residual Funcional más elevada."
        },
        {
            "id": "p4",
            "pregunta": "En la fisiología del flujo aéreo respiratorio, ¿en qué región predomina el flujo turbulento y qué relación matemática guarda con la diferencia de presión ($\\Delta P$) necesaria para generarlo?",
            "opciones": [
                "Predomina en los bronquíolos respiratorios periféricos por su escaso diámetro, donde la diferencia de presión es directamente proporcional a la viscosidad del gas inspirado.",
                "Predomina en los sacos alveolares durante la respiración basal tranquila, donde la resistencia depende inversamente de la densidad del gas según la ley de Poiseuille.",
                "Predomina en la zona de intercambio hematogaseoso por el elevado número de bifurcaciones, manteniendo una relación lineal entre el flujo y el gradiente de presión.",
                "Predomina en la tráquea y grandes bronquios por su alta velocidad y radio, haciendo que el gradiente de presión aumente con el cuadrado del flujo ($\\Delta P \\propto \\dot{V}^2$)."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "Según el número de Reynolds ($N_R = 2rv\\rho / \\eta$), las altas velocidades lineales y el mayor radio en la tráquea y bronquios principales favorecen el flujo turbulento. A diferencia del flujo laminar periférico ($\\Delta P = \\dot{V} \\cdot R$), en el flujo turbulento la presión motriz requerida es proporcional al cuadrado del flujo ($\\Delta P \\propto \\dot{V}^2$)."
        },
        {
            "id": "p5",
            "pregunta": "En el módulo de mecánica respiratoria de PhysioEx, si el radio del tubo conductor de aire se reduce exactamente a la mitad simulando una broncoconstricción, ¿cómo varía la resistencia y el flujo?",
            "opciones": [
                "La resistencia al flujo aéreo aumenta dieciséis veces ($2^4$) según la ley de Poiseuille, provocando una caída drástica tanto del flujo aéreo como del volumen corriente.",
                "La resistencia al flujo aéreo se duplica de manera lineal al disminuir el calibre luminal, reduciendo el volumen corriente exactamente a la mitad del valor basal previo.",
                "La resistencia aumenta cuatro veces debido al incremento de la longitud efectiva de la vía aérea, lo que se compensa automáticamente elevando la presión barométrica.",
                "La resistencia disminuye a la dieciseisava parte al acelerarse el flujo laminar central, incrementando el volumen de reserva espiratoria durante cada ciclo ventilatorio."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "De acuerdo con la ecuación de Poiseuille ($R = \\frac{8\\eta l}{\\pi r^4}$), la resistencia es inversamente proporcional a la cuarta potencia del radio. Al disminuir el radio a la mitad ($r/2$), el denominador se reduce por un factor de $(1/2)^4 = 1/16$, lo que multiplica la resistencia por $16$ y reduce severamente el flujo ventilatorio."
        },
        {
            "id": "p6",
            "pregunta": "Durante el ejercicio físico intenso, el gasto cardíaco puede triplicarse sin que la presión arterial pulmonar aumente peligrosamente. ¿Qué mecanismos vasculares explican esta baja resistencia?",
            "opciones": [
                "La vasoconstricción arteriolar generalizada mediada por receptores alfa-adrenérgicos acelera la velocidad de tránsito capilar sin modificar el área transversal vascular.",
                "El aumento de la presión intrapleural comprime los vasos extraalveolares basales, redirigiendo la sangre hacia arterias bronquiales de alta capacitancia y baja presión.",
                "El reclutamiento de capilares previamente cerrados y la distensión pasiva de los capilares ya abiertos incrementan el área transversal total y reducen la resistencia.",
                "La liberación masiva de endotelina-1 desde el endotelio alveolar dilata las venas pulmonares principales, anulando la resistencia hidrostática de las zonas apicales."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "Los vasos pulmonares poseen paredes delgadas con escaso músculo liso y responden pasivamente a los cambios de presión transmural. Al elevarse el gasto cardíaco, se abren capilares previamente colapsados (reclutamiento, sobre todo en zonas superiores) y se ensanchan los ya perfundidos (distensión), reduciendo la resistencia vascular pulmonar."
        },
        {
            "id": "p7",
            "pregunta": "En un adulto joven sano respirando aire ambiente a nivel del mar, la $PO_2$ arterial sistémica ($\\approx 95\\text{ mmHg}$) es ligeramente inferior a la $PO_2$ alveolar ideal ($\\approx 100\\text{ mmHg}$). ¿Cuál es la causa fisiológica?",
            "opciones": [
                "El consumo metabólico de oxígeno por parte de los neumocitos tipo I y el endotelio capilar absorbe el cinco por ciento del gas antes de que alcance la aurícula izquierda.",
                "La mezcla de sangre venosa procedente de las venas bronquiales y de Tebesio (cortocircuito fisiológico) junto con leves desigualdades regionales en el cociente $V/Q$.",
                "La barrera hematogaseosa es parcialmente impermeable al oxígeno en condiciones basales, impidiendo que la sangre capilar alcance el equilibrio con el gas alveolar.",
                "La unión reversible del oxígeno con las proteínas plasmáticas circulantes reduce la fracción de gas físicamente disuelto entre las venas pulmonares y la aorta."
            ],
            "respuesta": 1,
            "puntaje": 5,
            "explicacion": "La diferencia alvéolo-arterial de oxígeno ($P_{(A-a)}O_2$ normal de $5\\text{ a }15\\text{ mmHg}$) se debe principalmente a la admisión venosa anatómica (sangre desoxigenada de las venas bronquiales y coronarias de Tebesio que drena directo en la circulación izquierda) y a la ligera desigualdad gravitacional de la relación $V/Q$ entre ápice y base."
        },
        {
            "id": "p8",
            "pregunta": "¿Por qué la intoxicación aguda por monóxido de carbono ($CO$) produce una hipoxia tisular grave a pesar de que la presión parcial arterial de oxígeno ($P_aO_2$) se mantiene normal?",
            "opciones": [
                "Porque el $CO$ bloquea los quimiorreceptores carotídeos e inhibe la anhidrasa carbónica, reduciendo la ventilación alveolar y desplazando la curva de hemoglobina a la derecha.",
                "Porque el $CO$ oxida todos los grupos hemo a metahemoglobina y disminuye la solubilidad plasmática del oxígeno, provocando una caída severa de la $P_aO_2$ disuelta.",
                "Porque el $CO$ destruye el surfactante pulmonar y engrosa la membrana alvéolo-capilar, generando un cortocircuito intrapulmonar que impide la oxigenación arterial.",
                "Porque el $CO$ desplaza al $O_2$ de la hemoglobina y aumenta la afinidad de los sitios restantes por el $O_2$ (desviación a la izquierda), impidiendo su cesión tisular."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "El $CO$ tiene una afinidad por la hemoglobina más de $200$ veces superior a la del $O_2$, formando carboxihemoglobina y reduciendo la capacidad de transporte. Además, estabiliza la conformación de alta afinidad (R) en las subunidades libres restantes, desplazando la curva hacia la izquierda e impidiendo que el $O_2$ se libere en los tejidos, aunque la $P_aO_2$ disuelta siga normal."
        },
        {
            "id": "p9",
            "pregunta": "Respecto a la fracción de dióxido de carbono transportada en forma de compuestos carbamínicos desde los tejidos hacia los pulmones, ¿qué mecanismo molecular facilita su formación?",
            "opciones": [
                "El $CO_2$ reacciona directamente con los grupos amino terminales de la globina sin requerir enzimas, viéndose favorecido cuando la hemoglobina libera $O_2$ en los tejidos.",
                "La enzima anhidrasa carbónica plasmática cataliza la unión covalente del ácido carbónico al átomo de hierro ferroso del grupo hemo en los capilares sistémicos.",
                "El ion bicarbonato ingresa al eritrocito mediante transporte activo primario y se acopla a las cadenas laterales de histidina de la oxihemoglobina completamente saturada.",
                "El descenso de la temperatura en los tejidos metabólicamente activos estabiliza la conformación relajada de la hemoglobina, aumentando su capacidad para fijar $CO_2$."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Cerca del $20\\%$ del $CO_2$ sanguíneo viaja unido directamente a los grupos amino terminales ($-\\text{NH}_2$) de las cadenas proteicas (principalmente la globina, formando carbaminohemoglobina). Esta reacción no necesita enzimas y se acelera en los tejidos porque la desoxihemoglobina tiene mucha mayor afinidad por el $CO_2$ que la oxihemoglobina."
        },
        {
            "id": "p10",
            "pregunta": "En el intercambio gaseoso a nivel de los tejidos y órganos blancos, ¿qué factores determinan la presión parcial de oxígeno ($PO_2$) intracelular disponible para las mitocondrias?",
            "opciones": [
                "Depende exclusivamente de la presión barométrica ambiental y de la concentración de bicarbonato plasmático, manteniéndose constante en $40\\text{ mmHg}$ dentro de la célula.",
                "Está regulada únicamente por el transporte activo de oxígeno a través del sarcolema, siendo independiente de la distancia entre el capilar y la fibra metabólica.",
                "Resulta del equilibrio entre el aporte capilar (flujo sanguíneo y contenido de $O_2$), la distancia de difusión intercapilar y la tasa de consumo metabólico celular.",
                "Varía de forma inversamente proporcional a la densidad capilar tisular, de modo que los órganos con menor irrigación mantienen las presiones mitocondriales más altas."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "En los tejidos periféricos, el oxígeno difunde pasivamente desde los capilares ($PO_2$ inicial $\\approx 95\\text{ mmHg}$ hacia $40\\text{ mmHg}$ venoso) hasta las mitocondrias ($PO_2$ de $1\\text{ a }5\\text{ mmHg}$). La tensión tisular final depende del balance entre la oferta convectiva (flujo $\\times C_aO_2$), la densidad capilar (distancia de difusión) y el consumo metabólico ($\\dot{V}O_2$)."
        }
    ]
},
{
    idExamen: "e5",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "En relación con la microarquitectura de la zona respiratoria distal, ¿qué papel cumplen los poros de Kohn y los canales de Lambert ante la obstrucción de un bronquíolo terminal?",
            "opciones": [
                "Los poros alveolares de Kohn y los canales de Lambert comunican unidades adyacentes, permitiendo la ventilación colateral de alvéolos cuya vía aérea conductora sufre obstrucción.",
                "Los esfínteres precapilares bronquiales y las válvulas linfáticas septales redistribuyen el surfactante, evitando el colapso de los bronquíolos terminales durante la inspiración.",
                "Las uniones estrechas del epitelio escamoso y los puentes de elastina interlobulillares bloquean el paso lateral de aire, aislando cada acino pulmonar frente a cambios de presión.",
                "Los tabiques interalveolares cartilaginosos y las glándulas seromucosas periféricas drenan el exceso de plasma intersticial, impidiendo la difusión directa de gases entre acinos."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Los poros de Kohn (comunicaciones interalveolares) y los canales de Lambert (conexiones entre bronquíolos preterminales y alvéolos adyacentes) proporcionan vías de ventilación colateral que permiten airear unidades distales a una obstrucción bronquiolar, previniendo la atelectasia."
        },
        {
            "id": "p2",
            "pregunta": "Dado que la distensibilidad total del sistema respiratorio resulta de la combinación en serie del pulmón y la caja torácica ($1/C_{total} = 1/C_L + 1/C_{cw}$), ¿qué ocurre en la obesidad mórbida o cifoescoliosis severa?",
            "opciones": [
                "Aumenta la distensibilidad de la caja torácica y el pulmón se expande en reposo, desplazando el equilibrio mecánico hacia una Capacidad Residual Funcional anormalmente elevada.",
                "Disminuye la distensibilidad de la pared torácica por sobrecarga mecánica, desplazando el equilibrio toracopulmonar hacia una Capacidad Residual Funcional significativamente menor.",
                "Incrementa el retroceso elástico del diafragma durante la espiración pasiva, elevando la presión transpulmonar en reposo y duplicando el Volumen de Reserva Espiratoria del sujeto.",
                "Reduce la tensión superficial alveolar al comprimir los neumocitos tipo II, manteniendo inalterada la Capacidad Residual Funcional a expensas de elevar el Volumen Corriente basal."
            ],
            "respuesta": 1,
            "puntaje": 5,
            "explicacion": "Cuando aumenta la rigidez o el peso de la pared torácica (obesidad extrema, cifoescoliosis), cae su distensibilidad ($C_{cw}$). Esto reduce la fuerza expansiva hacia afuera de la caja torácica y desplaza el punto de equilibrio en reposo hacia una Capacidad Residual Funcional ($CRF$) disminuida."
        },
        {
            "id": "p3",
            "pregunta": "La resistencia vascular pulmonar describe una curva en forma de 'U' respecto al volumen pulmonar, alcanzando su valor mínimo cerca de la $CRF$. ¿Qué fenómeno explica esta curva?",
            "opciones": [
                "Al inspirar hacia la Capacidad Pulmonar Total, ambos tipos vasculares se dilatan simultáneamente por el descenso de la presión intrapleural, reduciendo la resistencia al mínimo.",
                "Al espirar hacia el Volumen Residual, la tracción radial del parénquima ensancha los vasos extraalveolares mientras los capilares alveolares se distienden por aumento de presión.",
                "A volúmenes altos se comprimen los capilares alveolares por estiramiento y se dilatan los vasos extraalveolares por tracción radial, logrando resistencia mínima cerca de la CRF.",
                "La resistencia vascular pulmonar permanece constante en todo el rango de volúmenes, porque la vasoconstricción hipóxica compensa los cambios de presión transmural extravascular."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "Los vasos pulmonares se dividen en alveolares (comprimidos cuando los alvéolos se distienden a volúmenes altos) y extraalveolares (traccionados y abiertos por el parénquima circundante al expandirse el pulmón). A volumen residual los extraalveolares se estrechan, y a capacidad pulmonar total se estiran los alveolares; el mínimo de resistencia ocurre en la $CRF$."
        },
        {
            "id": "p4",
            "pregunta": "Durante la espiración forzada en un paciente con enfisema pulmonar, ¿por qué se produce un colapso prematuro de las vías aéreas periféricas que explica la utilidad de respirar con los labios fruncidos?",
            "opciones": [
                "Porque la pérdida de elastina eleva el retroceso elástico alveolar, desplazando el punto de igual presión hacia la tráquea donde los anillos cartilaginosos amplifican el flujo.",
                "Porque la hipertrofia del músculo liso bronquial fija el calibre de las vías pequeñas, impidiendo que la presión intrapleural positiva modifique la resistencia espiratoria total.",
                "Porque el aumento de surfactante en los alvéolos enfisematosos reduce la presión intraluminal bronquial, acelerando el vaciado rápido de las bases pulmonares durante el esfuerzo.",
                "Porque el menor retroceso elástico reduce la presión de empuje alveolar, desplazando el punto de igual presión hacia bronquíolos sin cartílago que colapsan precozmente al espirar."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "En el enfisema, la pérdida de fibras elásticas reduce la presión de retracción alveolar, por lo que la presión intraluminal cae rápidamente a lo largo de la vía aérea y el punto de igual presión ($PIP$) migra hacia bronquíolos distales desprovistos de cartílago. Fruncir los labios añade resistencia en la boca y eleva la presión intraluminal para mantener abiertas las vías."
        },
        {
            "id": "p5",
            "pregunta": "En las simulaciones espirométricas de PhysioEx, ¿cómo se distinguen los resultados de un ataque asmático agudo tras administrar un inhalador $\\beta_2$-adrenérgico frente a un trastorno restrictivo?",
            "opciones": [
                "En el asma agudo caen tanto la $CVF$ como el $VEF_1$ con índice $VEF_1/CVF < 70\\%$, y tras aplicar un agonista $\\beta_2$ aumenta el radio bronquial elevando significativamente el $VEF_1$.",
                "En el asma agudo aumenta el índice $VEF_1/CVF$ por encima del noventa por ciento, y la administración de un agonista $\\beta_2$ reduce el Volumen Corriente al relajar el diafragma.",
                "En la fibrosis restrictiva el índice $VEF_1/CVF$ desciende bajo el cincuenta por ciento, y el agonista $\\beta_2$ normaliza la Capacidad Vital Forzada al degradar el colágeno septal.",
                "En ambos trastornos la administración de un agonista $\\beta_2$ duplica el Volumen Residual, debido a que la relajación del músculo liso colapsa los bronquios segmentarios centrales."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "En el asma agudo, la broncoconstricción reduce drásticamente el flujo espiratorio ($VEF_1$) más que la $CVF$, bajando el índice $VEF_1/CVF$ por debajo del $70\\%$. La estimulación $\\beta_2$-adrenérgica relaja el músculo liso bronquial, aumenta el radio y mejora notablemente el $VEF_1$ (reversibilidad)."
        },
        {
            "id": "p6",
            "pregunta": "Respecto a la determinación de volúmenes y ventilación en PhysioEx, ¿qué efecto provoca respirar a través de un tubo externo largo y cómo se mide la Capacidad Residual Funcional ($CRF$)?",
            "opciones": [
                "La adición de espacio muerto externo incrementa la ventilación alveolar neta al elevar la presión intratraqueal, mientras la dilución de helio mide directamente el Volumen Corriente.",
                "La adición de espacio muerto externo disminuye el espacio muerto anatómico por broncodilatación refleja, y la dilución de helio determina exclusivamente el Volumen de Reserva Espiratoria.",
                "La adición de espacio muerto externo reduce la ventilación alveolar si no aumenta el volumen corriente, y la dilución de helio permite calcular la Capacidad Residual Funcional.",
                "La adición de espacio muerto externo no altera el intercambio gaseoso alveolar en reposo, y la dilución de helio requiere que el gas indicador difunda rápidamente hacia los capilares."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "Un tubo externo aumenta el espacio muerto anatómico ($V_D$), disminuyendo el aire fresco que llega a los alvéolos ($\\dot{V}_A = (V_T - V_D) \\times f$) a menos que se compense elevando el volumen corriente. Por otra parte, la $CRF$ se mide indirectamente mediante dilución de un gas insoluble como el helio ($C_1 V_1 = C_2 (V_1 + CRF)$)."
        },
        {
            "id": "p7",
            "pregunta": "Mientras el aire traqueal humidificado posee una $PO_2$ de $150\\text{ mmHg}$ y una $PCO_2$ casi nula, el gas alveolar mantiene una $P_AO_2 \\approx 100\\text{ mmHg}$ y $P_ACO_2 \\approx 40\\text{ mmHg}$. ¿A qué responde esta diferencia?",
            "opciones": [
                "Porque el nitrógeno atmosférico es consumido activamente por el epitelio alveolar, elevando la presión parcial de oxígeno en el alvéolo por encima de la del aire traqueal húmedo.",
                "Porque en el alvéolo se extrae continuamente $O_2$ hacia la sangre capilar y se añade $CO_2$ venoso ($P_ACO_2 \\approx 40\\text{ mmHg}$), estableciendo un equilibrio estacionario dinámico.",
                "Porque la presión de vapor de agua alcanza los $100\\text{ mmHg}$ dentro de los sacos alveolares, desplazando al nitrógeno y reduciendo la presión barométrica total en la zona respiratoria.",
                "Porque la anhidrasa carbónica de los neumocitos tipo I convierte el oxígeno alveolar en bicarbonato, igualando las presiones parciales del alvéolo con las de la sangre venosa mixta."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "El gas alveolar no se renueva por completo en cada respiración, sino que se mezcla con el volumen de la $CRF$. En estado estacionario, la extracción continua de $O_2$ por la sangre capilar y la difusión constante de $CO_2$ desde la sangre venosa mixta fijan las presiones alveolares en torno a $100\\text{ mmHg}$ y $40\\text{ mmHg}$."
        },
        {
            "id": "p8",
            "pregunta": "¿Cuál es la base alostérica de la forma sigmoidea de la curva de disociación de la oxihemoglobina y qué ventaja fisiológica aporta su meseta superior por encima de $70\\text{ mmHg}$?",
            "opciones": [
                "La meseta superior ocurre por debajo de los $40\\text{ mmHg}$ de presión parcial de oxígeno, garantizando que la hemoglobina se sature al cien por ciento en los capilares venosos sistémicos.",
                "La unión del primer oxígeno estabiliza la conformación tensa de baja afinidad en las demás subunidades, haciendo que la saturación caiga linealmente ante cualquier descenso de $P_aO_2$.",
                "La curva hiperbólica de la hemoglobina adulta carece de interacciones alostéricas entre subunidades, por lo que su saturación depende exclusivamente de la concentración plasmática de cloro.",
                "La unión de la primera molécula de $O_2$ rompe enlaces iónicos estabilizando la forma relajada de alta afinidad, y la meseta superior protege la saturación ante caídas moderadas de $P_aO_2$."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "La unión cooperativa del primer $O_2$ al hierro del grupo hemo rompe puentes salinos entre las subunidades de globina, induciendo la transición del estado tenso ($T$) al estado relajado ($R$) de alta afinidad. La porción plana superior (entre $70$ y $100\\text{ mmHg}$) asegura que la saturación arterial siga sobre el $90\\%$ incluso en altitud moderada o enfermedad pulmonar leve."
        },
        {
            "id": "p9",
            "pregunta": "A nivel de los capilares tisulares, la sangre incorpora grandes cantidades de $CO_2$ generando ácido carbónico, pero su pH apenas desciende de $7.40$ a $7.36$ ¿Qué propiedad de la hemoglobina explica este amortiguamiento?",
            "opciones": [
                "La oxihemoglobina saturada actúa como un ácido muy débil en las arterias sistémicas, liberando grandes cantidades de protones hacia el plasma para alcalinizar la sangre venosa mixta.",
                "La desoxihemoglobina se convierte en un ácido más débil al ceder oxígeno y capta los protones derivados del ácido carbónico, amortiguando casi sin cambios el pH de la sangre venosa.",
                "El bicarbonato formado en los eritrocitos tisulares neutraliza directamente los grupos hemo oxidados, impidiendo que la $PCO_2$ venosa supere el valor arterial en tejidos activos.",
                "La albúmina plasmática fija el noventa por ciento de los iones hidrógeno generados por la anhidrasa carbónica, mientras la hemoglobina transporta exclusivamente oxígeno disuelto."
            ],
            "respuesta": 1,
            "puntaje": 5,
            "explicacion": "Por el efecto isohídrico, cuando la hemoglobina libera $O_2$ en los tejidos, los residuos de histidina de la desoxihemoglobina aumentan su $pK_a$ y se comportan como bases más fuertes, captando eficientemente los iones $H^+$ producidos por la disociación del $H_2CO_3$ y minimizando la acidificación venosa."
        },
        {
            "id": "p10",
            "pregunta": "Durante el ejercicio intenso en el músculo esquelético activo, ¿cómo se optimiza la transferencia de oxígeno desde los capilares sistémicos hasta las mitocondrias de las fibras contráctiles?",
            "opciones": [
                "Se cierran los esfínteres precapilares para acelerar la velocidad lineal de la sangre, aumentando la distancia de difusión entre los capilares abiertos y las mitocondrias activas.",
                "Disminuye la extracción tisular de oxígeno debido al descenso de la temperatura local, manteniendo la presión parcial venosa mixta por encima de los $75\\text{ mmHg}$ durante el esfuerzo.",
                "Se abren capilares previamente cerrados reduciendo la distancia de difusión hacia las células, mientras el efecto Bohr acelera la descarga de $O_2$ para sostener el consumo mitocondrial.",
                "La presión parcial de oxígeno mitocondrial debe superar los $60\\text{ mmHg}$ para mantener la fosforilación oxidativa, lo que exige duplicar la presión barométrica en el lecho capilar."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "En los órganos blancos activos, los metabolitos locales dilatan las arteriolas y abren esfínteres precapilares (reclutamiento capilar), lo que aumenta el área de intercambio y acorta el radio de difusión hacia las mitocondrias (donde la $PO_2$ crítica es de apenas $1\\text{ a }3\\text{ mmHg}$), sumado a la mayor descarga de $O_2$ por efecto Bohr."
        }
    ]
}
]};