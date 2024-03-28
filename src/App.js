import "./App.css";
import BouncingBallLoader from "./components/helpers/loader";
import Home from "./components/home/home";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? <BouncingBallLoader /> : <Home></Home>}
      </div>
    </Router>
  );
}

export default App;
