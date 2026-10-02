/* Contenido del sitio: clases, conceptos, ejemplos, preguntas de repaso, descargas y papers. */
window.RELEASE_BASE = "https://github.com/Senki16/acciones-correctivo-modificativas/releases/download/material-2026-2";
window.CURSO = {
  titulo: "Acciones Correctivo-Modificativas",
  programa: "Especialización en Mantenimiento Industrial",
  universidad: "Universidad EAFIT",
  docente: "Jaime Leonardo Barbosa Pérez",
  periodo: "2026-2",
  objetivo:
    "Estudiar, analizar y evaluar aspectos que permitan desarrollar o mejorar un plan de acciones de mantenimiento basadas en reparaciones (acciones correctivas o modificativas) en máquinas, equipos o servicios, para restablecer su funcionalidad, mantenibilidad, disponibilidad y confiabilidad al mínimo costo posible.",
};

window.CLASES = [
  {
    n: 1,
    slug: "la-maquina",
    titulo: "La máquina",
    subtitulo: "Componentes, funciones y niveles del mantenimiento",
    img: "assets/img/clase1.webp",
    resumen:
      "Qué es el mantenimiento, cómo se organiza en cuatro niveles de decisión y cómo se descompone una máquina en sistemas, mecanismos y elementos. Es la base para describir una falla con precisión.",
    ideas: [
      "El mantenimiento se organiza en cuatro niveles: estratégico, táctico, operacional e instrumental. El curso trabaja el nivel operacional.",
      "La máquina cumple funciones, no tareas: primarias, secundarias, de protección y superfluas.",
      "La falla se mide contra un estándar de funcionamiento dentro de un contexto operacional.",
      "La descomposición en sistemas, mecanismos y elementos organiza el diagnóstico y el repuesto.",
    ],
    conceptos: [
      ["Mantenimiento (EN 13306:2017)", "Combinación de acciones técnicas, administrativas y de gestión durante el ciclo de vida de un elemento, para conservarlo o devolverlo a un estado en el que pueda desempeñar la función requerida."],
      ["Niveles del mantenimiento", "Estratégico (índices C·M·D y objetivos del negocio), táctico (TPM, RCM, centrado en riesgo), operacional (acciones antes y después de la falla) e instrumental (CMMS/EAM, monitoreo, herramientas)."],
      ["Nivel operacional", "Antes de la falla: mantenimiento preventivo y predictivo. Después de la falla: reparaciones, que pueden ser correctivas (desvare, reparación definitiva) o modificativas (mejora, rediseño)."],
      ["Máquina", "Combinación de elementos y mecanismos que transforman, transmiten o emplean energía, carga o movimiento para cumplir funciones específicas."],
      ["Función primaria", "La razón de ser de la máquina, ligada a su nombre: transportar, cortar, moler, bombear."],
      ["Función secundaria", "Funciones menos evidentes pero necesarias: contención, control, integridad estructural, seguridad, apariencia, cumplimiento ambiental."],
      ["Función de protección", "Protege a personas y equipos o reduce las consecuencias de las fallas: guardas, paradas de emergencia, válvulas de alivio, fusibles mecánicos."],
      ["Función superflua", "Función innecesaria en el contexto actual. Añade modos de falla sin añadir valor; eliminarla es una acción modificativa."],
      ["Estándar de funcionamiento", "Prestación mínima aceptable para el usuario, medible (caudal, presión, temperatura). Siempre inferior a la capacidad inicial de diseño."],
      ["Elementos vs. mecanismos", "Elementos: piezas sin función autónoma (ejes, rodamientos, sellos). Mecanismos o dispositivos: conjuntos con función propia (motorreductores, frenos, válvulas)."],
      ["Taxonomía ISO 14224", "Forma normalizada de descomponer el activo para registrar la falla en el nivel correcto y hacer comparable el historial."],
    ],
    ejemplos: [
      ["Transportador de banda", "Función primaria: transportar. Secundarias: contener el material, operar sin derrames. Protección: guardas en poleas y parada de emergencia por cable."],
      ["Ventilador centrífugo", "Sistemas: motriz (motor), transmisión (acople o bandas), soporte (rodamientos y bastidor), lubricación y control (variador)."],
      ["Especificar un tornillo", "Tornillo cabeza hexagonal 5/8\" UNC × 3\" SAE grado 5, galvanizado, con tuerca y arandela; torque de apriete 90 lb·pie."],
    ],
    quiz: [
      { q: "¿En qué nivel del mantenimiento se ubican el desvare, la reparación definitiva, la mejora y el rediseño?", o: ["Estratégico", "Táctico", "Operacional", "Instrumental"], a: 2, e: "Son las acciones posibles después de la falla dentro del nivel operacional." },
      { q: "Una válvula de alivio en un recipiente a presión cumple una función…", o: ["Primaria", "Secundaria", "De protección", "Superflua"], a: 2, e: "Reduce las consecuencias de una falla (sobrepresión): es una función de protección." },
      { q: "El estándar de funcionamiento de un equipo debe ser…", o: ["Igual a la capacidad de diseño", "Medible y definido por el usuario", "Fijado por el fabricante", "Opcional si el equipo es nuevo"], a: 1, e: "Es la prestación mínima aceptable para el usuario y debe poder medirse." },
      { q: "¿Cuál de estos es un mecanismo o dispositivo y no un elemento?", o: ["Rodamiento", "Eje", "Motorreductor", "Chaveta"], a: 2, e: "El motorreductor es un conjunto con función propia; los demás son elementos." },
      { q: "Eliminar una función superflua de una máquina es…", o: ["Un desvare", "Una acción modificativa", "Mantenimiento predictivo", "Una falla oculta"], a: 1, e: "Cambia la configuración original para quitar modos de falla sin valor." },
    ],
  },
  {
    n: 2,
    slug: "fallas-y-danos",
    titulo: "Fallas y daños",
    subtitulo: "Clasificación, modos y consecuencias",
    img: "assets/img/clase2.webp",
    resumen:
      "Qué es una falla, por qué ocurre, cómo se clasifica según distintos criterios y qué consecuencias produce. Distingue falla, daño, síntoma, causa y consecuencia con casos reales.",
    ideas: [
      "La falla es una desviación medible frente a un estándar de funcionamiento.",
      "Toda falla tiene una cadena causal: causa → daño → falla → síntoma → consecuencia.",
      "Los criterios de clasificación no compiten: cada uno responde una pregunta distinta sobre la misma falla.",
      "La categoría de la consecuencia, no el tamaño del componente, define la urgencia.",
    ],
    conceptos: [
      ["Falla (IEC 60050-192)", "Pérdida de la capacidad de un elemento para cumplir la función requerida. Es una desviación frente al estándar de funcionamiento."],
      ["Daño", "Alteración física de un elemento por esfuerzos o pérdida de material (fractura, deformación, desgaste, corrosión) que puede originar una falla."],
      ["Modos de falla", "Total, parcial, intermitente, gradual, en el desempeño y múltiple."],
      ["Evidente / oculta", "Evidente: el operador la detecta en operación normal. Oculta: no se manifiesta hasta que ocurre otra falla; típica de dispositivos de protección."],
      ["Esporádica / crónica", "Esporádica: desviación apreciable, poco frecuente, fácil de controlar. Crónica: pequeña, frecuente, difícil de ver y aceptada como «normal»."],
      ["Progresiva / repentina", "Progresiva: se acumula con el tiempo y da aviso. Repentina: aparece sin eventos previos perceptibles."],
      ["Limitación parcial / total", "Parcial: el equipo opera con menor capacidad. Total: pierde por completo la función."],
      ["Periodo de ocurrencia", "Infantiles (montaje, fabricación), aleatorias (eventos externos), por desgaste (fin de vida) y reiterativas (vuelven tras repararse)."],
      ["Curva de la bañera", "Mortalidad infantil, vida útil con tasa constante y envejecimiento. Nowlan & Heap mostraron seis patrones reales; la mayoría no presenta desgaste por edad."],
      ["Severidad (ISO 14224)", "Crítica, degradada, incipiente y desconocida. Describe el estado de la falla en un momento dado."],
      ["Consecuencias", "Operacionales, no operacionales, de seguridad y entorno, y de fallas ocultas."],
    ],
    ejemplos: [
      ["Una falla, todos los criterios", "Desconchado por fatiga en un rodamiento de ventilador: evidente, esporádica, progresiva, de parcial a total, por desgaste, de degradada a crítica."],
      ["Falla oculta", "Válvula de alivio pegada: no hay consecuencia hasta que sube la presión; entonces puede haber una explosión."],
      ["Falla reiterativa", "Correas que se cambian cada mes porque las poleas siguen desalineadas: se repara el síntoma, no la causa."],
      ["Casos reales del curso", "Avianca (fallas de motor), parque eólico (caída de palas), Concorde AF4590, LATAM en Rionegro y teleférico de Monserrate."],
    ],
    quiz: [
      { q: "Una válvula de alivio que está pegada y nadie lo sabe es una falla…", o: ["Evidente", "Oculta", "Esporádica", "Infantil"], a: 1, e: "No se manifiesta en operación normal; solo aparece cuando se necesita la protección." },
      { q: "Pequeñas paradas frecuentes que el equipo de planta ya considera «normales» son fallas…", o: ["Esporádicas", "Crónicas", "Repentinas", "Críticas"], a: 1, e: "Las crónicas son pequeñas, frecuentes y difíciles de apreciar." },
      { q: "Un motor nuevo que se recalienta a los pocos días por desalineación en el montaje presenta una falla…", o: ["Infantil", "Aleatoria", "Por desgaste", "Superflua"], a: 0, e: "Se relaciona con instalación o fabricación: zona de mortalidad infantil." },
      { q: "¿Cuál es el orden correcto de la cadena de la falla?", o: ["Síntoma → causa → daño → falla", "Causa → daño → falla → síntoma → consecuencia", "Falla → causa → daño → consecuencia", "Daño → síntoma → causa → falla"], a: 1, e: "La causa inicia el daño; el daño acumulado produce la falla, que se percibe por un síntoma y genera consecuencias." },
      { q: "Una bomba que entrega 15 % menos caudal pero sigue operando está en severidad…", o: ["Crítica", "Degradada", "Incipiente", "Desconocida"], a: 1, e: "Cumple la función por debajo del estándar: degradada." },
    ],
  },
  {
    n: 3,
    slug: "diagnostico-de-fallos",
    titulo: "Diagnóstico de fallos",
    subtitulo: "Averías en componentes y herramientas de análisis",
    img: "assets/img/clase3.webp",
    resumen:
      "Análisis de averías en rodamientos, cojinetes, engranajes, acoples y sellos mecánicos; averías en bombas, compresores, motores y turbinas; mecanismos de desgaste y herramientas: ficha de averías, Pareto, Ishikawa, árbol de fallos y matriz de criterios.",
    ideas: [
      "Diagnosticar es pasar del síntoma al mecanismo y del mecanismo a la causa.",
      "Cerca del 70 % de las fallas en máquinas se debe a degradación superficial (desgaste).",
      "Cada huella física apunta a una causa distinta y, por tanto, a una acción distinta.",
      "Las herramientas ordenan el análisis: Pareto prioriza, Ishikawa abre causas, el árbol de fallos estructura y la matriz decide.",
    ],
    conceptos: [
      ["Metodología de diagnóstico", "Recopilar síntomas → formular hipótesis → analizar relaciones → definir acción."],
      ["Modos de daño en rodamientos (ISO 15243)", "Fatiga, desgaste, corrosión, erosión eléctrica, deformación plástica y fractura."],
      ["Mecanismos de desgaste", "Adhesión, abrasión, erosión, fatiga superficial, corrosión, cavitación y ludimiento (fretting)."],
      ["Cavitación", "Formación y colapso de burbujas de vapor cuando la presión local cae por debajo de la de vapor; deja picaduras en el impulsor."],
      ["Sellos mecánicos (API 682)", "Concentran el mayor número de fallos en bombas de proceso; la selección inadecuada es la causa principal."],
      ["Ficha de análisis de averías", "Registro de identificación, tipo de avería, consecuencias, diagnóstico (causas intrínsecas y extrínsecas) y solución."],
      ["Diagrama de Pareto", "Ordena las causas por impacto: pocas causas concentran la mayoría de las pérdidas (regla 80/20)."],
      ["Diagrama de Ishikawa", "Causa-efecto o espina de pescado; agrupa causas por familias (6M: método, mano de obra, máquina, materiales, medio ambiente, medición)."],
      ["Árbol de fallos", "Representación lógica desde el evento no deseado hacia sus causas básicas con compuertas O (basta una) e Y (se requieren todas)."],
      ["Matriz de criterios", "Evalúa alternativas con criterios ponderados (costo, rapidez, efectividad, facilidad) para elegir la mejor solución."],
    ],
    ejemplos: [
      ["Bomba que perdió caudal", "Síntoma: ruido de grava. Mecanismo: cavitación. Causa: filtro de succión obstruido al 70 %. Acción: limpieza y manómetro diferencial."],
      ["Ishikawa aplicado", "Correas que se rompen cada mes: la causa verificada con alineador láser fue una desalineación angular de 0,8° entre poleas."],
      ["Matriz de criterios", "Sello de cartucho con plan de lavado obtiene 46 de 55 puntos frente a cambiar el sello igual (35) o empaquetadura (33)."],
    ],
    quiz: [
      { q: "Estrías regulares en la pista de un rodamiento de un motor con variador indican…", o: ["Falta de lubricante", "Paso de corriente eléctrica", "Sobrecarga axial", "Montaje con golpes"], a: 1, e: "Es erosión eléctrica (fluting), frecuente con variadores de frecuencia." },
      { q: "En un árbol de fallos, una compuerta Y significa que…", o: ["Basta una entrada para que ocurra el evento", "Deben ocurrir todas las entradas", "El evento es oculto", "La causa es humana"], a: 1, e: "La compuerta Y exige todas sus entradas; la O, solo una." },
      { q: "¿Qué herramienta usaría primero para decidir en qué fallas concentrar el esfuerzo?", o: ["Ishikawa", "Pareto", "Árbol de fallos", "Ficha de avería"], a: 1, e: "Pareto prioriza por impacto (horas, costo, frecuencia)." },
      { q: "El ruido «de grava» en la succión de una bomba centrífuga sugiere…", o: ["Desalineación", "Cavitación", "Corrosión", "Desbalanceo"], a: 1, e: "Es el síntoma típico de cavitación." },
      { q: "En la ficha de averías, «no existía rutina de limpieza del filtro» es una causa…", o: ["Intrínseca", "Extrínseca", "Aleatoria", "De diseño"], a: 1, e: "Proviene de la gestión del mantenimiento, no del material: es extrínseca." },
    ],
  },
  {
    n: 4,
    slug: "acciones-correctivas",
    titulo: "Acciones correctivas",
    subtitulo: "Desvare, reparación definitiva y técnicas de recuperación",
    img: "assets/img/clase4.webp",
    resumen:
      "Cómo decidir el tipo de reparación después de una falla, en qué se diferencian el desvare y la reparación correcta y definitiva, qué actividades comprende una reparación definitiva y qué técnicas existen para recuperar partes.",
    ideas: [
      "Toda decisión posterior a la falla termina en desvare, reparación definitiva, mejora o rediseño.",
      "El desvare devuelve la operación, no el estándar: debe registrarse con fecha para la reparación definitiva.",
      "La reparación definitiva exige conocer la causa: detección, análisis, partes, ejecución, pruebas y guía.",
      "La técnica de recuperación se elige según el material base, el mecanismo de desgaste y la geometría.",
    ],
    conceptos: [
      ["Acción correctiva", "Reparación que recupera la funcionalidad del elemento o sistema después de la pérdida de su capacidad."],
      ["Desvare", "Reparación inmediata que devuelve la operación, no necesariamente el estándar. No debe crear condiciones para otras fallas."],
      ["Reparación correcta y definitiva", "Devuelve el equipo a sus condiciones estándar; requiere conocer la causa y tener procedimiento, materiales y personal."],
      ["Preguntas clave", "¿Tipo de falla? ¿Consecuencia (función, seguridad, ambiente)? ¿Se requiere reparación inmediata? ¿Hay elementos disponibles?"],
      ["Diagrama de decisiones", "La ruta cambia según si se requiere reparación inmediata, si se admite solución provisional y si la falla es reiterativa."],
      ["FMECA y RCFA", "Análisis de modos, efectos, causas y criticidad; análisis de causa raíz en eventos específicos."],
      ["Análisis de la falla", "Antecedentes, examen preliminar, muestras, ensayos (dureza, macro y microscópico), metalografía y análisis de evidencias."],
      ["Guía de reparación", "Instructivo con identificación del equipo, secuencia, materiales, herramientas, personal, seguridad y tiempo."],
      ["Técnicas de recuperación", "Recubrimientos con soldadura, por metalización (proyección térmica), con adhesivos químicos y cerámicos."],
      ["Recuperación con soldadura", "Análisis de la falla → metal base → aleación → sistema de aplicación → técnica (preparación, precalentamiento, enfriamiento)."],
    ],
    ejemplos: [
      ["Misma falla, dos decisiones", "Fuga en el sello de una bomba de caldera: con respaldo se programa la reparación definitiva; sin respaldo ni repuesto, desvare controlado."],
      ["Desvares que dañan", "Cinta sobre una manguera hidráulica, fusible de mayor capacidad o puentear un presostato: trasladan el riesgo."],
      ["Rotura de un eje", "Marcas de playa y radio de acuerdo casi nulo: fatiga iniciada por concentrador de esfuerzos. Eje nuevo con radio especificado."],
      ["Molde recuperado con soldadura", "Grieta por fatiga térmica: ranurado, precalentamiento, aporte TIG, enfriamiento lento, mecanizado e inspección con tintas."],
    ],
    quiz: [
      { q: "La diferencia esencial entre desvare y reparación definitiva es que el desvare…", o: ["Es más caro", "Devuelve la operación pero no necesariamente el estándar", "Solo se usa en equipos eléctricos", "Requiere análisis de causa raíz"], a: 1, e: "El desvare sale del paso; la definitiva restituye las condiciones estándar." },
      { q: "¿Cuál de estos NO es un desvare aceptable?", o: ["Grapas mecánicas en una banda rota", "Masilla epóxica en fuga de agua de baja presión", "Cinta sobre una manguera hidráulica de alta presión", "Abrazadera de reparación en tubería de servicio"], a: 2, e: "Una manguera de alta presión no admite desvare: riesgo de inyección de fluido." },
      { q: "Si la falla es reiterativa, el diagrama de decisiones lleva a…", o: ["Desvare", "Reparación correcta", "Acción modificativa", "Cerrar la orden"], a: 2, e: "Si vuelve a ocurrir, hay que cambiar las condiciones originales." },
      { q: "Marcas de playa en la superficie de fractura de un eje indican…", o: ["Sobrecarga única", "Fatiga", "Corrosión", "Fragilización por hidrógeno"], a: 1, e: "Son la huella del avance progresivo de una grieta por fatiga." },
      { q: "Para recuperar el diámetro de un eje sin deformarlo por calor, una técnica adecuada es…", o: ["Soldadura con alta entrada de calor", "Metalización o proyección térmica", "Remachado", "Pintura"], a: 1, e: "La metalización aporta material con baja entrada de calor al sustrato." },
    ],
  },
  {
    n: 5,
    slug: "acciones-modificativas",
    titulo: "Acciones modificativas",
    subtitulo: "Mejora, rediseño y proceso de modificación",
    img: "assets/img/clase5.webp",
    resumen:
      "Cuándo lo correctivo no basta, cómo se orientan las modificaciones, en qué se diferencian la mejora y el rediseño, cuáles son las etapas de un proceso de modificación y cómo hacer más eficiente la gestión del nivel operacional.",
    ideas: [
      "Las modificativas son la versión superior de las correctivas: se usan cuando la reparación reiterada no resuelve.",
      "La mejora no cambia la configuración; el rediseño sí, y exige metodologías de diseño.",
      "Sin causa raíz establecida, la modificación es una apuesta.",
      "La evaluación final cierra el ciclo y realimenta el plan de mantenimiento.",
    ],
    conceptos: [
      ["Acción modificativa", "Cambia las condiciones originales del elemento o sistema; se aplica cuando las correctivas no recuperan la funcionalidad o para mejorar los índices C·M·D."],
      ["Índices C·M·D", "Confiabilidad, mantenibilidad y disponibilidad."],
      ["Orientaciones", "Producción (capacidad, productividad, calidad, costos, procesos, nuevos productos), seguridad de las personas y control ambiental."],
      ["Mejora", "Modificación sencilla sin cambios significativos en la configuración: materiales, tratamientos, limitadores de torque, variadores electrónicos, plásticos de ingeniería."],
      ["Rediseño", "Cambio importante respecto al equipo original que aplica metodologías de diseño en ingeniería."],
      ["Proceso de diseño", "Reconocimiento de la necesidad, definición del problema, síntesis, análisis y optimización, evaluación y presentación."],
      ["Etapas de modificación", "Necesidad, datos, problema, alternativas, implicaciones en subsistemas y servicios, costos, implementación, revaloración y evaluación final."],
      ["Cifras de mérito", "Criterios para optimizar alternativas: costo, seguridad, estética, tiempo de ejecución."],
      ["Retorno de la inversión", "Recuperación = inversión ÷ ahorro anual. Compara el costo de la modificación con lo que evita."],
      ["Fallas crónicas", "Pocas causas concentran la mayoría de las horas perdidas: allí se enfoca primero la acción modificativa."],
    ],
    ejemplos: [
      ["Cuando lo correctivo no basta", "Cuatro cambios de rodamiento en diez meses por corrientes de eje del variador: rodamiento aislado y escobilla de puesta a tierra."],
      ["Mejora o rediseño", "Canaleta con desgaste: revestimiento cerámico (mejora) o nueva geometría con caja de piedra (rediseño)."],
      ["Canjilones plásticos", "Inversión de $15,0 M frente a un ahorro anual de $26,7 M: recuperación en unos 7 meses."],
      ["Tornillería por corrosión", "De 5/8\" galvanizado a 1\" inoxidable, verificando sección remanente, par galvánico y agarrotamiento de roscas."],
    ],
    quiz: [
      { q: "¿Qué diferencia una mejora de un rediseño?", o: ["El costo", "La mejora no cambia la configuración; el rediseño sí", "El rediseño no requiere cálculos", "La mejora solo aplica a equipos eléctricos"], a: 1, e: "Es la diferencia esencial planteada en la clase." },
      { q: "Antes de modificar un equipo con fallas reiterativas es indispensable…", o: ["Comprar repuestos", "Establecer la causa raíz", "Cambiar de proveedor", "Aumentar la frecuencia de inspección"], a: 1, e: "Sin causa raíz la modificación es una apuesta." },
      { q: "Reemplazar un fusible mecánico por un limitador de torque es…", o: ["Un desvare", "Una mejora", "Un rediseño", "Mantenimiento predictivo"], a: 1, e: "Es una modificación sencilla que no cambia la configuración del equipo." },
      { q: "Si una modificación cuesta $15 M y ahorra $26,7 M al año, la recuperación es de aproximadamente…", o: ["3 meses", "7 meses", "18 meses", "2 años"], a: 1, e: "15,0 ÷ 26,7 ≈ 0,56 años ≈ 7 meses." },
      { q: "Al 80 % de la velocidad, un ventilador centrífugo con variador requiere cerca de…", o: ["80 % de la potencia", "64 % de la potencia", "51 % de la potencia", "20 % de la potencia"], a: 2, e: "Por las leyes de afinidad, la potencia varía con el cubo de la velocidad: 0,8³ ≈ 0,51." },
    ],
  },
];

