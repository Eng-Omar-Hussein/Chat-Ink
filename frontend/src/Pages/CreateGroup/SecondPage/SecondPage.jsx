import React, { useState } from "react";

import styles from "./styles.module.css";
import icon from "../../../Assets/R (2) 1.png";
import groupImage from "../../../Assets/meeting-icon-30 1.png";

export default function SecondPage({ participant }) {
  const [image, setImage] = useState(groupImage);
  console.log(participant);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="container d-flex flex-wrap" style={{ height: "60vh" }}>
      <div className="mt-5  col-12 d-flex gap-4 align-items-center">
        <div className="col-3">
          <img src={image} alt="" style={{ width: "150px", height: "150px" }} />
          <div>
            <input
              type="file"
              id="file-input"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <label htmlFor="file-input" className={`${styles.label}`}>
              <img
                src={icon}
                alt=""
                style={{ width: "30px", height: "30px" }}
                className="me-3"
              />
              <span className="text-center">Add photo</span>
            </label>
          </div>
        </div>
        <input
          type="text"
          placeholder="Group Name"
          className={`col-6 ${styles.input}`}
        />
      </div>

      <button className={`${styles.btn} mt-auto ms-auto mb-5`}>
        Create Group
      </button>
    </div>
  );
}
