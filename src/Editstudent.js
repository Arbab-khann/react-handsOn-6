import React, { useContext } from "react";
import Store from "./Storecompo";
import { useNavigate, useParams } from "react-router-dom";

function Editstudent() {
  const editdata = useContext(Store);
  const index = useParams().id;

  const navi = useNavigate();

  const newobj = {
    Name: editdata.data[index].Name,
    Age: editdata.data[index].Age,
    Course: editdata.data[index].Course,
    Batch: editdata.data[index].Batch,
  };

  const handlechange = (e) => {
    newobj[e.target.name] = e.target.value;
  };

  const handlesubmit = () => {
    editdata.data[index] = newobj;
    console.log(newobj);
    navi("/students");
  };
  return (
    <div className=" edit-main">
      <label>Name</label>
      <input name="Name" placeholder="enter name" onChange={handlechange} />
      <br />
      <label>Age</label>
      <input name="Age" placeholder="enter age" onChange={handlechange} />
      <br />
      <label>Course</label>
      <input name="Course" placeholder="enter course" onChange={handlechange} />
      <br />
      <label>Batch</label>
      <input name="Batch" placeholder="enter batch" onChange={handlechange} />
      <br />
      <div className="edit-button ">
        <button className="btn" type="submit" onClick={handlesubmit}>
          update
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

export default Editstudent;
