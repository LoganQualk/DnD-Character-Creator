// import { GlobalContext } from "./Context/GlobalContext";
// import { useContext } from "react";
import spellNames from "./Data/SpellsName";
import { SiDungeonsanddragons } from 'react-icons/si';

const Spells = () => {

    // const state = useContext(GlobalContext);
    const getSpellsByFirstLetter = [];

    for (let i = 97; i <= 122; i++) {
        getSpellsByFirstLetter.push(String.fromCharCode(i));
    }

    return (
        <div>
            <h1><SiDungeonsanddragons></SiDungeonsanddragons> Spells</h1>
            {getSpellsByFirstLetter.map((letter, index) => {
                return (
                    <div key={index}>
                        <h2>{letter.toUpperCase()}</h2>
                        {spellNames.filter(name => name.charAt(0).toLowerCase() === letter).map((spell, index) => <p key={index}>{spell}</p>)}
                    </div>
                )
            })}
        </div>
    );
}

export default Spells;