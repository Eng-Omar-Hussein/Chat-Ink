import logo from '../icons/logo.png';
import AddFriend from '../icons/Add-Friend.png';
import Notifications from '../icons/Notifications.png';
import CreateGroup from '../icons/create_group.png';
import Logout from '../icons/log-out.png';
import AccountPhoto from '../icons/account-photo.png';
import '../Navbar/Navbar.css';





function Navbar(){
    return(
<div className="Nav">
        <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="ChatLink Logo" className="logo-img"/>
          <h1 className="app-name">ChatLink</h1>
        </div>

        <div className="nav-links" id="navLinks">
          <div className="nav-item">
            <img src={AddFriend} alt="Add Friend" className="icon"/>
            <span>Add Friends</span>
          </div>
          <div className="nav-item">
            <img src={Notifications}alt="Notifications" className="icon"/>
            <span>Notifications</span>
          </div>
          <div className="nav-item">
            <img src={CreateGroup} alt="create_group" className="create_group_icon"/>
            <span>Create Group</span>
          </div>
          <div className="logout">
            <img src= {Logout} alt="log-out" className="icon"/>
            <span>Logout</span>
          </div>
          <div className="Profile" >
            <img src={AccountPhoto} alt="user-profile" className="profile-img"/>
          </div>   
        </div>
      
        </nav>
    
        <div className="bottom-nav">
        <div className="nav-item"><img src={AddFriend} alt="Add Friend" className="icon"/><span>Add Friends</span></div>
        <div className="nav-item"><img src={Notifications} alt="Notifications" className="icon"/><span>Notifications</span></div>
        <div className="nav-item"><img src={CreateGroup} alt="Create Group" className="create_group_icon"/><span>Create Group</span></div>
        
        </div>
</div>
    )
}
export default Navbar;