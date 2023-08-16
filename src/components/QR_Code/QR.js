import React from "react";
import "./QR.css";
import { useSelector } from "react-redux";

const QR = () => {
  // Name
  const firstName = useSelector((state) => {
    return state.names.firstNameTerms;
  });
  const middleName = useSelector((state) => {
    return state.names.middleNameTerms;
  });
  const lastName = useSelector((state) => {
    return state.names.lastNameTerms;
  });
  const dob = useSelector((state) => {
    return state.names.dob;
  });
  const mob = useSelector((state) => {
    return state.names.mob;
  });
  const email = useSelector((state) => {
    return state.names.email;
  });
  const image = useSelector((state) => {
    return state.names.identity;
  });
  const handleSubmit = () => {
    console.log(
      `Name:- ${firstName} ${middleName} ${lastName} \n DOB: ${dob} \n Mob No.: ${mob} \n Email: ${email} \n image: ${image} `
    );
  };

  return (
    <div className="qr">
      <div className="heading-qr">Here is your QR code!</div>
      <div className="subheading-qr">
        You don't need to pay Your bill in cash, Just Scan and pay Now in Subway
      </div>
      <div className="qr-scanner">
        <img
          className="qr-image"
          src="https://www.dummies.com/wp-content/uploads/324172.image0.jpg"
          alt="Qr-Scanner"
        />
      </div>
      <div>
        <button className="qr-next" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default QR;
