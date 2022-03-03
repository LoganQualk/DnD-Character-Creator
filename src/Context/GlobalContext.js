import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalPage, setModalPage] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const grabSpellData = (spellName) => {
    // api call
    setIsLoaded(false);
    const webURL = "http://localhost:8000/spell?name="+spellName;
    fetch(webURL)
      .then(res => 
        res.json())
      .then(
        (data) => {
          setModalData(data.results[0]);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    // setModalData(whatever I get from API call)
  }

  const globalState = {
    modalVisible, setModalVisible,
    modalPage, setModalPage,
    grabSpellData,
    modalData, setModalData,
    isLoaded, setIsLoaded
  };

  // Everything rendering in App.js IS children
  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
}

