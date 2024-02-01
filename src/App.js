import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Views/Homepage";
import InputChips from "./components/input-chips/InputChips";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/chip-input" Component={InputChips} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
