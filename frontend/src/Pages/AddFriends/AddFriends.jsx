import SearchInput from "../../Components/SearchInput/SeacrhInput";
import AddUser from "../../Components/AddUser/AddUser";
import user from "../../Assets/Ellipse 308.png";
const DUMMY_USERS = [
  { name: "Moaz", img: user },
  { name: "Omar", img: user },
  { name: "ibrahim", img: user },
];
export default function AddFrineds() {
  return (
    <div className="container">
      <SearchInput className={"col-3 mt-5"}></SearchInput>
      {DUMMY_USERS.map((user) => {
        return <AddUser name={user.name} img={user.img}></AddUser>;
      })}
    </div>
  );
}
