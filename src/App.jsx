import "../src/styles/App.css";
import Heading from "./components/Heading";
import TextArea from "./components/TextArea";
import { useState, useEffect } from "react";
import { detectedLang, translatedText, allLangs } from "./translate.js";
import React from "react";

function App() {
  const [result, setResult] = useState(null);
  useEffect(() => {
    allLangs().then((res) => {
      setResult(res);
    });
  }, []);
  return (
    <div className="app">
      {result && <Heading result={result}></Heading>}
      {result && <TextArea result={result}></TextArea>}
    </div>
  );
}

export default App;
