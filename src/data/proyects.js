import chainImg from "../assets/Images/chain.jpeg";
import pingImg from "../assets/Images/ping.jpeg";
import pingpong from "../assets/Images/pingpong.jpeg";
import table from "../assets/Images/table.jpeg";
import robots from "../assets/Images/robots.jpeg";
import insectos from "../assets/Images/insectos.jpeg";
import nonnaImg from "../assets/Images/nonna.jpeg";
import unnamedImg from "../assets/Images/unnamed.jpeg";
import unnamed1 from "../assets/Images/unnamed1.jpeg";
import unnamed2 from "../assets/Images/unnamed2.jpeg";
import goboletImg from "../assets/Images/GoBoletPrincipal.jpeg"; 
export default [
  {
    title: "Chain of Ascension",
    slug: "chain-of-ascension",
    img: chainImg,
    images: [chainImg, insectos, robots], // imagen principal y dos secundarias
    subtitle: "Game website 🌀",
    description: "Landing page, shop, user directory, signup and login page",
    longDescription: `En Chain of Ascension guías a tu héroe a través de niveles encadenados de acertijos y combates. Cada partida desafía tu ingenio para enlazar hechizos en secuencia y desbloquear nuevas habilidades. La mecánica única combina puzzles, RPG y narración emergente, con un estilo visual inspirado en el arte cel shading.`,
    features: [
      "Sistema de combo basado en cadenas de hechizos",
      "Mapa procedural con rejugabilidad infinita",
      "Modo historia y multijugador cooperativo",
      "Efectos de partículas diseñados a mano"
    ],
    technologies: ["React", "JavaScript", "Css" , "Supabase"],
    date: "2024-11-10",
    duration: "6 meses",
    role: "Lead Developer & Game Designer",
    client: "AnVenture Studios",
    repo: "https://github.com/usuario/chain-of-ascension",
    liveDemo: "https://chain-of-ascension.example.com"
  },
  {
    title: "De Ping a Pong",
    slug: "de-ping-a-pong",
    img: pingImg,
    images: [pingImg, pingpong, table],
    subtitle: "Booking platform 🏓",
    description: "Location info & booking, events, profile and matchmaking",
    longDescription: `De Ping a Pong es una aplicación en tiempo real que rastrea los movimientos de la pelota mediante visión por computadora. Se conecta a cámaras WebRTC y muestra estadísicas de potencia, ángulo y velocidad. Ideal para entrenadores y jugadores que quieran analizar cada golpe.`,
    features: [
      "Reconocimiento de trayectoria con WebRTC y OpenCV",
      "Gráficos en vivo de velocidad y precisión",
      "Comparativa de jugadas",
      "Historial y exportación de datos CSV"
    ],
    technologies: ["Node.js", "MongoDB", "React", "JavaScript"],
    date: "2024-05-22",
    duration: "4 meses",
    role: "Fullstack Developer",
    client: "SportTech Labs",
    repo: "https://github.com/forsakenardy/Final-Project-Front-End",
    liveDemo: "https://roaring-florentine-1333cd.netlify.app"
  },
  {
    title: "Nonna's Recipes",
    slug: "nonnas-recipes",
    img: nonnaImg,
    images: [nonnaImg, unnamedImg, pingImg],
    subtitle: "Recipe website 🍽️",
    description: "Recipe cards with interactive details and funny features",
    longDescription: `Nonna's Recipes digitaliza las recetas de la abuela, permitiendo búsquedas por ingredientes, valoraciones de comunidad y listas de la compra automáticas. La interfaz amigable está pensada para todas las generaciones, con opción de imprimir paso a paso.`,
    features: [
      "Búsqueda avanzada por ingredientes",
      "Sistema de valoraciones y comentarios",
      "Generador de lista de compra automática",
      "Modo impresión paso a paso"
    ],
    technologies: ["React", "JavaScript", "Css"],
    date: "2023-12-05",
    duration: "3 meses",
    role: "Frontend Lead",
    client: "FamilyCook Co.",
    repo: "https://github.com/usuario/nonnas-recipes",
    liveDemo: "https://nonnas-recipes.example.com"
  },
  {
    title: "Unnamed",
    slug: "unnamed",
    img: unnamedImg,
    images: [ unnamed1, unnamedImg, unnamed2],
    subtitle: "Videogame 🎮",
    description: "Platformer game prototype",
    longDescription: `Unnamed es un prototipo de plataforma colaborativa que integra chat, edición de documentos en tiempo real y gestión de tareas. Aún en desarrollo inicial, busca competir con soluciones empresariales open source.`,
    features: [
      "Editor colaborativo en tiempo real",
      "Canales de chat con threads",
      "Gestión de tareas integradas",
      "Autenticación OAuth2"
    ],
    technologies: ["JavaScript", "Html", "Css",],
    date: "2025-01-15",
    duration: "En curso",
    role: "Fullstack Intern",
    client: "OpenCollab Foundation",
    repo: "https://github.com/forsakenardy/Final-Project-Front-End",
    liveDemo: null
  },
  {
  title: "GoBolet",
  slug: "gobolet",
  img: goboletImg, // reemplázalo por la imagen principal real
  images: [unnamedImg, chainImg, pingImg], // reemplaza según tus imágenes disponibles
  subtitle: "Local guide site 🟢",
  description: "Location search, detailed info pages, user comments, and interaction features",
  longDescription: `GoBolet es una solución integral para la gestión de entradas en eventos. Permite a organizadores generar boletos digitales con QR, controlar accesos en tiempo real y obtener estadísticas de asistencia. Ideal para conciertos, conferencias y eventos deportivos.`,
  features: [
    "Generación automática de boletos QR",
    "Validación en tiempo real desde móvil",
    "Panel de control para organizadores",
    "Estadísticas en vivo de asistencia"
  ],
  technologies: ["C#", "ASP.NET", "Bootstrap", "SQL Server"],
  date: "2024-08-01",
  duration: "5 meses",
  role: "Fullstack Developer",
  client: "GoBolet Inc.",
  repo: "https://github.com/forsakenardy/Go-Bolet",
}
];