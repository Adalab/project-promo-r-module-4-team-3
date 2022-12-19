import "../styles/App.scss";
import fetchApi from "../services/api";
import {Route, Routes} from 'react-router-dom';
import { useState } from "react";
import Landing from "./Landing";
import Card from "./Card";
import Footer from "./Footer";


function App() {
  const [avatar, setAvatar] = useState("");

  const [data, setData] = useState({
    palette: "1",
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",
  });

  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setData({ ...data, photo: avatar });
  };

  const [palette, setPalette] = useState("palette1");

  const [apiCard, setApiCard] = useState({});
  const [isDesignOpen, setIsDesignOpen] = useState(true);
  const [isFillOpen, setIsFillOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [cleanLinkedin, setCleanLinkedin] = useState("");
  const [cleanGithub, setCleanGithub] = useState("");

  const handleInput = (dataInfo) => {
    if (dataInfo.name === "linkedin") {
      if (dataInfo.value.includes("linkedin")) {
        setCleanLinkedin(dataInfo.value.substring(28));
      } else setCleanLinkedin(dataInfo.value);
    }

    if (dataInfo.name === "github") {
      if (dataInfo.value.includes("github")) {
        setCleanGithub(dataInfo.value.substring(19));
      } else setCleanGithub(dataInfo.value);
    }

    setData({ ...data, [dataInfo.name]: dataInfo.value });
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    setData({
      palette: "1",
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    });
    setPalette("palette1");
    setAvatar("");
  };

  const handleClickFetch = () => {
    fetchApi(data).then((responseData) => {
      setApiCard(responseData);
    });
  };

  const handleClickSection = (ev) => {
    const clickedId = ev.currentTarget.id;
    if (clickedId === "1") {
      setIsDesignOpen(true);
      setIsFillOpen(false);
      setIsShareOpen(false);
    } else if (clickedId === "2") {
      setIsDesignOpen(false);
      setIsFillOpen(true);
      setIsShareOpen(false);
    } else if (clickedId === "3") {
      setIsDesignOpen(false);
      setIsFillOpen(false);
      setIsShareOpen(true);
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/card" element={<Card
        data={data}
        palette={palette}
        setPalette={setPalette}
        apiCard={apiCard}
        isDesignOpen={isDesignOpen}
        isFillOpen={isFillOpen}
        isShareOpen={isShareOpen}
        handleClickSection={handleClickSection}
        handleInput={handleInput}
        handleReset={handleReset}
        handleClickFetch={handleClickFetch}
        cleanLinkedin={cleanLinkedin}
        cleanGithub={cleanGithub}
        updateAvatar={updateAvatar}
        avatar={avatar}
      />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
