// import { GlobalContext } from "./Context/GlobalContext";
// import { useContext } from "react";
import spellNames from "./Data/SpellsName";
import Dashboard from "./Dashboard";

const Spells = () => {

    // const state = useContext(GlobalContext);
    const getSpellsByFirstLetter = [];

    for (let i = 97; i <= 122; i++) {
        getSpellsByFirstLetter.push(String.fromCharCode(i));
    }

    return (
        <div>
            <h1>Spells</h1>
            {getSpellsByFirstLetter.map((letter, index) => {
                return (
                    <div key={index}>
                        <h2>{letter.toUpperCase()}</h2>
                        <div className="grid">
                            {spellNames.filter(name => name.charAt(0).toLowerCase() === letter).map((spell, index) => <a key={index} href={'https://roll20.net/compendium/dnd5e/'+spell} target="_blank" rel="noopener noreferrer"><p title={spell}>{spell}</p></a>)}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

// 'https://open5e.com/spells/'+spell.replace(/[\n\r\s\t]+/g, '-').replace('\'', '').toLowerCase()
export default Spells;