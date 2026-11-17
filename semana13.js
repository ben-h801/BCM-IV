window.datosSemana13 = {
    numeroSemana: 13,
    tituloSemana: "Semana 13",
    tituloExamen: "Semana 13: Regulación de la Función Respiratoria y Espirometría",
    examenes:[
    // examen1
       {
    idExamen: "e1",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "En la regulación central de la respiración, ¿cómo se organiza el generador central del ritmo respiratorio en el tronco encefálico y cuál es el rol específico del complejo pre-Bötzinger?",
            "opciones": [
                "Se ubica en la protuberancia superior y coordina exclusivamente la espiración forzada, reclutando de manera directa las motoneuronas de los músculos abdominales e intercostales internos.",
                "Se localiza en el grupo respiratorio dorsal y procesa las aferencias de los quimiorreceptores carotídeos, inhibiendo el centro apneúsico durante los reflejos de deglución y vómito.",
                "Reside en la región ventrolateral del bulbo y actúa como marcapasos primario del ritmo automático basal, mediante neuronas con descargas rítmicas dependientes de corrientes catiónicas.",
                "Se sitúa en la corteza motora primaria y controla de forma voluntaria la frecuencia ventilatoria basal, enviando impulsos directos al nervio frénico sin relevo en el bulbo raquídeo."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "El complejo pre-Bötzinger, ubicado en la porción ventrolateral del bulbo raquídeo, funciona como el marcapasos central esencial que genera el ritmo básico y automático de la respiración."
        },
        {
            "id": "p2",
            "pregunta": "Respecto a los reflejos respiratorios protectores y de control mecánico, ¿en qué consiste el reflejo de insuflación de Hering-Breuer y cuál es su principal función fisiológica?",
            "opciones": [
                "Mecanorreceptores de adaptación lenta en el músculo liso bronquial detectan la distensión pulmonar excesiva y envían impulsos vagales que inhiben la inspiración para evitar el sobreinflado.",
                "Quimiorreceptores situados en el cayado aórtico detectan caídas críticas de la presión arterial sistémica y activan una espiración forzada refleja para incrementar el retorno venoso torácico.",
                "Receptores epiteliales de adaptación rápida en la tráquea detectan acumulación de moco o partículas inhaladas y desencadenan una contracción sostenida del diafragma mediante el nervio frénico.",
                "Husos neuromusculares de los intercostales externos detectan el aumento de presión intrapleural durante el ejercicio intenso e inhiben la espiración pasiva para elevar el volumen residual."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "El reflejo de Hering-Breuer es un mecanismo protector de retroalimentación en el que la distensión marcada del parénquima activa fibras aferentes vagales que interrumpen la inspiración, limitando el volumen pulmonar máximo."
        },
        {
            "id": "p3",
            "pregunta": "En la regulación química de la ventilación, ¿cuál es la localización anatómica exacta y la sensibilidad primordial de los quimiorreceptores periféricos?",
            "opciones": [
                "Se ubican en la adventicia de ambas venas cavas y de la aurícula derecha, regulando de manera exclusiva el retorno venoso mediante descargas reflejas transmitidas por fibras parasimpáticas.",
                "Se sitúan en la superficie ventrolateral del bulbo raquídeo y detectan directamente las variaciones de sodio plasmático y osmolaridad, ajustando la profundidad del volumen corriente basal.",
                "Se encuentran en los tabiques interalveolares pulmonares y detectan la hipoxia local del gas inspirado, desencadenando vasoconstricción capilar sin modificar la frecuencia ventilatoria.",
                "Están localizados en la bifurcación carotídea y el cayado aórtico; responden principalmente a caídas de la $P_aO_2$ arterial bajo $60\\text{ mmHg}$, además de incrementos de $H^+$ y $P_aCO_2$."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "Los cuerpos carotídeos y aórticos son los principales sensores arteriales de $O_2$. Aunque también responden a $CO_2$ y pH, su función es crítica ante caídas de la $P_aO_2$ bajo $60\\text{ mmHg}$, enviando impulsos vía nervios glosofaríngeo y vago."
        },
        {
            "id": "p4",
            "pregunta": "Durante el análisis espirométrico, ¿cómo se define el Volumen Espiratorio Forzado en el primer segundo ($VEF_1$) y qué utilidad aporta al relacionarlo con la $CVF$?",
            "opciones": [
                "Representa el flujo inspiratorio máximo medido al inicio de una inhalación profunda desde el volumen residual, permitiendo cuantificar la distensibilidad estática del parénquima pulmonar.",
                "Es el volumen de aire expulsado con máximo esfuerzo en el primer segundo de una espiración forzada tras inspirar al máximo; el índice $VEF_1/CVF$ permite distinguir patrones obstructivos.",
                "Corresponde al volumen total de aire movilizado durante un minuto de ventilación voluntaria máxima, reflejando de forma directa la fuerza contráctil del diafragma y de los escalenos.",
                "Mide la resistencia elástica de la pared torácica al final de una espiración tranquila en reposo, permitiendo calcular la Capacidad Residual Funcional sin recurrir a dilución de helio."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "El $VEF_1$ mide la velocidad del flujo espiratorio inicial. Su proporción frente a la Capacidad Vital Forzada ($VEF_1/CVF$) cae marcadamente en enfermedades obstructivas debido al aumento de la resistencia al flujo aéreo."
        },
        {
            "id": "p5",
            "pregunta": "En las simulaciones de espirometría comparada sobre patologías respiratorias, ¿qué perfil espirométrico caracteriza a un paciente con EPOC severa?",
            "opciones": [
                "Una reducción proporcional tanto de la $CVF$ como del $VEF_1$, manteniendo una relación porcentual $VEF_1/CVF$ normal o elevada sin incremento del volumen residual ni atrapamiento aéreo.",
                "Un aumento marcado de la Capacidad Vital Forzada y del flujo espiratorio pico en el primer segundo, acompañado de una disminución significativa del volumen residual por mayor elastina.",
                "Una reducción marcada tanto del $VEF_1$ como de la relación $VEF_1/CVF$ bajo el $70\\%$, acompañada de un incremento significativo del volumen residual debido al atrapamiento aéreo crónico.",
                "Una disminución aislada del volumen corriente en reposo sin modificación de los flujos espiratorios forzados, que se normaliza por completo tras administrar oxígeno suplementario puro."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "La obstrucción crónica al flujo aéreo dificulta la exhalación rápida, reduciendo desproporcionadamente el $VEF_1$ frente a la $CVF$ ($VEF_1/CVF < 70\\%$) y generando atrapamiento aéreo con aumento del volumen residual ($VR$)."
        },
        {
            "id": "p6",
            "pregunta": "¿Cómo modulan las divisiones autonómicas simpática y parasimpática el calibre de las vías aéreas y la resistencia bronquial en la regulación integrada respiratoria?",
            "opciones": [
                "La estimulación simpática libera noradrenalina sobre receptores $\\alpha_1$ del músculo liso bronquial, provocando una potente broncoconstricción que disminuye el espacio muerto anatómico.",
                "La activación parasimpática vagal vía receptores muscarínicos $M_3$ induce broncoconstricción y secreción mucosa, mientras la adrenalina circulante vía $\\beta_2$ provoca broncodilatación.",
                "La inervación autonómica carece de receptores funcionales en los bronquíolos terminales, de modo que el diámetro de las vías aéreas depende exclusivamente de la presión transpulmonar.",
                "La descarga parasimpática vagal libera óxido nítrico y péptido intestinal vasoactivo sobre los anillos cartilaginosos traqueales, relajando la vía aérea durante el reposo postprandial."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "El tono broncomotor depende del equilibrio autonómico: el nervio vago (parasimpático) contrae el músculo liso vía receptores $M_3$ (broncoconstricción), mientras la adrenalina circulante activa receptores $\\beta_2$ (broncodilatación)."
        },
        {
            "id": "p7",
            "pregunta": "Durante el ejercicio físico aeróbico moderado a intenso, ¿qué mecanismos impulsan la hiperpnea de ejercicio para sostener la homeostasis de los gases arteriales?",
            "opciones": [
                "El aumento proporcional de la ventilación minuto es impulsado inicialmente por comandos motores centrales y aferencias propioceptivas musculares, manteniendo casi constantes $P_aO_2$ y $P_aCO_2$.",
                "La ventilación minuto disminuye progresivamente durante los primeros minutos del esfuerzo para conservar energía metabólica, tolerando una hipercapnia arterial sostenida de reposo.",
                "El incremento ventilatorio depende exclusivamente de una caída crítica de la $P_aO_2$ arterial por debajo de $50\\text{ mmHg}$, detectada por los quimiorreceptores centrales del bulbo.",
                "La fatiga temprana de las fibras oxidativas del diafragma reduce el volumen corriente basal, obligando a duplicar la presión barométrica alveolar mediante contracción abdominal activa."
            ],
            "respuesta": 0,
            "puntaje": 5,
            "explicacion": "Durante el ejercicio, la ventilación aumenta de forma inmediata y coordinada gracias al comando central motor cortical y a los reflejos propioceptivos de músculos y articulaciones, estabilizando las presiones parciales arteriales de $O_2$ y $CO_2$."
        },
        {
            "id": "p8",
            "pregunta": "En el contexto de la espirometría y el estudio de capacidades pulmonares, ¿cómo se define la Capacidad Funcional Residual ($CFR$) y por qué no puede medirse con un espirómetro simple?",
            "opciones": [
                "Corresponde al volumen corriente más el espacio muerto anatómico durante la respiración basal, pero el espirómetro simple carece de sensores térmicos para corregir el vapor de agua.",
                "Es el volumen máximo exhalado tras una inspiración forzada completa, calculándose únicamente mediante integración neumotacográfica porque supera la capacidad volumétrica de la campana.",
                "Representa el aire fresco total que alcanza los alvéolos por minuto, exigiendo un análisis continuo de la fracción espirada de nitrógeno para descontar el volumen del espacio muerto.",
                "Es la suma del volumen de reserva espiratoria y el volumen residual; no se mide con espirómetro simple porque el volumen residual permanece en el pulmón y exige dilución de helio."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "La $CFR$ ($VRE + VR$) incluye el volumen residual ($VR$). Como el $VR$ no puede expulsarse voluntariamente ni registrarse en un espirómetro convencional, se requieren técnicas como dilución de helio o pletismografía corporal."
        },
        {
            "id": "p9",
            "pregunta": "¿Qué función desempeñan los centros respiratorios protuberanciales (neumotáxico y apneúsico) en el control fino del patrón ventilatorio automático?",
            "opciones": [
                "Controlan de forma voluntaria la fonación y la deglución durante la vigilia, inhibiendo las motoneuronas frénicas cervicales cada vez que se eleva la presión en la faringe posterior.",
                "El centro neumotáxico envía señales inhibitorias al grupo dorsal para limitar la inspiración y regular el volumen, mientras el centro apneúsico prolonga la inspiración si no es frenado.",
                "Sintetizan neuropéptidos vasodilatadores que regulan el flujo sanguíneo capilar pulmonar, ajustando la perfusión regional ante variaciones gravitacionales en bipedestación prolongada.",
                "Regulan la presión oncótica y el drenaje linfático del espacio intrapleural, manteniendo acopladas ambas hojas pleurales frente a los cambios rápidos de postura del tronco superior."
            ],
            "respuesta": 1,
            "puntaje": 5,
            "explicacion": "El centro neumotáxico (protuberancia superior) limita la duración de la rampa inspiratoria controlando la frecuencia y la profundidad respiratoria, equilibrando la tendencia excitatoria del centro apneúsico inferior."
        },
        {
            "id": "p10",
            "pregunta": "En un paciente con un trastorno restrictivo parenquimatoso grave (como la fibrosis pulmonar idiopática) evaluado en espirometría, ¿qué patrón funcional se espera observar?",
            "opciones": [
                "Un aumento patológico de la Capacidad Pulmonar Total y del Volumen Residual, acompañado de una caída severa del cociente $VEF_1/CVF$ por debajo del sesenta por ciento en la espiración.",
                "Una obstrucción marcada del flujo aéreo espiratorio temprano con broncodilatación positiva, manteniendo completamente inalterados los volúmenes estáticos y la distensibilidad basal.",
                "Una disminución marcada de la $CVF$ y del $VEF_1$ con relación $VEF_1/CVF$ normal o elevada, debido a la reducción proporcional de los volúmenes pulmonares por rigidez parenquimatosa.",
                "Una reducción aislada del espacio muerto anatómico y del volumen de reserva inspiratoria, sin modificaciones en la Capacidad Vital Forzada ni en la velocidad del flujo espiratorio."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "En las patologías restrictivas, la rigidez del parénquima limita la expansión pulmonar y reduce tanto la $CVF$ como el $VEF_1$ de forma proporcional (o con mayor caída de la $CVF$), manteniendo el índice $VEF_1/CVF$ normal o aumentado."
        }
    ]
},
    {
    idExamen: "e2",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "Respecto al control neural central del ritmo ventilatorio en el tronco encefálico, ¿qué efecto produce la interrupción de las aferencias del centro neumotáxico junto con la vagotomía bilateral?",
            "opciones": [
                "La sección transeccional entre los centros neumotáxico y apnéustico combinada con vagotomía bilateral induce apneusis, caracterizada por espasmos inspiratorios prolongados.",
                "La destrucción selectiva del grupo respiratorio dorsal elimina por completo el ritmo ventilatorio basal, provocando una apnea espiratoria irreversible incluso con vagos intactos.",
                "La estimulación eléctrica del centro neumotáxico inhibe las neuronas espiratorias del grupo ventral, prolongando el tiempo inspiratorio y reduciendo la frecuencia respiratoria.",
                "La sección completa a nivel de la unión bulbomedular preserva intacto el patrón eupneico automático, debido a que el complejo pre-Bötzinger se ubica en la protuberancia superior."
            ],
            "respuesta": 0,
            "puntaje": 5,
            "explicacion": "Tanto el centro neumotáxico protuberancial como las aferencias vagales de estiramiento pulmonar inhiben la rampa inspiratoria; al eliminar ambas señales inhibitorias, el centro apnéustico descarga sin freno y produce apneusis."
        },
        {
            "id": "p2",
            "pregunta": "En la regulación autonómica del tono broncomotor y la secreción glandular del árbol traqueobronquial, ¿qué mecanismo predomina en condiciones fisiológicas?",
            "opciones": [
                "Las fibras simpáticas posganglionares liberan noradrenalina sobre receptores alfa-1 del músculo liso bronquial, provocando una broncodilatación sostenida durante el estrés agudo.",
                "La estimulación parasimpática vagal activa receptores muscarínicos $M_3$ bronquiales induciendo broncoconstricción, mientras la adrenalina circulante dilata vía receptores $\\beta_2$.",
                "La inervación parasimpática libera acetilcolina sobre receptores nicotínicos $N_2$ bronquiolares, reduciendo la resistencia aérea e inhibiendo la secreción de las glándulas mucosas.",
                "El sistema inhibidor no adrenérgico no colinérgico libera sustancia P y neurocinina A desde terminales vagales, relajando el músculo liso bronquial mediante aumento de calcio."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "El nervio vago mantiene un tono broncoconstrictor basal mediante acetilcolina sobre receptores $M_3$ (acoplados a $G_q$), mientras la adrenalina plasmática relaja el músculo liso vía receptores $\\beta_2$ (acoplados a $G_s$)."
        },
        {
            "id": "p3",
            "pregunta": "Respecto al reflejo de insuflación de Hering-Breuer, ¿qué receptores pulmonares participan y cuál es su efecto sobre el ciclo ventilatorio cuando aumenta el volumen corriente?",
            "opciones": [
                "Los receptores de adaptación rápida epiteliales descargan ante el colapso alveolar extremo, enviando impulsos por el nervio frénico para prolongar la contracción del diafragma.",
                "Los receptores juxtacapilares intersticiales se activan por distensión pulmonar moderada, estimulando el centro apnéustico para incrementar la profundidad del volumen corriente.",
                "Los receptores de estiramiento de adaptación lenta descargan ante grandes volúmenes pulmonares y envían señales vagales que inhiben la inspiración, limitando la sobreinsuflación.",
                "Los husos neuromusculares de los intercostales externos detectan el estiramiento del parénquima alveolar, desencadenando una inspiración profunda refleja mediante vías espinales."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "Los receptores de estiramiento de adaptación lenta (SAR) ubicados en el músculo liso de las vías aéreas envían aferencias mielínicas vagales que apagan la rampa inspiratoria cuando el volumen pulmonar supera cierto umbral."
        },
        {
            "id": "p4",
            "pregunta": "Al comparar los reflejos mediados por receptores de irritación (RAR) frente a los receptores juxtacapilares (receptores J), ¿qué diferencia caracteriza sus estímulos y respuestas?",
            "opciones": [
                "Los receptores de irritación (RAR) responden a gases nocivos con tos e hiperpnea vía fibras mielínicas, mientras los receptores J activan fibras C causando apnea y taquipnea rápida.",
                "Los receptores de irritación (RAR) se ubican en el intersticio alveolar y producen apnea prolongada, mientras los receptores J tapizan la tráquea y desencadenan broncodilatación.",
                "Ambos tipos de receptores transmiten sus impulsos a través de fibras simpáticas mielínicas $A\\alpha$, generando un aumento sincronizado del volumen corriente y de la frecuencia cardíaca.",
                "Los receptores J responden exclusivamente a la caída de la $P_aO_2$ arterial mediante fibras glosofaríngeas, mientras los receptores RAR regulan el tono broncomotor basal en reposo."
            ],
            "respuesta": 0,
            "puntaje": 5,
            "explicacion": "Los RAR epiteliales transmiten por fibras vagales mielínicas ($A\\delta$) provocando tos, broncoconstricción y suspiros; los receptores J intersticiales transmiten por fibras C amielínicas ante edema pulmonar causando apnea seguida de respiración rápida y superficial."
        },
        {
            "id": "p5",
            "pregunta": "Respecto al mecanismo de activación de los quimiorreceptores centrales en la superficie ventrolateral del bulbo raquídeo, ¿por qué la hipercapnia aguda los estimula con mucha mayor rapidez que una acidosis metabólica aguda?",
            "opciones": [
                "Los iones $H^+$ arteriales atraviesan libremente la barrera hematoencefálica en segundos, de modo que una acidosis metabólica aguda estimula antes a los quimiorreceptores centrales.",
                "El bicarbonato plasmático difunde con mayor rapidez que el $CO_2$ hacia el líquido cefalorraquídeo, alcalinizando el entorno bulbar y frenando la ventilación durante la hipercapnia.",
                "Los quimiorreceptores centrales responden directamente a la hipoxemia arterial moderada, incrementando la descarga del grupo respiratorio dorsal cuando la $P_aO_2$ cae bajo $80\\text{ mmHg}$.",
                "El $CO_2$ cruza rápidamente la barrera hematoencefálica y genera $H^+$ en el líquido cefalorraquídeo, donde la baja capacidad tampón proteica amplifica el descenso del pH local."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "El $CO_2$ atraviesa con facilidad la barrera hematoencefálica y se hidrata formando $H_2CO_3 \\rightarrow H^+ + HCO_3^-$. Como el LCR contiene muy pocas proteínas amortiguadoras respecto a la sangre, su pH cae marcadamente y excita las neuronas quimiosensibles bulbares."
        },
        {
            "id": "p6",
            "pregunta": "En los quimiorreceptores periféricos del cuerpo carotídeo, ¿qué secuencia celular ocurre en las células glómicas tipo I ante una caída de la presión parcial arterial de oxígeno ($P_aO_2$)?",
            "opciones": [
                "La caída de $P_aO_2$ abre canales de $K^+$ sensibles a oxígeno en las células glómicas tipo I, hiperpolarizando la membrana y bloqueando la exocitosis de dopamina y acetilcolina.",
                "El descenso de $P_aO_2$ bajo $60\\text{ mmHg}$ inhibe canales de $K^+$ en las células glómicas tipo I, despolarizándolas para abrir canales de $Ca^{2+}$ y excitar el nervio glosofaríngeo.",
                "El aumento de $P_aO_2$ activa bombas de protones en las células sustentaculares tipo II, generando potenciales de acción que viajan por el nervio vago hacia el núcleo ambiguo.",
                "Los cuerpos carotídeos responden linealmente a cualquier caída de $P_aO_2$ desde $100$ hasta $60\\text{ mmHg}$, siendo completamente insensibles a los cambios agudos de $P_aCO_2$ y pH."
            ],
            "respuesta": 1,
            "puntaje": 5,
            "explicacion": "Al disminuir la $P_aO_2$ (con pendiente pronunciada bajo $60\\text{ mmHg}$), se cierran canales de $K^+$ regulados por $O_2$, se despolariza la célula glómica, ingresa $Ca^{2+}$ por canales dependientes de voltaje y se liberan neurotransmisores hacia aferencias del nervio IX."
        },
        {
            "id": "p7",
            "pregunta": "En un paciente con retención crónica de $CO_2$ (hipercapnia crónica por EPOC grave), ¿por qué la ventilación pasa a depender fundamentalmente de los quimiorreceptores periféricos?",
            "opciones": [
                "El transporte activo de $HCO_3^-$ hacia el líquido cefalorraquídeo normaliza su pH y atenúa el estímulo central, dejando la ventilación muy dependiente del impulso hipóxico periférico.",
                "Los quimiorreceptores centrales incrementan su sensibilidad al $CO_2$ en la hipercapnia crónica, por lo que administrar oxígeno suplementario suprime el estímulo del centro neumotáxico.",
                "La hipoxia y la hipercapnia ejercen efectos antagónicos sobre los cuerpos carotídeos, de modo que la acidosis respiratoria reduce la respuesta ventilatoria frente a la hipoxemia.",
                "La compensación renal elimina bicarbonato del líquido cefalorraquídeo en pocas horas, acidificando el bulbo raquídeo y duplicando la sensibilidad central al dióxido de carbono."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "En la hipercapnia sostenida, la compensación renal y el transporte de $HCO_3^-$ a través de los plexos coroideos restauran el pH del LCR cerca de $7.32$, reduciendo la sensibilidad de los quimiorreceptores centrales al $CO_2$ y haciendo crítico el estímulo hipóxico en los cuerpos carotídeos."
        },
        {
            "id": "p8",
            "pregunta": "Durante la transición desde el reposo hacia el ejercicio aeróbico moderado, ¿qué mecanismos explican el aumento inmediato de la ventilación pulmonar al inicio del esfuerzo?",
            "opciones": [
                "La ventilación aumenta solo tras varios minutos de ejercicio, cuando la caída marcada de la $P_aO_2$ arterial y el alza de $P_aCO_2$ activan secuencialmente los cuerpos carotídeos.",
                "El incremento inicial de la ventilación es impulsado por la acidosis láctica metabólica, que atraviesa la barrera hematoencefálica y estimula directamente las neuronas bulbares.",
                "El aumento abrupto inicial depende de la irradiación cortical motora y aferencias propioceptivas articulares, manteniendo casi constantes la $P_aO_2$ y $P_aCO_2$ en ejercicio moderado.",
                "La vasoconstricción simpática de los músculos respiratorios reduce el espacio muerto anatómico, permitiendo duplicar la ventilación alveolar sin modificar la frecuencia cardíaca."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "La fase I de la respuesta ventilatoria al ejercicio es neural: el comando central desde la corteza motora y los mecanorreceptores de músculos y articulaciones estimulan el centro respiratorio de inmediato, ajustando la ventilación al consumo metabólico."
        },
        {
            "id": "p9",
            "pregunta": "En el laboratorio de espirometría comparada, ¿qué diferencia funcional distingue el registro de un paciente con enfisema frente al de un ataque asmático agudo tras administrar un inhalador $\\beta_2$?",
            "opciones": [
                "En el enfisema disminuyen tanto el Volumen Residual como la Capacidad Pulmonar Total, mientras que en el asma agudo el inhalador $\\beta_2$ reduce el $VEF_1$ por relajación diafragmática.",
                "Ambos cuadros muestran una elevación marcada del cociente $VEF_1/CVF$ por encima del noventa por ciento, pero solo el enfisema normaliza su Capacidad Vital tras el broncodilatador.",
                "En el asma agudo el Volumen Residual cae por debajo de $500\\text{ mL}$ debido al espasmo bronquial, mientras que en el enfisema el inhalador $\\beta_2$ restaura el retroceso elástico perdido.",
                "En ambos cuadros aumentan el $VR$ y cae el índice $VEF_1/CVF$, pero solo el asma revierte significativamente su $VEF_1$ tras aplicar el agonista $\\beta_2$ al conservar su elastina."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "Tanto el enfisema como el asma presentan patrón obstructivo ($VEF_1$ y $VEF_1/CVF$ reducidos, $VR$ aumentado), pero en el asma la obstrucción es por broncoespasmo reversible con agonistas $\\beta_2$, mientras en el enfisema hay destrucción parenquimatosa."
        },
        {
            "id": "p10",
            "pregunta": "Al comparar los volúmenes pulmonares de un sujeto sano en reposo frente a ejercicio moderado e intenso, ¿qué ocurre con los volúmenes dinámicos y la reserva ventilatoria?",
            "opciones": [
                "Al pasar de ejercicio moderado a intenso aumenta el Volumen Corriente invadiendo el $VRI$ y el $VRE$, mientras la Capacidad Vital permanece constante y se reduce la reserva ventilatoria.",
                "Durante el ejercicio intenso se duplica la Capacidad Vital Forzada a expensas de vaciar completamente el Volumen Residual, incrementando la Capacidad Pulmonar Total en un treinta por ciento.",
                "En el ejercicio moderado el Volumen Corriente disminuye para evitar la fatiga muscular, compensándose mediante una reducción progresiva de la frecuencia respiratoria por minuto.",
                "Al intensificar el ejercicio aumenta principalmente el Volumen de Reserva Inspiratoria basal, debido a que la contracción abdominal impide utilizar el Volumen de Reserva Espiratoria."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "En la simulación de espirometría comparada, el incremento progresivo de la intensidad del ejercicio eleva el $VT$ a expensas de reducir tanto el $VRI$ como el $VRE$, manteniendo fija la $CV$ y acercando la ventilación minuto a la ventilación voluntaria máxima."
        }
    ]
},
{
    idExamen: "e3",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "En la organización funcional de las redes neuronales respiratorias del bulbo raquídeo, ¿qué diferencia el papel del grupo respiratorio dorsal frente al grupo respiratorio ventral durante la eupnea y la ventilación activa?",
            "opciones": [
                "Las neuronas del grupo respiratorio dorsal se activan exclusivamente durante la espiración forzada, enviando impulsos inhibitorios directos a las motoneuronas del nervio frénico.",
                "El complejo pre-Bötzinger genera el ritmo automático basal e impulsa la rampa inspiratoria del grupo dorsal, mientras el grupo ventral recluta músculos en espiración activa.",
                "El grupo respiratorio ventral mantiene descargas tónicas en reposo que contraen el diafragma, mientras el grupo dorsal permanece inactivo hasta que se inicia el ejercicio.",
                "Las neuronas inspiratorias del núcleo ambiguo inhiben rítmicamente al complejo pre-Bötzinger durante la eupnea, permitiendo que la espiración sea un proceso activo basal."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "El complejo pre-Bötzinger marca el ritmo; el grupo dorsal (núcleo del tracto solitario) organiza la rampa inspiratoria basal y el ventral permanece casi inactivo en reposo hasta que se requiere ventilación forzada."
        },
        {
            "id": "p2",
            "pregunta": "Al analizar las curvas de respuesta ventilatoria ante variaciones en las presiones parciales de los gases arteriales, ¿cómo interactúan la hipercapnia y la hipoxemia sobre la ventilación minuto?",
            "opciones": [
                "La ventilación aumenta linealmente ante cualquier caída de la $P_aO_2$ desde $100$ hasta $40\\text{ mmHg}$, sin que la $P_aCO_2$ modifique la pendiente de la respuesta hipóxica.",
                "El incremento de la $P_aCO_2$ reduce la sensibilidad de los cuerpos carotídeos a la hipoxia, aplanando la curva ventilatoria cuando coexisten hipercapnia e hipoxemia arterial.",
                "La respuesta ventilatoria al $CO_2$ presenta un umbral rígido por encima de $65\\text{ mmHg}$, permaneciendo completamente inalterada frente a variaciones del pH arterial sistémico.",
                "La respuesta ventilatoria al alza de $P_aCO_2$ es lineal y se potencializa cuando coexiste hipoxemia, mientras que la respuesta a la hipoxia pura crece recién bajo $60\\text{ mmHg}$."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "El aumento de $P_aCO_2$ eleva linealmente la ventilación y la hipoxemia incrementa la pendiente de esa recta; en cambio, la hipoxia isocápnica pura muestra curva hiperbólica con disparo marcado bajo $60\\text{ mmHg}$."
        },
        {
            "id": "p3",
            "pregunta": "¿Por qué los cuerpos carotídeos responden con gran sensibilidad a una caída de la $P_aO_2$ por hipoventilación o altitud, pero apenas incrementan la ventilación en un paciente con anemia moderada o intoxicación leve por monóxido de carbono?",
            "opciones": [
                "Su altísimo flujo sanguíneo mantiene mínima la diferencia arteriovenosa de $O_2$, de modo que responden a la $P_aO_2$ disuelta y apenas se activan en anemia o intoxicación por $CO$.",
                "Su baja tasa de perfusión capilar eleva el consumo metabólico local de oxígeno, haciendo que descarguen intensamente cada vez que cae la concentración de hemoglobina circulante.",
                "Las células glómicas detectan directamente el porcentaje de saturación de la oxihemoglobina arterial, disparando hiperventilación marcada ante cualquier descenso del hematocrito.",
                "La baja velocidad de flujo en los sinusoides carotídeos prolonga el intercambio tisular, permitiendo que el monóxido de carbono excite los quimiorreceptores igual que la hipoxia."
            ],
            "respuesta": 0,
            "puntaje": 5,
            "explicacion": "Al recibir una perfusión enorme respecto a su masa (~2000 mL/100 g/min), el $O_2$ disuelto basta para suplir su metabolismo sin desaturar la hemoglobina, haciéndolos sensores de $P_aO_2$ y no de contenido total."
        },
        {
            "id": "p4",
            "pregunta": "Respecto a los reflejos protectores originados en las vías aéreas superiores, ¿qué diferencia caracteriza al reflejo desencadenado por irritación de la mucosa nasal frente al mecanismo fisiológico del reflejo de la tos?",
            "opciones": [
                "La irritación química de la mucosa nasal desencadena una inspiración profunda sostenida acompañada de taquicardia refleja y dilatación bronquial mediada por fibras simpáticas.",
                "El reflejo de la tos se inicia con una espiración pasiva lenta a glotis abierta, seguida por una contracción brusca del diafragma que expulsa partículas desde los bronquíolos.",
                "La irritación nasal induce estornudo, apnea y bradicardia refleja, mientras la tos exige una inspiración profunda seguida de compresión torácica contra la glotis cerrada.",
                "Los receptores laríngeos responden al enfriamiento del aire inspirado abriendo ampliamente las cuerdas vocales, lo que disminuye la resistencia de la vía aérea superior."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "La estimulación trigeminal nasal dispara estornudo o apnea con bradicardia y broncoconstricción; la tos requiere inspirar profundo, cerrar la glotis para elevar la presión intratorácica y abrirla bruscamente."
        },
        {
            "id": "p5",
            "pregunta": "¿En qué consisten el reflejo de desinsuflación pulmonar de Hering-Breuer y el reflejo paradójico de Head en el control mecánico del ciclo ventilatorio?",
            "opciones": [
                "La desinsuflación pulmonar intensa aumenta la descarga de los receptores de estiramiento lentos, prolongando la pausa espiratoria y reduciendo la frecuencia respiratoria.",
                "La desinsuflación pulmonar reduce la descarga vagal tónica y acorta la espiración, mientras el reflejo paradójico de Head provoca un suspiro inspiratorio que evita atelectasias.",
                "El reflejo paradójico de Head inhibe abruptamente el nervio frénico ante una insuflación rápida, induciendo apnea espiratoria prolongada para proteger el parénquima alveolar.",
                "Los receptores juxtacapilares median el reflejo de desinsuflación en neumotórax, bloqueando las motoneuronas intercostales para reducir el trabajo elástico toracopulmonar."
            ],
            "respuesta": 1,
            "puntaje": 5,
            "explicacion": "Al colapsarse el pulmón cesa el freno vagal tónico sobre la inspiración y se acelera el inicio del siguiente ciclo; en el reflejo de Head, una insuflación rápida dispara un esfuerzo inspiratorio adicional (suspiro)."
        },
        {
            "id": "p6",
            "pregunta": "Además de las vías colinérgicas y adrenérgicas clásicas, el músculo liso de las vías aéreas cuenta con inervación no adrenérgica no colinérgica (NANC). ¿Cómo actúan sus dos componentes funcionales?",
            "opciones": [
                "El sistema NANC inhibidor libera acetilcolina y serotonina desde terminales simpáticas, induciendo broncoconstricción sostenida durante las crisis de hiperreactividad aérea.",
                "Las fibras aferentes mielínicas vagales liberan sustancia P y neurocinina A sobre receptores muscarínicos, provocando relajación profunda del músculo liso bronquiolar.",
                "El sistema NANC carece de influencia funcional en el árbol bronquial humano, estando restringido exclusivamente a la regulación del flujo sanguíneo en la mucosa nasal.",
                "El componente inhibidor NANC libera óxido nítrico y péptido intestinal vasoactivo para broncodilatar, mientras el excitador libera taquicininas que contraen el bronquio."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "Las fibras NANC inhibidoras liberan NO y VIP relajando el músculo liso bronquial; las fibras sensitivas C (NANC excitadoras) liberan taquicininas (sustancia P, neurocinina A) generando broncoconstricción."
        },
        {
            "id": "p7",
            "pregunta": "Durante actividades como hablar, cantar o contener voluntariamente la respiración, ¿cómo se organiza la interacción entre el control conductual cortical y el generador metabólico bulbar?",
            "opciones": [
                "El control conductual cortical proyecta directamente a las motoneuronas espinales eludiendo el marcapasos bulbar, hasta que el alza de $P_aCO_2$ alcanza el punto de quiebre.",
                "Durante la fonación y el canto, los quimiorreceptores centrales asumen el mando exclusivo del diafragma, impidiendo cualquier modulación voluntaria del flujo espiratorio.",
                "La corteza motora primaria regula el habla mediante conexiones inhibitorias sobre los cuerpos carotídeos, anulando la sensibilidad química al $CO_2$ durante toda la vigilia.",
                "La apnea voluntaria puede sostenerse indefinidamente si se realiza tras una espiración máxima, debido a que la baja tensión alveolar suprime la descarga del centro apneúsico."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Las vías corticoespinales descienden directamente a las motoneuronas frénicas e intercostales permitiendo modular el flujo espiratorio al hablar, pero la acumulación de $CO_2$ y caída de $O_2$ terminan imponiendo el estímulo químico."
        },
        {
            "id": "p8",
            "pregunta": "En el análisis fisiológico de la curva flujo-volumen obtenida durante una espirometría forzada, ¿qué determina la velocidad máxima del flujo aéreo en los dos últimos tercios de la Capacidad Vital Forzada?",
            "opciones": [
                "Durante toda la espiración forzada el flujo aéreo depende exclusivamente de la fuerza muscular abdominal, aumentando progresivamente conforme se vacía el volumen residual.",
                "En los dos últimos tercios de la Capacidad Vital Forzada el flujo espiratorio es dependiente del esfuerzo, alcanzando su velocidad máxima justo antes del volumen residual.",
                "Tras el flujo pico inicial, el vaciado en volúmenes medios y bajos es independiente del esfuerzo y depende del retroceso elástico y de la resistencia aguas arriba.",
                "En los trastornos restrictivos la curva flujo-volumen muestra una concavidad marcada en su rama descendente, con flujos espiratorios reducidos en relación al volumen bajo."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "Por la compresión dinámica de las vías aéreas, el flujo máximo en volúmenes medios y bajos queda fijado por la presión de retroceso elástico pulmonar dividida por la resistencia de los segmentos pequeños aguas arriba del punto de igual presión."
        },
        {
            "id": "p9",
            "pregunta": "En la evaluación funcional mediante espirometría dinámica, ¿qué mide la Ventilación Voluntaria Máxima (VVM) y por qué disminuye drásticamente en las enfermedades pulmonares obstructivas?",
            "opciones": [
                "La Ventilación Voluntaria Máxima aumenta en los trastornos obstructivos severos, debido a que la mayor distensibilidad pulmonar acelera el vaciado en frecuencias elevadas.",
                "Evalúa la integridad global de la bomba ventilatoria; en cuadros obstructivos cae marcadamente porque la mayor constante de tiempo ($R \\times C$) genera atrapamiento dinámico.",
                "Depende exclusivamente de la capacidad de difusión de la membrana alvéolo-capilar, manteniendo valores normales en pacientes con broncoespasmo agudo o debilidad muscular.",
                "Mide el volumen de aire movilizado en una sola espiración lenta máxima, sin verse afectada por el aumento de la resistencia de las vías aéreas ni por la fatiga diafragmática."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "Al respirar muy rápido y profundo durante 12-15 segundos, el aumento de resistencia alarga la constante de tiempo espiratoria ($\\tau = R \\times C$), impidiendo vaciar los alvéolos antes de la siguiente inspiración y reduciendo la VVM."
        },
        {
            "id": "p10",
            "pregunta": "Durante una acidosis metabólica aguda (como en una cetoacidosis), ¿cómo se coordinan los quimiorreceptores periféricos y centrales para generar la hiperventilación compensatoria?",
            "opciones": [
                "Los protones arteriales cruzan de inmediato la barrera hematoencefálica y excitan los quimiorreceptores centrales, elevando la $P_aCO_2$ para amortiguar el pH plasmático.",
                "La acidosis metabólica inhibe los cuerpos carotídeos y reduce la ventilación minuto, provocando hipoventilación compensatoria para conservar bicarbonato en los capilares.",
                "El líquido cefalorraquídeo se acidifica más rápido que la sangre arterial durante la cetoacidosis, desencadenando una apnea refleja mediada por el centro neumotáxico.",
                "El alza de $H^+$ excita los cuerpos carotídeos induciendo hiperventilación; la caída de $P_aCO_2$ alcaliniza inicialmente el LCR hasta que el $HCO_3^-$ se equilibra."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "Los cuerpos carotídeos detectan de inmediato la acidemia arterial e impulsan la hiperventilación; la hipocapnia resultante extrae $CO_2$ del LCR y frena parcialmente los receptores centrales hasta que el $HCO_3^-$ del LCR desciende."
        }
    ]
},
{
    idExamen: "e4",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "En el modelo de tres fases del ciclo respiratorio generado por las redes neuronales del tronco encefálico, ¿qué función fisiológica cumple la fase postespiratoria (espiración temprana) durante la respiración tranquila?",
            "opciones": [
                "La fase postespiratoria mantiene una descarga tónica del nervio frénico para frenar el retroceso elástico pulmonar y evitar el colapso brusco de las vías aéreas.",
                "La fase inspiratoria se inicia por una descarga explosiva máxima del grupo ventral que decrece progresivamente hasta permitir el cierre pasivo de la glotis.",
                "La fase postespiratoria conserva actividad residual en los músculos inspiratorios para desacelerar el flujo espiratorio inicial y estabilizar los alvéolos.",
                "La fase espiratoria tardía permanece siempre activa en reposo mediante contracción abdominal continua, asegurando el vaciado completo del volumen residual."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "Durante la fase postespiratoria (etapa I de la espiración), la relajación gradual de los músculos inspiratorios y la aducción parcial laríngea frenan el vaciado inicial, evitando el colapso alveolar temprano."
        },
        {
            "id": "p2",
            "pregunta": "¿Qué modificación del patrón ventilatorio se produce tras realizar una vagotomía cervical bilateral en un individuo que conserva intactos el tronco encefálico y los centros protuberanciales?",
            "opciones": [
                "Se observa un patrón respiratorio más lento y profundo al suprimirse las aferencias vagales que limitan la inspiración, sin desarrollarse apneusis sostenida.",
                "Se desencadena inmediatamente una apneusis irreversible con espasmos inspiratorios prolongados, incluso cuando las conexiones protuberanciales están intactas.",
                "Se produce una taquipnea superficial muy rápida porque desaparece el tono broncoconstrictor basal y disminuye la resistencia de las vías aéreas pequeñas.",
                "Se abole por completo el automatismo ventilatorio del complejo pre-Bötzinger, provocando una apnea espiratoria fatal al interrumpirse el reflejo frénico."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Al perder las aferencias vagales de los receptores de estiramiento pulmonar, la inspiración se prolonga más antes de ser apagada por el centro neumotáxico intacto, generando respiraciones más profundas y lentas."
        },
        {
            "id": "p3",
            "pregunta": "Al comparar los quimiorreceptores periféricos de los cuerpos carotídeos frente a los cuerpos aórticos, ¿qué diferencia funcional y anatómica los distingue en la regulación cardiorrespiratoria?",
            "opciones": [
                "Los cuerpos aórticos transmiten por el nervio glosofaríngeo y poseen mayor sensibilidad a la acidemia arterial aguda que los quimiorreceptores carotídeos.",
                "Ambos grupos receptores responden exclusivamente a caídas de la presión parcial de oxígeno y carecen de sensibilidad frente a cambios agudos de la $P_aCO_2$.",
                "Los cuerpos carotídeos transmiten por el nervio vago y regulan principalmente el tono vasomotor sistémico sin modificar la frecuencia ni la amplitud tidal.",
                "Los cuerpos carotídeos transmiten por el nervio glosofaríngeo y dominan la respuesta ventilatoria, mientras los aórticos van por el vago y no censan pH."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "Los cuerpos carotídeos (nervio IX) responden a $P_aO_2$, $P_aCO_2$ y $H^+$ dirigiendo el ajuste ventilatorio; los aórticos (nervio X) responden a $P_aO_2$ y $P_aCO_2$, son insensibles al pH y tienen mayor rol cardiovascular."
        },
        {
            "id": "p4",
            "pregunta": "Además de modular el diámetro del músculo liso bronquial, ¿cómo influyen las divisiones autonómicas sobre las glándulas submucosas y el aclaramiento mucociliar de las vías aéreas?",
            "opciones": [
                "La estimulación simpática inhibe el batido ciliar del epitelio respiratorio y contrae los conductos glandulares para reducir la evaporación de agua mucosa.",
                "La activación parasimpática muscarínica aumenta la secreción glandular y el batido ciliar, mientras los agonistas $\\beta_2$ aceleran el transporte mucociliar.",
                "La inervación autonómica regula únicamente el calibre vascular submucoso, dado que las glándulas bronquiales responden solo a estímulos irritativos locales.",
                "El sistema parasimpático suprime la secreción de las células caliciformes y deshidrata la capa periciliar mediante bloqueo de canales epiteliales de cloruro."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "Los receptores muscarínicos $M_3$ estimulan la secreción de las glándulas submucosas y células caliciformes junto con el movimiento ciliar, mientras los receptores $\\beta_2$ aceleran el transporte mucociliar."
        },
        {
            "id": "p5",
            "pregunta": "¿Qué diferencia fisiológica caracteriza a los reflejos desencadenados por la estimulación de los receptores laríngeos frente a los receptores de irritación traqueobronquiales?",
            "opciones": [
                "La irritación química de la laringe provoca broncodilatación profunda e hiperventilación inmediata mediante aferencias transmitidas por el nervio frénico.",
                "La estimulación mecánica de las cuerdas vocales abre ampliamente la glotis y acelera la frecuencia inspiratoria para expulsar partículas hacia la faringe.",
                "La irritación laríngea desencadena cierre glótico reflejo y apnea vía nervio laríngeo superior, mientras la irritación traqueal induce tos y broncoconstricción.",
                "Ambos reflejos dependen exclusivamente de fibras simpáticas mielínicas que relajan el músculo liso traqueal y suprimen la secreción de moco en la vía aérea."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "Los receptores laríngeos (nervio laríngeo superior del vago) provocan laringoespasmo, apnea y bradicardia para evitar aspiración; los receptores traqueobronquiales desencadenan tos, hiperpnea y broncoconstricción."
        },
        {
            "id": "p6",
            "pregunta": "Durante la aclimatación ventilatoria a la gran altitud tras varios días de exposición continua a la hipoxia hipobárica, ¿qué mecanismo compensatorio permite que la ventilación minuto continúe elevándose progresivamente?",
            "opciones": [
                "El transporte de $HCO_3^-$ fuera del LCR y la excreción renal de bicarbonato restauran el pH central, permitiendo que la ventilación siga aumentando en altura.",
                "La hiperventilación inicial reduce la $P_aCO_2$ y acidifica intensamente el líquido cefalorraquídeo, suprimiendo el estímulo hipóxico de los cuerpos carotídeos.",
                "Los cuerpos carotídeos se desensibilizan tras cuarenta y ocho horas de hipoxia, transfiriendo el impulso ventilatorio a los quimiorreceptores centrales bulbares.",
                "La retención renal progresiva de bicarbonato eleva el pH arterial por encima de $7.55$, lo que frena la ventilación minuto y normaliza la presión alveolar de $CO_2$."
            ],
            "respuesta": 0,
            "puntaje": 5,
            "explicacion": "La hipocapnia aguda inicial alcaliniza el LCR y frena los quimiorreceptores centrales; con los días, la salida de $HCO_3^-$ del LCR y la excreción renal normalizan el pH central y liberan el impulso hipóxico periférico."
        },
        {
            "id": "p7",
            "pregunta": "¿Cuál es el mecanismo fisiopatológico fundamental que explica la aparición de la respiración periódica de Cheyne-Stokes (ciclos crecientes y decrecientes de ventilación separados por pausas de apnea)?",
            "opciones": [
                "Se debe a la parálisis reversible del complejo pre-Bötzinger por hipoxia severa, lo que impide generar impulsos rítmicos hacia las motoneuronas frénicas.",
                "Ocurre por una disminución marcada de la sensibilidad al $CO_2$, de modo que la ventilación solo se activa cuando la $P_aCO_2$ supera los $70\\text{ mmHg}$.",
                "Se produce exclusivamente por el bloqueo vagal de los receptores de estiramiento pulmonar, generando ciclos alternantes de apneusis y espiración forzada.",
                "Resulta de un retraso circulatorio hacia los quimiorreceptores o alta ganancia química, haciendo que la $P_aCO_2$ oscile repetidamente bajo el umbral apneico."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "El retardo en el tiempo de circulación pulmón-cerebro (ej. insuficiencia cardíaca) o la hiperrespuesta química desfasan la retroalimentación: la hiperventilación lleva la $P_aCO_2$ bajo el umbral apneico, causando apnea y reiniciando el ciclo."
        },
        {
            "id": "p8",
            "pregunta": "En el análisis funcional de una espirometría forzada, ¿qué información aporta el Flujo Espiratorio Forzado entre el 25% y el 75% de la Capacidad Vital Forzada ($FEF_{25-75\\%}$)?",
            "opciones": [
                "Mide el flujo espiratorio máximo en los primeros cien milisegundos de exhalación y refleja principalmente la resistencia de la tráquea y bronquios principales.",
                "Evalúa el flujo en la porción independiente del esfuerzo y constituye un marcador temprano y sensible de obstrucción en las vías aéreas de pequeño calibre.",
                "Cuantifica la distensibilidad estática de la caja torácica durante la inspiración profunda, manteniéndose normal en fumadores con bronquiolitis incipiente.",
                "Depende exclusivamente de la fuerza contráctil de los músculos abdominales, por lo que no se altera en enfermedades obstructivas de los bronquíolos terminales."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "El $FEF_{25-75\\%}$ mide la velocidad media de flujo en la mitad central de la $CVF$ (zona independiente del esfuerzo), detectando alteraciones tempranas en bronquíolos pequeños antes de que caiga el $VEF_1$."
        },
        {
            "id": "p9",
            "pregunta": "Al interpretar el asa completa de una curva flujo-volumen (inspiratoria y espiratoria), ¿cómo se distingue una obstrucción variable de la vía aérea superior extratorácica frente a una obstrucción fija?",
            "opciones": [
                "La obstrucción extratorácica variable amputa el flujo inspiratorio al colapsarse la vía por presión subatmosférica, mientras una fija aplana ambas ramas.",
                "La obstrucción extratorácica variable reduce únicamente el flujo espiratorio final, debido a que la presión intrapleural positiva comprime la laringe externa.",
                "Una estenosis traqueal fija desplaza toda la curva flujo-volumen hacia la izquierda sin modificar los flujos pico inspiratorio ni espiratorio máximos.",
                "La parálisis bilateral de cuerdas vocales aumenta el flujo inspiratorio pico al reducir la turbulencia glótica y ensanchar el diámetro transversal traqueal."
            ],
            "respuesta": 0,
            "puntaje": 5,
            "explicacion": "En la vía aérea extratorácica, la presión atmosférica rodea al conducto: al inspirar, la presión intraluminal cae bajo la atmosférica y colapsa una lesión variable (aplanando el asa inspiratoria); una lesión fija limita ambas ramas."
        },
        {
            "id": "p10",
            "pregunta": "Al comparar los volúmenes pulmonares estáticos de un trastorno restrictivo intrínseco (fibrosis pulmonar) frente a un trastorno restrictivo por debilidad de los músculos respiratorios, ¿qué diferencia clave se observa?",
            "opciones": [
                "En la debilidad neuromuscular disminuye el Volumen Residual por aumento del retroceso elástico, mientras en la fibrosis pulmonar el $VR$ aumenta marcadamente.",
                "Ambos cuadros muestran una Capacidad Pulmonar Total normal acompañada de una caída severa del cociente $VEF_1/CVF$ por debajo del sesenta y cinco por ciento.",
                "En la fibrosis caen tanto la $CPT$ como el $VR$ por rigidez parenquimatosa, mientras en la debilidad muscular cae la $CPT$ pero el $VR$ suele conservarse o subir.",
                "La debilidad de los músculos espiratorios incrementa la Capacidad Vital Forzada al facilitar el vaciado pasivo completo hasta alcanzar el volumen residual."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "En la fibrosis pulmonar todos los volúmenes se reducen ($CPT$, $CVF$, $CRF$ y $VR$). En la debilidad neuromuscular cae la $CPT$ por menor fuerza inspiratoria, pero la debilidad espiratoria impide comprimir el tórax, dejando el $VR$ normal o aumentado."
        }
    ]
},
{
    idExamen: "e5",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "¿Qué respuesta cardiorrespiratoria integrada desencadena el reflejo de inmersión al entrar en contacto la piel facial con agua fría?",
            "opciones": [
                "La inmersión facial en agua fría activa aferencias trigeminales que inducen apnea espiratoria, bradicardia vagal y vasoconstricción simpática periférica para conservar oxígeno.",
                "El contacto de agua fría con la mucosa nasal estimula receptores de estiramiento pulmonares que provocan hiperventilación refleja, taquicardia sinusal y vasodilatación renal.",
                "La estimulación térmica de los barorreceptores aórticos desencadena una inspiración profunda sostenida acompañada de broncodilatación simpática y caída de la presión arterial.",
                "El enfriamiento de la piel facial inhibe el núcleo ambiguo y activa los cuerpos carotídeos, incrementando el gasto cardíaco y el flujo sanguíneo hacia el músculo esquelético."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Los termorreceptores faciales del nervio trigémino (V) inhiben el centro respiratorio, activan eferencias vagales cardíacas (bradicardia) y aumentan el tono simpático vasoconstrictor periférico."
        },
        {
            "id": "p2",
            "pregunta": "Durante la deglución, ¿cómo se coordina el centro de la deglución con el generador central del ritmo respiratorio para proteger la vía aérea?",
            "opciones": [
                "Durante la fase faríngea de la deglución se estimula el grupo respiratorio dorsal, generando una inspiración rápida que impulsa el bolo alimenticio hacia el esófago superior.",
                "El centro bulbar de la deglución inhibe transitoriamente el generador del ritmo respiratorio y cierra la glotis en cualquier fase del ciclo para evitar la aspiración traqueal.",
                "La deglución solo puede iniciarse al final de una inspiración máxima, debido a que el reflejo de Hering-Breuer mantiene abiertas las cuerdas vocales durante toda la espiración.",
                "Los mecanorreceptores faríngeos activan fibras simpáticas que dilatan los bronquíolos terminales y relajan el diafragma, permitiendo ventilar simultáneamente mientras se traga."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "La apnea de la deglución interrumpe de inmediato el ciclo ventilatorio (por lo general seguida de una breve espiración) mientras se aducen las cuerdas vocales y desciende la epiglotis."
        },
        {
            "id": "p3",
            "pregunta": "Al comparar el control autonómico frente al control metabólico local en la circulación pulmonar, ¿qué mecanismo predomina en la regulación de la resistencia vascular pulmonar?",
            "opciones": [
                "La descarga simpática sobre receptores $\\alpha_1$ constituye el principal regulador del flujo pulmonar basal, provocando vasoconstricción generalizada cada vez que cae la $P_aO_2$.",
                "El sistema parasimpático vagal mantiene una vasodilatación tónica en los capilares alveolares mediante acetilcolina, anulando cualquier efecto local de la hipoxia sobre el flujo.",
                "El tono autonómico tiene escaso impacto basal en la circulación pulmonar, predominando la vasoconstricción hipóxica local del músculo liso arteriolar para ajustar la relación $V/Q$.",
                "La adrenalina circulante activa receptores $\\beta_2$ en las vénulas pulmonares durante la hipoxia alveolar, desviando mayor flujo sanguíneo hacia las regiones peor ventiladas del pulmón."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "A diferencia de los vasos sistémicos, las arteriolas pulmonares se contraen directamente ante la caída de $P_AO_2$ (cierre de canales de $K^+$), redirigiendo sangre hacia alvéolos bien ventilados."
        },
        {
            "id": "p4",
            "pregunta": "¿Qué ocurre sobre el centro respiratorio cuando la presión parcial arterial de dióxido de carbono ($P_aCO_2$) alcanza valores extremos superiores a $80\\text{ a }100\\text{ mmHg}$?",
            "opciones": [
                "El aumento extremo de $P_aCO_2$ potencia indefinidamente la descarga de los quimiorreceptores centrales, provocando hiperventilación máxima sostenida y alcalosis respiratoria grave.",
                "La hipercapnia severa sensibiliza los receptores de estiramiento lentos pulmonares, desencadenando taquipnea superficial progresiva que normaliza la presión arterial de oxígeno.",
                "El exceso de dióxido de carbono bloquea de forma irreversible los receptores muscarínicos $M_3$ bronquiales, reduciendo la resistencia aérea y elevando la ventilación alveolar neta.",
                "Elevaciones extremas de $P_aCO_2$ superiores a $80\\text{ mmHg}$ ejercen un efecto anestésico directo que deprime las neuronas respiratorias centrales, causando hipoventilación y coma."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "En la narcosis por $CO_2$, la marcada acidosis intracelular neuronal suprime la excitabilidad del tronco encefálico, creando un círculo vicioso de mayor hipoventilación."
        },
        {
            "id": "p5",
            "pregunta": "¿Cómo influye la activación aguda de los barorreceptores arteriales del seno carotídeo y cayado aórtico sobre el ritmo y la amplitud ventilatoria?",
            "opciones": [
                "Un aumento brusco de la presión arterial activa los barorreceptores sinoaórticos e inhibe las neuronas inspiratorias bulbares, reduciendo transitoriamente la ventilación minuto.",
                "La activación de los barorreceptores carotídeos por hipertensión arterial aguda estimula directamente el centro apneúsico, duplicando el volumen corriente y la frecuencia basal.",
                "Una caída aguda de la presión arterial sistémica suprime la descarga de los cuerpos carotídeos y aórticos, provocando apnea espiratoria prolongada para conservar el gasto cardíaco.",
                "Los barorreceptores arteriales carecen de conexiones con las redes respiratorias del tronco encefálico, modificando únicamente la frecuencia cardíaca y la resistencia periférica."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Las aferencias barorreceptoras (nervios IX y X) hacia el núcleo del tracto solitario ejercen un efecto inhibitorio sobre el impulso inspiratorio, mientras la hipotensión aguda estimula la ventilación."
        },
        {
            "id": "p6",
            "pregunta": "Durante el ejercicio físico progresivo, ¿qué factores regulan la ventilación en la fase estable moderada y qué ocurre al superar el umbral anaeróbico?",
            "opciones": [
                "Durante el ejercicio moderado estable la $P_aCO_2$ arterial aumenta por encima de $55\\text{ mmHg}$, siendo este incremento sostenido el único responsable de mantener la hiperpnea.",
                "En el ejercicio estable influyen oscilaciones de $P_aCO_2$, potasio plasmático y catecolaminas; al superar el umbral anaeróbico, la acidosis láctica dispara una hiperventilación extra.",
                "Al superar el umbral anaeróbico el bicarbonato plasmático se eleva rápidamente y frena los cuerpos carotídeos, reduciendo la pendiente de la ventilación respecto al consumo de $O_2$.",
                "La hiperpnea del ejercicio intenso depende exclusivamente de la caída progresiva de la temperatura central, la cual sensibiliza los quimiorreceptores bulbares al dióxido de carbono."
            ],
            "respuesta": 1,
            "puntaje": 5,
            "explicacion": "Aunque la $P_aCO_2$ media no varía en ejercicio moderado, las oscilaciones temporales de gases, el $K^+$ muscular y las catecolaminas sensibilizan los cuerpos carotídeos; al acumularse lactato, los $H^+$ provocan hiperventilación compensatoria."
        },
        {
            "id": "p7",
            "pregunta": "¿Cómo se modifica el control de la respiración al transitar desde la vigilia tranquila hacia el sueño no-REM (NREM) y el sueño REM?",
            "opciones": [
                "Durante el sueño REM aumenta notablemente el tono de los músculos dilatadores faríngeos y se intensifica la respuesta ventilatoria frente a la hipercapnia y la hipoxia arterial.",
                "El sueño NREM eleva la sensibilidad de los quimiorreceptores centrales al $CO_2$ y reduce la $P_aCO_2$ arterial en $10\\text{ mmHg}$, estabilizando el calibre de la vía aérea superior.",
                "En el sueño NREM cae el impulso cortical y baja el tono dilatador faríngeo elevando levemente la $P_aCO_2$, mientras en el sueño REM la respiración se torna irregular con atonía muscular.",
                "En ambas fases del sueño la ventilación alveolar permanece idéntica a la vigilia tranquila, debido a que el complejo pre-Bötzinger mantiene constante su frecuencia de descarga basal."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "Durante el sueño NREM la ventilación depende del control metabólico con menor sensibilidad química y menor tono geniogloso; en el sueño REM la atonía motora deja activo casi solo al diafragma y la frecuencia varía irregularmente."
        },
        {
            "id": "p8",
            "pregunta": "¿Qué diferencia funcional distingue la inervación propioceptiva de los músculos intercostales frente a la del diafragma en la regulación refleja de la ventilación?",
            "opciones": [
                "El diafragma posee una densidad muy elevada de husos neuromusculares que aumentan su fuerza contráctil ante cargas resistivas, mientras los intercostales carecen de propioceptores.",
                "Los órganos tendinosos de Golgi de los músculos intercostales externos estimulan las motoneuronas frénicas cervicales cuando disminuye la resistencia al flujo en la vía aérea alta.",
                "Tanto el diafragma como los músculos abdominales carecen de inervación aferente sensitiva, dependiendo exclusivamente de los receptores de estiramiento vagales para compensar cargas.",
                "Los intercostales abundan en husos neuromusculares que median reflejos espinales de compensación de carga, mientras el diafragma tiene pocos husos y más órganos tendinosos de Golgi."
            ],
            "respuesta": 3,
            "puntaje": 5,
            "explicacion": "Ante un aumento súbito de resistencia aérea, el estiramiento de los husos intercostales refuerza reflejamente su contracción (reflejo miotático), mientras los órganos tendinosos del diafragma limitan tensiones excesivas."
        },
        {
            "id": "p9",
            "pregunta": "En la interpretación clínica de la espirometría comparada, ¿cómo se diferencian el asma bronquial, la bronquitis crónica y el enfisema pulmonar?",
            "opciones": [
                "Una mejora del $VEF_1$ superior al $12\\%$ y $200\\text{ mL}$ tras un agonista $\\beta_2$ indica reversibilidad típica del asma, mientras el enfisema muestra obstrucción fija con menor $D_{LCO}$.",
                "El enfisema pulmonar se caracteriza por una normalización completa del índice $VEF_1/CVF$ tras administrar un broncodilatador $\\beta_2$, manteniendo intacta su capacidad de difusión $D_{LCO}$.",
                "En el asma bronquial el tratamiento con agonistas $\\beta_2$ reduce el $VEF_1$ y eleva el volumen residual, mientras la fibrosis intersticial presenta reversibilidad positiva al inhalador.",
                "La bronquitis crónica y el enfisema muestran un índice $VEF_1/CVF$ superior al $85\\%$ en espirometría forzada, diferenciándose únicamente por el aumento de la capacidad pulmonar total."
            ],
            "respuesta": 0,
            "puntaje": 5,
            "explicacion": "Los tres presentan patrón obstructivo ($VEF_1/CVF < 70\\%$), pero el asma revierte significativamente con broncodilatadores $\\beta_2$, mientras el enfisema cursa con obstrucción irreversible y caída de difusión por pérdida de superficie alveolar."
        },
        {
            "id": "p10",
            "pregunta": "Según la relación inversa entre ventilación alveolar ($\\dot{V}_A$) y $P_aCO_2$, ¿por qué resulta peligroso hiperventilar voluntariamente antes de realizar una apnea subacuática?",
            "opciones": [
                "Hiperventilar voluntariamente antes de bucear duplica las reservas de oxígeno en la hemoglobina arterial, permitiendo contener la respiración sin riesgo de hipoxia cerebral aguda.",
                "Duplicar la ventilación alveolar reduce la $P_aCO_2$ a la mitad, retrasando el estímulo hipercápnico al contener la respiración y elevando el riesgo de hipoxia antes del deseo de respirar.",
                "La hiperventilación voluntaria eleva la $P_aCO_2$ arterial y acidifica el líquido cefalorraquídeo, provocando un deseo irresistible de inspirar a los pocos segundos de iniciar la apnea.",
                "Reducir la ventilación alveolar a la mitad disminuye proporcionalmente la $P_aCO_2$ plasmática, generando alcalosis respiratoria y vasodilatación cerebral por aumento de calcio iónico."
            ],
            "respuesta": 1,
            "puntaje": 5,
            "explicacion": "Al barrer $CO_2$ sin aumentar casi el $O_2$ almacenado, durante la apnea la $P_aO_2$ puede caer a niveles críticos (pérdida de conciencia) antes de que la $P_aCO_2$ alcance el umbral que obliga a salir a respirar."
        }
    ]
}

]};