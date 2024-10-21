import SearchInput from "../../Components/SearchInput/SeacrhInput";
import AddUser from "../../Components/AddUser/AddUser";
import { updateUser } from "../../redux/friendsSlice";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

export default function AddFrineds() {
  const notfriends = useSelector((state) => state.friends.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateUser());
  }, []);

  return (
    <div className="container">
      <SearchInput className={"col-3 mt-5"}></SearchInput>
      {notfriends?.map((user) => {
        return (
          <AddUser
            name={user.firstName + " " + user.lastName}
            img={user.profilePic}
            id={user._id}
          ></AddUser>
        );
      })}
    </div>
  );
}
