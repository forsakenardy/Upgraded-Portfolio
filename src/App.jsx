import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SidePicture from "./Components/SidePicture";
import MainInfo from "./Components/MainInfo";
import ProjectSlider from "./Components/ProjectSlider";
import Formation from "./Components/Formation";
import AboutMe from "./Components/AboutMe";
import ProjectPage from "./Components/ProjectPage";

// Componente para hacer scroll al tope al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // Estado de carga

  useEffect(() => {
    const handleWheel = (event) => {
      if (isScrolling) return; // Bloquear scroll si ya está en transición
      event.preventDefault();
      setIsScrolling(true);

      const viewportHeight = window.innerHeight;
      const nextScroll = window.scrollY + (event.deltaY > 0 ? viewportHeight : -viewportHeight);

      window.scrollTo({
        top: nextScroll,
        behavior: "smooth",
      });

      // Esperar a que termine la animación antes de permitir otro scroll
      setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    };

    if (isLoaded) { // Solo agregar el evento si todo ya cargó
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling, isLoaded]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      document.body.style.visibility = "hidden";
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Esperar a que todo cargue antes de mostrar la página
  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      document.body.style.visibility = "visible";
    };

    if (document.readyState === "complete") {
      handleLoad(); // Si la página ya está cargada
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {!isLoaded ? ( 
        // 🔹 Pantalla de carga (puedes personalizarla)
        <div className="loading-screen">
          <h1>Cargando...</h1>
        </div>
      ) : (
        <>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <SidePicture />
                  <MainInfo />
                  <ProjectSlider />
                  <Formation />
                  <AboutMe />
                </>
              }
            />
            <Route path="/project/:projectId" element={<ProjectPage />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
