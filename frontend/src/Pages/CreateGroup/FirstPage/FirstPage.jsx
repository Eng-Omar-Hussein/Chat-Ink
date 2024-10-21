import { Link } from "react-router-dom"; // Import Link from react-router-dom//+

import SearchInput from "../../../Components/SearchInput/SeacrhInput";
import AddUser from "../../../Components/AddUser/AddUser";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

import { useState } from "react";

export default function App({ setCurrentPage, setParticipant, participant }) {
  const user = useSelector((state) => state.user.data);
  const [friends, setFriends] = useState(user.friends);
  const goToCreateGroup = () => {
    setCurrentPage(1);
  };
  return (
    <div className="container col-12">
      <div className="d-flex justify-content-between mt-5 c col-12">
        <h2>Friends</h2>
        <div className="col-3">
          <SearchInput className={"col-12"} />
        </div>
      </div>
      {friends?.map((user) => {
        console.log(user);
        return (
          <AddUser
            name={user.name}
            img={user.profilePic}
            id={user._id}
            friends={friends}
            setFriends={setFriends}
            setParticipant={setParticipant}
            participant={participant}
            group={true}
          ></AddUser>
        );
      })}
      <div className="d-flex ">
        <button className={`${styles.btn} ms-auto`} onClick={goToCreateGroup}>
          Next
        </button>
      </div>
    </div>
  );
}
