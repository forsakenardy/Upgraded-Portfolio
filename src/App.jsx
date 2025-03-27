import Navbar from "./Components/Navbar";
import SidePicture from "./Components/SidePicture";
import MainInfo from "./Components/MainInfo";
import ProjectSlider from "./Components/ProjectSlider";

function App() {
  
  document.addEventListener("wheel", (event) => {
    event.preventDefault();
    const viewportHeight = window.innerHeight;
    const nextScroll = window.scrollY + (event.deltaY > 0 ? viewportHeight : -viewportHeight);

    window.scrollTo({
      top: nextScroll,
      behavior: "smooth"
    });
  }, { passive: false });

  window.addEventListener("beforeunload", () => {
    document.body.style.visibility = "hidden";
    window.scrollTo(0, 0);
  });

  window.addEventListener("load", () => {
    document.body.style.visibility = "visible";
  });

  return (
    <>
      <Navbar />
      <SidePicture />
      <MainInfo />
      <ProjectSlider />
    </>
  );
}

export default App;
