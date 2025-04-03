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

  useEffect(() => {
    const handleWheel = (event) => {
      if (isScrolling) return;
      event.preventDefault();
      setIsScrolling(true);

      const viewportHeight = window.innerHeight;
      const nextScroll = window.scrollY + (event.deltaY > 0 ? viewportHeight : -viewportHeight);

      window.scrollTo({
        top: nextScroll,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    };

    const handleTouchStart = (event) => {
      setTouchStartY(event.touches[0].clientY);
    };

    const handleTouchEnd = (event) => {
      if (touchStartY === null) return;

      const touchEndY = event.changedTouches[0].clientY;
      const difference = touchStartY - touchEndY;

      if (Math.abs(difference) > 50 && !isScrolling) { // Detecta swipe significativo
        setIsScrolling(true);
        const viewportHeight = window.innerHeight;
        const nextScroll = window.scrollY + (difference > 0 ? viewportHeight : -viewportHeight);

        window.scrollTo({
          top: nextScroll,
          behavior: "smooth",
        });

        setTimeout(() => {
          setIsScrolling(false);
        }, 700);
      }
      setTouchStartY(null);
    };

    if (isLoaded) {
      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isScrolling, isLoaded, touchStartY]);

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

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      document.body.style.visibility = "visible";
    };

    if (document.readyState === "complete") {
      handleLoad();
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
