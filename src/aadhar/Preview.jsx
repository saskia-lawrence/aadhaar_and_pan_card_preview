import React from "react";
import { PanCard, AadhaarCard } from "identity-card";
import "identity-card/dist/styles.css";
import "./style.css";

export default function Preview({ detail, setDetail }) {
  let maleGender = detail.male_gender ? "Male" : "";
  let femaleGender = detail.female_gender ? "Female" : "";
  return (
    <div>
      <div style={{ margin: "20px" }}>
        {" "}
        {/* Container for Aadhaar card */}
        <AadhaarCard
          name={detail.person_name}
          dob={detail.dob}
          gender={maleGender || femaleGender || ""}
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
        <PanCard name={detail.person_name} number={detail.pan_no} />
      </div>
    </div>
  );
}