/* Ruta de decisión después de la falla (repaso interactivo) */
window.DECISION = {
  inicio: "q1",
  nodos: {
    q1: { t: "¿Se requiere iniciar la reparación inmediatamente?", si: "q2", no: "q3", ayuda: "Piense en la consecuencia: ¿se afecta la función primaria, la seguridad o el ambiente?" },
    q2: { t: "¿Se admite una solución provisional segura?", si: "r_desvare", no: "r_correcta_inm", ayuda: "Un desvare no puede crear condiciones para otras fallas ni trasladar el riesgo a las personas." },
    q3: { t: "Tras el análisis detallado: ¿la falla es reiterativa?", si: "r_modificativa", no: "r_correcta", ayuda: "Reiterativa: ya se reparó antes y volvió a ocurrir por la misma causa." },
    r_desvare: { fin: true, t: "Desvare", d: "Devuelva la operación de forma segura, regístrelo y programe la reparación correcta y definitiva. Luego busque la causa raíz." },
    r_correcta_inm: { fin: true, t: "Reparación correcta y definitiva", d: "Establezca el procedimiento, repare y luego haga el análisis detallado. Si resulta reiterativa, pase a una acción modificativa." },
    r_correcta: { fin: true, t: "Reparación correcta y definitiva programada", d: "Con la causa identificada, establezca el procedimiento, ejecute, verifique y documente la guía de reparación." },
    r_modificativa: { fin: true, t: "Acción modificativa", d: "La reparación repetida no resuelve. Establezca la causa raíz y elija entre mejora (sin cambiar la configuración) o rediseño." },
  },
};

