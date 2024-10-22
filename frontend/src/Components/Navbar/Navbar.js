import logo from "../icons/logo.png";
import AddFriend from "../icons/Add-Friend.png";
import Notifications from "../icons/Notifications.png";
import CreateGroup from "../icons/create_group.png";
import Logout from "../icons/log-out.png";
import "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const user = useSelector((state) => state.user.data);
  console.log(user);
  const { notificationRead } = props;
  return (
    <div className="Nav">
      <nav className="navbar">
        <NavLink to="/MainPage" className="nav-link ml-5 fw-bold link">
          <div className="logo ">
            <img src={logo} alt="ChatLink Logo" className="logo-img" />
            <h1 className="app-name">ChatLink</h1>
          </div>
        </NavLink>

        <div className="nav-links" id="navLinks">
          <NavLink to="/addFriends" className="nav-link fw-bold link">
            <div className="nav-item">
              <img src={AddFriend} alt="Add Friend" className="icon" />
              <span>Add Friends</span>
            </div>
          </NavLink>

          <NavLink to="/notifications" className="nav-link fw-bold link">
            <div className="nav-item">
              <img
                src={Notifications}
                alt="Notifications"
                className="icon"
                style={
                  notificationRead
                    ? {}
                    : {
                        position: "relative",
                        animation: notificationRead
                          ? "none"
                          : "shake 0.5s linear infinite",
                      }
                }
              />
              <span style={notificationRead ? {} : { color: "#6FB1B6" }}>
                Notifications
              </span>
              <style>
                {`
                  @keyframes shake {
                    0% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    50% { transform: translateX(5px); }
                    75% { transform: translateX(-5px); }
                    100% { transform: translateX(0); }
                  }
               `}
              </style>
            </div>
          </NavLink>

          <NavLink to="/createGroup" className="nav-link fw-bold link">
            <div className="nav-item">
              <img
                src={CreateGroup}
                alt="create_group"
                className="create_group_icon"
              />
              <span>Groups</span>
            </div>
          </NavLink>

          <div className="logout fw-bold">
            <img src={Logout} alt="log-out" className="icon" />
            <span>Logout</span>
          </div>

          <NavLink to="/accountSettings" className="nav-link fw-bold link">
            <div className="Profile">
              <img
                src={user.profilePic}
                alt="user-profile"
                className="profile-img"
              />
            </div>
          </NavLink>
        </div>
      </nav>

      <div className="bottom-nav">
        <NavLink to="/addFriends" className="nav-link">
          <div className="nav-item">
            <img src={AddFriend} alt="Add Friend" className="icon" />
            <span>Add Friends</span>
          </div>
        </NavLink>

        <NavLink to="/notifications" className="nav-link">
          <div className="nav-item">
            <img src={Notifications} alt="Notifications" className="icon" />
            <span>Notifications</span>
          </div>
        </NavLink>

        <NavLink to="/createGroup" className="nav-link">
          <div className="nav-item">
            <img
              src={CreateGroup}
              alt="Create Group"
              className="create_group_icon"
            />
            <span className="l">Groups</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
