import React from "react";
import Store from "./Storecompo";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
function Student() {
  const studata = useContext(Store);
  const navi = useNavigate();
  console.log(studata);
  return (
    <>
      <>
        <div className="student-record">
          <div className=" tabletop">
            <header>
              <div className="stud">Sudents Details</div>
              <button
                type="submit"
                className="add"
                onClick={() => navi("/addstudent")}
              >
                Add new Students
              </button>
            </header>
          </div>
          <div className="table-block">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Course</th>
                  <th>Batch</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {studata.data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>{item.Course}</td>
                      <td>{item.Batch}</td>
                      <td>
                        <Link to={`/editstudent/${index}`}>Edit</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </>
  );
}

export default Student;
