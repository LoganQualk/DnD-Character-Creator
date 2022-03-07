import { GlobalContext } from "./Context/GlobalContext";
import { useContext } from "react";
import itemNames from "./Data/ItemsNames";

const Items = () => {
    
    const state = useContext(GlobalContext);
    const getItemsByFirstLetter = [];

    for (let i = 97; i <= 122; i++) {
        getItemsByFirstLetter.push(String.fromCharCode(i));
    }

    return ( 
        <div>
            <h1>Items</h1>
            {getItemsByFirstLetter.map((letter, index) => {
                return (
                    <div key={index}>
                        <h2>{letter.toUpperCase()}</h2>
                        <div className="grid">
                        {itemNames.filter(name => name.charAt(0).toLowerCase() === letter).map((item, index) =>
                                <p key={index} title={item} className="individualItems" onClick={() => {
                                    state.setModalPage("items");
                                    state.setModalVisible(true);
                                    state.grabItemData(item);
                                }}>{item}</p>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
        
     );
}
 
export default Items;