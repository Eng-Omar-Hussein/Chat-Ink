import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Notifications from "./Pages/Notifications";
import AccountSettings from "./Pages/AccountSettings";
import SignUp from "./Pages/SignUp";
import MainPage from "./Pages/MainPage";
import ChatPage from "./Pages/ChatPage";
import CreateGroup from "./Pages/CreateGroup/CreateGroup";
import AddFriends from "./Pages/AddFriends/AddFriends";
import Navbar from "./Components/Navbar/Navbar";
import GroupParticipantsListPage from "../src/Pages/GroupParticipantsListPage";
import CreateGroupSecondPage from "../src/Pages/CreateGroup/SecondPage/SecondPage"
import CreateGroupThirdPage from "../src/Pages/CreateGroup/ThirdPage/ThirdPage"
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/MainPage"
            element={
              <>
                <Navbar></Navbar>
                <MainPage />
              </>
            }
          />
          <Route
            path="/ChatPage"
            element={
              <>
                <Navbar></Navbar>
                <ChatPage />
              </>
            }
          />
          <Route
            path="/accountSettings"
            element={
              <>
                <Navbar></Navbar>
                <AccountSettings />
              </>
            }
          />
          <Route
            path="/notifications"
            element={
              <>
                <Navbar></Navbar>
                <Notifications />
              </>
            }
          />
          <Route
            path="/createGroup"
            element={
              <>
                <Navbar></Navbar>
                <CreateGroup />
              </>
            }
          />
          <Route
            path="/addFriends"
            element={
              <>
                <Navbar></Navbar>
                <AddFriends />
              </>
            }
          />

          <Route
            path="/groupParticipantsListPage"
            element={
              <>
               <Navbar></Navbar>
              <GroupParticipantsListPage />
              </>
            }
          />

          <Route
            path="/createGroupSecondPage"
            element={
              <>
               <Navbar></Navbar>
              <CreateGroupSecondPage/>
              </>
            }
          />

          <Route
            path="/createGroupThirdPage"
            element={
              <>
               <Navbar></Navbar>
              <CreateGroupThirdPage/>
              </>
            }
          />  

        <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
