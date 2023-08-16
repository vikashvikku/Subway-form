import React, { useState } from "react";
import "./Personal.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeDOB, changeMob, changeEmail } from "../../store/store";

const Personal = () => {
  const [error, setError] = useState(null);

  //

  const dispatch = useDispatch();

  const dob = useSelector((state) => {
    return state.names.dob;
  });
  const mob = useSelector((state) => {
    return state.names.mob;
  });
  const email = useSelector((state) => {
    return state.names.email;
  });


  const handleDOBChange = (event) => {
    dispatch(changeDOB(event.target.value));
  };

  const handleMobChange = (event) => {
    dispatch(changeMob(event.target.value));
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    dispatch(changeEmail(event.target.value));
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
  };

  return (
    <div className="personal">
      <div className="heading">Enter Your Personal Details!</div>
      <div className="subheading">
        This is used to match what you wrote to confirm by uploading the
        identifications.
      </div>
      <div className="details">
        <div className="dob">
          <div className="text">Date of birth</div>
          <input
            placeholder=" 2 March 2000"
            className="input-name"
            value={dob}
            onChange={handleDOBChange}
          />
        </div>
        <div className="mobile-no">
          <div className="text">Mobile No.</div>
          <input
            type="Number"
            placeholder=" 000000"
            className="input-name"
            value={mob}
            onChange={handleMobChange}
          />
        </div>
        <div className="email">
          <div className="text">Email ID</div>
          <input
            placeholder=" Vks@gmail.com"
            className="input-name"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {error && <h6 style={{ color: "red" }}>{error}</h6>}
        </div>
      </div>
      <div>
        <Link to="/identity">
          <button className="personal-next">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Personal;
