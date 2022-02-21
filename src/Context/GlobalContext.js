import { createContext, useState } from "react";
export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalPage, setModalPage] = useState(null);
    const [modalData, setModalData] = useState(null);

    const grabSpellData = (spellName) => {
        // api call
        // setModalData(whatever I get from API call)
    }


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
 
