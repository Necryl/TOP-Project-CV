import { useState } from "react";
import { useRef } from "react";
import "../styles/App.css";
import Profile from "../components/Profile.jsx";
import Ledger from "../components/Ledger.jsx";
import Skills from "../components/Skills.jsx";
import Form from "../components/Form.jsx";
import reactImg from "../assets/react.svg";
function App() {
  const [profileData, setProfileData] = useState({
    name: "Yo Yo Honey Singh",
    location: "Punjab",
    mobile: "1234567123",
    email: "yoyoyohoney@gmale.com",
    picture: reactImg,
  });
  const [skillsData, setSkillsData] = useState({
    tags: "janitor, punctual, entertaining",
  });
  const [experienceData, setExperienceData] = useState([
    {
      name: "Google",
      date: "2024-2026",
      text: "Was a janitor, cleaned the 2nd floor every day at 5pm to the company's extreme satisfaction",
    },
    {
      name: "Facebook",
      date: "2027-2029",
      text: "Cleaned MArk's cup every morning at 4:30am to his somewhat extreme satisfaction",
    },
  ]);
  const [educationData, setEducationData] = useState([
    {
      name: "School of magic",
      date: "2020-2023",
      text: "Learned about the physics of dirt and grime",
    },
    {
      name: "cleaning school",
      date: "2017-2020",
      text: "Learned how to clean a cup without leaving fingerprints",
    },
  ]);
  const [formData, setFormData] = useState(null);
  const submitTo = useRef(null);
  const manageEntries = (setData, data) => {
    let onlyData = Object.keys(data).reduce((result, key) => {
      if (key !== "type" && key !== "index") {
        result[key] = data[key];
      }
      return result;
    }, {});
    if (data.type === "add") {
      setData((prevEntries) => {
        return [...prevEntries, onlyData];
      });
    } else if (data.type === "edit") {
      setData((prevEntries) => {
        let final = [...prevEntries];
        final[data.index] = onlyData;
        return final;
      });
    }
  };
  const submitFuncs = [
    setProfileData,
    setSkillsData,
    (data) => {
      manageEntries(setExperienceData, data);
    },
    (data) => {
      manageEntries(setExperienceData, data);
    },
  ];

  return (
    <div id="app" className={formData === null ? "" : "noScroll"}>
      <Form
        data={formData}
        submit={(data) => {
          setFormData(null);
          submitFuncs[submitTo.current](data);
        }}
        hideForm={() => {
          setFormData(null);
        }}
      />
      <Profile
        data={profileData}
        declareEdit={(data) => {
          submitTo.current = 0;
          setFormData(data);
        }}
      />
      <Skills
        data={skillsData}
        declareEdit={(data) => {
          submitTo.current = 1;
          setFormData(data);
        }}
      />
      <Ledger
        data={experienceData}
        declareEdit={(data) => {
          submitTo.current = 2;
          setFormData(data);
        }}
        name="Experience"
      />
      <Ledger
        data={educationData}
        declareEdit={(data) => {
          submitTo.current = 3;
          setFormData(data);
        }}
        name="Education"
      />
    </div>
  );
}

export default App;
