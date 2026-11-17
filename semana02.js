window.datosSemana2 = {
    numeroSemana: 2,
    tituloSemana: "Semana 2",
    examenes:[
        // Examen 1
{
    idExamen: "e1",
    tituloExamen: "Examen 1",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "En las células beta de los islotes pancreáticos, el aumento de la glucemia desencadena la exocitosis de insulina. ¿Qué evento electrofisiológico directo precede inmediatamente a la apertura de los canales de calcio dependientes de voltaje?",
            "opciones": [
                "La apertura de canales de potasio sensibles a ATP ($K_{ATP}$) por caída del cociente ATP/ADP, hiperpolarizando la membrana.",
                "La activación de receptores muscarínicos $M_3$ acoplados a proteína $G_i$, cerrando canales de sodio dependientes de voltaje.",
                "El cierre de canales de potasio sensibles a ATP ($K_{ATP}$) por aumento del cociente ATP/ADP, despolarizando la membrana.",
                "La estimulación directa de la bomba $Na^+/K^+$-ATPasa electrogénica por la glucosa-6-fosfato, generando un potencial positivo."
            ],
            "respuesta": 2,
            "puntaje": 3,
            "explicacion": "La glucosa entra a la célula beta vía GLUT-2 y su metabolismo oxidativo eleva la relación intracelular ATP/ADP. Esto cierra los canales de potasio sensibles a ATP ($K_{ATP}$), reduciendo la salida de $K^+$ y despolarizando la membrana hasta abrir canales de $Ca^{2+}$ tipo L que disparan la exocitosis de insulina."
        },
        {
            "id": "p2",
            "pregunta": "Respecto a la regulación antagónica del sistema nervioso autónomo sobre los islotes de Langerhans, ¿qué efecto predominante ejerce la descarga simpática adrenérgica sobre la secreción hormonal pancreática?",
            "opciones": [
                "Inhibe la secreción de insulina mediante receptores $\\alpha_2$ en células beta y estimula la liberación de glucagón en células alfa.",
                "Estimula la secreción de insulina mediante receptores $\\beta_2$ en células beta e inhibe la liberación de glucagón en células alfa.",
                "Inhibe simultáneamente la secreción de insulina y glucagón mediante la liberación paracrina de somatostatina por receptores $M_3$.",
                "Estimula la secreción basal de insulina mediante receptores $\\alpha_1$ en células beta sin modificar la secreción de glucagón."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Aunque las células beta poseen receptores $\\beta_2$ estimuladores, durante la activación simpática predomina ampliamente el efecto inhibitorio de los receptores $\\alpha_2$-adrenérgicos (acoplados a $G_i$), frenando la liberación de insulina mientras se estimula la secreción de glucagón para movilizar sustratos energéticos."
        },
        {
            "id": "p3",
            "pregunta": "En el contexto del transporte facilitado de glucosa (GLUT) en los distintos tejidos, ¿qué propiedad cinética y funcional distingue correctamente a estas isoformas?",
            "opciones": [
                "El transportador GLUT-4 es constitutivo en los hepatocitos y presenta una baja afinidad ($K_m$ alto) para captar glucosa en ayuno.",
                "El transportador GLUT-2 de las células beta posee alta afinidad ($K_m$ bajo), saturándose completamente a concentraciones basales.",
                "El transportador GLUT-1 se localiza exclusivamente en la membrana apical renal para reabsorber glucosa contra gradiente de sodio.",
                "El transportador GLUT-4 del músculo esquelético y tejido adiposo se transloca a la membrana plasmática en respuesta a la insulina."
            ],
            "respuesta": 3,
            "puntaje": 3,
            "explicacion": "El GLUT-4 permanece secuestrado en vesículas intracelulares en reposo y se inserta en el sarcolema de miocitos y adipocitos tras la señalización de la insulina (y por contracción muscular). En cambio, GLUT-2 posee un $K_m$ alto (~15–20 mM) que permite al hígado y células beta sensar proporcionalmente los cambios de glucemia."
        },
        {
            "id": "p4",
            "pregunta": "Durante una situación de ayuno o hipoglucemia aguda, ¿mediante qué mecanismo intracelular regulan el glucagón y las catecolaminas el metabolismo del glucógeno en el hepatocito?",
            "opciones": [
                "Reducen el AMPc intracelular vía proteína $G_i$, desfosforilando e inactivando tanto la glucógeno fosforilasa como la glucógeno sintasa.",
                "Elevan el AMPc intracelular y activan la proteína quinasa A, fosforilando para activar la glucógeno fosforilasa e inhibir la sintasa.",
                "Activan receptores tirosina quinasa que estimulan la fosfodiesterasa, aumentando la síntesis neta de glucógeno a partir de lactato.",
                "Incrementan el calcio citosólico vía receptores muscarínicos $M_3$ para activar la glucógeno sintasa y frenar la gluconeogénesis."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "El glucagón y la adrenalina (vía receptores $\\beta_2$ acoplados a $G_s$) incrementan el AMPc y activan la proteína quinasa A (PKA). La fosforilación enzimática resultante activa la glucógeno fosforilasa (promoviendo la glucogenólisis) e inactiva simultáneamente la glucógeno sintasa (frenando la síntesis)."
        },
        {
            "id": "p5",
            "pregunta": "Las incretinas intestinales, como el péptido similar al glucagón tipo 1 (GLP-1), participan en el control de la glucemia posprandial. ¿Cuál es su mecanismo de acción principal?",
            "opciones": [
                "Potencian la secreción de insulina dependiente de glucosa activando receptores acoplados a proteína $G_s$ y elevando el AMPc en células beta.",
                "Inhiben competitivamente el cotransportador apical SGLT1 en los enterocitos del yeyuno, retrasando la absorción luminal de glucosa.",
                "Estimulan directamente la translocación de transportadores GLUT-4 en el músculo esquelético de manera independiente de la insulina.",
                "Bloquean los canales de calcio tipo L en las células alfa pancreáticas para incrementar la liberación basal de glucagón posprandial."
            ],
            "respuesta": 0,
            "puntaje": 3,
            "explicacion": "El GLP-1 y el GIP son secretados por células enteroendocrinas ante la llegada de nutrientes al intestino y explican el 'efecto incretina' (mayor respuesta insulínica a la glucosa oral que intravenosa). Actúan sobre receptores $G_s$ en las células beta aumentando el AMPc y amplificando la exocitosis solo cuando la glucemia está elevada."
        },
        {
            "id": "p6",
            "pregunta": "En una evaluación metabólica experimental en condiciones de ayuno, al comparar un sujeto sano frente a un paciente con diabetes mellitus tipo 1 no tratada, ¿qué perfil hormonal plasmático se observa en este último?",
            "opciones": [
                "Concentraciones plasmáticas elevadas de insulina y péptido C acompañadas de una supresión profunda del glucagón circulante.",
                "Concentraciones normales o elevadas de insulina con hiperglucemia en ayunas debido a resistencia severa de los receptores periféricos.",
                "Concentraciones indetectables o muy bajas de insulina acompañadas de niveles elevados de glucagón por pérdida del freno paracrino.",
                "Concentraciones disminuidas tanto de insulina como de glucagón plasmático debido a la destrucción autoinmune global del islote."
            ],
            "respuesta": 2,
            "puntaje": 3,
            "explicacion": "La diabetes mellitus tipo 1 se caracteriza por la destrucción selectiva de las células beta pancreáticas, lo que provoca deficiencia absoluta de insulina y péptido C. Al perderse la inhibición paracrina directa que la insulina ejerce sobre las células alfa vecinas, el glucagón plasmático se encuentra paradójicamente elevado."
        },
        {
            "id": "p7",
            "pregunta": "Desde el punto de vista del control antagónico del sistema nervioso autónomo sobre el metabolismo energético, ¿qué respuesta coordinada desencadena la rama simpática durante el ejercicio intenso?",
            "opciones": [
                "Estimula la secreción vagal de insulina y promueve la glucogenogénesis hepática para preservar las reservas de glucosa plasmática.",
                "Induce vasodilatación esplácnica mediada por receptores $\\alpha_1$ y frena la lipólisis adiposa para evitar la acumulación de ácidos grasos.",
                "Inhibe la glucogenólisis muscular vía receptores $\\beta_2$ y estimula el almacenamiento de triglicéridos en el tejido adiposo blanco.",
                "Activa la glucogenólisis hepática y la lipólisis adiposa vía receptores $\\beta$, mientras inhibe la secreción pancreática de insulina."
            ],
            "respuesta": 3,
            "puntaje": 3,
            "explicacion": "En oposición al sistema parasimpático (que favorece la digestión, la secreción de insulina y el almacenamiento anabólico), el sistema simpático moviliza combustibles durante el ejercicio activando la glucogenólisis hepática ($\\beta_2$/$\\alpha_1$), la lipólisis en adipocitos ($\\beta_3$/$\\beta_1$) y frenando la insulina ($\\alpha_2$)."
        },
        {
            "id": "p8",
            "pregunta": "En relación con el metabolismo energético integrado durante el ayuno o el ejercicio, ¿cuál es el destino metabólico principal del glicerol liberado por la lipólisis en los adipocitos?",
            "opciones": [
                "Es fosforilado por la glicerol quinasa del propio adipocito para resintetizar triglicéridos o ingresar a la glucólisis adiposa.",
                "Es transportado por la sangre hacia el hígado, donde se fosforila y convierte en intermediario gluconeogénico para formar glucosa.",
                "Es captado por el músculo esquelético activo para ser oxidado directamente en la beta-oxidación mitocondrial como fuente de ATP.",
                "Es convertido en cuerpos cetónicos en el tejido adiposo subcutáneo para abastecer al sistema nervioso central durante el ayuno."
            ],
            "respuesta": 1,
            "puntaje": 3,
            "explicacion": "Los adipocitos carecen prácticamente de la enzima glicerol quinasa, por lo que no pueden reutilizar el glicerol generado durante la hidrólisis de triglicéridos. El glicerol pasa a la circulación y es captado por el hígado (y en menor proporción por la corteza renal), donde la glicerol quinasa lo incorpora a la gluconeogénesis."
        },
        {
            "id": "p9",
            "pregunta": "Durante una prueba de tolerancia oral a la glucosa (curva de glucemia e insulinemia), ¿qué patrón caracteriza típicamente a un individuo con resistencia periférica a la insulina en etapa temprana?",
            "opciones": [
                "Hiperinsulinemia marcada y sostenida en respuesta a la carga oral, manteniendo concentraciones de glucosa normales o levemente elevadas.",
                "Hipoglucemia severa en ayunas acompañada de niveles plasmáticos indetectables de insulina y péptido C tras la sobrecarga oral.",
                "Ausencia completa de elevación de insulina posprandial con retorno acelerado de la glucemia por debajo del nivel basal a los 30 minutos.",
                "Elevación aislada del glucagón plasmático con niveles normales de insulina debido a una hiperrespuesta de las células alfa intestinales."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "En las fases iniciales de la resistencia a la insulina (prediabetes o diabetes tipo 2 temprana), la menor sensibilidad de músculo, hígado y tejido adiposo obliga a las células beta funcionales a secretar cantidades excesivas de insulina (hiperinsulinemia compensatoria) para intentar contener la excursión glucémica."
        },
        {
            "id": "p10",
            "pregunta": "En la regulación neuroendocrina del balance energético y la ingesta en el núcleo arcuado del hipotálamo, ¿qué efecto ejerce la leptina secretada por los adipocitos?",
            "opciones": [
                "Activa las neuronas orexígenas que expresan NPY y AgRP e inhibe las neuronas POMC/CART, incrementando el apetito y ahorrando energía.",
                "Inhibe simultáneamente tanto las neuronas POMC/CART como las neuronas NPY/AgRP, suprimiendo la termogénesis en el tejido adiposo pardo.",
                "Estimula las neuronas anorexígenas POMC/CART e inhibe las orexígenas NPY/AgRP, reduciendo la ingesta y elevando el gasto energético.",
                "Estimula la liberación hipotalámica de grelina hacia la eminencia media, potenciando el vaciamiento gástrico y la búsqueda de alimento."
            ],
            "respuesta": 2,
            "puntaje": 3,
            "explicacion": "La leptina es una adipoquina liberada en proporción a las reservas lipídicas que actúa como señal de saciedad a largo plazo: en el núcleo arcuado activa las neuronas anorexígenas (POMC/CART, liberando $\\alpha$-MSH sobre receptores MC4R) e inhibe las neuronas orexígenas (NPY/AgRP), disminuyendo el apetito y aumentando el tono simpático termogénico."
        }
    ]
}
]};