export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
  googleUrl: string;
  avatarUrl: string;
}

export interface AISummary {
  rating: number;
  totalReviews: number;
  bullets: string[];
}

export interface TestimonialsData {
  aiSummary: AISummary;
  reviews: Review[];
}

export const testimonialsData: TestimonialsData = {
  aiSummary: {
    rating: 4.8,
    totalReviews: 20,
    bullets: [
      "Ofrece procedimientos perfectos y atención profesional.",
      "Reconocido por su calidad humana y profesionalismo.",
      "Altamente recomendado con un excelente equipo de trabajo.",
    ],
  },
  reviews: [
    {
      id: "1",
      name: "Alejandra García",
      text: "Súper recome yo me realicé un procedimiento ahí con el Doctor oscar acosta y la atención desde la recepción es muy agradable el día del procedimiento me sentí muy tranquila y segura",
      rating: 5,
      date: "hace 5 meses",
      googleUrl: "https://maps.app.goo.gl/1UN3R8ejQUYFxtqh7",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSasYNkJrPSLP4FQCpDzMMpZTwln08KJZlFqXTpO19YA&s=10",
    },
    {
      id: "2",
      name: "Magaly Porto",
      text: "Excelente clínica, y excelentes profesionales los que laboran ahí. Lo digo desde mi experiencia, a mi me realizaron una lipo escultura hace un año y también una corrección de una hernia umbilical. Ambas cirugías fueron en un quirófano muy bien dotado con todos sus equipos médicos aptos y un personal calificado Yo no trabajo ni operó en ese lugar, ni soy del gremio médico, doy fe de lo que digo porque fui paciente, tengo pruebas de lo que digo y antes de realizarme mis cirugías investigue muy bien los profesionales que iban a hacerme la intervención. Es más cuando consulté el costo de la liposucción, en la valoración médica al mostrar mi abdomen tenía una cicatriz de una apendicectomía que me había realizado hacía dos años en mi eps es por ello, que me enviaron a realizarme una ecografía de abdomen y el resultado fue que tenía una hernia umbilical al presentar los resultados de este examen y de los otros que envían para esta clase de cirugías, me dijeron que debía primero realizarme una corrección de la hernia umbilical y que sin eso no podían realizarme la lipoescultura , entonces como yo no quise hacerme esa corrección por mi eps por temas de demoras en las citas, yo decidí que me realizaran esa corrección con el médico cirujano especialista en hernias umbilicales que en esta clínica labora. Entonces si fuesen unos irresponsables que solo quieren obtener dinero a consta de la salud, me fuesen dado esa recomendación, me habrían operado con esa condición ? Uno habla desde la experiencia Y SI YO RECOMIENDO LA CLÍNICA TIFFANY Y A LOS PROFESIONALES QUE LABORAN AHÍ !! Y me fue excelentemente",
      rating: 5,
      date: "hace 2 años",
      googleUrl: "https://maps.app.goo.gl/Cc6CmzGU6PFf4vvu5",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSasYNkJrPSLP4FQCpDzMMpZTwln08KJZlFqXTpO19YA&s=10",
    },
    {
      id: "3",
      name: "Alba Libreros",
      text: "Super recomendados, larga trayectoria profesional , ahora con una infraestructura excelente que sobre pasa todas las expectativas en seguridad, profesionalismo, seriedad y cumplimiento. La atención excelente como toda persona se merece 💯💪 recomendados . EXCELENTES PROFESIONALES 👌👏…",
      rating: 5,
      date: "hace 2 años",
      googleUrl: "https://maps.app.goo.gl/zTDpJTu8ZrmJEd3L6",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSasYNkJrPSLP4FQCpDzMMpZTwln08KJZlFqXTpO19YA&s=10",
    },
    {
      id: "4",
      name: "Angie Penagoa",
      text: "Súper recomendada la clínica, excelente atención y seguridad en todos los procedimientos, estoy feliz con mi los resultados de mi Cx 🫶🏻…",
      rating: 5,
      date: "hace 2 años",
      googleUrl: "https://maps.app.goo.gl/h76A2gndTPRGFqUN6",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSasYNkJrPSLP4FQCpDzMMpZTwln08KJZlFqXTpO19YA&s=10",
    },
    {
      id: "5",
      name: "Greysy Hernández",
      text: "Es un lugar donde prestan un excelente servicio a los pacientes con personal altamente calificado.",
      rating: 5,
      date: "hace 2 años",
      googleUrl: "https://maps.app.goo.gl/h76A2gndTPRGFqUN6",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSasYNkJrPSLP4FQCpDzMMpZTwln08KJZlFqXTpO19YA&s=10",
    },
    {
      id: "6",
      name: "Sonia Amparo Ocoró Ortiz",
      text: "Excelente clínica. Muy agradecida con la atención y el profesionalismo del equipo.",
      rating: 5,
      date: "hace 2 años",
      googleUrl: "https://maps.app.goo.gl/m27Lsvxg6i2dv7276",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSasYNkJrPSLP4FQCpDzMMpZTwln08KJZlFqXTpO19YA&s=10",
    },
    {
      id: "7",
      name: "Alejandra Rudas",
      text: "Excelente institución, personal muy profesional y maravillosa atención.",
      rating: 5,
      date: "hace 2 años",
      googleUrl: "https://maps.app.goo.gl/8bi8sVCiJR6TpQxu7",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSasYNkJrPSLP4FQCpDzMMpZTwln08KJZlFqXTpO19YA&s=10",
    },
    {
      id: "8",
      name: "Andrea Caicedo",
      text: "Excelente atención, buena servicio de instalaciónes y personal.",
      rating: 5,
      date: "hace 2 años",
      googleUrl: "https://maps.app.goo.gl/frCAuY2Ercupjgca6",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSasYNkJrPSLP4FQCpDzMMpZTwln08KJZlFqXTpO19YA&s=10",
    },
    {
      id: "9",
      name: "Angie Hernández",
      text: "Sus colaboradores y el servicio 10 de 10 excelente atención",
      rating: 5,
      date: "hace 2 años",
      googleUrl: "https://maps.app.goo.gl/YXE3YxKxXtVWY9gA8",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSasYNkJrPSLP4FQCpDzMMpZTwln08KJZlFqXTpO19YA&s=10",
    },
    {
      id: "10",
      name: "Dayana León",
      text: "Una de las mejores clínicas en Cali💗…",
      rating: 5,
      date: "hace 2 años",
      googleUrl: "https://maps.app.goo.gl/ETQRaD9JKHqPgb6M6",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSasYNkJrPSLP4FQCpDzMMpZTwln08KJZlFqXTpO19YA&s=10",
    },
  ],
};
