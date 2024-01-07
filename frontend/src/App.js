import "./App.css";
import NavBarre from "./components/NavBarre";
import { Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import "./index.css";
import AddUser from "./components/AddUser";
function App() {
  return (
    <div>
      <NavBarre />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
