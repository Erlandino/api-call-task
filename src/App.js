import React from "react";
import "./App.css";

function App() {
  const [catFacts, setCatFacts] = React.useState();

  console.log("test");
  React.useEffect(() => {
    fetch("https://catfact.ninja/facts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setCatFacts((prevCatFacts) => data.data.map((Fact, index) => <p key={index}>{Fact.fact}</p>));
      });
  }, []);

  return <div className="App">{catFacts}</div>;
}

export default App;
