export interface LandingStep {
  number: string;
  title: string;
  desc: string;
}

export interface LandingFAQ {
  q: string;
  a: string;
}

export interface LandingCandidate {
  title: string;
  desc: string;
}

export interface LandingRecovery {
  period: string;
  desc: string;
}

export interface ServiceLanding {
  heroImage?: string;
  descriptionLong: string;
  techniqueTitle?: string;
  techniques?: Array<{ title: string; desc: string }>;
  areas?: Array<{ area: string; desc: string }>;
  benefits: string[];
  candidates: LandingCandidate[];
  recovery: LandingRecovery[];
  steps: LandingStep[];
  faqs: LandingFAQ[];
}

export const serviceLandings: Record<string, ServiceLanding> = {
  lipoescultura: {
    heroImage: "https://res.cloudinary.com/dkmf5vt2k/image/upload/v1783832108/ChatGPT_Image_11_jul_2026_11_37_31_p.m._mwqeu8.png",
    descriptionLong:
      "La lipoescultura es un procedimiento quirúrgico que extrae grasa acumulada de zonas como el abdomen, flancos o espalda para moldear el contorno corporal y, en muchos casos, transferir el tejido adiposo purificado a los glúteos. A diferencia de la liposucción convencional, la lipoescultura utiliza la grasa extraída como material de diseño anatómico para mejorar la proyección y el perfil del cuerpo.",
    benefits: [
      "Moldeamiento corporal integral en una sola cirugía.",
      "Resultado natural al utilizar grasa del propio paciente.",
      "Mejora simultánea de zonas donantes y receptoras.",
      "Técnica segura con cánulas romas que respetan los planos anatómicos.",
    ],
    candidates: [
      { title: "Depósitos de grasa localizada", desc: "Personas con acumulación de tejido adiposo en abdomen, flancos, espalda o muslos que desean esculpir su silueta." },
      { title: "Peso estable", desc: "Pacientes con índice de masa corporal en rangos saludables y peso mantenido durante al menos seis meses." },
      { title: "Expectativas realistas", desc: "Comprensión de que el resultado final evoluciona con el tiempo y depende de la respuesta biológica individual." },
      { title: "Buen estado de salud", desc: "Confirmado mediante exámenes preoperatorios y valoración preanestésica por profesionales calificados." },
      { title: "Compromiso postoperatorio", desc: "Disposición para cumplir con el reposo, uso de faja de compresión y los controles médicos programados." },
    ],
    recovery: [
      { period: "Primeras 48 horas", desc: "Reposo moderado con movilización suave. Es normal presentar inflamación y drenaje de líquidos por las incisiones." },
      { period: "Primera semana", desc: "Uso permanente de faja de compresión. Inicio de drenaje linfático para reducir edema y favorecer la circulación." },
      { period: "Primer mes", desc: "Restricción de presión directa sobre los glúteos si se realizó transferencia. Uso de cojines especiales al sentarse." },
      { period: "Retorno a actividades", desc: "Caminatas desde la primera semana. Ejercicio cardiovascular a partir de la cuarta semana con autorización médica." },
    ],
    steps: [
      { number: "01", title: "Valoración clínica", desc: "Evaluación del estado de salud, IMC, distribución de grasa corporal y definición del plan quirúrgico personalizado." },
      { number: "02", title: "Extracción de grasa", desc: "Aspiración selectiva del tejido adiposo mediante cánulas de diámetro preciso en las áreas donantes." },
      { number: "03", title: "Purificación del tejido", desc: "Centrifugación y filtrado de la grasa extraída bajo estrictos protocolos para obtener adipocitos viables." },
      { number: "04", title: "Transferencia o moldeamiento", desc: "Infiltración de la grasa purificada o definición final del contorno corporal según el plan establecido." },
      { number: "05", title: "Compresión postquirúrgica", desc: "Colocación de faja de compresión para estabilizar los tejidos, reducir el edema y favorecer la recuperación." },
    ],
    faqs: [
      { q: "¿Duele la lipoescultura?", a: "El procedimiento se realiza bajo anestesia, por lo que no hay dolor intraoperatorio. En el postoperatorio se presenta inflamación y sensibilidad controlable con analgesia." },
      { q: "¿Cuánto tiempo dura el resultado?", a: "La grasa que sobrevive al proceso de integración se mantiene de forma permanente, aunque el envejecimiento natural continúa." },
      { q: "¿Cuándo se ve el resultado final?", a: "El resultado inicial es visible al mes, pero la definición final del contorno se consolida entre los 3 y 6 meses." },
      { q: "¿Es lo mismo que liposucción?", a: "No. La liposucción solo extrae grasa, mientras que la lipoescultura utiliza esa grasa para moldear y proyectar otras áreas." },
    ],
  },

  lipectomia: {
    heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "La lipectomía es un procedimiento quirúrgico que reseca el exceso de piel y grasa abdominal, generalmente en pacientes que han perdido peso significativo o presentan flacidez cutánea después de embarazos. Se diferencia de la liposucción en que elimina piel sobrante, no solo grasa, logrando un contorno abdominal firme y definido.",
    benefits: [
      "Eliminación del exceso de piel que no responde a ejercicio ni dieta.",
      "Mejora del contorno abdominal y definición de la cintura.",
      "Corrección de la flacidez post-embarazo o post-pérdida de peso.",
      "Resultado permanente siempre que se mantenga un peso estable.",
    ],
    candidates: [
      { title: "Exceso de piel abdominal", desc: "Pacientes con piel sobrante en el abdomen causada por pérdida de peso masiva, embarazos múltiples o envejecimiento." },
      { title: "Peso estable por 6 meses", desc: "Se recomienda que el peso se haya mantenido constante durante al menos seis meses antes de la cirugía." },
      { title: "Mujeres sin planes de embarazo", desc: "Ideal para pacientes que han completado su etapa reproductiva, ya que un embarazo posterior puede afectar el resultado." },
      { title: "Buen estado de salud", desc: "Condiciones de salud óptimas confirmadas mediante exámenes preoperatorios y valoración médica." },
    ],
    recovery: [
      { period: "Primeras 48 horas", desc: "Reposo absoluto con el torso ligeramente flexionado para evitar tensión en la sutura." },
      { period: "Primera semana", desc: "Uso de faja abdominal. Drenajes quirúrgicos si fueron colocados. Caminatas suaves permitidas." },
      { period: "2 a 4 semanas", desc: "Retorno progresivo a actividades cotidianas. Evitar esfuerzos abdominales y levantamiento de peso." },
      { period: "6 a 8 semanas", desc: "Autorización para ejercicio físico intenso y deportes. La cicatriz continúa madurando." },
    ],
    steps: [
      { number: "01", title: "Valoración y marcación", desc: "Evaluación de la elasticidad cutánea, distribución de grasa y definición de la incisión en consulta prequirúrgica." },
      { number: "02", title: "Incisión y resección", desc: "Corte horizontal en la parte baja del abdomen para retirar el exceso de piel y grasa." },
      { number: "03", title: "Reparación muscular", desc: "Cuando existe diástasis de rectos, se reconstruye la pared abdominal para restaurar la firmeza." },
      { number: "04", title: "Cierre y modelado", desc: "Sutura por planos, reposición del ombligo y colocación de drenajes según el caso." },
    ],
    faqs: [
      { q: "¿La cicatriz es muy notoria?", a: "La incisión se realiza en la parte baja del abdomen y se ubica por debajo de la línea de la ropa interior. La cicatriz madura durante el primer año." },
      { q: "¿Puedo combinar lipectomía con otros procedimientos?", a: "Sí. Es frecuente combinarla con liposucción de flancos o con cirugía mamaria en el mismo tiempo quirúrgico." },
      { q: "¿Cuándo puedo retomar el ejercicio?", a: "Las caminatas suaves desde la primera semana. El ejercicio abdominal intenso se reanuda entre la sexta y octava semana." },
    ],
  },

  "lipo-lipectomia": {
    heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "La combinación de liposucción y lipectomía permite abordar simultáneamente el exceso de grasa y la piel sobrante en el abdomen y flancos. Mientras la liposucción elimina depósitos adiposos localizados, la lipectomía reseca la piel que ha perdido elasticidad. Este abordaje integral ofrece un contorno abdominal completo en una sola intervención.",
    benefits: [
      "Resultado integral: elimina grasa y piel sobrante simultáneamente.",
      "Una sola cirugía, una sola recuperación.",
      "Definición del contorno abdominal superior a la de cada procedimiento por separado.",
      "Corrección de la diástasis abdominal cuando está presente.",
    ],
    candidates: [
      { title: "Grasa localizada con flacidez cutánea", desc: "Pacientes que presentan tanto exceso de grasa abdominal como piel sobrante sin capacidad de retracción." },
      { title: "Peso estable y saludable", desc: "Índice de masa corporal adecuado y peso mantenido durante al menos seis meses." },
      { title: "No fumador", desc: "El tabaquismo afecta la cicatrización y la oxigenación tisular, aumentando el riesgo de complicaciones." },
      { title: "Expectativas claras", desc: "Comprensión del alcance de la cirugía combinada y del proceso de recuperación." },
    ],
    recovery: [
      { period: "Primeros días", desc: "Hospitalización de 24 a 48 horas. Reposo con flexión del torso. Drenajes quirúrgicos." },
      { period: "Primera semana", desc: "Uso de faja de compresión. Caminatas suaves. Control de drenajes y signos de alarma." },
      { period: "2 a 4 semanas", desc: "Retiro de puntos y drenajes. Retorno a actividades sedentarias. Inicio de drenaje linfático." },
      { period: "6 a 8 semanas", desc: "Reanudación de ejercicio físico. La inflamación residual disminuye progresivamente." },
    ],
    steps: [
      { number: "01", title: "Evaluación prequirúrgica", desc: "Valoración clínica, exámenes de laboratorio y definición del plan quirúrgico combinado." },
      { number: "02", title: "Liposucción inicial", desc: "Aspiración de grasa en abdomen y flancos para preparar el tejido antes de la resección cutánea." },
      { number: "03", title: "Lipectomía y resección", desc: "Incisión baja y retiro del exceso de piel. Reparación de la diástasis abdominal si existe." },
      { number: "04", title: "Cierre y recuperación", desc: "Sutura por planos, colocación de drenajes y vendaje compresivo para protección." },
    ],
    faqs: [
      { q: "¿Es más riesgoso que hacerlos por separado?", a: "No. Al realizarse en el mismo tiempo quirúrgico, se reduce la exposición a anestesia y se consolida la recuperación en un solo período." },
      { q: "¿Duele más?", a: "El dolor postoperatorio es controlable con medicación. La molestia principal es la tensión abdominal al movimiento." },
      { q: "¿Cuánto tiempo dura la cirugía?", a: "El procedimiento combinado tiene una duración aproximada de 3 a 4 horas, dependiendo de la complejidad." },
    ],
  },

  "lipo-lipectomia-senos": {
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "Este plan quirúrgico integral combina liposucción, lipectomía abdominal y aumento mamario en un solo tiempo quirúrgico. Está diseñado para pacientes que desean una transformación completa de su silueta corporal, abordando simultáneamente el contorno abdominal y el volumen del busto. La coordinación de los tres procedimientos permite resultados armónicos con una sola recuperación.",
    benefits: [
      "Transformación corporal integral en una sola cirugía.",
      "Armonía entre el contorno abdominal y el volumen mamario.",
      "Una sola anestesia y un solo período de recuperación.",
      "Reducción del costo total comparado con cirugías separadas.",
    ],
    candidates: [
      { title: "Exceso de grasa y piel abdominal", desc: "Pacientes que requieren liposucción y resección cutánea en el abdomen." },
      { title: "Deseo de aumento mamario", desc: "Mujeres que buscan incrementar el volumen de sus senos simultáneamente." },
      { title: "Buen estado de salud general", desc: "Condiciones óptimas para soportar un tiempo quirúrgico extendido de forma segura." },
    ],
    recovery: [
      { period: "48 horas", desc: "Hospitalización. Reposo absoluto con monitoreo permanente." },
      { period: "Primera semana", desc: "Uso de faja abdominal y sujetador quirúrgico. Caminatas suaves." },
      { period: "Mes inicial", desc: "Retorno progresivo a actividades. Evitar levantar brazos por encima de la cabeza." },
      { period: "8 semanas", desc: "Reanudación de ejercicio completo. Resultados visibles." },
    ],
    steps: [
      { number: "01", title: "Valoración multidisciplinaria", desc: "Evaluación combinada de cirugía corporal y mamaria para planificar el abordaje integral." },
      { number: "02", title: "Liposucción y lipectomía", desc: "Aspiración de grasa abdominal y resección del exceso de piel." },
      { number: "03", title: "Aumento mamario", desc: "Inserción de implantes mamarios por vía submamaria o axilar." },
      { number: "04", title: "Cierre y vendajes", desc: "Sutura por planos, colocación de drenajes y vendajes compresivos." },
    ],
    faqs: [
      { q: "¿Cuánto dura la cirugía completa?", a: "El tiempo quirúrgico varía entre 4 y 6 horas dependiendo de la complejidad de cada procedimiento." },
      { q: "¿La recuperación es muy difícil?", a: "Requiere paciencia, pero el manejo del dolor y las molestias está protocolizado. La mayoría de pacientes reporta satisfacción con los resultados." },
    ],
  },

  "lipo-lipectomia-pexia-periareolar": {
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "Este procedimiento tridimensional combina liposucción corporal, lipectomía abdominal y pexia mamaria periareolar. Está orientado a pacientes que necesitan reducir grasa, eliminar exceso de piel abdominal y elevar el busto mediante una incisión alrededor de la areola. Es una solución completa para quienes buscan rejuvenecer y armonizar su silueta en un solo acto quirúrgico.",
    benefits: [
      "Abordaje integral de cuerpo y busto en una cirugía.",
      "Pexia periareolar con cicatriz mínima alrededor de la areola.",
      "Resultado armónico y proporcionado.",
      "Menor tiempo de recuperación total que cirugías separadas.",
    ],
    candidates: [
      { title: "Flacidez abdominal y mamaria", desc: "Pacientes con exceso de piel en abdomen y ptosis mamaria leve a moderada." },
      { title: "Deseo de mejoría integral", desc: "Personas que buscan transformar su silueta general y no solo un área específica." },
    ],
    recovery: [
      { period: "Primeros días", desc: "Hospitalización. Reposo con cuidados específicos para cada zona intervenida." },
      { period: "Semana inicial", desc: "Uso de faja y sujetador quirúrgico. Caminatas suaves y drenaje linfático." },
      { period: "Mes uno", desc: "Retorno a actividades cotidianas. La inflamación disminuye gradualmente." },
      { period: "3 meses", desc: "Resultados evidentes. La cicatriz periareolar se atenúa con el tiempo." },
    ],
    steps: [
      { number: "01", title: "Planificación integral", desc: "Evaluación de la anatomía abdominal y mamaria para coordinar ambos abordajes." },
      { number: "02", title: "Liposucción y lipectomía", desc: "Extracción de grasa y resección de piel abdominal sobrante." },
      { number: "03", title: "Pexia periareolar", desc: "Incisión alrededor de la areola para reposicionar el tejido mamario." },
      { number: "04", title: "Cierre y apósitos", desc: "Sutura cuidadosa, drenajes y vendajes compresivos diferenciados." },
    ],
    faqs: [
      { q: "¿La cicatriz periareolar se nota mucho?", a: "La incisión se realiza en el borde de la areola y tiende a camuflarse muy bien. La maduración de la cicatriz toma hasta un año." },
    ],
  },

  "lipo-lipectomia-pexia": {
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "Procedimiento integral que combina liposucción, lipectomía y pexia mamaria para pacientes que desean una transformación corporal completa. La liposucción elimina la grasa localizada, la lipectomía retira el exceso de piel abdominal y la pexia eleva y rejuvenece el busto. Es una de las combinaciones más completas en cirugía estética.",
    benefits: [
      "Corrección simultánea de grasa, piel abdominal y flacidez mamaria.",
      "Una sola intervención quirúrgica con resultados globales.",
      "Planificación personalizada según las necesidades de cada paciente.",
      "Recuperación unificada y optimización de recursos.",
    ],
    candidates: [
      { title: "Flacidez generalizada", desc: "Pacientes con pérdida de firmeza en abdomen y busto acompañada de grasa localizada." },
      { title: "Post-pérdida de peso", desc: "Personas que han perdido peso significativo y presentan piel sobrante en múltiples áreas." },
    ],
    recovery: [
      { period: "48 horas", desc: "Hospitalización con monitoreo. Reposo en posición semiincorporada." },
      { period: "Semana 1", desc: "Uso de faja y sujetador. Drenajes si están indicados. Caminatas suaves." },
      { period: "4 a 6 semanas", desc: "Retorno progresivo a la vida normal. Ejercicio ligero autorizado." },
    ],
    steps: [
      { number: "01", title: "Evaluación completa", desc: "Análisis de la anatomía corporal, metas estéticas y planificación quirúrgica." },
      { number: "02", title: "Liposucción", desc: "Aspiración de grasa localizada en abdomen, flancos y áreas necesarias." },
      { number: "03", title: "Lipectomía", desc: "Resección del exceso de piel abdominal y reparación muscular." },
      { number: "04", title: "Pexia mamaria", desc: "Elevación y repositionamiento del tejido mamario." },
    ],
    faqs: [
      { q: "¿Cuánto tiempo debo tomarme del trabajo?", a: "Depende de la actividad laboral. Para trabajos sedentarios, entre 2 y 3 semanas. Para actividades físicas, de 4 a 6 semanas." },
    ],
  },

  hernia: {
    heroImage: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=1000&fit=crop",
    descriptionLong:
      "La reparación de hernia abdominal o umbilical es un procedimiento quirúrgico que corrige la protrusión de órganos o tejidos a través de una debilidad en la pared muscular. En nuestra IPS, este procedimiento puede combinarse con técnicas estéticas de contorno corporal para restaurar tanto la función como la apariencia del abdomen.",
    benefits: [
      "Corrección definitiva de la protrusión herniaria.",
      "Alivio de síntomas asociados como dolor y molestias.",
      "Mejora estética del contorno abdominal.",
      "Posibilidad de combinar con liposucción o lipectomía.",
    ],
    candidates: [
      { title: "Hernia abdominal diagnosticada", desc: "Pacientes con hernia umbilical, inguinal o incisional que requieren corrección quirúrgica." },
      { title: "Molestias asociadas", desc: "Personas que experimentan dolor, presión o limitación funcional por la hernia." },
      { title: "Buen estado de salud", desc: "Condiciones óptimas para cirugía, confirmadas mediante evaluación preoperatoria." },
    ],
    recovery: [
      { period: "Primeras 24 horas", desc: "Reposo. Control del dolor y monitoreo de la zona intervenida." },
      { period: "Primera semana", desc: "Evitar esfuerzos y levantamiento de peso. Caminatas suaves permitidas." },
      { period: "4 a 6 semanas", desc: "Retorno progresivo a actividades. Restricción de ejercicio abdominal intenso." },
    ],
    steps: [
      { number: "01", title: "Diagnóstico y evaluación", desc: "Confirmación clínica de la hernia y planificación del abordaje quirúrgico." },
      { number: "02", title: "Incisión y reducción", desc: "Acceso al saco herniario y reposición del contenido protruido." },
      { number: "03", title: "Reparación de la pared", desc: "Cierre del defecto muscular con o sin malla de refuerzo." },
      { number: "04", title: "Cierre y recuperación", desc: "Sutura por planos y vendaje compresivo. Indicaciones postoperatorias." },
    ],
    faqs: [
      { q: "¿Necesito malla para la reparación?", a: "Depende del tamaño y la ubicación de la hernia. El cirujano determinará si es necesario colocar una malla de refuerzo." },
      { q: "¿Puedo combinar la reparación con cirugía estética?", a: "Sí. Es frecuente realizar liposucción o lipectomía en el mismo tiempo quirúrgico, previa evaluación de seguridad." },
    ],
  },

  "mamoplastia-aumento-rinoplastia": {
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "Procedimiento combinado que realiza simultáneamente aumento mamario con implantes y rinoplastia estética. Está diseñado para pacientes que desean armonizar el rostro y el busto en un solo tiempo quirúrgico, optimizando la recuperación y reduciendo los tiempos de inactividad total.",
    benefits: [
      "Transformación facial y mamaria en una sola cirugía.",
      "Resultados armónicos y coordinados.",
      "Una sola anestesia y recuperación unificada.",
      "Optimización del tiempo y recursos del paciente.",
    ],
    candidates: [
      { title: "Deseo de aumento mamario y rinoplastia", desc: "Pacientes que planean ambos procedimientos y prefieren realizarlos juntos." },
      { title: "Buen estado de salud", desc: "Capacidad para tolerar un tiempo quirúrgico combinado de forma segura." },
    ],
    recovery: [
      { period: "Primeras 48 horas", desc: "Hospitalización. Cabeza elevada para reducir edema facial. Sujetador quirúrgico." },
      { period: "Primera semana", desc: "Reposo. Evitar sonarse la nariz. Cuidados mamarios. Inicio de caminatas suaves." },
      { period: "Mes uno", desc: "Retorno a actividades. El edema facial disminuye significativamente." },
      { period: "3 a 6 meses", desc: "Resultados evidentes en ambas zonas. Maduración de cicatrices." },
    ],
    steps: [
      { number: "01", title: "Planificación combinada", desc: "Evaluación facial y mamaria para coordinar ambos procedimientos." },
      { number: "02", title: "Rinoplastia", desc: "Remodelación nasal mediante técnica abierta o cerrada según el caso." },
      { number: "03", title: "Aumento mamario", desc: "Inserción de implantes por vía submamaria o axilar." },
      { number: "04", title: "Cierre y apósitos", desc: "Férula nasal, vendajes mamarios y drenajes si están indicados." },
    ],
    faqs: [
      { q: "¿Es seguro hacer dos cirugías al mismo tiempo?", a: "Sí, cuando el paciente está en buenas condiciones de salud y el equipo médico tiene experiencia en procedimientos combinados." },
    ],
  },

  "mamoplastia-aumento": {
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "La mamoplastia de aumento es un procedimiento quirúrgico que incrementa el volumen mamario mediante la inserción de implantes. El objetivo es mejorar la proyección, forma y simetría del busto, adaptándose a la anatomía y preferencias de cada paciente. Los implantes pueden colocarse en posición submuscular o subglandular, con incisiones submamaria, periareolar o axilar.",
    benefits: [
      "Aumento del volumen mamario de forma predecible y controlada.",
      "Mejora de la simetría y la proyección del busto.",
      "Variedad de perfiles y tamaños de implantes para personalización.",
      "Resultados inmediatos visibles desde el postoperatorio.",
    ],
    candidates: [
      { title: "Hipoplasia mamaria", desc: "Mujeres con desarrollo mamario insuficiente que desean aumentar el volumen de sus senos." },
      { title: "Pérdida de volumen post-embarazo", desc: "Pacientes que han perdido volumen mamario después de la lactancia o la pérdida de peso." },
      { title: "Asimetría mamaria", desc: "Mujeres con diferencias notorias entre ambos senos que desean corregirlas." },
      { title: "Expectativas realistas", desc: "Comprensión de las características de los implantes, las incisiones y el proceso de recuperación." },
    ],
    recovery: [
      { period: "Primeras 48 horas", desc: "Reposo con el torso elevado. Sujetador quirúrgico. Molestias controlables con analgesia." },
      { period: "Primera semana", desc: "Evitar levantar los brazos por encima de la cabeza. Caminatas suaves. Inicio de drenaje linfático." },
      { period: "2 a 4 semanas", desc: "Retorno progresivo a actividades cotidianas. Restricción de ejercicio de brazos y pecho." },
      { period: "6 a 8 semanas", desc: "Reanudación de ejercicio completo. Los implantes comienzan a asentarse naturalmente." },
    ],
    steps: [
      { number: "01", title: "Valoración y selección de implantes", desc: "Evaluación mamaria, mediciones y elección del tipo, perfil y tamaño del implante." },
      { number: "02", title: "Incisión y creación del bolsillo", desc: "Acceso quirúrgico por vía submamaria, periareolar o axilar según el plan." },
      { number: "03", title: "Inserción del implante", desc: "Colocación en posición submuscular o subglandular con técnica precisa." },
      { number: "04", title: "Cierre y vendaje", desc: "Sutura por planos, vendaje compresivo y sujetador quirúrgico." },
    ],
    faqs: [
      { q: "¿Qué tipo de implante es mejor?", a: "No hay un implante universalmente mejor. La elección depende de la anatomía, preferencias y recomendación del cirujano." },
      { q: "¿Los implantes interfieren con la lactancia?", a: "Depende de la vía de abordaje. La incisión submamaria generalmente preserva la capacidad de lactar." },
      { q: "¿Cuánto duran los implantes?", a: "Los implantes actuales tienen una larga duración, pero pueden requerir reemplazo después de 10 a 15 años." },
    ],
  },

  gigantomastia: {
    heroImage: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "La gigantomastia es una condición caracterizada por el crecimiento excesivo del tejido mamario, que puede causar dolor de espalda, problemas posturales, irritación cutánea y limitaciones funcionales. La cirugía de reducción mamaria reduce el volumen, peso y tamaño de los senos, aliviando los síntomas y mejorando la calidad de vida.",
    benefits: [
      "Alivio del dolor de espalda, cuello y hombros.",
      "Mejora de la postura y la movilidad física.",
      "Reducción de la irritación cutánea en el surco submamario.",
      "Resultado funcional y estético con mejoría de la calidad de vida.",
    ],
    candidates: [
      { title: "Volumen mamario excesivo", desc: "Mujeres con senos grandes que causan molestias físicas y limitaciones en la vida diaria." },
      { title: "Dolor crónico", desc: "Pacientes que experimentan dolor persistente en espalda, cuello u hombros debido al peso mamario." },
      { title: "Problemas cutáneos", desc: "Irritación o infecciones recurrentes en el pliegue submamario por humedad y fricción." },
    ],
    recovery: [
      { period: "Primeras 48 horas", desc: "Hospitalización. Drenajes quirúrgicos. Sujetador postquirúrgico sin aro." },
      { period: "Primera semana", desc: "Reposo. Caminatas suaves. Control de drenajes y signos de alarma." },
      { period: "2 a 4 semanas", desc: "Retorno a actividades cotidianas. Evitar ejercicio de brazos y espalda." },
      { period: "6 a 8 semanas", desc: "Reanudación de ejercicio completo. La cicatriz continúa madurando." },
    ],
    steps: [
      { number: "01", title: "Evaluación clínica", desc: "Medición del volumen mamario, evaluación postural y análisis de síntomas." },
      { number: "02", title: "Planificación de la reducción", desc: "Definición del volumen a resecar y la técnica de incisión." },
      { number: "03", title: "Resección del tejido", desc: "Extracción del exceso de glándula, grasa y piel." },
      { number: "04", title: "Reconstrucción y cierre", desc: "Remodelación del cono mamario, reposición del complejo areola-pezón y sutura." },
    ],
    faqs: [
      { q: "¿La cirugía afecta la sensibilidad del pezón?", a: "Puede haber cambios temporales o permanentes en la sensibilidad, aunque se realizan esfuerzos por preservar las estructuras nerviosas." },
      { q: "¿Puedo amamantar después de la cirugía?", a: "La capacidad de lactancia puede reducirse dependiendo de la técnica utilizada y la cantidad de tejido resecado." },
    ],
  },

  ginecomastia: {
    heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "La ginecomastia es el aumento del tejido mamario en hombres, causado por un desequilibrio hormonal, efectos secundarios de medicamentos u otras condiciones. La cirugía corrige esta condición mediante liposucción y/o resección directa del tejido glandular, restaurando un contorno pectoral masculino natural.",
    benefits: [
      "Corrección definitiva del aumento mamario masculino.",
      "Mejora de la autoestima y la comodidad con el propio cuerpo.",
      "Resultado natural con cicatrices mínimas.",
      "Posibilidad de combinar con liposucción de tórax para mejor contorno.",
    ],
    candidates: [
      { title: "Ginecomastia diagnosticada", desc: "Hombres con aumento del tejido mamario confirmado por evaluación médica." },
      { title: "Peso estable", desc: "Pacientes con IMC adecuado y peso mantenido para optimizar los resultados." },
      { title: "Molestia emocional", desc: "Personas que experimentan incomodidad o vergüenza por la apariencia de su pecho." },
    ],
    recovery: [
      { period: "Primeras 48 horas", desc: "Reposo. Sujetador de compresión masculino. Molestias controlables." },
      { period: "Primera semana", desc: "Uso permanente de la prenda de compresión. Evitar ejercicio de brazos y pecho." },
      { period: "2 a 4 semanas", desc: "Retorno a actividades cotidianas. La inflamación disminuye gradualmente." },
      { period: "6 semanas", desc: "Autorización para ejercicio físico completo y deportes." },
    ],
    steps: [
      { number: "01", title: "Evaluación y diagnóstico", desc: "Examen físico, ecografía mamaria y análisis hormonal si está indicado." },
      { number: "02", title: "Liposucción del tejido adiposo", desc: "Aspiración de la grasa localizada en la región pectoral." },
      { number: "03", title: "Resección glandular", desc: "Extracción del tejido mamario firme mediante incisión periareolar." },
      { number: "04", title: "Cierre y compresión", desc: "Sutura cuidadosa y colocación de vendaje compresivo." },
    ],
    faqs: [
      { q: "¿La ginecomastia puede volver a aparecer?", a: "La cirugía remove el tejido de forma permanente, pero cambios hormonales o aumento de peso pueden causar recurrencia parcial." },
      { q: "¿Duele la cirugía?", a: "El procedimiento se realiza bajo anestesia. Las molestias postoperatorias son leves y controlables con analgesia." },
    ],
  },

  "pexia-reconstructiva": {
    heroImage: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "La pexia reconstructiva sin implantes es un procedimiento que reposiciona y eleva el tejido mamario utilizando solo los propios tejidos de la paciente. Está indicada para mujeres con ptosis (caída) mamaria que desean recuperar una posición más juvenil del busto sin la colocación de prótesis. La técnica reconstructiva redistribuye y fija el tejido glandular en una posición anatómica más elevada.",
    benefits: [
      "Elevación mamaria sin necesidad de implantes.",
      "Resultado natural utilizando tejido propio.",
      "Mejora de la forma y la proyección del busto.",
      "Sin riesgo de complicaciones asociadas a cuerpos extraños.",
    ],
    candidates: [
      { title: "Ptosis mamaria", desc: "Mujeres con caída del seno que desean elevación sin aumentar el volumen." },
      { title: "Volumen mamario adecuado", desc: "Pacientes que tienen suficiente tejido mamario y no requieren aumento." },
      { title: "Preferencia por materiales propios", desc: "Mujeres que optan por evitar implantes por razones médicas o personales." },
    ],
    recovery: [
      { period: "48 horas", desc: "Reposo. Sujetador quirúrgico. Drenajes si están indicados." },
      { period: "Primera semana", desc: "Evitar levantar los brazos. Caminatas suaves. Control de molestias." },
      { period: "4 semanas", desc: "Retorno progresivo a actividades. La inflamación disminuye." },
    ],
    steps: [
      { number: "01", title: "Evaluación mamaria", desc: "Análisis del grado de ptosis, calidad del tejido y anatomía del busto." },
      { number: "02", title: "Incisión y reposición", desc: "Acceso quirúrgico para liberar y reposicionar el tejido glandular." },
      { number: "03", title: "Fijación interna", desc: "Sutura del tejido a la fascia pectoral para mantener la nueva posición." },
      { number: "04", title: "Cierre y modelado", desc: "Reducción de la piel sobrante y sutura cuidadosa de las incisiones." },
    ],
    faqs: [
      { q: "¿La pexia reconstructiva dura para siempre?", a: "Los resultados son duraderos, pero el envejecimiento, la gravedad y los cambios de peso pueden afectar la posición del busto con el tiempo." },
    ],
  },

  pexia: {
    heroImage: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "La pexia mamaria o mastopexia es un procedimiento quirúrgico que eleva y remodela los senos caídos, reposicionando el tejido glandular y la areola en una posición más juvenil. Se elimina el exceso de piel y se redefine el contorno del busto, con o sin colocación de implantes según las necesidades de cada paciente.",
    benefits: [
      "Elevación y rejuvenecimiento del busto.",
      "Reposición de la areola en una posición anatómica adecuada.",
      "Eliminación del exceso de piel que causa la caída.",
      "Mejora de la autoestima y la comodidad con el propio cuerpo.",
    ],
    candidates: [
      { title: "Ptosis mamaria", desc: "Mujeres con caída del seno causada por envejecimiento, embarazo, lactancia o pérdida de peso." },
      { title: "Pérdida de volumen y firmeza", desc: "Pacientes que han perdido la densidad y elasticidad natural del busto." },
      { title: "Expectativas realistas", desc: "Comprensión de que la elevación no aumenta significativamente el volumen mamario." },
    ],
    recovery: [
      { period: "48 horas", desc: "Reposo. Sujetador quirúrgico sin aro. Drenajes si están indicados." },
      { period: "Primera semana", desc: "Caminatas suaves. Evitar levantar brazos. Inicio de drenaje linfático." },
      { period: "2 a 4 semanas", desc: "Retorno a actividades cotidianas. Restricción de ejercicio de pecho." },
      { period: "6 a 8 semanas", desc: "Reanudación de ejercicio completo. Resultados visibles." },
    ],
    steps: [
      { number: "01", title: "Valoración y planificación", desc: "Evaluación del grado de ptosis y definición de la técnica de elevación." },
      { number: "02", title: "Incisión y reposición", desc: "Acceso quirúrgico para reposicionar el tejido mamario y la areola." },
      { number: "03", title: "Resección cutánea", desc: "Eliminación del exceso de piel para mantener la nueva posición." },
      { number: "04", title: "Cierre y resultado", desc: "Sutura por planos y vendaje compresivo postquirúrgico." },
    ],
    faqs: [
      { q: "¿Qué tipo de cicatriz queda?", a: "La incisión puede ser periareolar, en vertical o en ancla, dependiendo del grado de elevación necesario." },
      { q: "¿Puedo combinar pexia con implantes?", a: "Sí. Cuando además de elevación se desea aumentar el volumen, se colocan implantes en el mismo procedimiento." },
    ],
  },

  "pexia-periareolar": {
    heroImage: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "La pexia periareolar es una técnica de elevación mamaria que realiza la incisión exclusivamente alrededor de la areola. Está indicada para casos de ptosis leve a moderada donde solo se requiere un reposicionamiento mínimo del complejo areola-pezón. La cicatriz se camufla en la transición entre la areola y la piel del seno.",
    benefits: [
      "Cicatriz mínima oculta en el borde de la areola.",
      "Elevación efectiva para ptosis leve a moderada.",
      "Recuperación más rápida que la pexia tradicional.",
      "Resultado natural con menor intervención quirúrgica.",
    ],
    candidates: [
      { title: "Ptosis leve a moderada", desc: "Mujeres con caída incipiente del seno que requieren una elevación sutil." },
      { title: "Buena calidad de piel", desc: "Pacientes con elasticidad cutánea adecuada para la técnica periareolar." },
    ],
    recovery: [
      { period: "48 horas", desc: "Reposo. Sujetador quirúrgico. Molestias leves." },
      { period: "Primera semana", desc: "Caminatas suaves. Cuidados de la incisión periareolar." },
      { period: "2 a 3 semanas", desc: "Retorno a actividades cotidianas. La cicatriz comienza a atenuarse." },
    ],
    steps: [
      { number: "01", title: "Evaluación", desc: "Determinación del grado de ptosis y elegibilidad para técnica periareolar." },
      { number: "02", title: "Incisión circumareolar", desc: "Corte alrededor de la areola para acceder al tejido mamario." },
      { number: "03", title: "Reposición y sutura", desc: "Elevación del complejo areola-pezón y cierre concéntrico." },
    ],
    faqs: [
      { q: "¿La cicatriz periareolar se nota?", a: "La incisión se realiza en la unión de la areola con la piel, por lo que tiende a camuflarse muy bien una vez madura." },
    ],
  },

  "lipo-pexia-periareolar": {
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "Procedimiento combinado que integra liposucción corporal con pexia periareolar. La liposucción reduce la grasa localizada en áreas como abdomen, flancos o muslos, mientras que la pexia periareolar eleva el busto con una cicatriz mínima alrededor de la areola. Es ideal para pacientes que buscan mejorar su silueta general con una recuperación moderada.",
    benefits: [
      "Mejora simultánea del contorno corporal y la elevación mamaria.",
      "Cicatriz periareolar mínima.",
      "Una sola cirugía con resultados integrales.",
      "Recuperación coordinada para ambas zonas.",
    ],
    candidates: [
      { title: "Grasa localizada y ptosis leve", desc: "Pacientes con depósitos de grasa y caída mamaria incipiente." },
    ],
    recovery: [
      { period: "48 horas", desc: "Reposo. Faja y sujetador quirúrgico." },
      { period: "Semana 1", desc: "Caminatas suaves. Cuidados de incisiones." },
      { period: "3 a 4 semanas", desc: "Retorno progresivo a actividades." },
    ],
    steps: [
      { number: "01", title: "Planificación", desc: "Evaluación corporal y mamaria para coordinar ambos procedimientos." },
      { number: "02", title: "Liposucción", desc: "Aspiración de grasa en áreas seleccionadas." },
      { number: "03", title: "Pexia periareolar", desc: "Elevación mamaria con incisión circumareolar." },
    ],
    faqs: [
      { q: "¿Cuánto dura la cirugía combinada?", a: "Aproximadamente 2 a 3 horas, dependiendo de las áreas de liposucción." },
    ],
  },

  "lipo-pexia": {
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "Procedimiento que integra liposucción corporal y pexia mamaria para pacientes que desean mejorar tanto el contorno corporal como la posición del busto. La liposucción esculpe las áreas con grasa localizada, mientras que la pexia eleva y rejuvenece los senos. Es una de las combinaciones más solicitadas en cirugía estética integral.",
    benefits: [
      "Transformación corporal y mamaria simultánea.",
      "Resultados proporcionados y armónicos.",
      "Optimización del tiempo de recuperación.",
    ],
    candidates: [
      { title: "Grasa localizada y ptosis mamaria", desc: "Pacientes que requieren liposucción y elevación mamaria." },
    ],
    recovery: [
      { period: "48 horas", desc: "Hospitalización. Faja y sujetador quirúrgico." },
      { period: "Semana 1", desc: "Reposo relativo. Caminatas suaves." },
      { period: "4 semanas", desc: "Retorno progresivo a actividades cotidianas." },
    ],
    steps: [
      { number: "01", title: "Evaluación integral", desc: "Análisis de la anatomía corporal y mamaria." },
      { number: "02", title: "Liposucción", desc: "Extracción de grasa localizada." },
      { number: "03", title: "Pexia mamaria", desc: "Elevación y reposición del tejido mamario." },
    ],
    faqs: [
      { q: "¿Puedo añadir implantes mamarios?", a: "Sí. Si además se desea aumentar el volumen, se pueden colocar implantes en el mismo procedimiento." },
    ],
  },

  "lipo-protesis-aumento": {
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "Cirugía combinada de liposucción corporal y aumento mamario con prótesis. La liposucción esculpe el contorno corporal eliminando grasa localizada, mientras que la mamoplastia de aumento incrementa el volumen del busto. Esta combinación ofrece una transformación estética integral para pacientes que desean mejorar simultáneamente su silueta y el volumen de sus senos.",
    benefits: [
      "Mejora simultánea del contorno corporal y el volumen mamario.",
      "Personalización de las áreas de liposucción según las necesidades.",
      "Una sola recuperación para ambos procedimientos.",
      "Resultado proporcionado y armónico.",
    ],
    candidates: [
      { title: "Grasa localizada y deseo de aumento mamario", desc: "Pacientes que buscan liposucción en áreas específicas y aumento del busto." },
    ],
    recovery: [
      { period: "48 horas", desc: "Hospitalización. Faja y sujetador quirúrgico." },
      { period: "Semana 1", desc: "Reposo. Caminatas suaves. Cuidados de incisiones." },
      { period: "4 a 6 semanas", desc: "Retorno a actividades. Los resultados comienzan a evidenciarse." },
    ],
    steps: [
      { number: "01", title: "Planificación combinada", desc: "Evaluación corporal y mamaria para definir el plan quirúrgico integral." },
      { number: "02", title: "Liposucción", desc: "Aspiración de grasa en abdomen, flancos y otras áreas." },
      { number: "03", title: "Aumento mamario", desc: "Inserción de implantes por vía submamaria." },
      { number: "04", title: "Cierre y apósitos", desc: "Vendajes compresivos y sujetador quirúrgico." },
    ],
    faqs: [
      { q: "¿Se puede combinar con otros procedimientos?", a: "Sí. Dependiendo de las necesidades, puede añadirse lipectomía o pexia mamaria." },
    ],
  },

  "lipectomia-pexia": {
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&h=1000&fit=crop",
    descriptionLong:
      "Plan quirúrgico que combina lipectomía abdominal con pexia mamaria. La lipectomía reseca el exceso de piel y grasa abdominal, mientras que la pexia eleva y rejuvenece el busto. Es una opción integral para pacientes que han experimentado cambios significativos en su cuerpo debido a pérdida de peso, embarazos o envejecimiento.",
    benefits: [
      "Corrección de la flacidez abdominal y mamaria en una cirugía.",
      "Resultado global y armonioso.",
      "Recuperación unificada.",
    ],
    candidates: [
      { title: "Flacidez abdominal y mamaria", desc: "Pacientes con exceso de piel en abdomen y caída del busto." },
    ],
    recovery: [
      { period: "48 horas", desc: "Hospitalización. Faja y sujetador quirúrgico." },
      { period: "Semana 1", desc: "Reposo. Caminatas suaves. Drenajes si están indicados." },
      { period: "4 a 6 semanas", desc: "Retorno progresivo a actividades cotidianas." },
    ],
    steps: [
      { number: "01", title: "Valoración integral", desc: "Evaluación abdominal y mamaria para planificar el abordaje combinado." },
      { number: "02", title: "Lipectomía", desc: "Resección del exceso de piel y grasa abdominal." },
      { number: "03", title: "Pexia mamaria", desc: "Elevación y reposición del tejido mamario." },
    ],
    faqs: [
      { q: "¿Cuánto tiempo debo esperar para retomar el ejercicio?", a: "Se recomienda esperar de 6 a 8 semanas para ejercicio intenso, especialmente actividades que involucren el abdomen y el pecho." },
    ],
  },

  "ritidoplastia-completa": {
    heroImage: "https://res.cloudinary.com/dkmf5vt2k/image/upload/v1783830876/ChatGPT_Image_11_jul_2026_11_34_27_p.m._z2zube.png",
    descriptionLong:
      "La ritidoplastia completa o lifting facial integral es un procedimiento quirúrgico que rejuvenece el rostro y el cuello mediante la reposición de los tejidos faciales profundos y la eliminación del exceso de piel. Aborda la flacidez de las mejillas, la mandíbula, el cuello y la papada, restaurando los contornos faciales juveniles de manera natural.",
    benefits: [
      "Rejuvenecimiento facial integral y natural.",
      "Corrección de la flacidez de mejillas, mandíbula y cuello.",
      "Resultados duraderos y visibles.",
      "Mejora de la autopercepción y la confianza.",
    ],
    candidates: [
      { title: "Flacidez facial generalizada", desc: "Personas con pérdida de firmeza en mejillas, mandíbula y cuello." },
      { title: "Expectativas realistas", desc: "Comprensión de que el lifting facial rejuvenece pero no detiene el envejecimiento." },
      { title: "Buen estado de salud", desc: "Condiciones óptimas para cirugía bajo anestesia general." },
    ],
    recovery: [
      { period: "Primeras 72 horas", desc: "Reposo con cabeza elevada. Vendaje facial. Edema y equimosis esperables." },
      { period: "Primera semana", desc: "Retiro de puntos y vendajes. Inicio de cuidados de cicatrices." },
      { period: "2 a 3 semanas", desc: "Retorno progresivo a actividades sociales. El edema facial disminuye." },
      { period: "3 a 6 meses", desc: "Resultado final evidente. Las cicatrices continúan madurando." },
    ],
    steps: [
      { number: "01", title: "Valoración facial", desc: "Análisis de la anatomía facial, grado de flacidez y planificación del lifting." },
      { number: "02", title: "Incisiones estratégicas", desc: "Acceso por la línea del cabello y pliegues naturales para minimizar cicatrices." },
      { number: "03", title: "Reposición de tejidos profundos", desc: "Elevación del SMAS y reposición de los tejidos faciales en su posición anatómica." },
      { number: "04", title: "Resección cutánea y cierre", desc: "Eliminación del exceso de piel y sutura cuidadosa de las incisiones." },
    ],
    faqs: [
      { q: "¿A qué edad se recomienda el lifting facial?", a: "Generalmente a partir de los 40-50 años, cuando la flacidez facial es evidente. La edad ideal se determina en la valoración médica." },
      { q: "¿Cuánto dura el resultado del lifting?", a: "Los resultados suelen durar entre 7 y 10 años, aunque el envejecimiento natural continúa." },
    ],
  },

  "ritidoplastia-tercio-medio": {
    heroImage: "https://res.cloudinary.com/dkmf5vt2k/image/upload/v1783830876/ChatGPT_Image_11_jul_2026_11_34_27_p.m._z2zube.png",
    descriptionLong:
      "El lifting del tercio medio facial rejuvenece la región central del rostro, que incluye los pómulos, las mejillas y los surcos nasogenianos. Este procedimiento reposiciona los tejidos descendidos para restaurar el volumen y la elevación de la zona media del rostro, mejorando significativamente la apariencia de fatiga y envejecimiento.",
    benefits: [
      "Rejuvenecimiento específico del tercio medio facial.",
      "Elevación de pómulos y mejillas.",
      "Suavizado de surcos nasogenianos.",
      "Resultado natural y sutil.",
    ],
    candidates: [
      { title: "Descenso de mejillas y pómulos", desc: "Personas con pérdida de volumen y posición descendida de la zona media facial." },
    ],
    recovery: [
      { period: "48 horas", desc: "Reposo. Edema y equimosis en zona periorbitaria." },
      { period: "Semana 1", desc: "Retiro de puntos. Inicio de cuidados." },
      { period: "2 a 3 semanas", desc: "Retorno a actividades." },
    ],
    steps: [
      { number: "01", title: "Evaluación del tercio medio", desc: "Análisis de pómulos, mejillas y surcos nasogenianos." },
      { number: "02", title: "Acceso temporal o transconjuntival", desc: "Incisiones mínimas en zonas estratégicas." },
      { number: "03", title: "Reposición del tejido", desc: "Elevación y fijación del tejido graso y muscular." },
    ],
    faqs: [
      { q: "¿Se nota mucho el cambio?", a: "El resultado es natural. El objetivo es rejuvenecer sin que se note una intervención quirúrgica evidente." },
    ],
  },

  "ritidoplastia-tercio-inferior": {
    heroImage: "https://res.cloudinary.com/dkmf5vt2k/image/upload/v1783830876/ChatGPT_Image_11_jul_2026_11_34_27_p.m._z2zube.png",
    descriptionLong:
      "El lifting del tercio inferior facial se enfoca en rejuvenecer la mandíbula, la línea de la barbilla, la papada y la parte superior del cuello. Corrige la flacidez del tercio inferior del rostro, redefine el ángulo mandibular y elimina el exceso de piel y grasa que causa la papada, restaurando un contorno facial juvenil.",
    benefits: [
      "Redefinición del ángulo mandibular y la línea de la barbilla.",
      "Eliminación de la papada y la flacidez del cuello.",
      "Perfil facial más definido y juvenil.",
      "Resultado natural con cicatrices ocultas.",
    ],
    candidates: [
      { title: "Flacidez mandibular y papada", desc: "Personas con pérdida de definición en la mandíbula y acumulación de grasa submentoniana." },
    ],
    recovery: [
      { period: "48 horas", desc: "Reposo. Vendaje cervical. Molestias leves." },
      { period: "Semana 1", desc: "Retiro de puntos. Caminatas suaves." },
      { period: "2 a 3 semanas", desc: "Retorno a actividades sociales." },
    ],
    steps: [
      { number: "01", title: "Evaluación del tercio inferior", desc: "Análisis de la mandíbula, papada y cuello." },
      { number: "02", title: "Incisiones preauriculares y submentonianas", desc: "Acceso quirúrgico en pliegues naturales." },
      { number: "03", title: "Liposucción y reposición", desc: "Eliminación de grasa submentoniana y reposición de tejidos." },
    ],
    faqs: [
      { q: "¿Duele la recuperación?", a: "Las molestias son leves y controlables. La mayoría de pacientes retoma sus actividades en dos semanas." },
    ],
  },

  rinoplastia: {
    heroImage: "https://res.cloudinary.com/dkmf5vt2k/image/upload/v1783830677/ChatGPT_Image_11_jul_2026_10_34_24_p.m._nagkar.png",
    descriptionLong:
      "La rinoplastia es una cirugía nasal enfocada en la armonía facial y, cuando aplica, la función respiratoria. Puede realizarse mediante técnica abierta (con incisión externa en la columela) o cerrada (todas las incisiones internas). El cirujano remodela el hueso y el cartílago nasal para lograr una nariz proporcionada al rostro del paciente.",
    benefits: [
      "Mejora de la armonía facial mediante la remodelación nasal.",
      "Corrección de alteraciones respiratorias cuando existen.",
      "Resultados permanentes en la estructura osteocartilaginosa.",
      "Técnicas adaptadas a la anatomía única de cada paciente.",
    ],
    candidates: [
      { title: "Inconformidad con la forma nasal", desc: "Personas que desean modificar el dorso, la punta o la simetría de su nariz." },
      { title: "Dificultad respiratoria", desc: "Pacientes con obstrucción nasal por desviación del tabique u otras causas." },
      { title: "Desarrollo nasal completo", desc: "Se recomienda a partir de los 16-18 años en mujeres y 18-20 en hombres." },
    ],
    recovery: [
      { period: "24 a 48 horas", desc: "Reposo con cabeza elevada. Férula nasal. Edema y equimosis periorbitaria." },
      { period: "Primera semana", desc: "Retiro de férula y taponamiento. El edema facial comienza a disminuir." },
      { period: "Primer mes", desc: "El edema nasal disminuye significativamente. Retorno progresivo a actividades." },
      { period: "6 a 12 meses", desc: "Resultado final consolidado. La cicatriz de rinoplastia abierta se atenúa." },
    ],
    steps: [
      { number: "01", title: "Valoración y análisis facial", desc: "Evaluación de la anatomía nasal, función respiratoria y planificación quirúrgica." },
      { number: "02", title: "Acceso quirúrgico", desc: "Técnica abierta o cerrada según la complejidad del caso." },
      { number: "03", title: "Remodelación osteocartilaginosa", desc: "Modificación del dorso, punta, fosas nasales y tabique." },
      { number: "04", title: "Corrección funcional", desc: "Cuando existe obstrucción, se corrigen desviaciones del tabique y cornetes." },
      { number: "05", title: "Cierre y férula", desc: "Sutura de incisiones y colocación de férula nasal externa." },
    ],
    faqs: [
      { q: "¿Duele la rinoplastia?", a: "No hay dolor intraoperatorio. En el postoperatorio hay congestión e inflamación controlable con analgesia." },
      { q: "¿Cuándo puedo usar gafas?", a: "Se recomienda evitar el apoyo en el puente nasal durante 4 a 6 semanas." },
    ],
  },

  "lipo-rinoplastia": {
    heroImage: "https://res.cloudinary.com/dkmf5vt2k/image/upload/v1783830677/ChatGPT_Image_11_jul_2026_10_34_24_p.m._nagkar.png",
    descriptionLong:
      "Combinación de liposucción corporal y rinoplastia facial en un solo procedimiento. La liposucción esculpe el contorno corporal eliminando grasa localizada, mientras que la rinoplastia remodela la nariz para armonizar el rostro. Es una opción para pacientes que desean mejorar tanto su silueta como su perfil facial en una sola intervención.",
    benefits: [
      "Mejora corporal y facial en una cirugía.",
      "Una sola anestesia y recuperación.",
      "Resultados integrales y coordinados.",
    ],
    candidates: [
      { title: "Grasa localizada e inconformidad nasal", desc: "Personas que desean liposucción corporal y rinoplastia." },
    ],
    recovery: [
      { period: "48 horas", desc: "Reposo. Faja y férula nasal. Edema facial esperable." },
      { period: "Semana 1", desc: "Caminatas suaves. Cuidados nasales y de liposucción." },
      { period: "3 a 4 semanas", desc: "Retorno progresivo a actividades." },
    ],
    steps: [
      { number: "01", title: "Planificación combinada", desc: "Evaluación corporal y facial para coordinar ambos procedimientos." },
      { number: "02", title: "Liposucción", desc: "Aspiración de grasa en áreas seleccionadas." },
      { number: "03", title: "Rinoplastia", desc: "Remodelación nasal según el plan quirúrgico." },
    ],
    faqs: [
      { q: "¿Es seguro combinar ambos procedimientos?", a: "Sí, siempre que el paciente esté en buenas condiciones de salud y el equipo médico tenga experiencia en cirugías combinadas." },
    ],
  },

  "blefaroplastia-otoplastia-lipectomia": {
    heroImage: "https://res.cloudinary.com/dkmf5vt2k/image/upload/v1783830679/ChatGPT_Image_11_jul_2026_11_26_18_p.m._cfhfki.png",
    descriptionLong:
      "Procedimiento integral que combina blefaroplastia (cirugía de párpados), otoplastia (corrección de orejas) y lipectomía (resección de piel abdominal). Está diseñado para pacientes que desean rejuvenecer la mirada, corregir la posición de las orejas y mejorar el contorno abdominal en un solo plan quirúrgico.",
    benefits: [
      "Transformación facial y corporal integral.",
      "Corrección de tres áreas en una sola cirugía.",
      "Optimización del tiempo de recuperación.",
    ],
    candidates: [
      { title: "Párpados caídos, orejas separadas y flacidez abdominal", desc: "Pacientes que requieren corrección en las tres áreas." },
    ],
    recovery: [
      { period: "48 horas", desc: "Reposo. Vendajes. Edema facial esperable." },
      { period: "Semana 1", desc: "Caminatas suaves. Cuidados de incisiones." },
      { period: "3 a 4 semanas", desc: "Retorno progresivo a actividades." },
    ],
    steps: [
      { number: "01", title: "Planificación triple", desc: "Evaluación de párpados, orejas y abdomen." },
      { number: "02", title: "Blefaroplastia", desc: "Cirugía de párpados superiores y/o inferiores." },
      { number: "03", title: "Otoplastia", desc: "Corrección de la posición de las orejas." },
      { number: "04", title: "Lipectomía", desc: "Resección de exceso de piel abdominal." },
    ],
    faqs: [
      { q: "¿Cuánto dura la cirugía completa?", a: "El tiempo quirúrgico varía entre 4 y 6 horas dependiendo de la complejidad de cada procedimiento." },
    ],
  },
};
