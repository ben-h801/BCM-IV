window.datosSemana10 = {
    numeroSemana: 10,
    tituloSemana: "Semana 10",
    tituloExamen: "Semana 10: Hemodinamia, Circulación Menor y Coronaria",
    examenes:[   
    {
    idExamen: "e1",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "De acuerdo con los principios hemodinámicos que relacionan flujo volumétrico, presión y geometría vascular, ¿cómo varía la velocidad lineal de la sangre a lo largo del árbol vascular sistémico?",
            "opciones": [
                "La velocidad lineal aumenta en los capilares porque la caída abrupta de la presión hidrostática impulsa los eritrocitos por gradiente osmótico.",
                "La velocidad lineal es mínima en los capilares porque su área seccional total agregada es máxima, manteniendo constante el flujo volumétrico ($Q$).",
                "El flujo volumétrico ($Q$) disminuye progresivamente desde la aorta hacia los capilares al incrementarse la resistencia viscosa de cada vaso individual.",
                "La velocidad lineal es inversamente proporcional al gradiente de presión transmural, alcanzando su valor mínimo en las arteriolas de resistencia."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "Dado que el aparato cardiovascular es un circuito cerrado en serie, el flujo volumétrico total ($Q$) que atraviesa cada segmento sucesivo es igual al gasto cardíaco. Como la velocidad lineal promedio equivale al flujo dividido por el área transversal total ($v = Q / A$), y el lecho capilar posee la mayor área seccional agregada de toda la circulación, la velocidad de la sangre cae al mínimo en los capilares, facilitando el intercambio transcapilar."
        },
        {
            "id": "p2",
            "pregunta": "Según la ley de Poiseuille y la organización anatómica del lecho vascular, ¿por qué las arteriolas constituyen el principal sitio de resistencia periférica total mientras que el lecho capilar presenta una resistencia global menor?",
            "opciones": [
                "La disposición en paralelo de millones de capilares reduce la resistencia total del lecho, mientras las arteriolas dominan por su control del radio ($r^4$).",
                "La viscosidad aparente de la sangre aumenta exponencialmente en las arteriolas debido al efecto Fahraeus-Lindqvist, elevando su resistencia en serie.",
                "Los capilares carecen de músculo liso vascular y presentan la mayor resistencia individual del circuito al operar dispuestos estrictamente en serie.",
                "El flujo laminar en las arteriolas se convierte en turbulento durante el reposo, incrementando la resistencia según la cuarta potencia de la longitud."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "La resistencia hidráulica es inversamente proporcional a la cuarta potencia del radio ($R = 8\eta L / \pi r^4$). Aunque cada capilar individual tiene un radio muy pequeño, millones de capilares están dispuestos en paralelo, por lo que el recíproco de la resistencia total es la suma de los recíprocos individuales ($1/R_T = \sum 1/R_i$), reduciendo la resistencia global del sector capilar. Las arteriolas tienen paredes musculares gruesas capaces de modificar activamente su radio y regular la resistencia."
        },
        {
            "id": "p3",
            "pregunta": "En relación con la hemodinámica fásica de la circulación coronaria durante el ciclo cardíaco, ¿qué factor determina el patrón de flujo sanguíneo en la arteria coronaria izquierda que irriga el subendocardio ventricular?",
            "opciones": [
                "El flujo coronario izquierdo alcanza su pico máximo durante la contracción isovolumétrica debido al aumento de la presión aórtica transmural.",
                "La perfusión subendocárdica izquierda ocurre principalmente en sístole, cuando la apertura de la válvula aórtica libera los senos de Valsalva.",
                "La compresión extravascular intramiocárdica reduce el flujo sistólico izquierdo, haciendo que la perfusión subendocárdica dependa de la diástole.",
                "El flujo coronario derecho se interrumpe por completo durante la diástole ventricular al colapsarse los vasos epicárdicos por baja presión venosa."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "Durante la contracción isovolumétrica y el inicio de la eyección sistólica, la elevada tensión intramural desarrollada por el miocardio del ventrículo izquierdo comprime los vasos intramiocárdicos (especialmente en el subendocardio), reduciendo drásticamente o incluso invirtiendo brevemente el flujo coronario izquierdo. Por ello, el ventrículo izquierdo se perfunde mayoritariamente durante la diástole, cuando el miocardio se relaja."
        },
        {
            "id": "p4",
            "pregunta": "Ante un incremento agudo del trabajo mecánico y del consumo de oxígeno del miocardio durante el ejercicio físico, ¿cómo logra la circulación coronaria satisfacer principalmente la mayor demanda metabólica?",
            "opciones": [
                "Incrementando principalmente la fracción de extracción de oxígeno desde un basal del 25% hasta alcanzar el 80% mediante descarga simpática beta-1.",
                "Mediante vasodilatación metabólica local por adenosina y óxido nítrico, dado que la extracción basal de oxígeno miocárdico ya es muy alta (~70%).",
                "A través de la vasoconstricción mediada por receptores alfa-1 adrenérgicos que redistribuye el flujo desde el epicardio hacia el subendocardio.",
                "Reduciendo la presión telediastólica del ventrículo izquierdo mediante la activación parasimpática vagal sobre las arteriolas intramiocárdicas."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "En reposo, el miocardio extrae alrededor del 70–75% del oxígeno transportado por la sangre arterial coronaria (la diferencia arteriovenosa de $O_2$ más alta del organismo), dejando muy poca reserva de extracción. Por tanto, cualquier aumento en el consumo miocárdico de oxígeno debe compensarse casi exclusivamente mediante un incremento proporcional del flujo sanguíneo coronario impulsado por vasodilatación metabólica local (adenosina, óxido nítrico, apertura de canales $K_{ATP}$, $H^+$ y $CO_2$)."
        },
        {
            "id": "p5",
            "pregunta": "A diferencia de los lechos vasculares sistémicos, ¿qué respuesta vascular desencadena la hipoxia alveolar localizada ($P_AO_2 < 70\text{ mmHg}$) en la circulación menor y cuál es su finalidad fisiológica?",
            "opciones": [
                "Vasoconstricción refleja mediada por descarga simpática alfa-1 para elevar la presión hidrostática capilar y reclutar lechos apicales previamente colapsados.",
                "Vasoconstricción de las vénulas pulmonares poscapilares para enlentecer el tránsito eritrocitario y prolongar el tiempo de difusión alveolocapilar.",
                "Vasoconstricción arteriolar mediada por hiperpolarización endotelial para reducir el cortocircuito fisiológico y disminuir la poscarga ventricular derecha.",
                "Vasoconstricción de las arteriolas pulmonares adyacentes para desviar la sangre hacia alvéolos mejor ventilados y optimizar la relación ventilación-perfusión."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "La vasoconstricción pulmonar hipóxica (VPH) es una propiedad intrínseca de las pequeñas arterias y arteriolas pulmonares ante la disminución de la $P_AO_2$ alveolar (por inhibición de canales de $K^+$ sensibles a $O_2$, despolarización y entrada de $Ca^{2+}$). A diferencia de la circulación sistémica donde la hipoxia causa vasodilatación, en el pulmón redirige la sangre desde regiones hipoventiladas hacia zonas bien ventiladas, preservando el acoplamiento ventilación-perfusión ($V/Q$)."
        },
        {
            "id": "p6",
            "pregunta": "Al analizar la relación entre el volumen pulmonar y la resistencia vascular pulmonar total en la circulación menor, ¿en qué volumen pulmonar alcanza la resistencia su valor mínimo y por qué?",
            "opciones": [
                "A nivel del volumen residual, cuando el colapso elástico del parénquima dilata al máximo tanto los capilares alveolares como los vasos extraalveolares.",
                "Durante la capacidad pulmonar total, momento en que la tracción radial alveolar expande los capilares septales y reduce la resistencia a su mínimo.",
                "En la capacidad residual funcional (CRF), punto donde se equilibra la compresión de los vasos alveolares con la tracción de los vasos extraalveolares.",
                "Al final de una espiración forzada máxima, debido a que la presión intrapleural positiva comprime las venas pulmonares y facilita el retorno auricular."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "La curva de resistencia vascular pulmonar frente al volumen pulmonar tiene forma de U. A volúmenes altos (cerca de CPT), la distensión alveolar comprime y estira los capilares alveolares elevando su resistencia; a volúmenes muy bajos (cerca del volumen residual), la pérdida de tracción radial elástica estrecha los vasos extraalveolares. Por ello, la resistencia vascular pulmonar total es mínima en la capacidad residual funcional (CRF)."
        },
        {
            "id": "p7",
            "pregunta": "En la medición auscultatoria de la presión arterial mediante esfigmomanometría, ¿cuál es la base hemodinámica de los ruidos de Korotkoff y qué error de medición introduce el uso de un manguito demasiado estrecho?",
            "opciones": [
                "El flujo turbulento intermitente al superar la presión sistólica la del manguito genera los ruidos, y un manguito estrecho sobreestima la presión arterial.",
                "La transición hacia flujo laminar continuo genera el primer ruido de Korotkoff, y un manguito estrecho subestima sistemáticamente la presión sistólica.",
                "El colapso diastólico completo de la arteria braquial produce vibraciones de baja frecuencia, y un manguito ancho sobreestima la presión diastólica.",
                "La resonancia de la pared arterial ocurre cuando la presión del manguito iguala la presión venosa central, sin verse afectada por el ancho del brazalete."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Cuando la presión del manguito cae justo por debajo de la presión arterial sistólica, la sangre atraviesa a gran velocidad la arteria parcialmente ocluida en chorros intermitentes de flujo turbulento (alto número de Reynolds), haciendo vibrar la pared vascular y originando el primer ruido de Korotkoff. Si el manguito es demasiado estrecho respecto al perímetro del brazo, la presión no se transmite eficientemente a la arteria profunda, requiriendo insuflar más presión y sobreestimando el valor real."
        },
        {
            "id": "p8",
            "pregunta": "En el registro electrocardiográfico estándar de superficie (derivación II), ¿qué eventos electrofisiológicos cardíacos representan respectivamente el intervalo PR y el segmento ST?",
            "opciones": [
                "El intervalo PR refleja la conducción rápida a través de las fibras de Purkinje, y el segmento ST corresponde a la repolarización rápida tardía del miocardio ventricular.",
                "El intervalo PR refleja el retraso fisiológico en el nodo auriculoventricular, y el segmento ST corresponde a la fase de meseta del potencial de acción ventricular.",
                "El intervalo PR refleja la despolarización progresiva del tabique interventricular, y el segmento ST corresponde a la repolarización precoz del subepicardio ventricular.",
                "El intervalo PR refleja la despolarización completa de ambas aurículas, y el segmento ST corresponde al período refractario relativo del músculo ventricular."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "El intervalo PR (desde el inicio de la onda P hasta el inicio del complejo QRS, normalmente 0.12–0.20 s) mide el tiempo de conducción desde el nodo sinoauricular a través de las aurículas y el retraso fisiológico en el nodo AV antes de despolarizar los ventrículos. El segmento ST es normalmente isoeléctrico porque coincide con la fase 2 (meseta) del potencial de acción ventricular, cuando todo el miocardio ventricular está uniformemente despolarizado."
        },
        {
            "id": "p9",
            "pregunta": "Considerando la relación entre distensibilidad vascular ($C = \Delta V / \Delta P$) y presión arterial, ¿qué efecto hemodinámico produce la rigidez de la aorta y grandes arterias elásticas asociada al envejecimiento para un mismo volumen sistólico?",
            "opciones": [
                "Disminuye la presión sistólica y eleva la diastólica por aumento del retroceso elástico aórtico, reduciendo significativamente la presión de pulso.",
                "Aumenta la presión sistólica y reduce la diastólica al perderse el efecto amortiguador elástico (Windkessel), incrementando la presión de pulso.",
                "Mantiene invariable la presión de pulso pero reduce la presión arterial media al incrementarse la distensibilidad de las arterias de conducción.",
                "Eleva proporcionalmente tanto la presión sistólica como la diastólica debido a una disminución en la velocidad de propagación de la onda de pulso."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "Las grandes arterias elásticas actúan como un reservorio de presión (efecto Windkessel) que almacena parte del volumen sistólico durante la sístole y lo impulsa durante la diástole. Al disminuir la distensibilidad arterial ($C$), un mismo incremento de volumen ($\Delta V$) genera un mayor aumento de presión sistólica ($\Delta P = \Delta V / C$) y una caída más rápida durante la diástole, ampliando notablemente la presión de pulso ($P_s - P_d$)."
        },
        {
            "id": "p10",
            "pregunta": "De acuerdo con la ley de Einthoven en electrocardiografía, ¿qué relación matemática vincula los voltajes instantáneos registrados en las tres derivaciones bipolares estándar de los miembros (I, II y III)?",
            "opciones": [
                "La amplitud de la onda R en la derivación I equivale siempre a la suma algebraica de las ondas R registradas simultáneamente en las derivaciones II y III.",
                "El potencial registrado en la derivación III corresponde al promedio aritmético entre el brazo derecho y la pierna izquierda con referencia en aVR.",
                "En cualquier instante del ciclo cardíaco, el potencial eléctrico en la derivación II es igual a la suma de los potenciales en las derivaciones I y III.",
                "Las derivaciones bipolares registran el vector eléctrico en el plano horizontal precordial, anulándose su suma vectorialmente durante el complejo QRS."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "Según el triángulo de Einthoven en el plano frontal, la derivación I mide la diferencia de potencial entre brazo izquierdo y derecho ($V_L - V_R$), la derivación II entre pierna izquierda y brazo derecho ($V_F - V_R$), y la derivación III entre pierna izquierda y brazo izquierdo ($V_F - V_L$). Por la ley de Kirchhoff, en todo instante se cumple que $II = I + III$."
        }
    ]
},
{
    idExamen: "e2",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "En relación con los principios físicos que rigen el flujo sanguíneo en el lecho vascular, ¿qué combinación de factores hemodinámicos favorece la transición de flujo laminar a flujo turbulento y cómo altera esto la relación presión-flujo?",
            "opciones": [
                "La disminución de la viscosidad y el incremento de la velocidad lineal elevan el número de Reynolds, exigiendo un mayor gradiente de presión para sostener el flujo.",
                "El aumento de la viscosidad sanguínea y la reducción del radio vascular elevan el número de Reynolds, manteniendo una relación estrictamente lineal entre presión y flujo.",
                "El descenso de la densidad plasmática y la vasoconstricción arteriolar reducen el número de Reynolds, disminuyendo la resistencia hidráulica aparente del segmento.",
                "El incremento de la longitud del vaso y la caída de la presión transmural elevan el número de Reynolds, duplicando la eficiencia del transporte convectivo axial."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "El número de Reynolds ($Re = \\rho v D / \\eta$) predice la aparición de turbulencia cuando supera un valor crítico. Una caída de la viscosidad ($\\eta$, como en la anemia) junto con un aumento de la velocidad lineal ($v$) o del diámetro ($D$) incrementa $Re$. En el flujo turbulento se disipa energía cinética en remolinos, por lo que la relación deja de ser lineal y se requiere un gradiente de presión ($\\Delta P$) mucho mayor para mantener el mismo flujo volumétrico."
        },
        {
            "id": "p2",
            "pregunta": "Al comparar las propiedades geométricas y mecánicas de los distintos segmentos del circuito vascular sistémico, ¿qué diferencia funcional distingue al sector venoso respecto al lecho capilar?",
            "opciones": [
                "Las venas poseen la mayor área seccional transversal agregada del circuito, mientras los capilares almacenan más del sesenta por ciento del volumen sanguíneo total.",
                "Las venas exhiben la mayor caída de presión hidrostática por su alta resistencia en serie, mientras los capilares operan con la máxima velocidad lineal de flujo.",
                "Las venas presentan una distensibilidad muy elevada que las convierte en reservorios de volumen, mientras los capilares poseen la máxima área seccional agregada.",
                "Las venas mantienen una presión transmural constante mediante autorregulación miogénica, mientras los capilares regulan la resistencia periférica sistémica."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "Las venas sistémicas poseen paredes delgadas y una distensibilidad ($C = \\Delta V / \\Delta P$) unas 20 a 24 veces mayor que la de las arterias a bajas presiones, lo que les permite alojar entre el 60% y el 65% del volumen sanguíneo total (vasos de capacitancia). Por su parte, los capilares alcanzan la máxima área transversal agregada del sistema vascular, reduciendo al mínimo la velocidad lineal de la sangre."
        },
        {
            "id": "p3",
            "pregunta": "En el cálculo y análisis fisiológico de la presión arterial sistémica, ¿por qué la presión arterial media (PAM) en reposo se aproxima más a la presión diastólica que al promedio aritmético entre sistólica y diastólica?",
            "opciones": [
                "Porque la distensibilidad de las grandes arterias elásticas alcanza su valor mínimo durante la diástole, amortiguando la caída de presión en el árbol arterial.",
                "Porque a frecuencias cardíacas de reposo la fase diastólica ocupa aproximadamente dos tercios del ciclo cardíaco, ponderando temporalmente más en el promedio.",
                "Porque la resistencia periférica total disminuye de forma fásica durante la sístole ventricular debido al cierre reflejo de los esfínteres precapilares.",
                "Porque el volumen sistólico eyectado se distribuye mayoritariamente hacia el circuito pulmonar durante la sístole, reduciendo la presión aórtica media."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "La presión arterial media representa el promedio integrado de la onda de presión arterial a lo largo de todo un ciclo cardíaco. En condiciones de reposo, la diástole ventricular dura cerca del doble que la sístole (~2/3 frente a ~1/3 del ciclo), por lo que la presión permanece más tiempo cerca del nivel diastólico ($PAM \\approx P_d + \\frac{1}{3}[P_s - P_d]$)."
        },
        {
            "id": "p4",
            "pregunta": "Dentro de la pared del ventrículo izquierdo, ¿por qué el miocardio subendocárdico resulta especialmente vulnerable a la isquemia cuando disminuye la presión diastólica aórtica o aumenta la presión telediastólica ventricular?",
            "opciones": [
                "Porque las arteriolas subendocárdicas carecen de receptores metabólicos para adenosina y óxido nítrico, dependiendo exclusivamente de la inervación vagal.",
                "Porque la extracción basal de oxígeno en el subendocardio es inferior al veinte por ciento, impidiendo cualquier compensación metabólica ante la hipoperfusión.",
                "Porque su irrigación proviene directamente de la sangre venosa del seno coronario mediante difusión retrógrada independiente del gradiente de presión aórtico.",
                "Porque soporta la máxima compresión extravascular en sístole y opera cerca de su límite de vasodilatación, agotando antes su reserva de flujo coronario."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "Durante la sístole, la presión intramiocárdica en el subendocardio iguala o supera la presión intraventricular, deteniendo su perfusión y obligando a que reciba sangre casi exclusivamente en diástole. Para compensar esta interrupción sistólica, los vasos subendocárdicos mantienen en reposo un tono vasodilatador basal mayor que el epicardio, por lo que agotan antes su reserva de vasodilatación si cae la presión diastólica aórtica o sube la presión telediastólica."
        },
        {
            "id": "p5",
            "pregunta": "Durante la activación simpática generalizada inducida por el ejercicio o el estrés agudo, ¿cómo se regula el tono vasomotor de las arteriolas coronarias de resistencia?",
            "opciones": [
                "La vasoconstricción directa alfa-adrenérgica es superada ampliamente por la vasodilatación metabólica secundaria al mayor inotropismo y cronotropismo cardíaco.",
                "Predomina una vasoconstricción sostenida mediada por receptores alfa-1 adrenérgicos que reduce el flujo coronario total para preservar la presión aórtica.",
                "La liberación de acetilcolina por fibras simpáticas colinérgicas hiperpolariza el músculo liso coronario, anulando cualquier efecto metabólico local.",
                "El bloqueo reflejo de los canales de potasio sensibles a ATP disminuye la conductancia vascular, desviando el flujo sanguíneo desde el endocardio al epicardio."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "La estimulación simpática directa sobre los receptores $\\alpha_1$-adrenérgicos de las arterias coronarias produce vasoconstricción. Sin embargo, la activación simultánea de los receptores $\\beta_1$ en los cardiomiocitos incrementa la frecuencia cardíaca y la contractilidad, disparando el consumo de oxígeno y la liberación de metabolitos vasodilatadores (adenosina, óxido nítrico, $H^+$) que predominan ampliamente y producen hiperemia funcional."
        },
        {
            "id": "p6",
            "pregunta": "En un sujeto en bipedestación, ¿qué condición hemodinámica define la Zona 2 de West en la región media del pulmón y qué gradiente de presión determina el flujo sanguíneo en dicho sector?",
            "opciones": [
                "La presión alveolar supera tanto a la presión arterial como a la venosa ($P_A > P_a > P_v$), colapsando los capilares e impidiendo el flujo sanguíneo continuo.",
                "Tanto la presión arterial como la venosa superan a la presión alveolar ($P_a > P_v > P_A$), siendo gobernado el flujo por la diferencia arteriovenosa convencional.",
                "La presión arterial supera a la alveolar y esta supera a la venosa ($P_a > P_A > P_v$), estando impulsado el flujo por la diferencia entre presión arterial y alveolar.",
                "La presión venosa pulmonar supera a la presión arterial por efecto hidrostático ($P_v > P_a > P_A$), generando un flujo retrógrado hacia el tronco pulmonar."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "En la Zona 2 de West (región media del pulmón erguido), la presión arterial pulmonar ($P_a$) excede a la presión alveolar ($P_A$), pero la presión alveolar supera a la presión venosa ($P_v$), es decir, $P_a > P_A > P_v$. El extremo venoso del capilar se colapsa parcialmente (efecto de cascada o resistor de Starling), de modo que el flujo sanguíneo depende del gradiente $P_a - P_A$ y no de la presión venosa."
        },
        {
            "id": "p7",
            "pregunta": "Respecto al intercambio de líquidos en los capilares pulmonares de la circulación menor, ¿qué factor hemodinámico fundamental mantiene secos los alvéolos en condiciones fisiológicas?",
            "opciones": [
                "La elevada presión hidrostática capilar pulmonar (~35 mmHg) supera a la presión oncótica plasmática, favoreciendo una reabsorción continua hacia el capilar.",
                "La impermeabilidad absoluta del endotelio capilar pulmonar a las proteínas plasmáticas anula la presión oncótica intersticial, impidiendo toda filtración neta.",
                "La presión alveolar positiva permanente durante todo el ciclo respiratorio comprime los capilares septales e invierte el gradiente hidrostático transcapilar.",
                "La baja presión hidrostática capilar (~7-10 mmHg) frente a la presión oncótica plasmática y el activo drenaje linfático evitan la acumulación de líquido alveolar."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "En la circulación pulmonar, la presión hidrostática capilar media es muy baja (alrededor de 7–10 mmHg) en comparación con la presión oncótica coloidosmótica del plasma (~25–28 mmHg). Aunque existe una pequeña filtración neta continua debido a la presión oncótica intersticial y la presión intersticial negativa, el sistema linfático pulmonar retira eficazmente este líquido y mantiene los alvéolos libres de edema."
        },
        {
            "id": "p8",
            "pregunta": "En el análisis vectorial del electrocardiograma de superficie en el plano frontal, ¿cómo se orienta el eje eléctrico medio del complejo QRS si la deflexión neta es positiva en la derivación I y marcadamente negativa en aVF?",
            "opciones": [
                "Se encuentra dentro del rango normal entre 0° y +90°, indicando una propagación sincronizada desde el tabique interventricular hacia el ápex cardíaco.",
                "Presenta una desviación del eje eléctrico hacia la izquierda (entre 0° y -90°), orientándose el vector resultante hacia el hombro izquierdo del paciente.",
                "Muestra una desviación del eje eléctrico hacia la derecha (entre +90° y +180°), reflejando una despolarización predominante del ventrículo derecho.",
                "Se ubica en el cuadrante superior derecho indeterminado (entre -90° y -180°), apuntando directamente hacia el electrodo explorador de la derivación aVR."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "En el sistema hexaxial frontal, la derivación I tiene su polo positivo a 0° (un QRS neto positivo sitúa el vector en el hemisferio izquierdo, entre -90° y +90°), mientras que aVF tiene su polo positivo a +90° (un QRS neto negativo sitúa el vector en el hemisferio superior, entre 0° y -180°). La intersección de ambos cuadrantes corresponde al rango entre 0° y -90°, definiendo una desviación del eje a la izquierda."
        },
        {
            "id": "p9",
            "pregunta": "Al registrar un electrocardiograma normal en la derivación II o en las precordiales izquierdas (V5-V6), ¿qué evento electrofisiológico origina la pequeña onda Q inicial negativa del complejo QRS?",
            "opciones": [
                "La despolarización tardía de la región posterobasal del ventrículo izquierdo y del cono pulmonar, cuyo vector apunta en sentido opuesto al electrodo positivo.",
                "La repolarización precoz de las fibras subepicárdicas auriculares que coincide temporalmente con la llegada del impulso al haz de His penetrante.",
                "La despolarización inicial del tabique interventricular de izquierda a derecha, generando un vector que se aleja del eje positivo de dichas derivaciones.",
                "La activación simultánea de los músculos papilares anteriores desde el epicardio hacia el endocardio antes de la contracción isovolumétrica."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "La activación eléctrica ventricular comienza en el lado izquierdo del tabique interventricular y se propaga de izquierda a derecha. Este primer vector septal apunta hacia la derecha y ligeramente hacia adelante, alejándose del electrodo explorador positivo de las derivaciones izquierdas (I, aVL, V5, V6) y de la derivación II, lo que inscribe una pequeña deflexión negativa inicial denominada onda Q fisiológica."
        },
        {
            "id": "p10",
            "pregunta": "Durante una práctica de registro de presión arterial y frecuencia cardíaca al pasar bruscamente del decúbito supino a la bipedestación, ¿qué secuencia fisiológica mantiene la perfusión cerebral?",
            "opciones": [
                "La acumulación venosa en extremidades inferiores reduce el volumen sistólico y la descarga barorreceptora, elevando la frecuencia cardíaca y la resistencia.",
                "El aumento del retorno venoso eleva la descarga de los barorreceptores aórticos, inhibiendo el tono simpático y reduciendo la frecuencia cardíaca refleja.",
                "La vasodilatación arteriolar esplácnica mediada por fibras colinérgicas incrementa el gasto cardíaco, elevando de inmediato la presión sistólica braquial.",
                "La activación directa de los quimiorreceptores carotídeos por hipercapnia postural desencadena bradicardia vagal y venodilatación periférica compensatoria."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Al ponerse de pie, la gravedad desplaza entre 500 y 700 ml de sangre hacia las venas distensibles de las extremidades inferiores, disminuyendo el retorno venoso, la precarga y el volumen sistólico. La caída transitoria de la presión arterial y de pulso reduce la frecuencia de descarga de los barorreceptores carotídeos y aórticos, desencadenando una respuesta refleja simpática que aumenta la frecuencia cardíaca, la contractilidad y la resistencia vascular periférica."
        }
    ]
},
{
    idExamen: "e3",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "En los lechos vasculares dotados de autorregulación intrínseca (como el coronario y el cerebral), ¿qué mecanismo explica el mantenimiento de un flujo sanguíneo casi constante ante un aumento agudo de la presión arterial de perfusión?",
            "opciones": [
                "La vasodilatación arteriolar inducida por el estiramiento endotelial reduce la resistencia vascular proporcionalmente al incremento de la presión arterial.",
                "La contracción refleja del músculo liso arteriolar ante el estiramiento (respuesta miogénica) y el lavado de metabolitos vasodilatadores elevan la resistencia.",
                "La inhibición de los canales de calcio tipo L en las células musculares lisas hiperpolariza la membrana y compensa el aumento del gradiente de presión.",
                "La activación directa de fibras simpáticas vasoconstrictoras alfa-1 reduce el radio luminal para evitar el incremento de la filtración capilar."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "La autorregulación del flujo sanguíneo ante variaciones de la presión arterial (entre ~60 y 140 mmHg) depende de dos mecanismos locales: la respuesta miogénica de Bayliss (el estiramiento vascular abre canales mecanosensibles, despolarizando el músculo liso y provocando vasoconstricción) y el mecanismo metabólico (el aumento inicial de flujo lava metabolitos vasodilatadores como adenosina, $CO_2$ y $H^+$, elevando el tono arteriolar)."
        },
        {
            "id": "p2",
            "pregunta": "En relación con los determinantes reológicos de la resistencia al flujo sanguíneo descritos en la hemodinámica microvascular, ¿en qué consiste el efecto Fahraeus-Lindqvist?",
            "opciones": [
                "En el aumento exponencial de la viscosidad aparente de la sangre al atravesar arteriolas de radio reducido debido al rozamiento parietal de los eritrocitos.",
                "En la disminución de la viscosidad aparente de la sangre en vasos menores de 300 micrómetros al alinearse los eritrocitos en el eje central del flujo.",
                "En la inversión del perfil parabólico de velocidades hacia un flujo turbulento cuando el hematocrito sistémico supera el cincuenta por ciento.",
                "En la acumulación marginal de leucocitos y plaquetas en las vénulas poscapilares que incrementa la resistencia hidráulica en serie del lecho."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "La sangre es un fluido no newtoniano cuya viscosidad aparente depende del diámetro del vaso. En vasos con diámetro inferior a ~300 $\\mu$m (arteriolas, metarteriolas y capilares), los eritrocitos migran hacia el eje axial de mayor velocidad dejando una capa periférica de plasma pobre en células junto al endotelio, lo que reduce significativamente la viscosidad aparente y facilita la perfusión microvascular."
        },
        {
            "id": "p3",
            "pregunta": "Considerando la organización en paralelo de las circulaciones regionales sistémicas, ¿qué consecuencia hemodinámica ocurre cuando se produce vasoconstricción selectiva en un solo órgano manteniendo constante la presión arterial media?",
            "opciones": [
                "Disminuye el flujo sanguíneo hacia el órgano vasoconstricto y aumenta la resistencia periférica total, sin alterar el flujo de los demás órganos en paralelo.",
                "Aumenta la resistencia periférica total y reduce proporcionalmente el flujo sanguíneo de todos los lechos paralelos por caída de la presión de perfusión.",
                "Disminuye la resistencia vascular global del circuito sistémico al redistribuirse el gasto cardíaco hacia los lechos con menor área seccional transversal.",
                "Incrementa la presión hidrostática capilar en el órgano afectado debido al aumento compensatorio del gradiente de presión arteriovenoso regional."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "En un circuito dispuesto en paralelo, cada órgano recibe sangre a la misma presión arterial media de entrada y su flujo depende únicamente de su propia resistencia ($Q_i = \\Delta P / R_i$). Al aumentar la resistencia de un solo órgano, el flujo hacia ese tejido disminuye y la resistencia periférica total ($1/R_T = \\sum 1/R_i$) se eleva ligeramente, pero si la presión arterial media se mantiene constante, el flujo de los demás órganos en paralelo no se ve afectado."
        },
        {
            "id": "p4",
            "pregunta": "Al comparar los perfiles fásicos del flujo sanguíneo entre la arteria coronaria izquierda y la arteria coronaria derecha durante el ciclo cardíaco normal, ¿qué diferencia hemodinámica se observa?",
            "opciones": [
                "El flujo en la coronaria derecha se interrumpe por completo durante la sístole ventricular debido a la alta presión intramural de la pared libre derecha.",
                "Ambas arterias coronarias presentan exactamente la misma caída sistólica de flujo porque la presión aórtica supera por igual a ambas cavidades.",
                "El flujo en la coronaria derecha alcanza su pico durante la sístole porque la presión del ventrículo derecho permanece muy inferior a la presión aórtica.",
                "La arteria coronaria izquierda presenta flujo anterógrado máximo en la contracción isovolumétrica, mientras la derecha perfunde solo en diástole."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "Mientras que en la arteria coronaria izquierda la alta presión intramiocárdica del ventrículo izquierdo (~120 mmHg en sístole) comprime los vasos y hace que el flujo sea predominantemente diastólico, en el ventrículo derecho la presión sistólica intraventricular (~25 mmHg) es mucho menor que la presión aórtica, por lo que el flujo de la arteria coronaria derecha sigue el contorno de la presión aórtica y alcanza su máximo durante la sístole."
        },
        {
            "id": "p5",
            "pregunta": "Durante el acoplamiento metabólico del flujo coronario ante un aumento del consumo miocárdico de oxígeno, ¿mediante qué mecanismo celular induce vasodilatación la adenosina liberada por los cardiomiocitos?",
            "opciones": [
                "Activa receptores purinérgicos que abren canales de potasio sensibles a ATP ($K_{ATP}$), hiperpolarizando el músculo liso y cerrando canales de calcio.",
                "Inhibe la óxido nítrico sintasa endotelial para elevar el calcio citosólico intracelular, promoviendo la relajación de las arteriolas epicárdicas.",
                "Bloquea los canales de sodio dependientes de voltaje en las células endoteliales, generando una despolarización retrógrada hacia los vasos de conductancia.",
                "Estimula directamente los receptores alfa-2 adrenérgicos vasculares para incrementar la hidrólisis de fosfoinosítidos y reducir el tono miogénico."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Cuando el consumo miocárdico de $O_2$ supera al aporte, la degradación de ATP libera adenosina hacia el intersticio. La adenosina se une a receptores $A_{2A}$ en el músculo liso vascular coronario, activando la vía del AMPc y abriendo canales de potasio sensibles a ATP ($K_{ATP}$). La salida de $K^+$ hiperpolariza la membrana, cierra los canales de $Ca^{2+}$ dependientes de voltaje tipo L y produce vasodilatación arteriolar."
        },
        {
            "id": "p6",
            "pregunta": "Durante el ejercicio físico intenso, el gasto cardíaco puede triplicarse sin que la presión arterial pulmonar media aumente de forma proporcional; ¿qué mecanismos vasculares explican esta baja resistencia pulmonar?",
            "opciones": [
                "La intensa descarga simpática sobre receptores beta-2 adrenérgicos dilata activamente las arteriolas pulmonares y triplica el calibre de los bronquiolos.",
                "El reclutamiento de capilares previamente colapsados en zonas superiores y la distensión pasiva de los capilares abiertos reducen la resistencia total.",
                "La vasoconstricción hipóxica generalizada incrementa la presión transmural capilar, forzando la apertura de anastomosis arteriovenosas de bajo flujo.",
                "La disminución de la presión oncótica plasmática acelera la filtración linfática intersticial, aumentando el área seccional de las venas pulmonares."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "Los vasos pulmonares poseen paredes muy delgadas y escaso músculo liso, comportándose como un circuito altamente distensible de baja presión. Al incrementarse el gasto cardíaco y elevarse ligeramente la presión arterial pulmonar, se abren capilares previamente no perfundidos en los vértices (reclutamiento) y se ensanchan los capilares ya abiertos (distensión), disminuyendo la resistencia vascular pulmonar total."
        },
        {
            "id": "p7",
            "pregunta": "En la distribución regional del flujo sanguíneo de la circulación menor, ¿qué situación clínica o experimental favorece la aparición de una Zona 1 de West ($P_A > P_a > P_v$) en los vértices pulmonares?",
            "opciones": [
                "El incremento del gasto cardíaco en decúbito supino, que eleva la presión venosa pulmonar por encima de la presión alveolar en todos los lóbulos.",
                "Una hemorragia aguda severa que reduce la presión arterial pulmonar o la aplicación de ventilación mecánica con presión positiva alveolar elevada.",
                "La inhalación de una mezcla gaseosa hiperóxica que dilata las arteriolas apicales e iguala la presión hidrostática capilar con la presión atmosférica.",
                "El aumento de la presión hidrostática en las venas pulmonares por estenosis mitral, que expande los capilares septales frente al colapso alveolar."
            ],
            "respuesta": 1,
            "puntaje": 5,
            "explicacion": "En condiciones fisiológicas normales, la presión arterial pulmonar apical suele bastar para mantener perfundidos los vértices (sin Zona 1 permanente). Sin embargo, si cae drásticamente la presión arterial pulmonar (como en una hemorragia o shock hipovolémico) o si aumenta la presión intraalveolar (como en la ventilación mecánica con presión positiva al final de la espiración), $P_A$ supera a $P_a$, colapsando los capilares y creando una Zona 1 ventilada pero no perfundida."
        },
        {
            "id": "p8",
            "pregunta": "En el registro experimental de la presión arterial durante un ejercicio aeróbico dinámico moderado (como pedaleo continuo), ¿qué patrón de cambio se observa habitualmente en la presión sistólica, diastólica y de pulso?",
            "opciones": [
                "Aumenta marcadamente la presión sistólica por mayor volumen sistólico, mientras la diastólica se mantiene o cae ligeramente, ampliando la presión de pulso.",
                "Desciende significativamente la presión sistólica por vasodilatación muscular y sube la presión diastólica, reduciendo la presión de pulso arterial.",
                "Se elevan en igual magnitud tanto la presión sistólica como la diastólica por aumento de la resistencia periférica total, sin variar la presión de pulso.",
                "Permanece invariable la presión sistólica gracias al reflejo barorreceptor, mientras la presión diastólica aumenta por venoconstricción esplácnica."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Durante el ejercicio dinámico isotónico, el incremento del retorno venoso y de la contractilidad simpática elevan el volumen sistólico y la velocidad de eyección, aumentando claramente la presión arterial sistólica. Simultáneamente, la vasodilatación metabólica en los músculos esqueléticos activos reduce la resistencia periférica total, manteniendo estable o disminuyendo ligeramente la presión diastólica, lo que incrementa notablemente la presión de pulso."
        },
        {
            "id": "p9",
            "pregunta": "En un electrocardiograma normal registrado en derivación II o V5, ¿por qué tanto el complejo QRS como la onda T presentan habitualmente una deflexión neta positiva hacia el mismo sentido?",
            "opciones": [
                "Porque la despolarización y la repolarización ventricular siguen exactamente la misma trayectoria desde el endocardio hacia el epicardio ventricular.",
                "Porque la despolarización avanza de endocardio a epicardio mientras la repolarización ocurre en sentido inverso (de epicardio a endocardio).",
                "Porque la onda T refleja la repolarización tardía de las aurículas, cuyo vector eléctrico se orienta paralelamente al eje del tabique interventricular.",
                "Porque las fibras subendocárdicas poseen potenciales de acción más breves que las epicárdicas, repolarizándose antes del cierre de la válvula aórtica."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "La despolarización ventricular se propaga desde el endocardio hacia el epicardio, inscribiendo un complejo QRS predominantemente positivo en derivaciones como II y $V_5$. Aunque las células subendocárdicas se despolarizan primero, sus potenciales de acción tienen mayor duración que los de las células epicárdicas; por ello, el epicardio se repolariza primero y la onda de repolarización viaja de epicardio a endocardio, generando un dipolo orientado en el mismo sentido positivo."
        },
        {
            "id": "p10",
            "pregunta": "Durante el análisis de un trazado electrocardiográfico registrado a una velocidad estándar de 25 mm/s, se mide un intervalo R-R constante de 15 milímetros (3 cuadros grandes); ¿qué frecuencia cardíaca corresponde y cómo se adapta el intervalo QT?",
            "opciones": [
                "Corresponde a 100 latidos por minuto y el intervalo QT se acorta fisiológicamente respecto al reposo para preservar el tiempo de llenado diastólico.",
                "Corresponde a 75 latidos por minuto y el intervalo QT se prolonga de manera lineal para compensar la reducción del período refractario auricular.",
                "Corresponde a 100 latidos por minuto y el intervalo QT permanece estrictamente invariable independientemente de la velocidad de descarga sinoauricular.",
                "Corresponde a 60 latidos por minuto y el intervalo QT se duplica al incrementarse la duración de la fase de meseta del potencial de acción ventricular."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "A una velocidad de registro estándar de 25 mm/s, cada milímetro horizontal equivale a 0.04 s y cada cuadro grande (5 mm) equivale a 0.20 s. Un intervalo R-R de 15 mm (3 cuadros grandes) corresponde a una duración de ciclo de $3 \\times 0.20\\text{ s} = 0.60\\text{ s}$, lo que equivale a una frecuencia cardíaca de $60 / 0.60 = 100\\text{ lpm}$. Al aumentar la frecuencia cardíaca, la duración del potencial de acción ventricular disminuye y el intervalo QT se acorta fisiológicamente."
        }
    ]
},
{
    idExamen: "e4",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "De acuerdo con la relación de Laplace ($T = P \cdot r$) aplicada a la mecánica de la pared vascular, ¿por qué los capilares sistémicos soportan presiones intraluminales cercanas a 30 mmHg sin romperse a pesar de carecer de capa muscular y poseer una pared unicelular?",
            "opciones": [
                "Porque su elevada área seccional transversal agregada disipa la energía cinética axial, anulando por completo la presión transmural endotelial.",
                "Porque la alta presión oncótica intersticial equilibra exactamente la presión hidrostática capilar, eliminando toda fuerza de distensión radial.",
                "Porque su radio luminal extremadamente pequeño mantiene la tensión circunferencial de la pared en valores mínimos frente a los grandes vasos.",
                "Porque el glucocáliz endotelial posee un módulo elástico superior al de la elastina aórtica, contrarrestando la presión hidrostática luminal."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "Según la ley de Laplace para cilindros delgados ($T = P \cdot r$), la tensión parietal ($T$) que tiende a distender o desgarrar la pared del vaso es proporcional tanto a la presión transmural ($P$) como al radio interno ($r$). Debido a que el radio de un capilar (~3 a 4 $\mu$m) es miles de veces menor que el de la aorta, la tensión soportada por su delgada pared endotelial es extremadamente baja."
        },
        {
            "id": "p2",
            "pregunta": "Según los determinantes reológicos de la ley de Poiseuille, ¿cómo afecta un incremento marcado del hematocrito (policitemia) a la resistencia hidráulica vascular y al trabajo cardíaco en la circulación sistémica?",
            "opciones": [
                "Aumenta exponencialmente la viscosidad aparente de la sangre, elevando la resistencia periférica total y la poscarga del ventrículo izquierdo.",
                "Disminuye linealmente la viscosidad sanguínea al incrementar el rozamiento laminar, reduciendo la presión arterial media y el gasto cardíaco.",
                "Eleva la viscosidad plasmática proteica sin modificar la resistencia arteriolar gracias a la compensación del efecto Fahraeus-Lindqvist.",
                "Reduce el número de Reynolds en las grandes arterias elásticas, disminuyendo la resistencia al flujo y facilitando el retorno venoso central."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "En la ecuación de Poiseuille ($R = 8\eta L / \pi r^4$), la resistencia es directamente proporcional a la viscosidad ($\eta$). Cuando el hematocrito supera el rango fisiológico (~40–45%), la interacción friccional entre eritrocitos incrementa exponencialmente la viscosidad aparente de la sangre, elevando la resistencia vascular sistémica y el trabajo mecánico del corazón."
        },
        {
            "id": "p3",
            "pregunta": "En el circuito vascular sistémico dispuesto en serie, ¿qué efecto hemodinámico inmediato produce la vasodilatación selectiva de las arteriolas de un tejido sobre la presión hidrostática capilar ($P_c$) aguas abajo?",
            "opciones": [
                "Disminuye la presión hidrostática capilar al reducirse la energía potencial de presión disipada en el segmento precapilar de resistencia.",
                "Aumenta la presión hidrostática capilar al transmitirse una mayor fracción de la presión arterial hacia el extremo arteriolar del capilar.",
                "Mantiene inalterada la presión hidrostática capilar porque la resistencia venular poscapilar se ajusta proporcionalmente en sentido inverso.",
                "Reduce la presión hidrostática capilar por debajo de la presión oncótica plasmática, invirtiendo el flujo neto hacia la reabsorción linfática."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "Las arteriolas representan la principal resistencia precapilar ($R_a$) donde cae abruptamente la presión arterial. Según la relación $P_c = [(R_v/R_a)P_a + P_v] / (1 + R_v/R_a)$, al disminuir la resistencia arteriolar ($R_a$) mediante vasodilatación, se disipa menos presión antes de llegar al lecho capilar y aumenta la presión hidrostática capilar ($P_c$), favoreciendo la filtración."
        },
        {
            "id": "p4",
            "pregunta": "En un paciente con estenosis aterosclerótica coronaria fija en la arteria descendente anterior, ¿por qué una taquicardia severa desencadena isquemia miocárdica subendocárdica con mayor facilidad que el mismo gasto cardíaco a menor frecuencia?",
            "opciones": [
                "Porque la taquicardia activa receptores alfa-2 vasoconstrictores en el epicardio, desviando el flujo sanguíneo hacia las venas de Tebesio.",
                "Porque el aumento de la frecuencia cardíaca prolonga la contracción isovolumétrica, incrementando la presión aórtica diastólica media.",
                "Porque la descarga vagal asociada inhibe la liberación endotelial de óxido nítrico y bloquea la autorregulación metabólica por adenosina.",
                "Porque al aumentar la frecuencia cardíaca se acorta proporcionalmente más la diástole que la sístole, reduciendo el tiempo de perfusión."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "Dado que el subendocardio del ventrículo izquierdo recibe su irrigación casi exclusivamente durante la diástole (cuando cesa la compresión extravascular sistólica) y la taquicardia acorta la duración de la diástole en mucha mayor proporción que la de la sístole, el tiempo disponible para el llenado coronario disminuye críticamente mientras aumenta la demanda metabólica de oxígeno."
        },
        {
            "id": "p5",
            "pregunta": "Durante la hiperemia metabólica coronaria, además de la dilatación arteriolar por metabolitos locales, ¿qué mecanismo dilata los vasos coronarios epicárdicos de conductancia situados aguas arriba?",
            "opciones": [
                "La difusión retrógrada de adenosina intersticial a través del miocardio ventricular hacia la adventicia de las arterias epicárdicas mayores.",
                "La activación directa de receptores beta-1 adrenérgicos en el músculo liso epicárdico mediada por noradrenalina de terminales simpáticas.",
                "El aumento de la fuerza de cizallamiento (shear stress) endotelial por el mayor flujo, que estimula la síntesis y liberación de óxido nítrico.",
                "La disminución de la presión transmural aórtica durante la diástole, que desencadena una respuesta miogénica vasodilatadora retrógrada."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "Cuando las arteriolas intramiocárdicas se dilatan por factores metabólicos, aumenta la velocidad y el volumen del flujo sanguíneo en las arterias epicárdicas proximales. El incremento del esfuerzo de rozamiento o cizallamiento (shear stress) sobre el endotelio activa la óxido nítrico sintasa endotelial (eNOS), liberando óxido nítrico (NO) que relaja el músculo liso de los vasos de conductancia."
        },
        {
            "id": "p6",
            "pregunta": "En la Zona 3 de West de la base pulmonar ($P_a > P_v > P_A$), ¿qué factor hemodinámico explica que el flujo sanguíneo continúe incrementándose progresivamente hacia las regiones más declives del pulmón?",
            "opciones": [
                "El aumento de la presión transmural distiende los capilares pulmonares y reduce su resistencia, aunque la diferencia $P_a - P_v$ sea constante.",
                "El incremento del gradiente de presión impulsada ($P_a - P_v$) por efecto de la gravedad, que aumenta linealmente desde el vértice a la base.",
                "La vasodilatación hipóxica refleja inducida por la menor ventilación alveolar basal, que reduce el tono de las arteriolas extraalveolares.",
                "El colapso intermitente del extremo venoso capilar por la presión alveolar, que acelera la velocidad lineal de los eritrocitos en la base."
            ],
            "respuesta": 0,
            "puntaje": 5,
            "explicacion": "En la Zona 3, tanto la presión arterial ($P_a$) como la venosa ($P_v$) aumentan en igual magnitud por el peso hidrostático de la columna sanguínea al descender hacia la base, por lo que la diferencia impulsora $P_a - P_v$ no varía. Sin embargo, dado que la presión alveolar ($P_A$) es uniforme, la presión transmural ($P_a - P_A$ y $P_v - P_A$) crece hacia la base, distendiendo los capilares y reduciendo su resistencia vascular."
        },
        {
            "id": "p7",
            "pregunta": "En la circulación menor de un individuo sano, ¿qué característica anatómica y funcional explica que la sangre arterial sistémica presente una presión parcial de oxígeno ligeramente inferior a la del gas alveolar ideal?",
            "opciones": [
                "La difusión incompleta del oxígeno a través de la membrana alveolocapilar durante el reposo debido al tránsito eritrocitario acelerado.",
                "El drenaje de parte de la sangre venosa bronquial desoxigenada hacia las venas pulmonares, constituyendo un cortocircuito fisiológico.",
                "La vasoconstricción pulmonar hipóxica generalizada que desvía el veinte por ciento del gasto ventricular derecho hacia la aorta torácica.",
                "El consumo oxidativo elevado del endotelio capilar alveolar, que extrae la mayor parte del oxígeno disuelto antes de alcanzar la aurícula."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "La circulación bronquial irriga las vías aéreas de conducción con sangre arterial sistémica y parte de su retorno venoso desoxigenado drena directamente en las venas pulmonares (junto con las venas de Tebesio en el corazón izquierdo). Esta mezcla venosa fisiológica (shunt anatómico de ~1–2% del gasto cardíaco) reduce la $P_aO_2$ arterial (~95 mmHg) respecto a la $P_AO_2$ alveolar (~100 mmHg)."
        },
        {
            "id": "p8",
            "pregunta": "Durante el registro auscultatorio de la presión arterial braquial en posición sentada, si el brazo del sujeto permanece colgando verticalmente muy por debajo del nivel del corazón, ¿cómo se alteran los valores medidos?",
            "opciones": [
                "Se subestiman tanto la presión sistólica como la diastólica debido a la venoconstricción refleja que reduce el flujo laminar braquial.",
                "Se registra únicamente un aumento aislado de la presión sistólica sin cambios en la diastólica por aumento de la velocidad de onda de pulso.",
                "Los valores medidos permanecen inalterados respecto al nivel cardíaco porque la autorregulación arteriolar compensa el peso hidrostático.",
                "Se sobreestiman tanto la presión sistólica como la diastólica al sumarse la presión hidrostática de la columna sanguínea bajo el corazón."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "Para eliminar el componente gravitacional hidrostático ($\rho g h$), el manguito debe colocarse a la altura de la aurícula derecha (nivel flebostático). Si el brazo cuelga por debajo del nivel cardíaco, el peso de la columna de sangre se suma a la presión arterial generada por el corazón (aproximadamente +0.77 mmHg por cada centímetro de desnivel), sobreestimando tanto la presión sistólica como la diastólica."
        },
        {
            "id": "p9",
            "pregunta": "Al analizar las derivaciones precordiales unipolares ($V_1$ a $V_6$) en un electrocardiograma normal, ¿cómo evoluciona la morfología del complejo QRS desde $V_1$ hacia $V_6$ y cuál es su explicación vectorial?",
            "opciones": [
                "La onda R disminuye progresivamente hacia $V_6$ mientras crece la onda Q, reflejando la repolarización precoz del tabique interventricular.",
                "La onda S se hace cada vez más profunda desde $V_1$ hasta $V_6$ debido al predominio vectorial de la pared libre del ventrículo derecho.",
                "La amplitud de la onda R crece progresivamente desde $V_1$ hasta $V_6$ al orientarse los electrodos hacia la mayor masa ventricular izquierda.",
                "El complejo QRS permanece isodifásico en todas las derivaciones precordiales al registrarse la actividad eléctrica en el plano frontal."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "En el plano horizontal, el electrodo $V_1$ se sitúa sobre el ventrículo derecho y registra una pequeña onda R inicial (activación septal) seguida de una onda S profunda (alejamiento del vector ventricular izquierdo). A medida que los electrodos avanzan hacia $V_5$ y $V_6$ sobre la pared libre del ventrículo izquierdo, el vector principal de despolarización apunta directamente hacia ellos, produciendo una progresión creciente de la onda R."
        },
        {
            "id": "p10",
            "pregunta": "En la interpretación de un trazado electrocardiográfico de superficie, se observa un ritmo sinusal regular donde cada onda P va seguida de un complejo QRS estrecho, pero con un intervalo PR constante de 0.28 segundos; ¿qué indica este hallazgo?",
            "opciones": [
                "Una aceleración de la conducción a través de vías accesorias auriculoventriculares que evita el retraso fisiológico del nodo auriculoventricular.",
                "Un enlentecimiento de la conducción a través del nodo auriculoventricular (bloqueo AV de primer grado) sin interrupción de la transmisión al haz.",
                "Un bloqueo completo de la rama izquierda del haz de His que retrasa la despolarización ventricular manteniendo normal el tiempo nodal.",
                "Un ritmo de escape originado en las fibras de Purkinje distales cuya despolarización retrógrada coincide con la repolarización auricular."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "La duración normal del intervalo PR oscila entre 0.12 y 0.20 segundos (3 a 5 cuadros pequeños a 25 mm/s). Un intervalo PR constantemente prolongado por encima de 0.20 s en presencia de conducción 1:1 entre ondas P y complejos QRS indica un retraso en la conducción a nivel del nodo auriculoventricular, hallazgo conocido como bloqueo auriculoventricular de primer grado."
        }
    ]
},
{
    idExamen: "e5",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "En el árbol vascular sistémico, ¿qué combinación de factores explica que la mayor caída de presión arterial media ocurra en las arteriolas mientras que en los capilares el descenso sea menor?",
            "opciones": [
                "Las arteriolas poseen alta resistencia individual y menor paralelismo relativo, mientras los millones de capilares en paralelo reducen la resistencia global.",
                "Los capilares presentan un radio luminal superior al de las arteriolas terminales, disminuyendo la viscosidad sanguínea por efecto axial de Poiseuille.",
                "Las arteriolas operan con flujo turbulento permanente por su capa muscular gruesa, mientras los capilares mantienen flujo laminar de baja resistencia.",
                "Los capilares carecen de gradiente de presión transmural por su alta distensibilidad, mientras las arteriolas disipan energía por choque elástico."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Aunque el radio de un capilar individual es menor que el de una arteriola, existen miles de millones de capilares dispuestos en paralelo ($1/R_T = \\sum 1/R_i$), lo que reduce la resistencia hidráulica global del sector capilar. Las arteriolas, en cambio, poseen paredes musculares capaces de variar activamente su radio ($R \\propto 1/r^4$) y presentan un menor grado de ramificación paralela relativa, generando la mayor caída de presión."
        },
        {
            "id": "p2",
            "pregunta": "Respecto al papel hemodinámico del lecho venoso sistémico como reservorio de capacitancia, ¿qué efecto produce la venoconstricción mediada por estimulación simpática alfa-adrenérgica?",
            "opciones": [
                "Incrementa la distensibilidad venosa periférica y aumenta el volumen no estresado, reduciendo la presión media de llenado sistémico y el retorno.",
                "Disminuye el volumen venoso no estresado y desplaza sangre hacia el compartimiento central, elevando la presión de llenado y el retorno venoso.",
                "Aumenta la resistencia poscapilar venular por encima de la resistencia arteriolar, disminuyendo la presión hidrostática capilar y la filtración.",
                "Reduce la presión venosa central al redistribuir el volumen sanguíneo hacia los sinusoides esplácnicos, disminuyendo la precarga ventricular."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "Las venas sistémicas albergan más del 60% del volumen sanguíneo total, gran parte del cual constituye volumen no estresado (que llena el vaso sin generar presión transmural). La contracción del músculo liso venoso por activación simpática $\\alpha_1$-adrenérgica reduce la capacitancia venosa, convierte volumen no estresado en estresado, eleva la presión media de llenado sistémico e impulsa mayor retorno venoso hacia la aurícula derecha."
        },
        {
            "id": "p3",
            "pregunta": "En los vasos de resistencia con tono vasomotor activo, ¿qué fenómeno hemodinámico ocurre cuando la presión intraluminal desciende por debajo de la denominada presión crítica de cierre?",
            "opciones": [
                "La pared vascular colapsa por predominio de la tensión circunferencial activa y el flujo sanguíneo cesa aunque persista un gradiente arteriovenoso.",
                "El endotelio libera óxido nítrico de forma refleja para dilatar el vaso, manteniendo un flujo laminar constante independiente de la presión arterial.",
                "La viscosidad aparente de la sangre disminuye abruptamente hasta igualar la del plasma, acelerando la velocidad lineal a través del segmento estrecho.",
                "Se invierte la dirección del flujo sanguíneo desde las vénulas hacia las arteriolas debido al aumento súbito de la presión oncótica intersticial."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "En arteriolas con tono muscular liso activo, la presión transmural distiende el vaso oponiéndose a la tensión elástica y activa de la pared (relación de Laplace). Si la presión intraluminal cae por debajo de un umbral denominado presión crítica de cierre, la tensión parietal activa supera la fuerza de distensión y el vaso se colapsa por completo, deteniendo el flujo sanguíneo incluso cuando la presión arterial sigue siendo mayor que la venosa."
        },
        {
            "id": "p4",
            "pregunta": "En relación con el concepto de reserva de flujo coronario y los límites de la autorregulación miocárdica, ¿qué sucede cuando la presión de perfusión coronaria cae por debajo de 60 mmHg?",
            "opciones": [
                "Las arteriolas subendocárdicas incrementan su tono miogénico compensatorio, reduciendo la extracción de oxígeno para preservar el ATP intracelular.",
                "Se produce vasoconstricción metabólica mediada por adenosina que desvía el flujo sanguíneo desde las capas epicárdicas hacia el endocardio.",
                "Los vasos de resistencia ya están máximamente dilatados, por lo que el flujo coronario cae linealmente con la presión causando isquemia subendocárdica.",
                "El flujo coronario izquierdo pasa a producirse exclusivamente durante la sístole ventricular al desaparecer la compresión extravascular miocárdica."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "La reserva de flujo coronario es la capacidad de incrementar el flujo desde el reposo hasta la vasodilatación máxima (4 a 5 veces en el corazón sano). Entre ~60 y 140 mmHg de presión de perfusión, la autorregulación mantiene estable el flujo basal; sin embargo, por debajo de 60 mmHg se agota la reserva vasodilatadora (especialmente en el subendocardio) y el flujo disminuye proporcionalmente a la presión, provocando isquemia."
        },
        {
            "id": "p5",
            "pregunta": "Tras liberar una oclusión breve de una arteria coronaria epicárdica (hiperemia reactiva), ¿qué mecanismo explica que el flujo sanguíneo supere varias veces su valor basal durante segundos?",
            "opciones": [
                "La descarga simpática reflejada sobre receptores alfa-1 dilata los vasos de conductancia y eleva transitoriamente la presión diastólica aórtica.",
                "La acumulación local de adenosina e hidrogeniones junto con la relajación miogénica durante la oclusión reducen al mínimo la resistencia arteriolar.",
                "El colapso de las vénulas coronarias durante la isquemia incrementa la presión transmural capilar, forzando la apertura de cortocircuitos arteriolares.",
                "La disminución abrupta de la viscosidad sanguínea en el lecho isquémico acelera la velocidad lineal sin modificar el calibre de las arteriolas."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "Durante una oclusión coronaria breve, el metabolismo miocárdico continúa consumiendo oxígeno y degradando ATP, lo que acumula potentes vasodilatadores locales (adenosina, $H^+$, $K^+$, lactato) mientras la caída de presión luminal provoca relajación miogénica. Al restablecer la presión de perfusión, la resistencia arteriolar es mínima y se produce un marcado sobreimpulso de flujo (hiperemia reactiva) que paga la deuda metabólica."
        },
        {
            "id": "p6",
            "pregunta": "Durante una inspiración profunda desde la capacidad residual funcional hasta la capacidad pulmonar total, ¿por qué los capilares alveolares se estrechan mientras los vasos extraalveolares se dilatan?",
            "opciones": [
                "El estiramiento longitudinal de las paredes alveolares aplasta los capilares septales, mientras la tracción radial del parénquima expande los vasos extraalveolares.",
                "La caída transitoria de la presión alveolar colapsa los capilares septales, mientras la presión intrapleural más negativa distiende los vasos extraalveolares.",
                "El aumento de la presión transmural capilar estrecha los vasos septales, mientras el incremento del retorno venoso derecho dilata los vasos extraalveolares.",
                "La compresión ejercida por el parénquima expandido estrecha los capilares septales, mientras la caída de la presión alveolar dilata los vasos extraalveolares."
            ],
            "respuesta": 0,
            "puntaje": 5,
            "explicacion": "En la circulación pulmonar se distinguen dos compartimientos vasculares con comportamiento mecánico opuesto frente al volumen pulmonar: los capilares alveolares quedan inmersos en las paredes de los alvéolos y se estiran y aplastan longitudinalmente al expandirse estos (aumentando su resistencia), mientras que las arterias y venas extraalveolares son traccionadas radialmente por el tejido elástico circundante y la presión intrapleural más negativa al expandirse el pulmón, aumentando su calibre."
        },
        {
            "id": "p7",
            "pregunta": "En la circulación menor, ¿qué mecanismos actúan como factores de seguridad que impiden el desarrollo inmediato de edema alveolar ante una elevación moderada de la presión auricular izquierda?",
            "opciones": [
                "La vasoconstricción arteriolar precapilar inmediata y el cierre de las uniones estrechas endoteliales anulan por completo la filtración neta.",
                "La inversión del gradiente oncótico plasmático y la reabsorción activa de proteínas por los neumocitos tipo I mantienen seco el espacio intersticial.",
                "La reducción refleja del gasto ventricular derecho y la caída de la presión intrapleural disminuyen la presión hidrostática capilar a valores negativos.",
                "El aumento del drenaje linfático pulmonar y el lavado de proteínas intersticiales que reduce la presión oncótica tisular contrarrestan la filtración."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "Cuando aumenta la presión venosa y capilar pulmonar, se incrementa inicialmente la filtración hacia el intersticio perivascular. Tres factores de seguridad evitan el edema alveolar hasta que la presión capilar supera ~25 mmHg: el incremento sustancial del flujo linfático pulmonar, la dilución y lavado de las proteínas intersticiales (que reduce $\\pi_i$) y el ascenso de la presión hidrostática intersticial ($P_i$)."
        },
        {
            "id": "p8",
            "pregunta": "En un individuo sano en bipedestación, ¿por qué la relación ventilación-perfusión ($V/Q$) es considerablemente mayor en el vértice pulmonar que en la base?",
            "opciones": [
                "Porque la mayor presión transpulmonar apical incrementa la ventilación en el vértice, mientras la presión hidrostática concentra la perfusión hacia la base.",
                "Porque tanto la ventilación como la perfusión aumentan hacia la base pulmonar por gravedad, pero el flujo sanguíneo crece en una proporción mucho mayor.",
                "Porque la ventilación alveolar se distribuye casi uniformemente en todo el pulmón, mientras la gravedad reduce drásticamente la perfusión en el vértice.",
                "Porque la presión intrapleural más negativa del vértice favorece tanto la ventilación como la perfusión apical, predominando el incremento ventilatorio."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "Debido al efecto de la gravedad sobre la presión intrapleural (los alvéolos basales parten menos distendidos y operan en una zona más distensible de su curva presión-volumen) y sobre la presión hidrostática intravascular, tanto la ventilación alveolar ($\\dot{V}_A$) como el flujo sanguíneo pulmonar ($\\dot{Q}$) aumentan desde el vértice hasta la base del pulmón erguido. Sin embargo, el gradiente gravitacional de perfusión es mucho más pronunciado que el de ventilación, determinando una relación $\\dot{V}_A/\\dot{Q}$ alta (~3.0) en el vértice y baja (~0.6) en la base."
        },
        {
            "id": "p9",
            "pregunta": "Durante el registro auscultatorio de la presión arterial en el laboratorio, ¿qué evento hemodinámico determina el punto de lectura de la presión diastólica y qué error introduce desinflar el manguito muy rápido?",
            "opciones": [
                "El restablecimiento del flujo laminar continuo elimina los ruidos (fase V), y desinflar muy rápido sobreestima la presión diastólica medida.",
                "La aparición del primer flujo turbulento intermitente marca la diástole (fase I), y desinflar muy rápido subestima la presión diastólica medida.",
                "El colapso arterial completo durante la diástole genera el máximo tono auscultatorio (fase III), y desinflar rápido sobreestima la sistólica.",
                "La igualación entre la presión del manguito y la presión venosa central marca la diástole, sin verse afectada por la velocidad de desinflado."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Cuando la presión del manguito desciende por debajo de la presión arterial diastólica, la arteria braquial permanece abierta durante todo el ciclo cardíaco, desaparece la turbulencia y se restablece el flujo laminar silencioso (fase V de Korotkoff). Si el manguito se desinfla a más de 2–3 mmHg/s, el descenso entre latidos sucesivos provoca leer la presión sistólica por debajo del valor real y la diastólica por encima."
        },
        {
            "id": "p10",
            "pregunta": "En el registro electrocardiográfico de los miembros en el plano frontal, ¿cómo se obtienen las derivaciones unipolares aumentadas (aVR, aVL, aVF) y por qué presentan mayor amplitud que las unipolares puras?",
            "opciones": [
                "Se registran manteniendo las tres extremidades unidas en la terminal central de Wilson y aplicando una amplificación diferencial de cincuenta por ciento.",
                "Se obtienen conectando la extremidad explorada al polo negativo de la terminal central de Wilson y promediando las resistencias del miembro opuesto.",
                "Se registran desconectando la extremidad explorada de la terminal central de Wilson, usando como referencia el promedio de las otras dos extremidades.",
                "Se obtienen sumando los potenciales de dos derivaciones bipolares adyacentes de Einthoven mediante una red resistiva que duplica el voltaje registrado."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "En las derivaciones unipolares de miembros originales (VR, VL, VF), el electrodo explorador se compara contra la terminal central de Wilson formada por las tres extremidades unidas mediante resistencias iguales, dando trazados de bajo voltaje. Al desconectar la extremidad explorada de la red resistiva (sistema de Goldberger), el polo de referencia pasa a ser el promedio de las otras dos extremidades, aumentando la amplitud del registro en un 50% (aVR, aVL, aVF)."
        }
    ]
}
]};