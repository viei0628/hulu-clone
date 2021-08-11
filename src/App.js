import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import { useState } from "react";
import requests from "./requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
