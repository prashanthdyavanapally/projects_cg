import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Adduser from "./Components/Users/Adduser.jsx";
import Edituser from "./Components/Users/Edituser.jsx";
import "./App.css";
import Users from "./Components/Users/Users.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Adduser" element={<Adduser />} />
        <Route path="/Edituser" element={<Edituser />} />
      </Routes>
    </div>
  );
}

export default App;
