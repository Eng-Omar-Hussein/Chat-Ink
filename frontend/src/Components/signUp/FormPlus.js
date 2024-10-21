import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './FormPlusStyle.module.css'
import Swal from 'sweetalert2'; 
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const FormPlus = (props)=> {
  const { edit } = props
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const handleSignUp = (event) => {
    event.preventDefault();
  
    if (password !== ConfirmPassword) {
      Toastify({
        text: "Passwords do not match!",
        duration: 3000,
        gravity: "top", 
        position: "center",
        backgroundColor: "red",
        style: {
          color: "white",
          fontSize: "16px",
          borderRadius: "5px",
          padding: "10px 20px"
        }
      }).showToast();
      return;
    }
  
  const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
  if (edit === false && !emailRegex.test(email)) {
      Toastify({
        text: "Email must be in the format: name@gmail.com",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "red",
        style: {
          color: "white",
          fontSize: "16px",
          borderRadius: "5px",
          padding: "10px 20px"
        }
      }).showToast();
      return;
    }

    Swal.fire({
      title: "Account Created Successfully!",
      text: "Jump in and start chatting with your friends.",
      icon: "success",
      timer: 3000, 
      showConfirmButton: false
    });

  };


  return (
    <form
    onSubmit={handleSignUp}
    className="d-flex flex-column align-items-center col-10 col-sm-8 col-md-7 col-lg-6 col-xl-5 col-xxl-4"
  >
    {/* First Name Input */}
    <div className="form-group col-12 my-3">
      <label htmlFor="exampleInputName1" className={styles.sr_only}>
        First Name
      </label>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={FirstName}
        className={`form-control ${styles.input_outline}`}
        id="exampleInputName1"
        placeholder="First Name"
        autoFocus
        required={!edit}
      />
    </div>
  
    {/* Last Name Input */}
    <div className="form-group col-12 my-3">
      <label htmlFor="exampleInputName2" className={styles.sr_only}>
        Last Name
      </label>
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        value={LastName}
        className={`form-control ${styles.input_outline}`}
        id="exampleInputName2"
        placeholder="Last Name"
        required={!edit}
      />
    </div>
  
    {/* Email Input */}
    <div className="form-group col-12 my-3">
      <label htmlFor="exampleInputEmail1" className={styles.sr_only}>
        Email address
      </label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className={`form-control ${styles.input_outline}`}
        id="exampleInputEmail1"
        placeholder="Email address"
        required={!edit}
      />
    </div>
  
    {/* Password Input */}
    <div className="form-group col-12 my-3">
      <label htmlFor="exampleInputPassword1" className={styles.sr_only}>
        Password
      </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className={`form-control ${styles.input_outline}`}
        id="exampleInputPassword1"
        placeholder="Password"
        required={!edit}
      />
    </div>
  
    {/* Confirm Password Input */}
    <div className="form-group col-12 my-3">
      <label htmlFor="exampleInputPassword2" className={styles.sr_only}>
        Confirm Password
      </label>
      <input
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={ConfirmPassword}
        className={`form-control ${styles.input_outline}`}
        id="exampleInputPassword2"
        placeholder="Confirm Password"
        required={!edit}
      />
    </div>
  
    {/* Submit Button */}
    <button
      type="submit"
      className="btn btn-outline-secondary col-12 my-3"
      style={{ fontSize: "1.2rem" }}
    >
      {edit ? "Save" : "Sign up"}
    </button>
  </form>
  
  
  )
}

export default FormPlus;
