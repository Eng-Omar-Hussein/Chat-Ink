import { useEffect, useState } from "react";
import SecondPage from "./SecondPage/SecondPage.jsx";
import FirstPage from "./FirstPage/FirstPage";
export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [participant, setParticipant] = useState([]);
  return (
    <div>
      {currentPage === 0 && (
        <FirstPage
          setCurrentPage={setCurrentPage}
          setParticipant={setParticipant}
          participant={participant}
        ></FirstPage>
      )}

      {currentPage === 1 && <SecondPage participant={participant} />}
    </div>
  );
}
