import { useEffect, useState } from "react";
import SearchInput from "../../../Components/SearchInput/SeacrhInput";
import AddUser from "../../../Components/AddUser/AddUser";
import styles from "./styles.module.css";
import user from "../../../Assets/Ellipse 308.png";
const DUMMY_USERS = [
  { name: "Moaz", img: user },
  { name: "Omar", img: user },
  { name: "ibrahim", img: user },
];
export default function App() {
  return (
    <div className="container col-12">
      <div className="d-flex justify-content-between mt-5 c col-12">
        <h2>Friends</h2>
        <div className="col-3">
          <SearchInput className={"col-12"} />
        </div>
      </div>
      {DUMMY_USERS.map((user) => {
        return <AddUser name={user.name} img={user.img}></AddUser>;
      })}
      <div className="d-flex ">
        <button className={`${styles.btn} ms-auto`}>Next</button>
      </div>
    </div>
  );
}
