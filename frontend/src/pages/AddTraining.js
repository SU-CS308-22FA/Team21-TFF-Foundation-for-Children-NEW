import Navbar from "../components/Navbar";

import { useState } from "react";
const AddTraining = () => {
  const [trainingname, settrainingname] = useState("");
  const [datenumber, setdatenumber] = useState("");
  const add = (event) => {
    event.preventDefault();
    console.log("number ", datenumber);
    console.log("trainingname ", trainingname);
  };
  return (
    <div className="loginContainer">
      <Navbar />
      <form className="login" onSubmit={add}>
        <h3>Training</h3>

        <label>Training Name:</label>
        <input
          type="text"
          name="trainingname"
          onChange={(event) => settrainingname(event.target.value)}
          value={trainingname}
        />
        <label>Enter a date:</label>
        <input
          type="number"
          name="datenumber"
          onChange={(event) => setdatenumber(event.target.value)}
          value={datenumber}
        />

        <button>Add Training</button>
      </form>
    </div>
  );
};
export default AddTraining;
