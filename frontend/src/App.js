import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Notifications from './Pages/Notifications'
import AccountSettings from './Pages/AccountSettings'
import SignUp from './Pages/SignUp'
import MainPage from "./Pages/MainPage"
import ChatPage from "./Pages/ChatPage"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/ChatPage" element={<ChatPage />} />
        <Route path="/accountSettings" element={<AccountSettings />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}

export default App;
