import React, { useContext, useState } from "react";

import Store from "./Storecompo";
import { useNavigate, useParams } from "react-router-dom";

const Form = () => {
  const dynamicRouteId = useParams();
  const isEdit = dynamicRouteId?.studentId; //is this form is open by edit
  const Id = isEdit ? dynamicRouteId?.studentId : 3;

  const navigate = useNavigate();
  const data = useContext(Store);
  console.log(data);
  // if (dynamicRouteId?.studentId) is true then prefilled value else empty string
  const [stdName, setStdName] = useState(isEdit ? data[Id]?.Name : "");
  const [stdAge, setStdAge] = useState(isEdit ? data[Id]?.Age : "");
  const [stdCourse, setStdCourse] = useState(isEdit ? data[Id]?.Course : "");
  const [stdBatch, setStdBatch] = useState(isEdit ? data[Id]?.Batch : "");

  console.log(stdName);
  console.log(stdAge);
  console.log(stdCourse);
  console.log(stdBatch);

  const handleClick = (e) => {
    if (
      stdName !== "" &&
      stdAge !== "" &&
      stdCourse !== "" &&
      stdBatch !== ""
    ) {
      e.preventDefault();
      isEdit && (data[Id].Name = stdName);
      isEdit && (data[Id].Age = stdAge);
      isEdit && (data[Id].Course = stdCourse);
      isEdit && (data[Id].Batch = stdBatch);

      !isEdit &&
        data.push({
          Name: stdName,
          Age: stdAge,
          Course: stdCourse,
          Batch: stdBatch,
        });
      navigate(-1);
    } else {
      alert("fill all fields");
    }
  };
  return (
    <div>
      <div className="formData">
        <div className="fields">
          <input
            type="text"
            id="name"
            onChange={(e) => {
              setStdName(e.target.value);
            }}
            value={stdName}
            name="Name"
            className="Name"
            required
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="fields">
          <input
            type="number"
            id="age"
            onChange={(e) => {
              setStdAge(e.target.value);
            }}
            value={stdAge}
            name="Age"
            className="Age"
            required
          />
          <label htmlFor="age">Age</label>
        </div>
        <div className="fields">
          <input
            type="text"
            id="course"
            onChange={(e) => {
              setStdCourse(e.target.value);
            }}
            value={stdCourse}
            name="Course"
            className="Course"
            required
          />
          <label htmlFor="course">Course</label>
        </div>
        <div className="fields">
          <input
            type="text"
            id="batch"
            onChange={(e) => {
              setStdBatch(e.target.value);
            }}
            value={stdBatch}
            name="Batch"
            className="Batch"
            required
          />
          <label htmlFor="batch">batch</label>
        </div>
      </div>
      <div className="formBtns">
        <button onClick={() => navigate(-1)} className="CancelBtn btn">
          Cancel
        </button>
        <button onClick={handleClick} className="submitBtn btn">
          {dynamicRouteId?.studentId ? "Update" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Form;
