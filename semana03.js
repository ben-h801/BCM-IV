window.datosSemana3 = {
    numeroSemana: 3,
    tituloSemana: "Semana 3",
    examenes:[
        // Examen 1
{
    idExamen: "e1",
    tituloExamen: "Examen 1",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "En el eje hipotálamo-hipófisis, ¿qué consecuencia endocrina directa produce una interrupción selectiva de los vasos del sistema porta hipofisario?",
            "opciones": [
                "Disminuye la síntesis hipotalámica de oxitocina y vasopresina, conservando intacta la secreción adenohipofisaria de TSH y ACTH.",
                "Se interrumpe la secreción regulada de ACTH y TSH adenohipofisarias, manteniendo conservada la liberación axonal de oxitocina.",
                "Se bloquea simultáneamente la liberación de vasopresina en la neurohipófisis y la síntesis de factores liberadores hipotalámicos.",
                "Aumenta la secreción adenohipofisaria de GH y gonadotropinas, mientras se suprime por completo la liberación de prolactina."
            ],
            "respuesta": 1,
            "puntaje": 3,
            "explicacion": "El sistema porta hipofisario transporta las hormonas liberadoras e inhibidoras desde la eminencia media hasta la adenohipófisis (controlando ACTH, TSH, GH, FSH, LH y prolactina; esta última aumenta al perder el freno dopaminérgico). En cambio, oxitocina y vasopresina viajan por transporte axonal directo hacia la neurohipófisis."
        },
        {
            "id": "p2",
            "pregunta": "Respecto al transporte activo de yoduro ($I^-$) hacia el interior de la célula folicular tiroidea, ¿qué mecanismo molecular impulsa este paso contra su gradiente electroquímico?",
            "opciones": [
                "Un cotransportador apical acoplado a cloruro (pendrina) que intercambia yoduro luminal por bicarbonato intracelular.",
                "Una bomba ATPasa primaria de yoduro ubicada en la membrana apical que hidroliza ATP para concentrar yodo en el coloide.",
                "Un simportador basolateral $Na^+/I^-$ (NIS) impulsado por el gradiente de sodio generado por la bomba $Na^+/K^+$-ATPasa.",
                "Un canal de difusión facilitada basolateral estimulado directamente por la hormona liberadora de tirotropina (TRH)."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "La captación de yoduro en la membrana basolateral del tirocito ocurre mediante transporte activo secundario a través del simportador $Na^+/I^-$ (NIS), impulsado por el gradiente electroquímico de $Na^+$ que mantiene la $Na^+/K^+$-ATPasa basolateral y estimulado por la TSH."
        },
        {
            "id": "p3",
            "pregunta": "Un paciente presenta una lesión hipotalámica selectiva que compromete las neuronas del sistema parvocelular. ¿Cuál de las siguientes hormonas verá disminuida su secreción?",
            "opciones": [
                "La hormona estimulante de la tiroides (TSH) sintetizada y secretada por las células tirotropas de la adenohipófisis.",
                "La oxitocina liberada desde las terminales axonales hacia los capilares fenestrados de la neurohipófisis posterior.",
                "La vasopresina (ADH) almacenada en los cuerpos de Herring y vertida directamente a la circulación sistémica.",
                "La adrenalina sintetizada por las células cromafines de la médula suprarrenal en respuesta al estrés agudo."
            ],
            "respuesta": 0,
            "puntaje": 3,
            "explicacion": "Las neuronas parvocelulares hipotalámicas proyectan hacia la eminencia media y secretan neurohormonas tróficas (como TRH, CRH y GnRH) al sistema porta para regular la adenohipófisis; por ello, su lesión reduce la secreción de hormonas adenohipofisarias como la TSH."
        },
        {
            "id": "p4",
            "pregunta": "En el mecanismo de acción celular de las hormonas tiroideas sobre sus tejidos diana, ¿por qué la triyodotironina ($T_3$) posee una potencia biológica muy superior a la tiroxina ($T_4$)?",
            "opciones": [
                "Porque la $T_3$ se une con alta afinidad a receptores acoplados a proteína $G_s$ en el sarcolema, elevando el AMPc citosólico.",
                "Porque la $T_4$ carece de transportadores transmembrana en los tejidos periféricos y permanece confinada al espacio intravascular.",
                "Porque la $T_3$ fosforila directamente enzimas mitocondriales mediante actividad tirosina quinasa intrínseca sin entrar al núcleo.",
                "Porque los receptores nucleares tiroideos (TR) presentan una afinidad diez veces mayor por la $T_3$ para regular la transcripción génica."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "Las hormonas tiroideas atraviesan la membrana plasmática mediante transportadores específicos (como MCT8) y actúan principalmente a nivel genómico uniéndose a receptores nucleares (TR) que forman heterodímeros con RXR; dichos receptores tienen una afinidad unas 10 veces mayor por $T_3$ que por $T_4$."
        },
        {
            "id": "p5",
            "pregunta": "En el control por retroalimentación de asa larga del eje hipotálamo-hipófisis-tiroides, ¿cómo regulan las hormonas tiroideas circulantes la secreción de los niveles superiores?",
            "opciones": [
                "La TSH hipofisaria inhibe directamente las células foliculares tiroideas para frenar la endocitosis de tiroglobulina.",
                "Las fracciones libres de $T_3$ y $T_4$ inhiben tanto la secreción de TSH en la hipófisis como la de TRH en el hipotálamo.",
                "La $T_4$ libre inhibe exclusivamente al hipotálamo, mientras que la TSH ejerce retroalimentación positiva sobre la tiroides.",
                "La tiroglobulina circulante bloquea los receptores de TRH en la adenohipófisis sin modificar la descarga hipotalámica."
            ],
            "respuesta": 1,
            "puntaje": 3,
            "explicacion": "En la retroalimentación negativa de asa larga del eje tiroideo, las hormonas periféricas libres ($T_3$ y $T_4$, tras conversión intracelular de $T_4$ a $T_3$ por desiodinasa tipo 2) inhiben tanto la transcripción y liberación de TSH en la adenohipófisis como la síntesis de TRH en el núcleo paraventricular."
        },
        {
            "id": "p6",
            "pregunta": "Al analizar los perfiles hormonales del eje hipotálamo-hipófisis-suprarrenal, ¿qué hallazgo permite distinguir un síndrome de Cushing de origen hipofisario (enfermedad de Cushing) de un adenoma suprarrenal productor de cortisol?",
            "opciones": [
                "En el adenoma suprarrenal tanto el cortisol plasmático como la ACTH se encuentran marcadamente elevados por pérdida de control.",
                "En la enfermedad de Cushing el cortisol plasmático se encuentra disminuido mientras la ACTH permanece suprimida e indetectable.",
                "En la enfermedad de Cushing la ACTH está normal o elevada pese al exceso de cortisol, mientras en el adenoma adrenal está suprimida.",
                "En ambos trastornos la ACTH plasmática se encuentra suprimida por debajo de lo normal debido a la retroalimentación negativa."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "En la enfermedad de Cushing (adenoma hipofisario secretor de ACTH), el exceso de ACTH impulsa la hipersecreción de cortisol (ACTH-dependiente). En cambio, un tumor primario de la corteza suprarrenal secreta cortisol de forma autónoma (ACTH-independiente), suprimiendo por retroalimentación negativa la secreción hipofisaria de ACTH."
        },
        {
            "id": "p7",
            "pregunta": "En la organización funcional del hipotálamo endocrino, ¿cuál es la diferencia clave entre el sistema magnocelular y el sistema parvocelular?",
            "opciones": [
                "El sistema magnocelular proyecta axones a la neurohipófisis, mientras el parvocelular secreta factores al sistema porta hipofisario.",
                "El sistema magnocelular libera factores tróficos al sistema porta, mientras el parvocelular vierte hormonas en la neurohipófisis.",
                "El sistema parvocelular sintetiza oxitocina y vasopresina, mientras el magnocelular controla exclusivamente la secreción de TSH.",
                "El sistema magnocelular regula la médula adrenal vía nervio esplácnico, mientras el parvocelular inerva la corteza suprarrenal."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "Las neuronas magnocelulares (núcleos supraóptico y paraventricular) envían axones largos por el tracto hipotálamo-hipofisario hasta la neurohipófisis para liberar ADH y oxitocina. Las neuronas parvocelulares terminan en la eminencia media, liberando hormonas hipofisiotrópicas hacia la red capilar porta."
        },
        {
            "id": "p8",
            "pregunta": "En la esteroidogénesis de la corteza suprarrenal, ¿qué limitación enzimática impide que la zona glomerulosa sintetice cortisol o andrógenos suprarrenales?",
            "opciones": [
                "La ausencia de la enzima colesterol desmolasa (CYP11A1), que impide convertir el colesterol en pregnenolona mitocondrial.",
                "La ausencia de la enzima 21-hidroxilasa (CYP21A2), que bloquea la conversión de progesterona en desoxicorticosterona.",
                "La ausencia de la enzima 3-beta-hidroxiesteroide deshidrogenasa, que impide sintetizar esteroides con grupo cetona en carbono 3.",
                "La ausencia de la enzima 17-alfa-hidroxilasa (CYP17), que impide hidroxilar la pregnenolona y progesterona en posición 17."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "La zona glomerulosa carece de la enzima 17-alfa-hidroxilasa (CYP17), necesaria para formar 17-hidroxipregnenolona y 17-hidroxiprogesterona (precursores del cortisol y de los andrógenos DHEA y androstenediona), pero expresa aldosterona sintasa (CYP11B2), especializándose exclusivamente en mineralocorticoides."
        },
        {
            "id": "p9",
            "pregunta": "Durante la respuesta aguda al estrés, ¿qué mecanismo desencadena directamente la exocitosis de adrenalina y noradrenalina desde las células cromafines de la médula suprarrenal?",
            "opciones": [
                "La unión de ACTH hipofisaria a receptores MC2R de membrana que activan la adenilato ciclasa y abren canales de potasio.",
                "La liberación de acetilcolina por fibras simpáticas preganglionares sobre receptores nicotínicos neuronales ($N_N$), entrando calcio.",
                "El estiramiento mecánico de los sinusoides medulares inducido por el aumento del flujo sanguíneo cortical rico en aldosterona.",
                "La activación de receptores muscarínicos $M_2$ por fibras parasimpáticas vagales que despolarizan la membrana cromafín."
            ],
            "respuesta": 1,
            "puntaje": 3,
            "explicacion": "Las células cromafines de la médula adrenal son equivalentes a neuronas simpáticas postganglionares modificadas inervadas por fibras simpáticas preganglionares colinérgicas (nervio esplácnico). La acetilcolina activa receptores nicotínicos ($N_N$), despolariza la célula, abre canales de $Ca^{2+}$ dependientes de voltaje y dispara la exocitosis de catecolaminas."
        },
        {
            "id": "p10",
            "pregunta": "Un incremento brusco de la osmolaridad plasmática detectado por los osmorreceptores hipotalámicos provocará como respuesta neuroendocrina directa:",
            "opciones": [
                "La inhibición de la síntesis de vasopresina en el núcleo supraóptico para favorecer la diuresis acuosa compensatoria.",
                "La liberación de vasopresina desde la adenohipófisis hacia el sistema porta para estimular la secreción de aldosterona.",
                "La despolarización de neuronas magnocelulares y la exocitosis de vasopresina desde las terminales de la neurohipófisis.",
                "La activación de neuronas parvocelulares que secretan factor inhibidor de la vasopresina hacia la eminencia media."
            ],
            "respuesta": 2,
            "puntaje": 3,
            "explicacion": "El aumento de la osmolaridad efectiva del plasma deshidrata y contrae las neuronas osmorreceptoras del órgano vasculoso de la lámina terminal (OVLT) y órgano subfornical, estimulando el disparo de las neuronas magnocelulares supraópticas y paraventriculares para liberar ADH en la neurohipófisis."
        }
    ]
},
// Examen 2
{
    idExamen: "e2",
    tituloExamen: "Examen 2",
    preguntas: [
        {
            "id": "p1",
            "pregunta": "En la organización neuroendocrina del hipotálamo, ¿qué diferencia anatómica y funcional distingue al sistema magnocelular del sistema parvocelular?",
            "opciones": [
                "El sistema magnocelular libera factores tróficos al sistema porta hipofisario, mientras el parvocelular proyecta hacia la neurohipófisis.",
                "Ambos sistemas proyectan hacia el lóbulo posterior de la hipófisis, diferenciándose únicamente en el tamaño de sus vesículas secretoras.",
                "El sistema magnocelular proyecta axones hacia la neurohipófisis, mientras el parvocelular secreta hormonas hacia el sistema porta.",
                "El sistema parvocelular libera oxitocina a la circulación sistémica, mientras el magnocelular regula la secreción de prolactina."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "Las neuronas magnocelulares de los núcleos supraóptico y paraventricular extienden sus axones hasta la neurohipófisis para liberar ADH y oxitocina a la sangre. Las neuronas parvocelulares terminan en la eminencia media y vierten factores liberadores o inhibidores en el sistema porta hipofisario."
        },
        {
            "id": "p2",
            "pregunta": "Durante la biosíntesis de hormonas tiroideas en el folículo tiroideo, ¿qué reacciones cataliza la enzima tiroidoperoxidasa (TPO) en la membrana apical?",
            "opciones": [
                "El cotransporte basolateral de sodio y yoduro hacia el citosol y la posterior salida pasiva de yoduro hacia el espacio coloide.",
                "La oxidación del yoduro, la organificación de residuos de tirosina en la tiroglobulina y el acoplamiento de yodotirosinas.",
                "La proteólisis lisosomal de las gotas de coloide endocitadas y la liberación de $T_3$ y $T_4$ hacia los capilares fenestrados.",
                "La desiodación de las monoyodotirosinas y diyodotirosinas residuales para reciclar el yodo libre dentro de la célula folicular."
            ],
            "respuesta": 1,
            "puntaje": 4,
            "explicacion": "En la interfase apical entre el tirocito y el coloide, la tiroidoperoxidasa (TPO) utiliza peróxido de hidrógeno ($H_2O_2$) para oxidar el yoduro ($I^-$), unirlo a residuos tirosilo de la tiroglobulina (organificación formando MIT y DIT) y acoplar MIT con DIT o dos DIT para formar $T_3$ y $T_4$."
        },
        {
            "id": "p3",
            "pregunta": "Al unirse la hormona estimulante de la tiroides (TSH) a su receptor en la membrana basolateral del tirocito, ¿qué cascada de señalización intracelular se activa principalmente?",
            "opciones": [
                "La vía de la fosfolipasa C mediada por proteína $G_q$, que incrementa el calcio citosólico para bloquear la endocitosis de coloide.",
                "La vía de la guanilato ciclasa de membrana, que eleva el GMP cíclico para inhibir la expresión del simportador basolateral NIS.",
                "La vía de tirosina quinasa intrínseca del receptor, que fosforila factores nucleares para frenar la síntesis de tiroglobulina.",
                "La vía de la adenilato ciclasa mediada por proteína $G_s$, que eleva el AMPc para estimular todas las etapas de síntesis y secreción."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "El receptor de TSH pertenece a la familia de receptores acoplados a proteína $G_s$. Su activación incrementa el AMPc intracelular y activa la PKA, estimulando la captación de yoduro, la síntesis de tiroglobulina y TPO, la endocitosis del coloide, la proteólisis y el crecimiento folicular."
        },
        {
            "id": "p4",
            "pregunta": "En la corteza suprarrenal, ¿qué enzima restringe la síntesis de aldosterona exclusivamente a la zona glomerulosa, diferenciándola funcionalmente de las zonas fasciculata y reticularis?",
            "opciones": [
                "La aldosterona sintasa (CYP11B2), que cataliza los pasos finales de oxidación sobre la corticosterona en la zona glomerulosa.",
                "La 17-alfa-hidroxilasa (CYP17), que convierte la pregnenolona en precursores exclusivos de los mineralocorticoides suprarrenales.",
                "La 11-beta-hidroxiesteroide deshidrogenasa tipo 2, que protege al receptor de mineralocorticoides frente a la unión del cortisol.",
                "La 21-beta-hidroxilasa (CYP21A2), cuya expresión se limita estrictamente a las mitocondrias de la cápsula subglomerulosa."
            ],
            "respuesta": 0,
            "puntaje": 5,
            "explicacion": "La zona glomerulosa es la única capa cortical que expresa la enzima aldosterona sintasa (CYP11B2), responsable de convertir la corticosterona en aldosterona; las zonas fasciculata y reticularis carecen de CYP11B2 pero expresan CYP17, orientando su vía hacia cortisol y andrógenos."
        },
        {
            "id": "p5",
            "pregunta": "Al evaluar el eje hipotálamo-hipófisis-suprarrenal en un paciente con insuficiencia corticosuprarrenal primaria (enfermedad de Addison), ¿qué perfil hormonal plasmático se observa?",
            "opciones": [
                "Cortisol plasmático elevado y ACTH plasmática elevada debido a la pérdida de sensibilidad en los receptores hipofisarios.",
                "Cortisol plasmático disminuido y ACTH plasmática marcadamente disminuida por fallo primario en las células corticotropas.",
                "Cortisol plasmático disminuido y ACTH plasmática marcadamente elevada por pérdida de la retroalimentación negativa hipofisaria.",
                "Cortisol plasmático normal y ACTH plasmática elevada por compensación hipertrofiante de la zona fasciculata suprarrenal."
            ],
            "respuesta": 2,
            "puntaje": 5,
            "explicacion": "En la insuficiencia suprarrenal primaria (enfermedad de Addison), la destrucción de la corteza adrenal impide sintetizar cortisol. La ausencia de cortisol elimina el freno por retroalimentación negativa sobre el hipotálamo y la adenohipófisis, elevando intensamente la CRH y la ACTH."
        },
        {
            "id": "p6",
            "pregunta": "En la médula suprarrenal, ¿qué requisito enzimático y hormonal permite a las células cromafines convertir la noradrenalina en adrenalina?",
            "opciones": [
                "La enzima dopamina beta-hidroxilasa vesicular, cuya actividad es estimulada directamente por la angiotensina II circulante.",
                "La enzima feniletanolamina N-metiltransferasa (PNMT), cuya expresión es inducida por las altas concentraciones locales de cortisol.",
                "La enzima monoamino oxidasa (MAO) mitocondrial, que metila el grupo amino terminal en presencia de aldosterona cortical.",
                "La enzima tirosina hidroxilasa citosólica, cuya transcripción depende de la descarga vagal colinérgica sobre la médula adrenal."
            ],
            "respuesta": 1,
            "puntaje": 5,
            "explicacion": "La síntesis de adrenalina a partir de noradrenalina requiere la enzima citosólica feniletanolamina N-metiltransferasa (PNMT). La expresión del gen de la PNMT depende de las elevadas concentraciones de cortisol que bañan la médula a través de los sinusoides provenientes de la corteza suprarrenal."
        },
        {
            "id": "p7",
            "pregunta": "¿Cómo actúan las desiodinasas periféricas de tipo 1 y tipo 2 sobre la tiroxina ($T_4$) secretada por la glándula tiroides hacia la circulación?",
            "opciones": [
                "Retiran un átomo de yodo del anillo interno de la $T_4$ para convertirla en triyodotironina inversa ($rT_3$) biológicamente inactiva.",
                "Conjugan la $T_4$ libre con ácido glucurónico en el hepatocito para facilitar su excreción biliar y regular su vida media.",
                "Acoplan un residuo adicional de yodo al anillo fenólico de la $T_4$ para estabilizar su unión a la globulina fijadora (TBG).",
                "Retiran un átomo de yodo del anillo externo de la $T_4$ para convertirla en triyodotironina ($T_3$), la forma hormonal más activa."
            ],
            "respuesta": 3,
            "puntaje": 4,
            "explicacion": "Aunque la tiroides secreta mayoritariamente $T_4$, alrededor del 80% de la $T_3$ circulante se genera en los tejidos periféricos mediante las desiodinasas tipo 1 y tipo 2, que realizan una 5'-desiodación en el anillo externo. En cambio, la desiodinasa tipo 3 actúa en el anillo interno generando $rT_3$ inactiva."
        },
        {
            "id": "p8",
            "pregunta": "En la regulación fisiológica de la zona glomerulosa de la corteza suprarrenal, ¿cuáles son los dos estímulos principales más potentes para la secreción de aldosterona?",
            "opciones": [
                "La angiotensina II (activada por hipovolemia) y la hiperpotasemia plasmática directa sobre las células glomerulosas.",
                "La hormona adrenocorticotropa (ACTH) hipofisaria y la hiponatremia severa detectada por osmorreceptores corticales.",
                "El péptido natriurético auricular (ANP) y la hiperosmolaridad plasmática inducida por restricción hídrica prolongada.",
                "La descarga simpática directa sobre receptores beta-2 glomerulosos y el incremento agudo de la presión arterial media."
            ],
            "respuesta": 0,
            "puntaje": 4,
            "explicacion": "La secreción de aldosterona está controlada principalmente por la angiotensina II (vía receptores $AT_1$ y fosfolipasa C) y por el aumento del potasio plasmático (que despolariza la membrana glomerulosa y abre canales de $Ca^{2+}$). La ACTH solo ejerce un efecto permisivo o agudo transitorio."
        },
        {
            "id": "p9",
            "pregunta": "Desde el punto de vista metabólico, ¿cuál de los siguientes conjuntos de acciones periféricas es estimulado directamente por el cortisol en respuesta al estrés?",
            "opciones": [
                "Aumenta la captación muscular de glucosa, estimula la síntesis proteica y frena la lipólisis en los adipocitos.",
                "Inhibe la gluconeogénesis hepática, estimula la glucogenogénesis y aumenta la sensibilidad periférica a la insulina.",
                "Estimula la gluconeogénesis hepática, promueve la proteólisis muscular y favorece la lipólisis en el tejido adiposo.",
                "Promueve la proliferación de fibroblastos, acelera la síntesis de colágeno y potencia la respuesta inmunitaria celular."
            ],
            "respuesta": 2,
            "puntaje": 4,
            "explicacion": "El cortisol moviliza sustratos energéticos durante el estrés y el ayuno: induce enzimas clave de la gluconeogénesis hepática (como PEPCK), promueve la degradación proteica en el músculo para aportar aminoácidos gluconeogénicos, facilita la lipólisis y reduce la sensibilidad periférica a la insulina."
        },
        {
            "id": "p10",
            "pregunta": "En un paciente con hipertiroidismo primario autoinmune (enfermedad de Graves-Basedow), ¿qué patrón bioquímico caracteriza al eje hipotálamo-hipófisis-tiroides?",
            "opciones": [
                "Concentraciones elevadas de $T_3$ y $T_4$ libres acompañadas de una TSH sérica marcadamente elevada por estimulación central.",
                "Concentraciones elevadas de $T_3$ y $T_4$ libres acompañadas de una TSH sérica suprimida por retroalimentación negativa.",
                "Concentraciones disminuidas de $T_3$ y $T_4$ libres acompañadas de una TSH sérica elevada por fallo folicular primario.",
                "Concentraciones disminuidas de $T_3$ y $T_4$ libres acompañadas de una TSH sérica indetectable por lesión hipofisaria."
            ],
            "respuesta": 1,
            "puntaje": 5,
            "explicacion": "En la enfermedad de Graves, los anticuerpos estimulantes del receptor de TSH (TSI) activan de forma autónoma la tiroides, elevando la síntesis y secreción de $T_3$ y $T_4$. Este exceso hormonal ejerce una intensa retroalimentación negativa sobre la adenohipófisis, suprimiendo la TSH sérica."
        }
    ]
}
]};