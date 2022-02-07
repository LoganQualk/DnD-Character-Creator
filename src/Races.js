import raceNames from "./Data/RaceNames";

const Races = () => {

    console.log(raceNames);

    return (
        <div>
            <h1>Races</h1>
            <div className="grid">
                {raceNames.sort().map((race, index) => <a href={"https://roll20.net/compendium/dnd5e/" + race} target="_blank" rel="noopener noreferrer"><p key={index} title={race}>{race}</p></a>)}
            </div>
        </div>
    );
}

export default Races;