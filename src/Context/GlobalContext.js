import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalPage, setModalPage] = useState(null);
    const [modalData, setModalData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const grabSpellData = (spellName) => {
        // api call
        useEffect(() => {
            fetch("https://api.open5e.com/spells" + spellName)
              .then(res => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setItems(result);
                },
                (error) => {
                  setIsLoaded(true);
                  setError(error);
                }
              )
          }, [])
        
        // setModalData(whatever I get from API call)
    }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    //   } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    //   } else {
    //     return (
    //       <ul>
    //         {items.map(item => (
    //           <li key={item.id}>
    //             {item.name} {item.price}
    //           </li>
    //         ))}
    //       </ul>
    //     );
    //   }


    const globalState = {
        modalVisible, setModalVisible,
        modalPage, setModalPage,
        grabSpellData,
        modalData
    };

    // Everything rendering in App.js IS children
    return (
        <GlobalContext.Provider value={globalState}>
            {children}
        </GlobalContext.Provider>
    );
}

