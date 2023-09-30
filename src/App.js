import "./App.css";
import SeedData from "./seed";
import Calculator from "./utils/calculator";
import TableViewComponent from "./tableViewCompnent";
import { useState, useEffect } from "react";

function App() {
  const [stats, setStats] = useState({gamma: {}, flavanoids:{} });

  const calculate = () => {
    const calculator = new Calculator(SeedData);
    const groupedByData = calculator.groupedBy(SeedData, "Alcohol");
    let response = {};
    for (let i in groupedByData) {
      let flavanoids = groupedByData[i].map((r) => {
        return r["Flavanoids"];
      });

      response[i] = {};
      response[i]["Flavanoids"] = {};
      response[i]["Flavanoids"]["mean"] = calculator.mean(flavanoids);
      response[i]["Flavanoids"]["median"] = calculator.median(flavanoids);
      response[i]["Flavanoids"]["mode"] = calculator.mode(flavanoids);
    }

    let gammaResp = {};
    for (let i in groupedByData) {
      let gamma = groupedByData[i].map((r) => {
        return parseFloat((r["Ash"] * r["Hue"]) / r["Magnesium"]).toFixed(3);
      });

      // console.log(gamma, i)


      gammaResp[i] = {};
      gammaResp[i]["Gamma"] = {};
      gammaResp[i]["Gamma"]["mean"] = calculator.mean(gamma);
      gammaResp[i]["Gamma"]["median"] = calculator.median(gamma);
      gammaResp[i]["Gamma"]["mode"] = calculator.mode(gamma);
    }

    return { gamma: gammaResp, flavanoids: response };
  };

  useEffect(() => {
    let resp = calculate();
    setStats(resp);
  }, []);

  return (
    <div className="App">
      <h3>GAMMA </h3>
      <TableViewComponent data={stats.gamma} />
      <br></br>
      <hr></hr>
      <h3>FLAVANOIDS</h3>
      <TableViewComponent data={stats.flavanoids} />
    </div>
  );
}

export default App;
