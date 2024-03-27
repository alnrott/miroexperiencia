import "./App.css";
import Home from "./components/home/home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Home></Home>
      </div>
    </Router>
  );
}

export default App;
