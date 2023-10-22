import React, { useContext } from "react";
import Store from "./Storecompo";
import { useNavigate } from "react-router-dom";

function Addstudent() {
  const studentdata = useContext(Store);
  const navi = useNavigate();

  const newobj = {
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
  };

  const handlechange = (e) => {
    newobj[e.target.name] = e.target.value;
  };

  const handlesubmit = () => {
    studentdata.data.push(newobj);
    navi("/students");
  };

  return (
    <div className="add-main">
      <label>Name</label>
      <input name="Name" placeholder="enter name" onChange={handlechange} />
      <br />
      <label>Age</label>
      <input name="Age" placeholder="enter Age" onChange={handlechange} />
      <br />
      <label>Course</label>
      <input name="Course" placeholder="enter Course" onChange={handlechange} />
      <br />
      <label>Batch</label>
      <input name="Batch" placeholder="enter Batch" onChange={handlechange} />
      <br />
      <div className=" add-button button">
        <button className="btn" type="submit" onClick={handlesubmit}>
          Add New
        </button>
        <button
          className="btn"
          type="submit"
          onClick={() => {
            navi(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Addstudent;
