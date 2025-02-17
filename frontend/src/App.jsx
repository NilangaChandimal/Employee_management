import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import EmployeeList from "./components/Employee/EmployeeList"
import InsertEmployee from "./components/Employee/InsertEmployee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowEmployeeDetails from "./components/Employee/ShowEmployeeDetails";
import UpdateEmployee from "./components/Employee/UpdateEmployee";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/insert" element={<InsertEmployee />} />
            <Route path="/showdetails/:id" element={<ShowEmployeeDetails />} />
            <Route path="updatedetails/:id" element={<UpdateEmployee />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
