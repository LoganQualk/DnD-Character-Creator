import { useContext } from "react";
import { GlobalContext } from "./Context/GlobalContext";

const Home = () => {

    const state = useContext(GlobalContext);
    
    // use anonymous function when you are using some kind of handler so that it doesn't run when it loads but instead runs when you click it
    return (
        <div id="HomePage">
            <h1>HOMEPAGE</h1>
            <p>Welcome to my DM helper! Click the tabs at the top to see the different things available to retrieve information on.</p>
            <p>I am sorry if what you are looking for is not here, I am currently limited to what is available via the Open5e API.</p>
        </div>
    )
}


export default Home;