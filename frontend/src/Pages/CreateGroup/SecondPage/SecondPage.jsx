// import React, { useState } from "react";

// import styles from "./styles.module.css";
// import icon from "../../../Assets/R (2) 1.png";
// import groupImage from "../../../Assets/meeting-icon-30 1.png";

// export default function SecondPage({ participant }) {
//   const [image, setImage] = useState(groupImage);
//   console.log(participant);
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   return (
//     <div className="container d-flex flex-wrap" style={{ height: "60vh" }}>
//       <div className="mt-5  col-12 d-flex gap-4 align-items-center">
//         <div className="col-3">
//           <img src={image} alt="" style={{ width: "150px", height: "150px" }} />
//           <div>
//             <input
//               type="file"
//               id="file-input"
//               style={{ display: "none" }}
//               onChange={handleFileChange}
//             />
//             <label htmlFor="file-input" className={`${styles.label}`}>
//               <img
//                 src={icon}
//                 alt=""
//                 style={{ width: "30px", height: "30px" }}
//                 className="me-3"
//               />
//               <span className="text-center">Add photo</span>
//             </label>
//           </div>
//         </div>
//         <input
//           type="text"
//           placeholder="Group Name"
//           className={`col-6 ${styles.input}`}
//         />
//       </div>

//       <button className={`${styles.btn} mt-auto ms-auto mb-5`}>
//         Create Group
//       </button>
//     </div>
//   );
// }
import { useState } from "react";
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
  const navigate = useNavigate();
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
        <button
          className={`${styles.btn} ms-auto`}
          onClick={() => {
            navigate("/createGroupThirdPage");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