/* Descargas. Los archivos se sirven desde GitHub Releases (ver README). */
window.DESCARGAS = [
  {
    grupo: "Clases actualizadas · 2026",
    desc: "Las cinco clases del curso con los ejemplos nuevos.",
    items: [
      { t: "Clase 1 · La máquina", f: "clase-1-la-maquina", tipos: [["pdf", 8.8], ["pptx", 36.5]] },
      { t: "Clase 2 · Fallas y daños", f: "clase-2-fallas-y-danos", tipos: [["pdf", 6.1], ["pptx", 24.0]] },
      { t: "Clase 3 · Diagnóstico de fallos", f: "clase-3-diagnostico-de-fallos", tipos: [["pdf", 10.5], ["pptx", 34.4]] },
      { t: "Clase 4 · Acciones correctivas", f: "clase-4-acciones-correctivas", tipos: [["pdf", 3.1], ["pptx", 13.6]] },
      { t: "Clase 5 · Acciones modificativas", f: "clase-5-acciones-modificativas", tipos: [["pdf", 1.8], ["pptx", 6.4]] },
    ],
  },
];

/* Papers 2026. v: true = título, autores y fecha verificados en la página de la revista. */
window.PAPERS = [
  { tema: "Análisis de fallas", clase: [2, 3, 4], v: true, t: "Premature Fatigue Fracture of a 42CrMo Centrifugal Pump Shaft in a Power Plant", a: "Xia, H.; Wang, J.; Lv, H. X.; Zhang, Y. H.; Wang, L.; Weng, H. D.; Wu, B.", r: "Journal of Failure Analysis and Prevention", f: "Agosto 2026", doi: "10.1007/s11668-026-02526-2", url: "https://link.springer.com/article/10.1007/s11668-026-02526-2", s: "Eje de bomba roto al año de servicio: material sin el molibdeno requerido, radio de 1,5 mm junto a un agujero (factor de concentración > 4,5) y defectos de maquinado. Ilustra el caso de rotura de eje de la Clase 4." },
  { tema: "Análisis de fallas", clase: [2, 3], v: false, t: "Failure Analysis of a Conveyor Discharge Pulley Shaft in Pellet Plant", a: "—", r: "Journal of Failure Analysis and Prevention", f: "2026", doi: "10.1007/s11668-026-02429-2", url: "https://link.springer.com/article/10.1007/s11668-026-02429-2", s: "Análisis de falla del eje de una polea de descarga de transportador en una planta de pellets. Útil para practicar el procedimiento de análisis de la Clase 4." },
  { tema: "Análisis de fallas", clase: [3], v: true, t: "Development Status and Prospects of Centrifugal Pump Cavitation: A Bibliometric Analysis Using CiteSpace", a: "Yin, X.; Guo, X.; Li, P.; Lin, R.; Feng, B.; Kukareko, V.", r: "Water, 18(6), 668", f: "Marzo 2026", doi: "10.3390/w18060668", url: "https://www.mdpi.com/2073-4441/18/6/668", s: "Revisión de 645 publicaciones sobre cavitación en bombas centrífugas: optimización del diseño, monitoreo, simulación numérica y flujo multifase." },
  { tema: "Análisis de fallas", clase: [3, 5], v: false, t: "Experimental study on the evolution of electro-erosion waves in bearing rollers under current-carrying conditions", a: "—", r: "Science China Technological Sciences", f: "2026", doi: "10.1007/s11431-026-3349-0", url: "https://link.springer.com/article/10.1007/s11431-026-3349-0", s: "Cómo evolucionan las estrías por paso de corriente en rodillos de rodamientos. Relacionado con el caso de rodamientos y variadores de las Clases 3 y 5." },
  { tema: "Diagnóstico con IA", clase: [3], v: true, t: "A review on bearing fault diagnosis methods with emphasis on machine learning and deep learning applications", a: "Dixit, P.; Pingle, P.; Funde, A.; Chaudhary, K.; Kanake, V.", r: "Next Materials, 12", f: "Julio 2026", doi: "10.1016/j.nxmate.2026.102040", url: "https://www.sciencedirect.com/science/article/pii/S2949822826004570", s: "Del procesamiento de señales clásico al aprendizaje profundo para diagnosticar rodamientos." },
  { tema: "Diagnóstico con IA", clase: [3], v: true, t: "Explainable Artificial Intelligence in Rotating Machinery Fault Diagnosis: A Comprehensive Review and Emerging Trends", a: "Tang, S.; Ren, Z.; Zheng, L.; Wang, J.", r: "Sensors, 26(17), 5379", f: "Agosto 2026", doi: "10.3390/s26175379", url: "https://www.mdpi.com/1424-8220/26/17/5379", s: "IA explicable para diagnóstico de máquinas rotativas y la brecha entre el laboratorio y la planta: explicaciones alineadas con los mecanismos físicos de falla." },
  { tema: "Diagnóstico con IA", clase: [3, 4], v: true, t: "Research on Root Cause Analysis Method for Certain Civil Aircraft Based on Ensemble Learning and Large Language Model Reasoning", a: "Du, W.; Du, J.; Zhang, H.; Yang, D.", r: "Machines, 14(3), 322", f: "Marzo 2026", doi: "10.3390/machines14030322", url: "https://www.mdpi.com/2075-1702/14/3/322", s: "Análisis de causa raíz combinando aprendizaje de máquina e IA generativa con restricciones físicas; 97,1 % de exactitud en fallas de motor." },
  { tema: "Diagnóstico con IA", clase: [2, 3], v: false, t: "Exploratory Semantic Reliability Analysis of Wind Turbine Maintenance Logs Using Large Language Models", a: "Malyi et al.", r: "IET Renewable Power Generation", f: "2026", doi: "10.1049/rpg2.70327", url: "https://ietresearch.onlinelibrary.wiley.com/doi/10.1049/rpg2.70327", s: "Uso de modelos de lenguaje para extraer información de confiabilidad de las órdenes de trabajo de aerogeneradores." },
  { tema: "Diagnóstico con IA", clase: [3, 4], v: false, t: "Intelligent Advisor System for Prescriptive Maintenance of Engineered Assets Using FMECA, Knowledge Graph and Machine Learning", a: "Lin et al.", r: "Artificial Intelligence for Engineering", f: "2026", doi: "10.1049/aie2.70019", url: "https://ietresearch.onlinelibrary.wiley.com/doi/10.1049/aie2.70019", s: "Sistema asesor que combina FMECA, grafos de conocimiento y aprendizaje de máquina para recomendar acciones de mantenimiento." },
  { tema: "Recuperación de partes", clase: [4], v: true, t: "Recent Research Developments in Laser Cladding Technology for Mold Steel Repair", a: "Pei, X.; Shen, D.; Zhang, Y.; Liu, G.", r: "Journal of Materials Engineering and Performance", f: "Febrero 2026", doi: "10.1007/s11665-026-13384-2", url: "https://link.springer.com/article/10.1007/s11665-026-13384-2", s: "Revestimiento láser para reparar aceros de moldes: desgaste, corrosión, fatiga térmica, grietas y esfuerzos residuales. Complementa el caso del molde de la Clase 4." },
  { tema: "Recuperación de partes", clase: [4], v: true, t: "Microstructure and Mechanical Properties of Damaged Gray Cast Iron Components Remanufactured by Multi-Pass Laser Cladding for Nuclear Power Plants", a: "Hu, M.; Chen, S.; Xu, K.; Wen, J.; Yuan, T.; Shan, H.; Wang, S.; Wang, S.", r: "Journal of Materials Engineering and Performance, 35(23)", f: "Enero 2026", doi: "10.1007/s11665-026-13293-4", url: "https://link.springer.com/article/10.1007/s11665-026-13293-4", s: "Recuperar fundición gris con láser: al subir la potencia cae la resistencia (179,6 → 144,6 MPa) por fragilización en la zona afectada por el calor." },
  { tema: "Recuperación de partes", clase: [4], v: true, t: "Rare Earth-Enhanced Laser Cladding Metal-Based Coatings: A Review", a: "Xiao, J.; Tao, D.; Zheng, Y.; Yang, J.; Huang, L.; Liu, W.; Fu, H.; Li, Y.; Wang, K.", r: "Materials, 19(16)", f: "Agosto 2026", doi: "10.3390/ma19163504", url: "https://doi.org/10.3390/ma19163504", s: "Óxidos de tierras raras para refinar la microestructura y mejorar dureza, resistencia al desgaste y a la corrosión de recubrimientos láser." },
  { tema: "Recuperación de partes", clase: [4], v: true, t: "Laser Cladding of Wear-Resistant Coatings for Soil-Engaging Components of Agricultural Machinery", a: "Wang, Q.; Zhang, C.; Bai, Q.; Lu, H.; Xu, X.; Cai, J.", r: "Coatings, 16(10), 1165", f: "Octubre 2026", doi: "10.3390/coatings16101165", url: "https://www.mdpi.com/2079-6412/16/10/1165", s: "El diseño del recubrimiento debe responder al modo de falla dominante, no solo buscar la máxima dureza." },
  { tema: "Recuperación de partes", clase: [4], v: true, t: "Developing a Qualification and Testing Framework for Cold Spray Repairs in Aerospace Applications", a: "Stamoulis, K.; Abouhamzeh, M.; Koufis, S.; Bosma, B.; Anderiessen, L.; Pascoe, J.-A.", r: "Engineering Proceedings, 133(1), 178", f: "Mayo 2026", doi: "10.3390/engproc2026133178", url: "https://www.mdpi.com/2673-4591/133/1/178", s: "Marco para calificar reparaciones por proyección en frío según EASA, probado en un soporte de tren de aterrizaje corroído." },
  { tema: "Recuperación de partes", clase: [4], v: true, t: "On the estimates of the strength of a damaged pipeline restored by patching", a: "Shatskyi, I.; Makoviichuk, M.; Bondarenko, R.; Doroshenko, Y.", r: "Procedia Structural Integrity, 81", f: "2026", doi: "10.1016/j.prostr.2026.03.041", url: "https://www.sciencedirect.com/science/article/pii/S245232162600212X", s: "Resistencia de tuberías agrietadas reparadas con mangas compuestas impregnadas en epóxico." },
  { tema: "Recuperación de partes", clase: [4], v: true, t: "How Long Do Composite Pipeline Repairs Really Last?", a: "Whalen, C. (CSNRI)", r: "Pipeline & Gas Journal, 253(7) · artículo técnico", f: "Julio 2026", doi: "", url: "https://pgjonline.com/magazine/2026/july-2026-vol-253-no-7/features/how-long-do-composite-pipeline-repairs-really-last", s: "Más de 30 años de datos: las reparaciones compuestas bien diseñadas pueden durar 25 a 30 años o más." },
  { tema: "Decisión y rediseño", clase: [3, 5], v: true, t: "Maintenance strategy selection for engineering systems based on multi-criteria decision making approach by using bipolar complex fuzzy prioritized aggregation operators", a: "Xu, Z.; Rehman, U. ur; Mahmood, T.; Zeng, S.", r: "Scientific Reports", f: "Abril 2026", doi: "10.1038/s41598-026-45941-z", url: "https://www.nature.com/articles/s41598-026-45941-z", s: "Selección de estrategias de mantenimiento con criterios priorizados bajo incertidumbre: la versión avanzada de la matriz de criterios." },
  { tema: "Decisión y rediseño", clase: [5], v: false, t: "A data-driven robust approach to a problem of optimal replacement in maintenance", a: "—", r: "Annals of Operations Research", f: "2026", doi: "10.1007/s10479-026-07235-5", url: "https://link.springer.com/article/10.1007/s10479-026-07235-5", s: "Cuándo reemplazar un equipo usando datos y optimización robusta." },
  { tema: "Decisión y rediseño", clase: [5], v: false, t: "More Than 10 Years on: Does a State-of-the-Art Review and Synthesis Offer New Frameworks to Guide Future Design for Remanufacturing Research?", a: "Okorie et al.", r: "Business Strategy and the Environment", f: "2026", doi: "10.1002/bse.70416", url: "https://onlinelibrary.wiley.com/doi/full/10.1002/bse.70416", s: "Revisión del diseño para la remanufactura: cómo diseñar equipos que se puedan recuperar." },
];

