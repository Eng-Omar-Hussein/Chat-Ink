import {useState } from "react";
import AddUser from "../../../Components/AddUser/AddUser";
import styles from "./styles.module.css";
import user from "../../../Assets/Ellipse 308.png";
import SearchBar from "../../../Components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const DUMMY_USERS = [
  { name: "Moaz", img: user },
  { name: "Omar", img: user },
  { name: "ibrahim", img: user },
  { name: "Ahmed", img: user },
  { name: "Ali", img: user },
  { name: "Rahma", img: user },
  { name: "Salma", img: user },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate()
  const filteredUsers = DUMMY_USERS.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container col-12">
      <div className="d-flex justify-content-between align-items-center mt-5 col-12">
      <h2>Add group participants</h2>
        <div className="col-3">
          <SearchBar
            className={"col-12"}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
      </div>

      {filteredUsers.map((user) => (
        <AddUser key={user.name} name={user.name} img={user.img} />
      ))}

      <div className="d-flex mb-5">
      <button className={`${styles.btn} ms-auto`} onClick={()=> {navigate('/createGroupThirdPage')}}>Next</button>
      </div>
    </div>
  );
}
