import { createContext } from "react";
export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {
    
    const a = 3;
    const globalState = {a};
    
    // Everything rendering in App.js IS children
    return ( 
        <GlobalContext.Provider value={globalState}>
            {children} 
        </GlobalContext.Provider>
     );
}
 
