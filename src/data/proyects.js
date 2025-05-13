import chainImg from "../assets/Images/chain.jpeg";
import pingImg from "../assets/Images/ping.jpeg";
import nonnaImg from "../assets/Images/nonna.jpeg";
import unnamedImg from "../assets/Images/unnamed.jpeg";

export default [
  {
    title: "Chain of Ascension",
    slug: "chain-of-ascension",
    img: chainImg,
    images: [chainImg, pingImg, nonnaImg], // imagen principal y dos secundarias
    subtitle: "Una épica estrategia en cadena",
    description: "Juego de estrategia en cadena donde subes niveles encadenando movimientos.",
    longDescription: `En Chain of Ascension guías a tu héroe a través de niveles encadenados de acertijos y combates. Cada partida desafía tu ingenio para enlazar hechizos en secuencia y desbloquear nuevas habilidades. La mecánica única combina puzzles, RPG y narración emergente, con un estilo visual inspirado en el arte cel shading.`,
    features: [
      "Sistema de combo basado en cadenas de hechizos",
      "Mapa procedural con rejugabilidad infinita",
      "Modo historia y multijugador cooperativo",
      "Efectos de partículas diseñados a mano"
    ],
    technologies: ["React", "Three.js", "Tailwind CSS"],
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
    images: [pingImg, nonnaImg, chainImg],
    subtitle: "Seguimiento en tiempo real",
    description: "App para trazar la trayectoria de la pelota en ping-pong.",
    longDescription: `De Ping a Pong es una aplicación en tiempo real que rastrea los movimientos de la pelota mediante visión por computadora. Se conecta a cámaras WebRTC y muestra estadísicas de potencia, ángulo y velocidad. Ideal para entrenadores y jugadores que quieran analizar cada golpe.`,
    features: [
      "Reconocimiento de trayectoria con WebRTC y OpenCV",
      "Gráficos en vivo de velocidad y precisión",
      "Comparativa de jugadas",
      "Historial y exportación de datos CSV"
    ],
    technologies: ["Node.js", "Socket.io", "React", "OpenCV.js"],
    date: "2024-05-22",
    duration: "4 meses",
    role: "Fullstack Developer",
    client: "SportTech Labs",
    repo: "https://github.com/usuario/de-ping-a-pong",
    liveDemo: "https://de-ping-a-pong.example.com"
  },
  {
    title: "Nonna's Recipes",
    slug: "nonnas-recipes",
    img: nonnaImg,
    images: [nonnaImg, unnamedImg, pingImg],
    subtitle: "Recetario familiar digitalizado",
    description: "Colecciona y comparte recetas tradicionales de la familia.",
    longDescription: `Nonna's Recipes digitaliza las recetas de la abuela, permitiendo búsquedas por ingredientes, valoraciones de comunidad y listas de la compra automáticas. La interfaz amigable está pensada para todas las generaciones, con opción de imprimir paso a paso.`,
    features: [
      "Búsqueda avanzada por ingredientes",
      "Sistema de valoraciones y comentarios",
      "Generador de lista de compra automática",
      "Modo impresión paso a paso"
    ],
    technologies: ["Vue", "Firebase", "Tailwind CSS"],
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
    images: [unnamedImg, chainImg, pingImg],
    subtitle: "Proyecto en desarrollo",
    description: "Prototipo de plataforma colaborativa.",
    longDescription: `Unnamed es un prototipo de plataforma colaborativa que integra chat, edición de documentos en tiempo real y gestión de tareas. Aún en desarrollo inicial, busca competir con soluciones empresariales open source.`,
    features: [
      "Editor colaborativo en tiempo real",
      "Canales de chat con threads",
      "Gestión de tareas integradas",
      "Autenticación OAuth2"
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    date: "2025-01-15",
    duration: "En curso",
    role: "Fullstack Intern",
    client: "OpenCollab Foundation",
    repo: "https://github.com/usuario/unnamed",
    liveDemo: null
  }
];