window.DESCARGAS.push(
  {
    grupo: "Curso anterior · Clases originales",
    desc: "Versión anterior de las cinco clases, como referencia.",
    items: [
      {"t": "Clase 1 - Máquina (original)", "file": "curso-anterior-clase-1-maquina-original.pptx", "tipo": "pptx", "mb": 15.8},
      {"t": "Clase 2 - Fallas (original)", "file": "curso-anterior-clase-2-fallas-original.pptx", "tipo": "pptx", "mb": 1.9},
      {"t": "Clase 3 - Diagnóstico (original)", "file": "curso-anterior-clase-3-diagnostico-original.pptx", "tipo": "pptx", "mb": 6.4},
      {"t": "Clase 4 - Acciones correctivas (original)", "file": "curso-anterior-clase-4-acciones-correctivas-original.pptx", "tipo": "pptx", "mb": 3.5},
      {"t": "Clase 5 - Acciones modificativas (original)", "file": "curso-anterior-clase-5-acciones-modificativas-original.pptx", "tipo": "pptx", "mb": 3.9}
    ],
  },
  {
    grupo: "Trabajos de estudiantes · Clasificación de fallas",
    desc: "Presentaciones de grupos del curso anterior.",
    items: [
      {"t": "Clasificación de fallas - Castrillón y Cadavid", "file": "curso-anterior-clasificacion-de-fallas-castrillon-y-cadavid.pptx", "tipo": "pptx", "mb": 20.3},
      {"t": "Clasificación de fallas - Méndez y Luna", "file": "curso-anterior-clasificacion-de-fallas-mendez-y-luna.pptx", "tipo": "pptx", "mb": 7.8},
      {"t": "Clasificación de fallas - Valencia y Rosero", "file": "curso-anterior-clasificacion-de-fallas-valencia-y-rosero.potx", "tipo": "potx", "mb": 3.9}
    ],
  },
  {
    grupo: "Trabajos de estudiantes · Diagnóstico y averías",
    desc: "Averías en rodamientos, bombas, compresores, cierres mecánicos y turbinas.",
    items: [
      {"t": "Averías en bombas y compresores centrífugos", "file": "curso-anterior-averias-en-bombas-y-compresores-centrifugos.pdf", "tipo": "pdf", "mb": 10.1},
      {"t": "Averías en cierres mecánicos y máquinas de proceso", "file": "curso-anterior-averias-en-cierres-mecanicos-y-maquinas-de-proceso.pptx", "tipo": "pptx", "mb": 35.1},
      {"t": "Averías en rodamientos y cojinetes de fricción", "file": "curso-anterior-averias-en-rodamientos-y-cojinetes-de-friccion.pdf", "tipo": "pdf", "mb": 15.2},
      {"t": "Averías en turbinas de vapor y de gas - Velásquez y Vásquez", "file": "curso-anterior-averias-en-turbinas-de-vapor-y-de-gas-velasquez-y-vasquez.pdf", "tipo": "pdf", "mb": 1.2},
      {"t": "Diagnóstico de fallos en equipos - Méndez y Luna", "file": "curso-anterior-diagnostico-de-fallos-en-equipos-mendez-y-luna.pdf", "tipo": "pdf", "mb": 10.1},
      {"t": "Fallas en rodamientos y cojinetes - Pulido y González", "file": "curso-anterior-fallas-en-rodamientos-y-cojinetes-pulido-y-gonzalez.pdf", "tipo": "pdf", "mb": 15.2}
    ],
  },
  {
    grupo: "Trabajos de estudiantes · Métodos de recuperación",
    desc: "Soldadura, metalización, epóxicos, láser, cold spray y más.",
    items: [
      {"t": "Métodos de recuperación - Castrillón y Cadavid", "file": "curso-anterior-metodos-de-recuperacion-castrillon-y-cadavid.pptx", "tipo": "pptx", "mb": 30.0},
      {"t": "Métodos de recuperación - Méndez y Luna", "file": "curso-anterior-metodos-de-recuperacion-mendez-y-luna.pptx", "tipo": "pptx", "mb": 13.4},
      {"t": "Métodos de recuperación - Pulido y González", "file": "curso-anterior-metodos-de-recuperacion-pulido-y-gonzalez.ppsx", "tipo": "ppsx", "mb": 11.7},
      {"t": "Métodos de recuperación - Rosero y Valencia", "file": "curso-anterior-metodos-de-recuperacion-rosero-y-valencia.pptx", "tipo": "pptx", "mb": 1.6}
    ],
  },
  {
    grupo: "Material de referencia",
    desc: "Lectura complementaria.",
    items: [
      {"t": "Diagnóstico de fallos en equipos (Técnicas de Mantenimiento Industrial, cap. 9)", "file": "curso-anterior-diagnostico-de-fallos-en-equipos-tecnicas-de-mantenimiento-industrial-cap-9.pdf", "tipo": "pdf", "mb": 1.0}
    ],
  }
);
