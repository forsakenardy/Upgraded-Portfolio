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

  useEffect(() => {
    const handleWheel = (event) => {
      if (isScrolling) return; // Si ya está en movimiento, ignoramos el nuevo scroll

      event.preventDefault();
      setIsScrolling(true);

      const viewportHeight = window.innerHeight;
      const nextScroll = window.scrollY + (event.deltaY > 0 ? viewportHeight : -viewportHeight);

      window.scrollTo({
        top: nextScroll,
        behavior: "smooth"
      });

      // Esperar a que termine la animación antes de permitir otro scroll
      setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      document.body.style.visibility = "hidden";
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("load", () => {
      document.body.style.visibility = "visible";
    });

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      {/* ScrollToTop se encargará de desplazar la ventana al tope en cada cambio de ruta */}
      <ScrollToTop />
      <Routes>
        {/* Página principal */}
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
        {/* Página individual del proyecto */}
        <Route path="/project/:projectId" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
