// File: src/App.jsx
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SidePicture from "./Components/SidePicture";
import MainInfo from "./Components/MainInfo";
import ProjectSlider from "./Components/ProjectSlider";
import Formation from "./Components/Formation";
import AboutMe from "./Components/AboutMe";
import ProjectPage from "./Components/ProjectPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);

  // Detect desktop/tablet: solo allí usamos scroll "pantalla a pantalla"
  const isDesktopOrTablet = window.matchMedia("(min-width: 768px)").matches;

  useEffect(() => {
    // Si no hemos cargado o es móvil, no interceptamos wheel/touch
    if (!isLoaded || !isDesktopOrTablet) return;

    const handleWheel = (event) => {
      if (isScrolling) return;
      event.preventDefault(); // bloquea scroll nativo
      setIsScrolling(true);

      const vh = window.innerHeight;
      const next = window.scrollY + (event.deltaY > 0 ? vh : -vh);

      window.scrollTo({ top: next, behavior: "smooth" });

      setTimeout(() => setIsScrolling(false), 700);
    };

    const handleTouchStart = (event) => {
      if (isScrolling) return;
      setTouchStartY(event.touches[0].clientY);
    };

    const handleTouchEnd = (event) => {
      if (isScrolling || touchStartY === null) return;
      const diff = touchStartY - event.changedTouches[0].clientY;
      setIsScrolling(true);

      const vh = window.innerHeight;
      const next = window.scrollY + (diff > 0 ? vh : -vh);

      window.scrollTo({ top: next, behavior: "smooth" });

      setTimeout(() => setIsScrolling(false), 700);
      setTouchStartY(null);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isLoaded, isDesktopOrTablet, isScrolling, touchStartY]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      document.body.style.visibility = "hidden";
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      document.body.style.visibility = "visible";
          alert("Portfolio currently in development.");
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {!isLoaded ? (
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
