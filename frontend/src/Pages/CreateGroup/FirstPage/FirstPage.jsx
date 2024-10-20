import { useEffect, useState } from "react";
import SearchInput from "../../../Components/SearchInput/SeacrhInput"; // Check the spelling of the import path if needed
import user from "../../../Assets/Ellipse 308.png";
import groupPic from '../../../Components/icons/group.png';
import CardComponent from '../../../Components/Groups/CardComponent';
import { useNavigate } from "react-router-dom";

const PUBLICGROUPS = [
  { groupName: "Cooking Group", groupPic: groupPic },
  { groupName: "Reading Group", groupPic: groupPic },
  { groupName: "Quran Group", groupPic: groupPic },
  { groupName: "Praying Group", groupPic: groupPic },
  { groupName: "Excercise Group", groupPic: groupPic }
];
//gets 4 random groups from the array  
const getRandomGroups = (groups, count) => {
  const shuffled = groups.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function App() {
  const navigate = useNavigate();
  const [randomGroups, setRandomGroups] = useState([]);

  useEffect(() => {
    setRandomGroups(getRandomGroups(PUBLICGROUPS, 4));
  }, []);

  return (
    <div id="groups-container">
      <h2>Public Groups</h2>

      <div className="container mt-4">
        <div className="row">
          {
            randomGroups.map((group, index) => (
              <CardComponent key={index} groupName={group.groupName} groupPic={group.groupPic} />
            ))
          }
        </div>
      </div>

      <h2 
        style={{ fontWeight: "bold", fontSize: "25px", marginTop: "30px", color: "#598E92", cursor: "pointer" }} 
        onClick={() => { navigate('/createGroupSecondPage') }}
      >
        Create your own group
      </h2>
    </div>
  );
}