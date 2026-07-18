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
  preparation: string[];
  resultsDescription: string;
  risks?: string[];
  contraindications?: string[];
  anesthesia?: string;
  duration?: string;
  hospitalization?: string;
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
    preparation: [
      "Suspender el consumo de tabaco y alcohol al menos dos semanas antes de la cirugía para favorecer la cicatrización.",
      "Realizar exámenes preoperatorios completos: hemograma, perfil de coagulación, química sanguínea y valoración cardiológica.",
      "Ayuno absoluto de 8 horas previo al procedimiento. La tarde anterior, ducharse con jabón antiséptico indicado por el cirujano.",
      "Organizar el hogar con antelación: tener a disposición la faja de compresión, alimentos ligeros y una persona de apoyo durante las primeras 48 horas.",
    ],
    resultsDescription: "La grasa que logra integrarse tras la lipoescultura permanece de forma estable a largo plazo. El contorno corporal se redefine progresivamente: a la cuarta semana ya se observa una mejora notable, pero la silueta definitiva se consolida entre el tercer y sexto mes postoperatorio. La calidad de la piel, el peso corporal y los hábitos de vida influyen directamente en la durabilidad del resultado.",
    duration: "2 a 4 horas",
    anesthesia: "Anestesia general",
    hospitalization: "24 horas de observación",
    contraindications: [
      "Pacientes con índice de masa corporal superior a 30, ya que el riesgo quirúrgico se incrementa significativamente.",
      "Personas con trastornos de coagulación no controlados o enfermedades autoinmunes activas.",
      "Fumadores activos que no pueden suspender el tabaco durante el período perioperatorio.",
      "Pacientes con expectativas irreales sobre la cantidad de grasa que puede extraerse de forma segura.",
    ],
    risks: [
      "Seroma: acumulación de líquido seroso en las zonas intervenidas que puede requerir drenaje.",
      "Irregularidades del contorno: ondas o depresiones en la piel por extracción desigual de grasa.",
      "Necrosis grasa: áreas de tejido adiposo que no reciben suficiente irrigación sanguínea.",
      "Hipocirculación cutánea temporal en las zonas de liposucción extensa.",
    ],
    faqs: [
      { q: "¿Duele la lipoescultura?", a: "El procedimiento se realiza bajo anestesia, por lo que no hay dolor intraoperatorio. En el postoperatorio se presenta inflamación y sensibilidad controlable con analgesia." },
      { q: "¿Cuánto tiempo dura el resultado?", a: "La grasa que sobrevive al proceso de integración se mantiene de forma permanente, aunque el envejecimiento natural continúa." },
      { q: "¿Cuándo se ve el resultado final?", a: "El resultado inicial es visible al mes, pero la definición final del contorno se consolida entre los 3 y 6 meses." },
      { q: "¿Es lo mismo que liposucción?", a: "No. La liposucción solo extrae grasa, mientras que la lipoescultura utiliza esa grasa para moldear y proyectar otras áreas." },
      { q: "¿Qué porcentaje de grasa se reabsorbe?", a: "Entre el 30 % y 50 % de la grasa transferida puede reabsorberse durante los primeros meses. El cirujano compensa este porcentaje en el procedimiento inicial." },
      { q: "¿Cuándo puedo retomar el ejercicio?", a: "Las caminatas desde la primera semana. Ejercicio cardiovascular a partir de la cuarta semana y entrenamiento de fuerza después de la sexta semana, siempre con autorización médica." },
    ],
  },

  lipectomia: {
    heroImage: "",
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
    preparation: [
      "Dejar de fumar al menos cuatro semanas antes de la cirugía. El tabaco retrasa la cicatrización y aumenta el riesgo de necrosis cutánea.",
      "Mantener un peso estable durante los seis meses previos. No se recomienda la cirugía si hay planes de pérdida de peso significativa.",
      "Suspender anticonceptivos orales y terapia hormonal dos semanas antes para reducir el riesgo trombótico, bajo indicación médica.",
      "Adquirir la faja abdominal postquirúrgica con anticipación y preparar el hogar para permanecer en reposo los primeros días.",
    ],
    resultsDescription: "El abdomen luce más plano y firme desde el momento de la cirugía, aunque el resultado estético completo se aprecia después de tres meses, cuando el edema cede por completo. La cicatriz madura durante el primer año y tiende a ubicarse por debajo de la línea de la ropa interior. Mantener un peso corporal estable es clave para conservar el resultado a largo plazo.",
    duration: "3 a 5 horas",
    anesthesia: "Anestesia general",
    hospitalization: "24 a 48 horas",
    contraindications: [
      "Pacientes con obesidad mórbida o IMC superior a 32 que no hayan completado un programa de pérdida de peso supervisado.",
      "Fumadores activos que no puedan suspender el tabaco al menos cuatro semanas antes y durante la recuperación.",
      "Mujeres con planes de embarazo futuro, ya que la distensión abdominal puede comprometer el resultado quirúrgico.",
      "Pacientes con diabetes mellitus no controlada o enfermedad cardiovascular descompensada.",
    ],
    risks: [
      "Necrosis del colgajo cutáneo: pérdida de viabilidad de la piel abdominal por compromiso de la irrigación.",
      "Seroma: acumulación de líquido seroso bajo el colgajo que requiere drenaje percutáneo seriado.",
      "Dehiscencia de la sutura: separación parcial de los bordes de la incisión por tensión excesiva.",
      "Tromboembolismo pulmonar: riesgo aumentado por la resección extensa y el reposo postoperatorio prolongado.",
    ],
    faqs: [
      { q: "¿La cicatriz es muy notoria?", a: "La incisión se realiza en la parte baja del abdomen y se ubica por debajo de la línea de la ropa interior. La cicatriz madura durante el primer año." },
      { q: "¿Puedo combinar lipectomía con otros procedimientos?", a: "Sí. Es frecuente combinarla con liposucción de flancos o con cirugía mamaria en el mismo tiempo quirúrgico." },
      { q: "¿Cuándo puedo retomar el ejercicio?", a: "Las caminatas suaves desde la primera semana. El ejercicio abdominal intenso se reanuda entre la sexta y octava semana." },
      { q: "¿Afecta la sensibilidad del abdomen?", a: "Es normal presentar adormecimiento temporal en la zona intervenida. La sensibilidad suele recuperarse progresivamente durante los primeros meses." },
      { q: "¿Puedo quedar embarazada después?", a: "Sí, pero se recomienda completar la etapa reproductiva antes de la cirugía, ya que un embarazo posterior puede distender la pared abdominal nuevamente." },
    ],
  },

  "lipo-lipectomia": {
    heroImage: "",
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
    preparation: [
      "Suspender el consumo de tabaco y alcohol al menos tres semanas antes para optimizar la oxigenación tisular y la cicatrización.",
      "Realizar exámenes preoperatorios completos con énfasis en perfil de coagulación y ecografía abdominal de pared.",
      "Ayuno absoluto de 8 horas. La noche previa, ducharse con jabón de clorhexidina indicado por el cirujano.",
      "Adquirir faja abdominal de compresión de alta densidad y preparar el hogar para permanecer en posición semincorporada los primeros días.",
    ],
    resultsDescription: "Al combinar liposucción y lipectomía, el contorno abdominal muestra una mejora inmediata que se refina durante los meses siguientes. El resultado definitivo se consolida entre el tercer y sexto mes, cuando la inflamación residual desaparece por completo. La diástasis abdominal corregida proporciona además una mejoría funcional significativa en el core.",
    duration: "3 a 4 horas",
    anesthesia: "Anestesia general",
    hospitalization: "24 a 48 horas",
    contraindications: [
      "Pacientes con IMC superior a 30 que no han logrado estabilizar su peso en los últimos seis meses.",
      "Fumadores activos que no pueden abandonar el tabaco en el período perioperatorio.",
      "Personas con trastornos de la coagulación no corregidos o enfermedades del tejido conectivo.",
      "Pacientes con insuficiencia renal o hepática que contraindiquen una cirugía de duración prolongada.",
    ],
    risks: [
      "Necrosis cutánea: pérdida de viabilidad de la piel en el colgajo abdominal por compromiso vascular.",
      "Seroma recurrente que puede requerir múltiples punciones de drenaje o colocación de drenajes prolongados.",
      "Hematoma: colección sanguínea bajo el colgajo que puede necesitar reintervención quirúrgica para su evacuación.",
      "Alteraciones de la sensibilidad abdominal: adormecimiento permanente en la zona de la incisión.",
    ],
    faqs: [
      { q: "¿Es más riesgoso que hacerlos por separado?", a: "No. Al realizarse en el mismo tiempo quirúrgico, se reduce la exposición a anestesia y se consolida la recuperación en un solo período." },
      { q: "¿Duele más?", a: "El dolor postoperatorio es controlable con medicación. La molestia principal es la tensión abdominal al movimiento." },
      { q: "¿Cuánto tiempo dura la cirugía?", a: "El procedimiento combinado tiene una duración aproximada de 3 a 4 horas, dependiendo de la complejidad." },
      { q: "¿Cuándo puedo ver el ombligo después de la cirugía?", a: "El ombligo se reposiciona durante el procedimiento. En las primeras semanas puede verse edematoso; su aspecto definitivo se aprecia alrededor del tercer mes." },
    ],
  },

  "lipo-lipectomia-senos": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol al menos tres semanas antes. El tabaco afecta directamente la viabilidad de los colgajos cutáneos.",
      "Exámenes preoperatorios completos más ecografía abdominal y mamaria para planificar ambos procedimientos.",
      "Ayuno de 8 horas. Ducha prequirúrgica con jabón antiséptico la noche anterior y la mañana de la cirugía.",
      "Adquirir faja abdominal y sujetador quirúrgico sin aro con anticipación. Organizar apoyo familiar para la primera semana.",
    ],
    resultsDescription: "La transformación corporal es evidente desde el postoperatorio inmediato, aunque el resultado final se consolida entre el cuarto y sexto mes. Los implantes mamarios descienden a su posición natural alrededor del tercer mes, mientras que el abdomen muestra su contorno definitivo una vez que el edema cede por completo. La combinación de procedimientos ofrece un resultado armónico difícil de lograr con cirugías separadas.",
    duration: "4 a 6 horas",
    anesthesia: "Anestesia general",
    hospitalization: "24 a 48 horas",
    contraindications: [
      "Pacientes con IMC superior a 30 o pérdida de peso reciente no estabilizada en los últimos seis meses.",
      "Fumadores activos que no puedan suspender el tabaco durante todo el proceso quirúrgico.",
      "Mujeres con planes de embarazo a corto plazo, ya que los cambios corporales alterarían los resultados.",
      "Pacientes con comorbilidades no controladas que incrementen el riesgo anestésico en cirugías prolongadas.",
    ],
    risks: [
      "Complicaciones combinadas: mayor riesgo global por la extensión y duración del procedimiento (4-6 horas).",
      "Necrosis de colgajos cutáneos abdominales o mamarios por compromiso de la perfusión sanguínea.",
      "Asimetría o malposición de los implantes mamarios que puede requerir corrección secundaria.",
      "Trombosis venosa profunda por el tiempo quirúrgico prolongado y la inmovilización postoperatoria.",
    ],
    faqs: [
      { q: "¿Cuánto dura la cirugía completa?", a: "El tiempo quirúrgico varía entre 4 y 6 horas dependiendo de la complejidad de cada procedimiento." },
      { q: "¿La recuperación es muy difícil?", a: "Requiere paciencia, pero el manejo del dolor y las molestias está protocolizado. La mayoría de pacientes reporta satisfacción con los resultados." },
      { q: "¿Se pueden elegir los implantes el mismo día?", a: "No. La selección del tipo, perfil y tamaño de los implantes se realiza durante la consulta prequirúrgica con suficiente anticipación." },
      { q: "¿El resultado del abdomen puede afectar el de los senos?", a: "Ambos procedimientos se planifican de forma coordinada para que el resultado sea proporcionado y armónico en su conjunto." },
    ],
  },

  "lipo-lipectomia-pexia-periareolar": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol tres semanas antes. La nicotina compromete la irrigación de los colgajos cutáneos y mamarios.",
      "Exámenes preoperatorios completos más ecografía de abdomen y mama. Evaluación cardiológica si la paciente es mayor de 45 años.",
      "Ayuno de 8 horas. Ducha con jabón antiséptico la noche anterior y la mañana del procedimiento.",
      "Adquirir faja abdominal y sujetador quirúrgico sin aro. Preparar el hogar con almohadas extras para mantener una posición semincorporada.",
    ],
    resultsDescription: "El contorno corporal rejuvenecido y la elevación mamaria son visibles desde las primeras semanas, aunque el resultado estético completo se consolida entre el cuarto y sexto mes. La cicatriz periareolar se integra naturalmente en el borde de la areola y se atenúa progresivamente durante el primer año. La armonía entre el abdomen esculpido y el busto elevado proporciona una silueta equilibrada.",
    duration: "4 a 6 horas",
    anesthesia: "Anestesia general",
    hospitalization: "24 a 48 horas",
    contraindications: [
      "Pacientes con ptosis mamaria severa que requieran técnicas de elevación con incisiones verticales o en ancla.",
      "Fumadores activos que no puedan suspender el tabaco, ya que la irrigación de los colgajos mamarios es crítica.",
      "Mujeres con antecedente de cirugía mamaria previa que comprometa la vascularización del complejo areola-pezón.",
      "Pacientes con enfermedades autoinmunes o vasculares que afecten la cicatrización de tejidos blandos.",
    ],
    risks: [
      "Necrosis del complejo areola-pezón: la complicación más temida en cirugía mamaria combinada.",
      "Malposición o distorsión de la areola por tensión asimétrica en la sutura concéntrica periareolar.",
      "Pérdida de sensibilidad del pezón, que puede ser temporal o permanente según la técnica empleada.",
      "Recidiva temprana de la ptosis si la fijación interna del tejido glandular no es adecuada.",
    ],
    faqs: [
      { q: "¿La cicatriz periareolar se nota mucho?", a: "La incisión se realiza en el borde de la areola y tiende a camuflarse muy bien. La maduración de la cicatriz toma hasta un año." },
      { q: "¿Cuánto tiempo debo usar la faja y el sujetador quirúrgico?", a: "La faja abdominal se usa de forma permanente durante el primer mes y luego nocturna el segundo mes. El sujetador quirúrgico las 24 horas durante 4 a 6 semanas." },
      { q: "¿Puedo combinar este plan con implantes mamarios?", a: "Sí. Si además de elevar se desea aumentar el volumen mamario, pueden colocarse implantes en el mismo procedimiento. Esto se define durante la consulta prequirúrgica." },
    ],
  },

  "lipo-lipectomia-pexia": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol al menos tres semanas antes para garantizar una adecuada cicatrización de los colgajos cutáneos.",
      "Exámenes preoperatorios completos con énfasis en perfil de coagulación, ecografía abdominal y mamaria.",
      "Ayuno absoluto de 8 horas. Ducha prequirúrgica con clorhexidina la noche anterior.",
      "Adquirir faja abdominal de compresión y sujetador quirúrgico sin aro. Preparar el hogar con apoyo familiar los primeros 3 días.",
    ],
    resultsDescription: "La transformación corporal completa se aprecia progresivamente: el abdomen luce firme y esculpido, mientras que el busto recupera una posición elevada y juvenil. El resultado definitivo se consolida entre el cuarto y sexto mes postoperatorio. La combinación de los tres procedimientos en un solo acto quirúrgico permite una armonía estética integral difícil de lograr con cirugías por separado.",
    duration: "4 a 6 horas",
    anesthesia: "Anestesia general",
    hospitalization: "24 a 48 horas",
    contraindications: [
      "Pacientes con IMC superior a 30 o pérdida de peso reciente no estabilizada que comprometa el resultado.",
      "Fumadores activos: el tabaco aumenta drásticamente el riesgo de necrosis en los colgajos abdominal y mamario.",
      "Personas con hipertensión arterial no controlada o cardiopatía que contraindique tiempos quirúrgicos prolongados.",
      "Mujeres con embarazo planeado a corto plazo, ya que la distensión abdominal y los cambios mamarios afectarían el resultado.",
    ],
    risks: [
      "Necrosis de colgajo abdominal o mamario por la extensión combinada de las resecciones quirúrgicas.",
      "Tromboembolismo venoso: el riesgo se incrementa con la duración del procedimiento y la inmovilización posterior.",
      "Seroma y hematoma en ambas zonas intervenidas, con posible necesidad de drenaje o reintervención.",
      "Asimetría postoperatoria entre abdomen y busto que puede requerir retoques secundarios.",
    ],
    faqs: [
      { q: "¿Cuánto tiempo debo tomarme del trabajo?", a: "Depende de la actividad laboral. Para trabajos sedentarios, entre 2 y 3 semanas. Para actividades físicas, de 4 a 6 semanas." },
      { q: "¿Cuánto tiempo debo usar las prendas de compresión?", a: "La faja abdominal se usa las 24 horas durante el primer mes y luego 12 horas el segundo mes. El sujetador quirúrgico se mantiene de 4 a 6 semanas continuas." },
      { q: "¿El resultado de la pexia se afecta si no uso implantes?", a: "No. La pexia utiliza los tejidos propios del seno para reposicionarlos. Si además se desea volumen, se añaden implantes en el mismo procedimiento." },
    ],
  },

  hernia: {
    heroImage: "",
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
    preparation: [
      "Suspender anticoagulantes y antiinflamatorios una semana antes según indicación del cirujano y el médico tratante.",
      "Realizar ecografía de pared abdominal y exámenes preoperatorios de rutina para confirmar el diagnóstico y planificar la reparación.",
      "Ayuno de 8 horas. Si se combina con cirugía estética, seguir las indicaciones combinadas del equipo quirúrgico.",
      "Gestionar el tiempo de incapacidad laboral: para trabajos de oficina, aproximadamente una semana; para trabajos físicos, de 4 a 6 semanas.",
    ],
    resultsDescription: "La corrección de la hernia es definitiva y permanente en la mayoría de los casos. El dolor y las molestias asociadas a la protrusión desaparecen inmediatamente después de la cirugía. Cuando se coloca malla de refuerzo, el tiempo de integración del material protésico es de aproximadamente 3 meses. Combinar la reparación con liposucción o lipectomía permite además mejorar el contorno abdominal en el mismo procedimiento.",
    duration: "1 a 2 horas (solo hernia), 2 a 4 horas (combinada)",
    anesthesia: "Anestesia general o regional",
    hospitalization: "24 horas",
    contraindications: [
      "Pacientes con hernia encarcelada o estrangulada que requieren cirugía de urgencia no programable.",
      "Personas con infección activa en la zona quirúrgica o peritonitis establecida.",
      "Pacientes con ascitis no controlada o hipertensión portal que aumentan el riesgo de recurrencia.",
      "Individuos con coagulopatía no corregible que impidan una hemostasia segura durante la reparación.",
    ],
    risks: [
      "Recurrencia herniaria: nueva protrusión a través del mismo sitio por fallo en la reparación o infección.",
      "Infección de la malla protésica: complicación grave que puede requerir retiro del material y reconstrucción diferida.",
      "Seroma en el sitio quirúrgico, especialmente frecuente en reparaciones con malla de gran tamaño.",
      "Lesión de estructuras vecinas: vísceras, vasos epigástricos o nervios durante la disección del saco herniario.",
    ],
    faqs: [
      { q: "¿Necesito malla para la reparación?", a: "Depende del tamaño y la ubicación de la hernia. El cirujano determinará si es necesario colocar una malla de refuerzo." },
      { q: "¿Puedo combinar la reparación con cirugía estética?", a: "Sí. Es frecuente realizar liposucción o lipectomía en el mismo tiempo quirúrgico, previa evaluación de seguridad." },
      { q: "¿La hernia puede reaparecer después de la cirugía?", a: "El riesgo de recurrencia es bajo cuando se realiza una reparación adecuada. El uso de malla reduce significativamente este riesgo." },
      { q: "¿Cuándo puedo conducir después de la cirugía?", a: "Generalmente después de la primera semana, siempre que no se requieran analgésicos que afecten la capacidad de reacción." },
    ],
  },

  "mamoplastia-aumento-rinoplastia": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol al menos tres semanas antes. El tabaco compromete la cicatrización nasal y la viabilidad de los tejidos mamarios.",
      "Exámenes preoperatorios completos más evaluación facial y mamaria. Radiografía o tomografía nasal si es necesaria.",
      "Ayuno de 8 horas. No usar cremas, maquillaje ni joyería el día de la cirugía.",
      "Adquirir sujetador quirúrgico sin aro con anticipación. Preparar el hogar para mantener reposo con la cabeza elevada los primeros días.",
    ],
    resultsDescription: "La combinación de ambos procedimientos ofrece una transformación facial y corporal simultánea. La nariz muestra su estructura definitiva entre los 6 y 12 meses, mientras que los implantes mamarios descienden a su posición natural alrededor del tercer mes. La ventaja principal es una sola fase de recuperación para obtener resultados en dos áreas distintas.",
    duration: "4 a 6 horas",
    anesthesia: "Anestesia general",
    hospitalization: "24 horas",
    contraindications: [
      "Pacientes con deformidades nasales complejas o insuficiencia respiratoria severa que requieran cirugía nasal reconstructiva.",
      "Fumadores activos: el tabaco compromete la cicatrización nasal y la perfusión de los colgajos mamarios.",
      "Pacientes con hipoplasia mamaria severa que requieran técnicas de expansión tisular previa.",
      "Personas con infección activa en la vía aérea superior o sinusitis crónica no tratada.",
    ],
    risks: [
      "Complicación combinada: mayor tiempo quirúrgico (4-6 horas) incrementa el riesgo de trombosis y complicaciones anestésicas.",
      "Resultado nasal insatisfactorio que puede requerir rinoplastia secundaria de revisión.",
      "Malposición, contractura capsular o rotura del implante mamario a mediano o largo plazo.",
      "Edema y equimosis facial prolongada que puede retrasar el retorno a actividades sociales.",
    ],
    faqs: [
      { q: "¿Es seguro hacer dos cirugías al mismo tiempo?", a: "Sí, cuando el paciente está en buenas condiciones de salud y el equipo médico tiene experiencia en procedimientos combinados." },
      { q: "¿La recuperación nasal afecta la recuperación mamaria?", a: "No. Los cuidados son independientes para cada zona. La única recomendación común es evitar esfuerzos físicos durante las primeras semanas." },
      { q: "¿Cuándo puedo usar gafas después de la rinoplastia?", a: "Se recomienda evitar el apoyo en el puente nasal durante 4 a 6 semanas. Pueden usarse lentes de contacto mientras tanto." },
    ],
  },

  "mamoplastia-aumento": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol al menos dos semanas antes. El tabaco afecta la cicatrización y la perfusión de los tejidos mamarios.",
      "Exámenes preoperatorios: hemograma, perfil de coagulación, química sanguínea y ecografía mamaria.",
      "Ayuno de 8 horas previo al procedimiento. Ducha con jabón antiséptico la noche anterior.",
      "Adquirir sujetador quirúrgico sin aro de la talla recomendada. Organizar el hogar para evitar levantar los brazos los primeros días.",
    ],
    resultsDescription: "El volumen y la proyección mamaria son visibles inmediatamente después de la cirugía, aunque el resultado estético completo se consolida entre el tercer y sexto mes, cuando los implantes descienden a su posición natural y los tejidos se adaptan. La cicatriz madura durante el primer año. La satisfacción de las pacientes con el aumento mamario es consistentemente alta en los estudios de seguimiento.",
    duration: "1.5 a 2.5 horas",
    anesthesia: "Anestesia general",
    hospitalization: "12 a 24 horas",
    contraindications: [
      "Pacientes con tejido mamario insuficiente para cubrir adecuadamente el implante seleccionado.",
      "Mujeres con enfermedades autoinmunes o trastornos del tejido conectivo que afecten la cicatrización.",
      "Pacientes con antecedente de carcinoma mamario o mutaciones genéticas de alto riesgo sin evaluación oncológica previa.",
      "Madres lactantes o con planes de lactancia en los próximos seis meses.",
    ],
    risks: [
      "Contractura capsular: endurecimiento del tejido cicatricial alrededor del implante que puede deformar el seno.",
      "Rotura o fuga del implante: puede ocurrir por traumatismo, envejecimiento del material o fallo estructural.",
      "Malposición del implante: descentramiento, rotación o descenso por debajo del surco submamario.",
      "Alteración de la sensibilidad mamaria, especialmente del complejo areola-pezón, que puede ser permanente.",
    ],
    faqs: [
      { q: "¿Qué tipo de implante es mejor?", a: "No hay un implante universalmente mejor. La elección depende de la anatomía, preferencias y recomendación del cirujano." },
      { q: "¿Los implantes interfieren con la lactancia?", a: "Depende de la vía de abordaje. La incisión submamaria generalmente preserva la capacidad de lactar." },
      { q: "¿Cuánto duran los implantes?", a: "Los implantes actuales tienen una larga duración, pero pueden requerir reemplazo después de 10 a 15 años." },
      { q: "¿Se sienten diferentes los implantes al tacto?", a: "Los implantes modernos tienen una consistencia similar al tejido mamario natural. La sensación depende de la posición y la cobertura tisular." },
      { q: "¿Puedo volar después del aumento mamario?", a: "Se recomienda esperar al menos dos semanas antes de volar, y solo después de la autorización del cirujano." },
    ],
  },

  gigantomastia: {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol al menos tres semanas antes. El tabaco aumenta significativamente el riesgo de necrosis del complejo areola-pezón.",
      "Exámenes preoperatorios completos más ecografía mamaria y evaluación postural por fisioterapia si está indicado.",
      "Ayuno de 8 horas. Ducha con jabón antiséptico la noche anterior y la mañana de la cirugía.",
      "Adquirir sujetador quirúrgico sin aro de la talla postquirúrgica estimada. Preparar el hogar con apoyo familiar para la primera semana.",
    ],
    resultsDescription: "La reducción mamaria ofrece un alivio inmediato del dolor de espalda y cuello al disminuir el peso que los senos ejercen sobre el torso. El resultado estético es visible desde el postoperatorio, aunque la forma definitiva del seno se consolida entre el tercer y sexto mes. Las cicatrices maduran durante el primer año y tienden a desvanecerse significativamente. La mayoría de pacientes reporta una mejora sustancial en su calidad de vida.",
    duration: "3 a 5 horas",
    anesthesia: "Anestesia general",
    hospitalization: "24 a 48 horas",
    contraindications: [
      "Mujeres que desean mantener la capacidad de lactancia futura, ya que la resección glandular la afecta significativamente.",
      "Fumadoras activas que no puedan suspender el tabaco, por el alto riesgo de necrosis del complejo areola-pezón.",
      "Pacientes con trastornos de la coagulación o hipertensión arterial no controlada.",
      "Mujeres con expectativas irreales sobre el tamaño postquirúrgico o la posición de las cicatrices.",
    ],
    risks: [
      "Necrosis del complejo areola-pezón: la complicación más grave, que puede requerir reconstructión diferida.",
      "Pérdida permanente de la sensibilidad del pezón por la resección de los pedículos nerviosos.",
      "Cicatrices hipertróficas o queloides, especialmente en la incisión vertical y el surco submamario.",
      "Asimetría mamaria residual o deformidad en forma de 'cuadrado inferior' por resección insuficiente.",
    ],
    faqs: [
      { q: "¿La cirugía afecta la sensibilidad del pezón?", a: "Puede haber cambios temporales o permanentes en la sensibilidad, aunque se realizan esfuerzos por preservar las estructuras nerviosas." },
      { q: "¿Puedo amamantar después de la cirugía?", a: "La capacidad de lactancia puede reducirse dependiendo de la técnica utilizada y la cantidad de tejido resecado." },
      { q: "¿El tamaño de los senos puede volver a crecer?", a: "El tejido resecado no vuelve a crecer, pero el aumento de peso puede incrementar el volumen graso del seno remanente." },
      { q: "¿La reducción mamaria está cubierta por el sistema de salud?", a: "En muchos casos, cuando la gigantomastia causa síntomas funcionales documentados, la cirugía puede tener cobertura parcial. Consulte con su aseguradora." },
    ],
  },

  ginecomastia: {
    heroImage: "",
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
    preparation: [
      "Evaluación hormonal completa para descartar causas secundarias reversibles antes de la cirugía.",
      "Suspender tabaco y alcohol dos semanas antes. Evitar el consumo de esteroides anabólicos o suplementos hormonales.",
      "Ayuno de 8 horas. Exámenes preoperatorios de rutina más ecografía mamaria para diferenciar grasa de tejido glandular.",
      "Adquirir chaleco o sujetador de compresión masculino con anticipación. Organizar el hogar para los primeros días de reposo.",
    ],
    resultsDescription: "El contorno pectoral masculino mejora notablemente desde el postoperatorio inmediato. La inflamación residual cede durante las primeras semanas y el resultado definitivo se consolida entre el tercer y cuarto mes. La cicatriz periareolar es mínima y se camufla en el borde de la areola. La satisfacción con el resultado estético y funcional es muy alta.",
    duration: "1.5 a 2.5 horas",
    anesthesia: "Anestesia general o sedación",
    hospitalization: "12 horas",
    contraindications: [
      "Hombres con ginecomastia fisiológica puberal en etapa de resolución espontánea (menos de 2 años de evolución).",
      "Pacientes con causas secundarias reversibles no tratadas: tumores testiculares, hipogonadismo o fármacos causantes.",
      "Individuos con IMC superior a 30 que no han completado un programa de pérdida de peso y ejercicio pectoral.",
      "Pacientes con trastornos de la coagulación o anticoagulación terapéutica no interrumpible.",
    ],
    risks: [
      "Resección insuficiente: tejido glandular residual que causa asimetría o deformidad residual del contorno.",
      "Resección excesiva: depresión o 'hueco' en la región pectoral por extracción de tejido más allá del necesario.",
      "Hematoma: acumulación de sangre bajo la piel que puede requerir drenaje quirúrgico precoz.",
      "Alteración de la sensibilidad del pezón: adormecimiento o hipersensibilidad que suele ser temporal.",
    ],
    faqs: [
      { q: "¿La ginecomastia puede volver a aparecer?", a: "La cirugía remove el tejido de forma permanente, pero cambios hormonales o aumento de peso pueden causar recurrencia parcial." },
      { q: "¿Duele la cirugía?", a: "El procedimiento se realiza bajo anestesia. Las molestias postoperatorias son leves y controlables con analgesia." },
      { q: "¿Cuándo puedo retomar el gimnasio?", a: "Ejercicio cardiovascular ligero a partir de la tercera semana. Press de banca y ejercicios de pecho después de la sexta semana." },
      { q: "¿Es necesario el análisis hormonal antes de la cirugía?", a: "Sí. Es importante descartar causas tratables como tumores, hipogonadismo o efectos de medicamentos antes de indicar la cirugía." },
    ],
  },

  "pexia-reconstructiva": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol al menos dos semanas antes para asegurar una cicatrización óptima de los tejidos.",
      "Exámenes preoperatorios de rutina más ecografía mamaria para evaluar la densidad del tejido glandular.",
      "Ayuno de 8 horas. Ducha con jabón antiséptico la noche anterior.",
      "Adquirir sujetador quirúrgico sin aro con anticipación. No se requieren implantes, por lo que la preparación es más sencilla que en otras cirugías mamarias.",
    ],
    resultsDescription: "El busto recupera una posición elevada y juvenil sin la necesidad de cuerpos extraños. El resultado es visible inmediatamente, aunque la forma definitiva se consolida entre el tercer y cuarto mes cuando el edema cede por completo. Al utilizar tejido propio, la textura y la sensación del seno son completamente naturales. La paciente puede reanudar la mayoría de sus actividades en cuatro semanas.",
    duration: "2 a 3 horas",
    anesthesia: "Anestesia general",
    hospitalization: "12 a 24 horas",
    contraindications: [
      "Pacientes con ptosis mamaria severa (grado III) que requieren técnicas de incisión vertical o en ancla para una elevación adecuada.",
      "Mujeres con tejido mamario insuficiente que también necesitan aumento de volumen y no solo reposicionamiento.",
      "Fumadoras activas que no pueden suspender el tabaco durante el período perioperatorio.",
      "Pacientes con antecedente de cirugía mamaria previa que haya comprometido la vascularización del tejido glandular.",
    ],
    risks: [
      "Recidiva de la ptosis: caída progresiva del busto por falta de fijación interna adecuada o envejecimiento tisular.",
      "Asimetría areolar: diferencias en la posición, forma o tamaño de las areolas después de la elevación.",
      "Pérdida de la proyección del cono mamario tras la redistribución del tejido glandular.",
      "Alteraciones de la sensibilidad del complejo areola-pezón durante la movilización del colgajo.",
    ],
    faqs: [
      { q: "¿La pexia reconstructiva dura para siempre?", a: "Los resultados son duraderos, pero el envejecimiento, la gravedad y los cambios de peso pueden afectar la posición del busto con el tiempo." },
      { q: "¿Qué diferencia hay con una pexia con implantes?", a: "La pexia reconstructiva solo reposiciona el tejido existente sin añadir volumen. Si se desea aumentar el tamaño, se combina con implantes." },
      { q: "¿Cuánto pesa el tejido que se remueve?", a: "Varía según cada caso, pero generalmente se eliminan entre 100 y 300 gramos de tejido por seno, dependiendo del grado de ptosis." },
    ],
  },

  pexia: {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol dos semanas antes. El tabaco es especialmente riesgoso para la viabilidad de los colgajos cutáneos mamarios.",
      "Exámenes preoperatorios de rutina más ecografía mamaria para evaluar la composición del tejido.",
      "Ayuno de 8 horas. Ducha con jabón antiséptico la noche anterior.",
      "Adquirir sujetador quirúrgico sin aro. Si se planea colocar implantes, la selección debe realizarse con antelación en la consulta prequirúrgica.",
    ],
    resultsDescription: "El busto recupera una posición elevada y una forma más juvenil desde el postoperatorio inmediato. El resultado final se consolida entre el tercer y sexto mes, cuando el edema desaparece y las cicatrices comienzan a madurar. La satisfacción de las pacientes con la pexia mamaria es alta, especialmente cuando se combina con la colocación de implantes si se desea aumentar el volumen.",
    duration: "2 a 4 horas",
    anesthesia: "Anestesia general",
    hospitalization: "12 a 24 horas",
    contraindications: [
      "Pacientes con ptosis mamaria leve que puede corregirse con técnicas menos invasivas como pexia periareolar.",
      "Mujeres que planean un embarazo futuro, ya que los cambios hormonales pueden revertir la elevación obtenida.",
      "Fumadoras activas que no puedan suspender el tabaco al menos tres semanas antes de la cirugía.",
      "Pacientes con enfermedades autoinmunes o trastornos de cicatrización que afecten la viabilidad de los colgajos.",
    ],
    risks: [
      "Necrosis del colgajo cutáneo o del complejo areola-pezón por compromiso de la irrigación sanguínea.",
      "Cicatriz hipertrófica o quelóide en las incisiones verticales o periareolares.",
      "Pérdida de la elevación con el tiempo por efecto de la gravedad y el envejecimiento natural.",
      "Asimetría mamaria postoperatoria que puede requerir corrección secundaria.",
    ],
    faqs: [
      { q: "¿Qué tipo de cicatriz queda?", a: "La incisión puede ser periareolar, en vertical o en ancla, dependiendo del grado de elevación necesario." },
      { q: "¿Puedo combinar pexia con implantes?", a: "Sí. Cuando además de elevación se desea aumentar el volumen, se colocan implantes en el mismo procedimiento." },
      { q: "¿Cuánto dura el efecto de la pexia?", a: "Los resultados son duraderos, pero el envejecimiento natural y la gravedad continúan actuando. Un estilo de vida saludable ayuda a mantenerlos por más tiempo." },
    ],
  },

  "pexia-periareolar": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol al menos dos semanas antes. Una buena circulación es esencial para la cicatrización periareolar.",
      "Exámenes preoperatorios de rutina. La ecografía mamaria ayuda a confirmar que la técnica periareolar es la adecuada.",
      "Ayuno de 8 horas. Ducha antiséptica la noche anterior.",
      "Adquirir sujetador quirúrgico sin aro. La recuperación es más rápida que en la pexia tradicional, pero requiere los mismos cuidados iniciales.",
    ],
    resultsDescription: "La elevación mamaria es sutil pero efectiva, con una cicatriz que se camufla en el borde areolar. El resultado es visible desde la primera semana y se consolida alrededor del tercer mes. Esta técnica ofrece una recuperación más rápida que la pexia con incisiones verticales o en ancla, siendo ideal para pacientes con ptosis inicial.",
    duration: "1.5 a 2 horas",
    anesthesia: "Anestesia general o sedación",
    hospitalization: "12 horas",
    contraindications: [
      "Pacientes con ptosis mamaria moderada a severa que requieren incisiones verticales o en ancla para una elevación adecuada.",
      "Mujeres con mala elasticidad cutánea o piel muy fina que no garantice una retracción adecuada alrededor de la areola.",
      "Fumadoras activas que no puedan suspender el tabaco durante el proceso quirúrgico.",
      "Pacientes que desean un aumento significativo del volumen mamario además de la elevación.",
    ],
    risks: [
      "Distorsión del complejo areola-pezón: agrandamiento, asimetría o forma irregular de la areola.",
      "Cicatriz periareolar visible o hipertrófica en pacientes con tendencia a queloides.",
      "Elevación insuficiente si el grado de ptosis subestimado requiere una técnica más extensa.",
      "Pérdida parcial de la sensibilidad del pezón por la disección circumareolar.",
    ],
    faqs: [
      { q: "¿La cicatriz periareolar se nota?", a: "La incisión se realiza en la unión de la areola con la piel, por lo que tiende a camuflarse muy bien una vez madura." },
      { q: "¿Puedo combinar esta técnica con implantes?", a: "Sí. La pexia periareolar puede combinarse con aumento mamario cuando se desea elevación y volumen simultáneamente." },
      { q: "¿Cuándo puedo usar sujetador normal?", a: "Después de 4 a 6 semanas, cuando el cirujano autorice el cambio de sujetador quirúrgico a uno convencional sin aro." },
    ],
  },

  "lipo-pexia-periareolar": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol tres semanas antes para garantizar una cicatrización adecuada en ambas zonas.",
      "Exámenes preoperatorios completos más ecografía de las áreas a liposuccionar.",
      "Ayuno de 8 horas. Ducha antiséptica la noche anterior.",
      "Adquirir faja de compresión y sujetador quirúrgico sin aro con anticipación.",
    ],
    resultsDescription: "La combinación de liposucción y pexia periareolar permite obtener un contorno corporal más definido y un busto elevado con cicatrices mínimas. El resultado se consolida entre el tercer y cuarto mes. Es una opción ideal para pacientes que desean una mejoría integral sin someterse a procedimientos mayores por separado.",
    duration: "2 a 3 horas",
    anesthesia: "Anestesia general",
    hospitalization: "12 a 24 horas",
    contraindications: [
      "Pacientes con ptosis mamaria moderada a severa que no puede corregirse solo con técnica periareolar.",
      "Fumadores activos que no puedan suspender el tabaco, afectando la cicatrización de la liposucción y la pexia.",
      "Personas con flacidez cutánea severa en las áreas de liposucción que requieran resección de piel.",
      "Pacientes con comorbilidades no controladas que incrementen el riesgo de una cirugía combinada.",
    ],
    risks: [
      "Irregularidades del contorno corporal por liposucción desigual en las zonas tratadas.",
      "Distorsión o asimetría del complejo areola-pezón por la sutura concéntrica periareolar.",
      "Seroma: acumulación de líquido en las zonas de liposucción que puede requerir drenaje.",
      "Resultado insuficiente en la elevación mamaria si la ptosis era mayor a la evaluada inicialmente.",
    ],
    faqs: [
      { q: "¿Cuánto dura la cirugía combinada?", a: "Aproximadamente 2 a 3 horas, dependiendo de las áreas de liposucción." },
      { q: "¿Cuándo puedo retomar el ejercicio?", a: "Caminatas desde la primera semana. Ejercicio completo después de la cuarta semana con autorización médica." },
    ],
  },

  "lipo-pexia": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol tres semanas antes para optimizar la cicatrización en ambas zonas quirúrgicas.",
      "Exámenes preoperatorios completos. Evaluación de las áreas a liposuccionar y mamaria.",
      "Ayuno de 8 horas. Ducha antiséptica la noche anterior.",
      "Adquirir faja de compresión y sujetador quirúrgico sin aro. Preparar el hogar con apoyo familiar los primeros días.",
    ],
    resultsDescription: "La silueta corporal mejora notablemente con la reducción de grasa localizada, mientras que el busto recupera una posición elevada y juvenil. El resultado completo se consolida entre el tercer y cuarto mes. La combinación permite obtener una transformación estética integral con una sola fase de recuperación.",
    duration: "2.5 a 4 horas",
    anesthesia: "Anestesia general",
    hospitalization: "12 a 24 horas",
    contraindications: [
      "Pacientes con ptosis mamaria severa que requieren técnicas de elevación más complejas que la pexia convencional.",
      "Fumadores activos que no puedan suspender el tabaco al menos tres semanas antes de la cirugía.",
      "Personas con flacidez abdominal significativa que necesiten lipectomía además de liposucción para obtener un resultado óptimo.",
      "Pacientes con enfermedad cardiovascular o pulmonar que contraindiquen tiempos quirúrgicos superiores a 3 horas.",
    ],
    risks: [
      "Necrosis grasa en las áreas de liposucción extensa por compromiso de la irrigación sanguínea.",
      "Asimetría mamaria postoperatoria o pérdida de la elevación obtenida durante la pexia.",
      "Seroma en las zonas de liposucción que puede requerir múltiples drenajes percutáneos.",
      "Alteraciones de la sensibilidad del complejo areola-pezón por la movilización del tejido glandular.",
    ],
    faqs: [
      { q: "¿Puedo añadir implantes mamarios?", a: "Sí. Si además se desea aumentar el volumen, se pueden colocar implantes en el mismo procedimiento." },
      { q: "¿Cuándo puedo retomar el ejercicio completo?", a: "Después de la sexta semana, cuando ambas zonas hayan cicatrizado adecuadamente." },
    ],
  },

  "lipo-protesis-aumento": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol tres semanas antes. El tabaco afecta la cicatrización de las incisiones de liposucción y la viabilidad de los implantes.",
      "Exámenes preoperatorios completos más ecografía de las áreas a tratar. Selección anticipada de los implantes mamarios.",
      "Ayuno de 8 horas. Ducha antiséptica la noche anterior y la mañana de la cirugía.",
      "Adquirir faja de compresión y sujetador quirúrgico sin aro. Organizar el hogar con anticipación para las primeras semanas de cuidado.",
    ],
    resultsDescription: "La silueta corporal se redefine con la reducción de grasa localizada, mientras que el busto adquiere mayor volumen y proyección. El resultado final se consolida entre el cuarto y sexto mes, cuando los implantes descienden a su posición natural y la inflamación cede por completo. La transformación es integral y armónica.",
    duration: "3 a 5 horas",
    anesthesia: "Anestesia general",
    hospitalization: "24 horas",
    contraindications: [
      "Pacientes con IMC superior a 30 o pérdida de peso reciente no estabilizada que afecte el resultado de la liposucción.",
      "Fumadores activos que no puedan suspender el tabaco, comprometiendo la viabilidad de los implantes y la cicatrización.",
      "Mujeres con tejido mamario insuficiente para cubrir el implante o con ptosis significativa no corregida.",
      "Personas con enfermedades crónicas descompensadas que incrementen el riesgo anestésico en cirugías de 3 a 5 horas.",
    ],
    risks: [
      "Contractura capsular: endurecimiento del tejido alrededor del implante que puede requerir cirugía de revisión.",
      "Irregularidades del contorno corporal por extracción desigual de grasa durante la liposucción.",
      "Malposición del implante mamario asociada a cambios en el contorno corporal post-liposucción.",
      "Trombosis venosa profunda por el tiempo quirúrgico prolongado y la inmovilización postoperatoria.",
    ],
    faqs: [
      { q: "¿Se puede combinar con otros procedimientos?", a: "Sí. Dependiendo de las necesidades, puede añadirse lipectomía o pexia mamaria." },
      { q: "¿Cuándo se ven los resultados definitivos?", a: "Aunque el cambio es visible desde el inicio, el resultado final se consolida entre el cuarto y sexto mes postoperatorio." },
      { q: "¿Los implantes afectan la sensación de la liposucción?", a: "No. Son procedimientos independientes en zonas diferentes del cuerpo. La recuperación de cada área sigue su propio curso." },
    ],
  },

  "lipectomia-pexia": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol tres semanas antes. El tabaco compromete gravemente la cicatrización de la lipectomía.",
      "Exámenes preoperatorios completos más ecografía abdominal y mamaria. Evaluación cardiológica si está indicada.",
      "Ayuno de 8 horas. Ducha antiséptica la noche anterior.",
      "Adquirir faja abdominal de compresión y sujetador quirúrgico sin aro. Preparar el hogar para permanecer en reposo en posición semincorporada.",
    ],
    resultsDescription: "El abdomen luce firme y la silueta se redefine gracias a la lipectomía, mientras que el busto recupera una posición elevada y juvenil. El resultado completo se consolida entre el cuarto y sexto mes. Esta combinación es especialmente popular entre pacientes post-pérdida de peso que desean corregir las secuelas del adelgazamiento significativo.",
    duration: "3 a 5 horas",
    anesthesia: "Anestesia general",
    hospitalization: "24 a 48 horas",
    contraindications: [
      "Pacientes con pérdida de peso masiva reciente (menos de 6 meses de estabilidad ponderal) que comprometa la cicatrización.",
      "Fumadores activos: el tabaco aumenta drásticamente el riesgo de necrosis del colgajo abdominal y mamario.",
      "Mujeres con planes de embarazo futuro, ya que la distensión afectaría tanto el abdomen como el busto intervenido.",
      "Personas con desnutrición o déficits vitamínicos que retrasen la cicatrización de las heridas quirúrgicas.",
    ],
    risks: [
      "Necrosis combinada de colgajos: compromiso vascular simultáneo del abdomen y el busto por resecciones extensas.",
      "Dehiscencia de sutura abdominal por tensión excesiva al incorporarse o realizar esfuerzos precoces.",
      "Asimetría entre el resultado abdominal y mamario que requiera procedimientos de retoque.",
      "Seroma y hematoma en ambas zonas intervenidas con posible necesidad de drenaje quirúrgico.",
    ],
    faqs: [
      { q: "¿Cuánto tiempo debo esperar para retomar el ejercicio?", a: "Se recomienda esperar de 6 a 8 semanas para ejercicio intenso, especialmente actividades que involucren el abdomen y el pecho." },
      { q: "¿Puedo combinar este plan con implantes mamarios?", a: "Sí. Si además de elevar se desea aumentar el volumen, se pueden colocar implantes en el mismo procedimiento." },
      { q: "¿La cicatriz de la lipectomía es la misma que en una abdominoplastia?", a: "Sí. La incisión se realiza en la parte baja del abdomen, por debajo de la línea de la ropa interior, y madura durante el primer año." },
    ],
  },

  "ritidoplastia-completa": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol al menos cuatro semanas antes. El tabaco compromete gravemente la cicatrización facial.",
      "Exámenes preoperatorios completos más evaluación cardiológica y análisis facial fotográfico.",
      "Ayuno de 8 horas. No usar cremas faciales, maquillaje ni joyería el día de la cirugía.",
      "Adquirir los insumos postoperatorios: vendas, gasas, soluciones antisépticas y almohadas para mantener la cabeza elevada.",
    ],
    resultsDescription: "El lifting facial completo ofrece un rejuvenecimiento integral que abarca desde la frente hasta el cuello. El edema facial cede significativamente después de la segunda semana, permitiendo retomar actividades sociales. El resultado definitivo se consolida entre el tercer y sexto mes, cuando los tejidos se asientan en su nueva posición. La duración del resultado es de 7 a 10 años.",
    duration: "4 a 6 horas",
    anesthesia: "Anestesia general",
    hospitalization: "24 horas",
    contraindications: [
      "Pacientes con enfermedades cardiovasculares severas o hipertensión arterial no controlada que aumenten el riesgo hemorrágico.",
      "Fumadores activos: el tabaco compromete gravemente la cicatrización de los colgajos faciales y puede producir necrosis.",
      "Personas con trastornos de la coagulación o anticoagulación terapéutica que no pueda suspenderse.",
      "Pacientes con expectativas irreales sobre el grado de rejuvenecimiento o la desaparición total de arrugas finas.",
    ],
    risks: [
      "Hematoma: la complicación más frecuente del lifting facial, puede requerir drenaje quirúrgico de urgencia.",
      "Lesión del nervio facial: parálisis temporal o permanente de ramas motoras que afectan la expresión facial.",
      "Necrosis cutánea del colgajo facial por compromiso de la irrigación, especialmente en fumadores.",
      "Alopecia o mala cicatrización en las incisiones de la línea del cabello y región retroauricular.",
    ],
    faqs: [
      { q: "¿A qué edad se recomienda el lifting facial?", a: "Generalmente a partir de los 40-50 años, cuando la flacidez facial es evidente. La edad ideal se determina en la valoración médica." },
      { q: "¿Cuánto dura el resultado del lifting?", a: "Los resultados suelen durar entre 7 y 10 años, aunque el envejecimiento natural continúa." },
      { q: "¿Las cicatrices del lifting son visibles?", a: "Las incisiones se realizan en la línea del cabello y los pliegues naturales de la oreja, por lo que son prácticamente imperceptibles una vez maduras." },
      { q: "¿Puedo combinar el lifting con otros procedimientos faciales?", a: "Sí. Es frecuente combinarlo con blefaroplastia, rinoplastia o tratamientos con láser para un rejuvenecimiento facial completo." },
    ],
  },

  "ritidoplastia-tercio-medio": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol tres semanas antes para garantizar una cicatrización adecuada de los tejidos faciales.",
      "Exámenes preoperatorios de rutina. Evaluación fotográfica detallada del tercio medio facial.",
      "Ayuno de 8 horas. No usar maquillaje, cremas ni lentes de contacto el día de la cirugía.",
      "Preparar el hogar con almohadas extras para mantener la cabeza elevada los primeros días.",
    ],
    resultsDescription: "El tercio medio facial recupera volumen y elevación, suavizando los surcos nasogenianos y mejorando la proyección de los pómulos. El resultado es sutil y natural, evitando la apariencia de tirantez. El edema cede en dos semanas y el resultado definitivo se consolida entre el segundo y tercer mes.",
    duration: "2 a 3 horas",
    anesthesia: "Anestesia general o sedación",
    hospitalization: "12 horas",
    contraindications: [
      "Pacientes con flacidez severa del tercio inferior y cuello que requieren un lifting facial completo para un resultado armónico.",
      "Fumadores activos que no puedan suspender el tabaco, afectando la viabilidad del colgajo del tercio medio.",
      "Personas con infección activa en la zona de tratamiento o herpes facial recurrente no controlado.",
      "Pacientes con enfermedades autoinmunes que afecten la cicatrización o con antecedente de queloides faciales.",
    ],
    risks: [
      "Edema y equimosis prolongada en la región periorbitaria que puede tardar varias semanas en resolverse.",
      "Asimetría en la elevación de los pómulos o en la corrección de los surcos nasogenianos.",
      "Lesión temporaria de las ramas del nervio facial que inervan el músculo orbicular del ojo.",
      "Resultado insuficiente si la ptosis del tercio medio era más severa de lo evaluado inicialmente.",
    ],
    faqs: [
      { q: "¿Se nota mucho el cambio?", a: "El resultado es natural. El objetivo es rejuvenecer sin que se note una intervención quirúrgica evidente." },
      { q: "¿Cuándo puedo retocar el maquillaje?", a: "Se recomienda esperar al menos dos semanas antes de aplicar maquillaje sobre las incisiones." },
      { q: "¿Este procedimiento se combina con rellenos faciales?", a: "Sí. En muchos casos se complementa con ácido hialurónico o grasa autóloga para restaurar el volumen perdido." },
    ],
  },

  "ritidoplastia-tercio-inferior": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol tres semanas antes. El tabaco afecta directamente la cicatrización de la piel del cuello y la mandíbula.",
      "Exámenes preoperatorios de rutina. Evaluación fotográfica del perfil facial y la papada.",
      "Ayuno de 8 horas. Evitar usar cremas, maquillaje o joyería en el cuello y rostro.",
      "Preparar el hogar con almohadas cervicales para mantener una posición cómoda con la cabeza elevada.",
    ],
    resultsDescription: "La mandíbula recupera su definición, la papada desaparece y el cuello luce más firme y estilizado. El resultado es visible desde la primera semana, aunque el edema residual puede tomar hasta tres semanas en ceder por completo. El perfil facial rejuvenecido se mantiene por varios años, especialmente si se combina con un estilo de vida saludable.",
    duration: "2 a 3 horas",
    anesthesia: "Anestesia general o sedación",
    hospitalization: "12 horas",
    contraindications: [
      "Pacientes con flacidez significativa del tercio medio facial que requieren un abordaje combinado para un resultado natural.",
      "Fumadores activos: el tabaco compromete la irrigación de los colgajos cutáneos del cuello y la mandíbula.",
      "Personas con obesidad o sobrepeso significativo que presenten acumulación grasa difusa no tratable solo con lifting.",
      "Pacientes con trastornos de la movilidad cervical o enfermedad degenerativa que dificulten la posición intraoperatoria.",
    ],
    risks: [
      "Hematoma cervical: acumulación de sangre en el cuello que puede comprometer la vía aérea si no se evacúa a tiempo.",
      "Lesión del nervio marginal mandibular: parálisis temporal o permanente del músculo depresor del labio inferior.",
      "Cicatriz hipertrófica en la región retroauricular o submentoniana que requiera tratamiento con corticoides.",
      "Resultado insatisfactorio en la definición mandibular por laxitud residual del platisma no corregida.",
    ],
    faqs: [
      { q: "¿Duele la recuperación?", a: "Las molestias son leves y controlables. La mayoría de pacientes retoma sus actividades en dos semanas." },
      { q: "¿Qué cuidados requiere la cicatriz submentoniana?", a: "La incisión bajo la barbilla es pequeña y se camufla en el pliegue natural. Debe mantenerse limpia y protegida del sol durante los primeros meses." },
      { q: "¿Puedo combinar este procedimiento con un lifting completo?", a: "Sí. El lifting del tercio inferior puede realizarse como parte de un lifting facial completo o como procedimiento independiente si la flacidez es exclusivamente mandibular y cervical." },
    ],
  },

  rinoplastia: {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol al menos tres semanas antes. El tabaco afecta la cicatrización de los tejidos nasales.",
      "Exámenes preoperatorios de rutina más radiografía o tomografía nasal si está indicada para evaluar el tabique y los cornetes.",
      "Ayuno de 8 horas. No usar cremas, maquillaje ni joyería. Evitar lentes de contacto el día del procedimiento.",
      "Adquirir insumos postoperatorios: gasas, solución salina, analgésicos prescritos y almohadas para mantener la cabeza elevada.",
    ],
    resultsDescription: "La nariz muestra una mejora inmediata en su forma, aunque el resultado final se consolida entre los 6 y 12 meses debido a la lenta resolución del edema nasal. La corrección funcional de la respiración es perceptible desde la primera semana tras retirar el taponamiento. La cicatriz de la rinoplastia abierta (en la columela) es mínima y se desvanece con el tiempo.",
    duration: "2 a 3 horas (estética), 3 a 4 horas (con corrección funcional)",
    anesthesia: "Anestesia general",
    hospitalization: "12 a 24 horas",
    contraindications: [
      "Pacientes menores de 16-18 años (mujeres) o 18-20 años (hombres) con desarrollo nasal incompleto.",
      "Personas con rinitis alérgica severa, sinusitis crónica no controlada o infección activa de la vía aérea superior.",
      "Pacientes con trastornos de la coagulación o vasculitis que afecten la irrigación de los tejidos nasales.",
      "Fumadores activos que no puedan suspender el tabaco, ya que compromete la cicatrización osteocartilaginosa.",
    ],
    risks: [
      "Insuficiencia respiratoria nasal por colapso del valvular interno o externo después de la remodelación.",
      "Asimetría o deformidad residual del dorso o la punta nasal que requiera rinoplastia secundaria.",
      "Perforación del tabique nasal por disección excesiva o compromiso vascular de la mucosa.",
      "Resultado estético insatisfactorio por cambios en la proyección, rotación o ancho de la punta nasal.",
    ],
    faqs: [
      { q: "¿Duele la rinoplastia?", a: "No hay dolor intraoperatorio. En el postoperatorio hay congestión e inflamación controlable con analgesia." },
      { q: "¿Cuándo puedo usar gafas?", a: "Se recomienda evitar el apoyo en el puente nasal durante 4 a 6 semanas." },
      { q: "¿Puedo sonarme la nariz después de la cirugía?", a: "No debe sonarse la nariz durante al menos dos semanas para evitar desplazar los tejidos recién remodelados." },
      { q: "¿La rinoplastia afecta la voz?", a: "Temporalmente puede haber un cambio leve en la resonancia nasal debido al edema, pero la voz retorna a su tono habitual al desaparecer la inflamación." },
    ],
  },

  "lipo-rinoplastia": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol tres semanas antes. El tabaco afecta tanto la cicatrización corporal como la nasal.",
      "Exámenes preoperatorios completos más evaluación facial y de las áreas a liposuccionar.",
      "Ayuno de 8 horas. Ducha antiséptica. No usar maquillaje, cremas ni joyería.",
      "Adquirir faja de compresión y preparar el hogar para el reposo con la cabeza elevada. Organizar apoyo familiar.",
    ],
    resultsDescription: "La combinación ofrece una transformación corporal y facial simultánea. El contorno corporal mejora desde las primeras semanas, mientras que la nariz requiere de 6 a 12 meses para mostrar su resultado definitivo. La ventaja principal es realizar ambos procedimientos con una sola recuperación, optimizando el tiempo del paciente.",
    duration: "3 a 5 horas",
    anesthesia: "Anestesia general",
    hospitalization: "24 horas",
    contraindications: [
      "Pacientes con IMC superior a 30 y depósitos de grasa generalizada no localizada que no respondan a liposucción.",
      "Fumadores activos que no puedan suspender el tabaco, comprometiendo la cicatrización corporal y nasal.",
      "Personas con infección activa de la vía aérea superior o sinusitis crónica que contraindique la rinoplastia.",
      "Pacientes con comorbilidades no controladas que incrementen el riesgo de una cirugía combinada de 3 a 5 horas.",
    ],
    risks: [
      "Complicaciones combinadas: mayor riesgo anestésico y trombótico por la duración del procedimiento.",
      "Insuficiencia respiratoria nasal postoperatoria por edema o colapso de la válvula nasal.",
      "Irregularidades del contorno corporal en las áreas de liposucción que requieran retoque.",
      "Edema facial prolongado que puede retrasar la visualización del resultado nasal definitivo.",
    ],
    faqs: [
      { q: "¿Es seguro combinar ambos procedimientos?", a: "Sí, siempre que el paciente esté en buenas condiciones de salud y el equipo médico tenga experiencia en cirugías combinadas." },
      { q: "¿La recuperación nasal afecta la recuperación de la liposucción?", a: "No. Los cuidados son independientes para cada zona. La única precaución común es evitar esfuerzos físicos durante las primeras semanas." },
      { q: "¿Puedo dormir de lado después de la cirugía?", a: "Se recomienda dormir boca arriba con la cabeza elevada durante las primeras dos semanas para proteger tanto la nariz como las zonas de liposucción." },
    ],
  },

  "blefaroplastia-otoplastia-lipectomia": {
    heroImage: "",
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
    preparation: [
      "Suspender tabaco y alcohol tres semanas antes. El tabaco compromete la cicatrización de los tres procedimientos simultáneamente.",
      "Exámenes preoperatorios completos más evaluación oftalmológica si está indicada y ecografía abdominal.",
      "Ayuno de 8 horas. Ducha antiséptica. No usar maquillaje, cremas, lentes de contacto ni joyería.",
      "Adquirir faja abdominal y preparar el hogar con almohadas extras. Organizar apoyo familiar para los primeros días, ya que la recuperación involucra múltiples zonas.",
    ],
    resultsDescription: "La mirada rejuvenecida, las orejas en posición anatómica correcta y el abdomen firme se logran en un solo procedimiento. La blefaroplastia muestra resultados visibles en dos semanas cuando el edema cede. La otoplastia es permanente desde el postoperatorio. La lipectomía requiere de 3 a 6 meses para su consolidación definitiva. Esta combinación triple ofrece una transformación integral con una sola fase de recuperación.",
    duration: "4 a 6 horas",
    anesthesia: "Anestesia general",
    hospitalization: "24 a 48 horas",
    contraindications: [
      "Pacientes con sequedad ocular severa, glaucoma o enfermedades oftalmológicas que contraindiquen la blefaroplastia.",
      "Fumadores activos que no puedan suspender el tabaco, ya que la cicatrización de tres áreas simultáneas se ve muy comprometida.",
      "Personas con queloides o cicatrices hipertróficas conocidas, por la multiplicidad de incisiones quirúrgicas.",
      "Pacientes con comorbilidades múltiples no controladas que incrementen el riesgo de una cirugía triple prolongada.",
    ],
    risks: [
      "Complicación triple: mayor riesgo global por la extensión y duración del procedimiento combinado (4-6 horas).",
      "Necrosis del colgajo abdominal por la lipectomía, con posible dehiscencia de la sutura.",
      "Asimetría en la posición de las orejas o recidiva de la deformidad auricular por mala fijación del cartílago.",
      "Retracción palpebral, ectropión o lagoftalmos por resección excesiva de piel en la blefaroplastia.",
    ],
    faqs: [
      { q: "¿Cuánto dura la cirugía completa?", a: "El tiempo quirúrgico varía entre 4 y 6 horas dependiendo de la complejidad de cada procedimiento." },
      { q: "¿La blefaroplastia deja cicatrices visibles?", a: "Las incisiones se realizan en los pliegues naturales de los párpados, por lo que las cicatrices son prácticamente imperceptibles." },
      { q: "¿A qué edad se recomienda la otoplastia?", a: "La otoplastia puede realizarse a cualquier edad, aunque se recomienda a partir de los 6-7 años cuando el cartílago auricular ha alcanzado su desarrollo." },
    ],
  },
};
