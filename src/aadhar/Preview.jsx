import React from "react";
import { PanCard, AadhaarCard } from "identity-card";
import "identity-card/dist/styles.css";
import "./style.css";

export default function Preview({ detail, setDetail }) {
  let gender = detail.male_gender === true ? "Male" : "Female";
  return (
    <div>
      <div style={{ margin: "20px" }}>
        {" "}
        {/* Container for Aadhaar card */}
        <AadhaarCard
          name={detail.person_name}
          dob={detail.dob}
          gender={gender}
          number={detail.aadhaar_no}
          image={detail.photoUrl}
          address={detail.address}
          area={detail.area}
          district={detail.district}
          state={detail.state}
          pincode={detail.pincode}
          color="crimson"
        />
      </div>
      <div style={{ margin: "20px" }}>
        <PanCard name={detail.persons_name} number={detail.pan_no} />
      </div>
    </div>
  );
}
