import "./App.css";
import Banner from "./components/Banner/Banner";
import Contest from "./components/Contest/Contest";
import Header from "./components/Header/Header";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Contest />
      <Works />
    </div>
  );
}

export default App;
