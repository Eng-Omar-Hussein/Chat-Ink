import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Login from "./Pages/Login";
import Notifications from "./Pages/Notifications";
import AccountSettings from "./Pages/AccountSettings";
import SignUp from "./Pages/SignUp";
import MainPage from "./Pages/MainPage";
import ChatPage from "./Pages/ChatPage";
import CreateGroup from "./Pages/CreateGroup/CreateGroup";
import AddFriends from "./Pages/AddFriends/AddFriends";
import Navbar from "./Components/Navbar/Navbar";
import SecondPage from "./Pages/CreateGroup/SecondPage/SecondPage";
import { store } from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/secoundPageGroup" element={<SecondPage />} />
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
            path="*"
            element={
              <>
                <h1>wrong page</h1>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
