export const clinicData = {
  // Identidad — fuente única de verdad para toda la web
  legalName: "Tiffany Esthetic Group IPS SAS",
  name: "Tiffany Esthetic Group IPS SAS",
  displayName: "Clínica Tiffany",
  alternateNames: [
    "Clínica Tiffany",
    "Tiffany Esthetic Group",
    "Tiffany E.G. IPS",
  ],

  // Identificadores oficiales
  nit: "901634870",
  reps: "7600113199-01",

  // Datos legales
  foundingDate: "2022-09-16",
  legalRepresentative: "Sandra Milena Gomez Vasquez",
  licensing:
    "Institución Prestadora de Servicios de Salud habilitada por la Secretaría de Salud de Cali (Resolución 3100 de 2019)",
  supervisingBody: "Superintendencia Nacional de Salud",

  // Contacto — los campos address/city los consume el footer y el mapa
  address: "13a1-25, Cra 85c, Comuna 17",
  streetAddress: "Carrera 85C # 13A-1-25, Comuna 17",
  city: "Cali, Valle del Cauca, Colombia",
  locality: "Cali",
  region: "Valle del Cauca",
  country: "CO",
  postalCode: "760032",
  phone: "+57 320 2703522",
  whatsapp: "573202703522",
  email: "info@clinicatiffany.com",
  hours: [
    { day: "Lunes a viernes", time: "8:00 a. m. - 5:00 p. m." },
    { day: "Sábado", time: "8:00 a. m. - 12:00 p. m." },
    { day: "Domingo", time: "Cerrado" },
  ],

  // Instalaciones
  operatingRooms: 3,
  recoveryAreas: 1,
  pharmacyLicensed: true,

  // Catálogo
  procedurePages: 24,
  serviceCategories: [
    "Cirugía corporal",
    "Cirugía mamaria",
    "Cirugía facial",
  ],

  // Perfiles oficiales y mapas
  instagramUrl: "https://www.instagram.com/tiffanyeg_ips/",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.558602525777!2d-76.53837041600865!3d3.381189297503545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1a218ba2a73%3A0x9e0b5db8cc3e4ffa!2sTiffany%20Esthetic%20Group%20Ips%20SAS!5e0!3m2!1ses!2sco!4v1",
  googleMapsUrl:
    "https://www.google.com/maps/place/Tiffany+Esthetic+Group+Ips+SAS/@3.3811893,-76.5383704,17z/data=!4m6!3m5!1s0x8e30a1a218ba2a73:0x9e0b5db8cc3e4ffa!8m2!3d3.3811893!4d-76.5357955!16s%2Fg%2F11s9pzn3td?entry=ttu",
};

export const clinicSameAs = [
  clinicData.instagramUrl,
  clinicData.googleMapsUrl,
];
