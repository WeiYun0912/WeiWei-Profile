import "./App.css";
import Banner from "./components/Banner/Banner";
import Contest from "./components/Contest/Contest";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Contest />
    </div>
  );
}

export default App;
