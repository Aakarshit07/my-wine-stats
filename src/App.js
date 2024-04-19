import FlavanoidsTable from "./components/FlavanoidStats.jsx";
import GammaTable from "./components/GammaStats.jsx";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">All Wine Measures</h1>
      <div className="tables">
        <h1>Flavanoids Measures:</h1>
        <FlavanoidsTable  />
        <h1>Gamma Measures:</h1>
        <GammaTable />
      </div>
    </div>
  );
};

export default App;
