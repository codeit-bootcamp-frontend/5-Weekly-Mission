import "../main.css";
import Title from "./title";
import CardListSearch from "./cardListSearch";

import { useState, useEffect, createContext } from "react";
import { getFolder } from "../api/folderApi";

export const folderContext = createContext();

const Main = () => {
  const [folderData, setforderData] = useState({ folders: {} });

  useEffect(() => {
    const resData = async () => {
      const data = await getFolder();
      setforderData(data);
    };
    return resData;
  }, []);

  const links = folderData.folders.folder?.links;
  const title = folderData.folders.folder?.owner;
  const folderName = folderData.folders.folder?.name;

  return (
    <main className="main">
      <folderContext.Provider value={{ links, title, folderName }}>
        <Title />
        <CardListSearch />
      </folderContext.Provider>
    </main>
  );
};

export default Main;
