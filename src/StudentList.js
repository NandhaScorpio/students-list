import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import List from "./List";
import Favourite from "./Favourite";
import { useState } from "react";

const StudentList = () => {
  const [students,setStudents] = useState([
    {
      name: "Bharath",
      id: 1,
      favourite: true,
    },
    {
      name: "Praveen",
      id: 2,
      favourite: false,
    },
    {
      name: "Kumar",
      id: 3,
      favourite: true,
    },
    {
      name: "Ramya",
      id: 4,
      favourite: false,
    },
    {
      name: "Monica",
      id: 5,
      favourite: true,
    },
  ]);


  return (
    <BrowserRouter>
      <nav className=" bg-[#EB7072] p-5">
        <Link to={"/"} className="text-white mr-5 border-b-2 border-black">
          List of Students
        </Link>
        {"   "}
        <Link
          to={"/favourite"}
          className="text-white mr-5 border-b-2 border-black"
        >
          Favourite Students
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<List students={students} setStudents={setStudents}/>}>
          Home
        </Route>
        <Route path="/favourite" element={<Favourite students={students} />}>
          About
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default StudentList;
