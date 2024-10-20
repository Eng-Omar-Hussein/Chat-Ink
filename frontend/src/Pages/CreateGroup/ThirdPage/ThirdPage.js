import React, { useState } from "react";
import styles from "../ThirdPage/styles.module.css";
import icon from "../../../Assets/R (2) 1.png";
import groupImage from "../../../Assets/meeting-icon-30 1.png";
import { useNavigate } from "react-router-dom";

export default function ThirdPage() {
  const [image, setImage] = useState(groupImage);
  const [groupName, setGroupName] = useState(""); // Ensure groupName state is defined
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if group name is provided
    if (!groupName.trim()) {
      alert("Please enter a group name.");
      return;
    }

    createGroup();
  };

  const createGroup = () => {
    setSuccessMessage("You've successfully created the group");
    setTimeout(() => setSuccessMessage(""), 2000);
    setTimeout(() => navigate('/MainPage'), 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container d-flex flex-column mb-5" style={{ height: "80vh", justifyContent: "center", padding: "0" }}>
        
        <div className="row align-items-center mt-6">
          <div className="col mt-4">
            <label className="me-3 mt-n5" style={{ fontWeight: "bold", fontSize: "20px" }}>Group Picture</label>
          </div>
          <div className="d-flex align-items-center justify-content-center me-4 mb-5 mt-n1">
            <img src={image} alt="Group" style={{ width: "150px", height: "150px" }} />
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center me-4">
          <input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="file-input" className={`${styles.label} d-flex align-items-center ms-5`}>
            <img
              src={icon}
              alt="Camera Icon"
              style={{ width: "30px", height: "30px" }}
              className="me-2"
            />
            <span style={{ fontWeight: "bold" }}>Add photo</span>
          </label>
        </div>

        <div className="mt-4">
          <label style={{ fontWeight: "bold", fontSize: "20px" }}>Group Name</label>
          <input
            required
            type="text"
            placeholder="Group Name"
            className={`col-12 ${styles.input}`}
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)} // Update state on input change
          />
        </div>

        <div className="mt-3">
          <label style={{ fontWeight: "bold", fontSize: "20px" }}>Group Type</label>
          <select className={`col-12 ${styles.input}`} required>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        <button type="submit" className={`${styles.btn} mt-5`}>
          Create Group
        </button>

        {successMessage && (
          <p
            style={{
              color: "green",
              fontWeight: "bold",
              fontSize: "20px",
              marginTop: "10px",
            }}
          >
            {successMessage}
          </p>
        )}
      </div>
    </form>
  );
}