import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FormPlusStyle.module.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/userSlice";
const FormPlus = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    if (password !== ConfirmPassword) window.alert("Wrong Confirm Password");
    else {
      const newUser = dispatch(
        registerUser({
          email,
          password,
          firstName: FirstName,
          lastName: LastName,
        })
      );
      if (newUser) {
        navigate("/");
      }
    }
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="d-flex flex-column align-items-center col-10 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3"
    >
      <div className="form-group col-12 my-3">
        <label htmlFor="exampleInputName1" className={styles.sr_only}>
          First Name
        </label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={FirstName}
          className={`form-control  ${styles.input_outline}`}
          id="exampleInputName1"
          aria-describedby="emailHelp"
          placeholder="First Name"
          autoFocus
        />
      </div>
      <div className="form-group col-12 my-3">
        <label htmlFor="exampleInputName2" className={styles.sr_only}>
          Last Name
        </label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={LastName}
          className={`form-control  ${styles.input_outline}`}
          id="exampleInputName2"
          aria-describedby="emailHelp"
          placeholder="Last Name"
        />
      </div>
      <div className="form-group col-12 my-3">
        <label htmlFor="exampleInputEmail1" className={styles.sr_only}>
          Email address
        </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={`form-control  ${styles.input_outline}`}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email address"
        />
      </div>
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
        />
      </div>
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
        />
      </div>
      <button
        type="submit"
        className="btn btn-outline-secondary col-12 my-3"
        style={{ fontSize: "24" }}
      ></button>
    </form>
  );
};

export default FormPlus;
