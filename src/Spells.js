// import { GlobalContext } from "./Context/GlobalContext";
// import { useContext } from "react";
import spellNames from "./Data/SpellsName";

const Spells = () => {

    // const state = useContext(GlobalContext);
    const getSpellsByFirstLetter = [];

    for (let i = 97; i <= 122; i++) {
        getSpellsByFirstLetter.push(String.fromCharCode(i));
        console.log("https://open5e.com/spells/" + spellNames[i].replace(/\s/g, ''));
    }

    

    return (
        <div>
            <h1>Spells</h1>
            {getSpellsByFirstLetter.map((letter, index) => {
                return (
                    <div key={index}>
                        <h2>{letter.toUpperCase()}</h2>
                        <div className="spells">
                            {spellNames.filter(name => name.charAt(0).toLowerCase() === letter).map((spell, index) => <a href={'https://open5e.com/spells/'+spell.replace(/[\n\r\s\t]+/g, '-').replace('\'', '').toLowerCase()} target="_blank" rel="noopener noreferrer"><p key={index} title={spell}>{spell}</p></a>)}
                        </div>
                    </div>
                    
                )
            })}
        </div>
    );
}

export default Spells;