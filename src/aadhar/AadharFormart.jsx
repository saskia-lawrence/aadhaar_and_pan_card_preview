import { useState } from "react";
import "./style.css";

export default function AadharFormart({ detail, setDetail }) {
  function eventHandler({ target }) {
    let name = target.name;
    let value = target.value;
    setDetail((prev) => {
      let a = { ...prev, [name]: value };
      console.log(a);
      return a;
    });
  }
  function formatAadhaarNo(s) {
    let str = s.replace(/(\d{4})/g, "$1 ").replace(/(^\s+|\s+$)/, "");
    console.log(str);
    return str;
  }

  function radioEventHandler({ target }) {
    let name = target.name;
    let checked = target.checked;
    setDetail((prev) => {
      let a = { ...prev, [name]: checked };
      if (name === "male_gender") {
        a.female_gender = false;
      } else {
        a.male_gender = false;
      }

      return a;
    });
  }

  function getImg(event) {
    let imgUrl = URL.createObjectURL(event.target.files[0]);
    setDetail((prev) => {
      let b = { ...prev, photoUrl: imgUrl };
      return b;
    });
  }

  return (
    <div className="form-and-preview-container">
      {" "}
      {/* New container */}
      <div className="form-container">
        <h1>Aadhar Card</h1>
        <form>
          <label htmlFor="text">Name : </label>
          <input
            type="text"
            name="person_name"
            placeholder="Name"
            value={detail.person_name}
            onChange={eventHandler}
          />
          <br />
          <br />
          <label htmlFor="text">DOB : </label>
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={detail.dob}
            onChange={eventHandler}
          />
          <br />
          <br />
          <label htmlFor="text">Gender : </label>
          <input
            type="radio"
            name="male_gender"
            checked={detail.male_gender}
            onChange={radioEventHandler}
          />
          <label for="male">Male</label>

          <input
            type="radio"
            name="female_gender"
            checked={detail.female_gender}
            onChange={radioEventHandler}
          />
          <label for="female">Female</label>
          <br />
          <br />
          <label htmlFor="text">Image : </label>
          <input type="file" onChange={getImg} />
          <br />
          <br />
          <label htmlFor="text">Address : </label>
          <textarea
            type="text"
            name="address"
            placeholder="Address"
            value={detail.address}
            onChange={eventHandler}
          />
          <br />
          <br />
          <label htmlFor="text">Area : </label>
          <input
            type="text"
            name="area"
            placeholder="Area"
            value={detail.area}
            onChange={eventHandler}
          />
          <br />
          <br />
          <label htmlFor="text">District : </label>
          <input
            type="text"
            name="district"
            placeholder="District"
            value={detail.district}
            onChange={eventHandler}
          />
          <br />
          <br />
          <label htmlFor="text">State : </label>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={detail.state}
            onChange={eventHandler}
          />
          <br />
          <br />
          <label htmlFor="text">Pincode : </label>
          <input
            type="text"
            name="pincode"
            maxLength={6}
            placeholder="pincode"
            value={detail.pincode}
            onChange={eventHandler}
          />
          <br />
          <br />
          <label htmlFor="text">Aadhaar No : </label>
          <input
            type="text"
            name="aadhaar_no"
            placeholder="Aadhaar No "
            value={detail.aadhaar_no}
            onChange={eventHandler}
            maxLength={14}
          />
        </form>
        <div>
          <h1>Pan Card</h1>
          <form action="">
            <label htmlFor="text">Name : </label>
            <input
              type="text"
              name="persons_name"
              placeholder="Name"
              value={detail.persons_name}
              onChange={eventHandler}
            />
            <br />
            <br />
            <label htmlFor="text">Pan No : </label>
            <input
              type="text"
              name="pan_no"
              placeholder="Pan No "
              value={detail.pan_no}
              onChange={eventHandler}
              maxLength={10}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
