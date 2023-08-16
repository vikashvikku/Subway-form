import React from "react";
import "./Name.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFirstName,
  changeMiddleName,
  changeLastName,
} from "../../store/store";

const Name = () => {
  const dispatch = useDispatch();

  const firstNameTerms = useSelector((state) => {
    return state.names.firstNameTerms;
  });
  const middleNameTerms = useSelector((state) => {
    return state.names.middleNameTerms;
  });
  const lastNameTerms = useSelector((state) => {
    return state.names.lastNameTerms;
  });

  const handleFirstNameChange = (event) => {
    dispatch(changeFirstName(event.target.value));
  };

  const handleMiddleNameChange = (event) => {
    dispatch(changeMiddleName(event.target.value));
  };

  const handleLastNameChange = (event) => {
    dispatch(changeLastName(event.target.value));
  };

  return (
    <div className="name">
      <div className="heading-name">
        Using the Subway has never been easier!
      </div>
      <div className="subheading-name">
        Complete the signUp process and recieve a QR code you can use the subway
        anywhere in India
      </div>
      <div className="details-name">
        <div className="first-name">
          <div className="text">First Name</div>
          <input
            placeholder=" Vikash"
            className="input-name"
            onChange={handleFirstNameChange}
            value={firstNameTerms}
          />
        </div>
        <div className="middle-name">
          <div className="text">Middle Name</div>
          <input
            placeholder=" Kumar"
            className="input-name"
            onChange={handleMiddleNameChange}
            value={middleNameTerms}
          />
        </div>
        <div className="last-name">
          <div className="text">Last Name</div>
          <input
            placeholder=" Singh"
            className="input-name"
            onChange={handleLastNameChange}
            value={lastNameTerms}
          />
        </div>
      </div>
      <div>
        <Link to="/personal">
          <button className="name-next">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Name;
