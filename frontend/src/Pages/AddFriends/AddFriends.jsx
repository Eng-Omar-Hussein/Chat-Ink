import React, { useState } from "react";
import AddUser from "../../Components/AddUser/AddUser";
import user from "../../Assets/Ellipse 308.png";
import SearchBar from "../../Components/SearchBar/SearchBar";



const DUMMY_USERS = [
  { name: "Moaz", img: user },
  { name: "Omar", img: user },
  { name: "ibrahim", img: user },
  { name: "Ahmed", img: user },
  { name: "Ali", img: user },
];
export default function AddFrineds() {
   const [searchTerm, setSearchTerm] = useState("");

   const filteredUsers = DUMMY_USERS.filter((user) =>
     user.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

  return (
    <div className="container">
        <div className="d-flex justify-content-end mt-5">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        </div>
       {filteredUsers.map((user) => (
        <AddUser key={user.name} name={user.name} img={user.img} />
       ))}
    </div>
  );
}
