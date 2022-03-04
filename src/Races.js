import { GlobalContext } from "./Context/GlobalContext";
import { useContext } from "react";
import raceNames from "./Data/RaceNames";

const Races = () => {

    const state = useContext(GlobalContext);

    return (
        <div>
            <h1>Races</h1>
            <div className="grid">
                {raceNames.sort().map((race, index) => 
                <p key={index} title={race} className="individualRaces" onClick={() => {
                    state.setModalPage("races")
                    state.setModalVisible(true);
                    state.grabRaceData(race);
                }}>{race}</p>)}
            </div>
        </div>
    );
}

export default Races;