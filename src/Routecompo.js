import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import { useState } from "react";
import Store from "./Storecompo";
import Editstudent from "./Editstudent";
import Addstudent from "./Addstudent";

function Routecompo() {
  const [player, setplayer] = useState([
    { Name: "Arbab", Age: "24", Course: "MERN", Batch: "EC23" },
    { Name: "Bharat", Age: "23", Course: "MERN", Batch: "EC23" },
    { Name: "Yajat", Age: "25", Course: "MERN", Batch: "EC23" },
    { Name: "Yash", Age: "23", Course: "MERN", Batch: "EC23" },
    { Name: "Nitin", Age: "24", Course: "MERN", Batch: "EC23" },
  ]);

  return (
    <div className="nav">
      <BrowserRouter>
        <div className="nav-block">
          <NavLink className="nonActiveNav" to={"/"}>
            Home
          </NavLink>
          <NavLink className="nonActiveNav" to={"/students"}>
            Student
          </NavLink>
          <NavLink className="nonActiveNav" to={"/contact"}>
            Contatct
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/students"
            element={
              <Store.Provider value={{ data: player, setdata: setplayer }}>
                <Student />
              </Store.Provider>
            }
          />
          <Route
            path="/editstudent/:id"
            element={
              <Store.Provider value={{ data: player, setdata: setplayer }}>
                <Editstudent />
              </Store.Provider>
            }
          />
          <Route
            path="/addstudent"
            element={
              <Store.Provider value={{ data: player, setdata: setplayer }}>
                <Addstudent />
              </Store.Provider>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Routecompo;
