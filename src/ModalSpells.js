import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalContext";
import parse from "html-react-parser";
import showdown from "showdown";

const ModalSpells = () => {

    const state = useContext(GlobalContext);
    const spellData = state.modalData;

    const converter = new showdown.Converter();

    return (
        <div>
            {
            ((state.isLoaded && spellData && spellData !== undefined) &&
                <React.Fragment>
                    <h1>{spellData.name}</h1>
                    <div id="spellDescription">{parse(converter.makeHtml(spellData.desc))}</div>
                    {/* {spellData.desc.split("\n").map((spell) => <p>{spell}</p>)} */}
                </React.Fragment>
            ) ||
            <p>Loading...</p>
            }
        </div>
    );
}

export default ModalSpells;