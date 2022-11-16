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

// Task:
// Find an interesting API (or use the one provided), fetch some data and use it in a component.

// Requirements:
// - Use FetchAPI and useEffect to fetch data from an API
// - Store the data with useState
// - Use the fetched data inside your component
//  (Hint: you do not have to fetch text, you can fetch image URLs and use them inside your component)

// Delivery:
// - Link to github repository
// Optional: Link to gh-pages

// Alternative:
// - Screenshot of all code used to achieve requirements

// Resources:
// Example API endpoint:
// - https://catfact.ninja/facts

// Repetition of JavaScript conditionals:
// - "if (condition) {code-to-run-if-condition-is-true}
// - "condition ? code-to-run-if-condition-is-true : code-to-run-if-condition-is-false"

// - "condition && code-to-run-if-condition-is-true"
// - There is also switch statements for multiple choices
