import "./App.css";
import Banner from "./components/Banner/Banner";
import Contest from "./components/Contest/Contest";
import Header from "./components/Header/Header";
import WorkDesc from "./components/Works/WorkDesc";
import WorksCarousel from "./components/Works/WorksCarousel";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Contest />
      <WorksCarousel />
      <WorkDesc />
    </div>
  );
}

export default App;
