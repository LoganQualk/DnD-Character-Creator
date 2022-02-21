import { useContext } from "react";
import { GlobalContext } from "./Context/GlobalContext";

const Home = () => {

    const state = useContext(GlobalContext);
    
    // use anonymous function when you are using some kind of handler so that it doesn't run when it loads but instead runs when you click it
    return (
        <div id="HomePage">
            <h1>HOMEPAGE</h1>
            <button onClick={() => {
                state.setModalPage("spells");
                state.setModalVisible(true);
            }}>Display Modal</button>
        </div>
    )
}


export default Home;