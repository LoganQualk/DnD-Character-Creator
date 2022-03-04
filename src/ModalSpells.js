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
                    <h3 style={{display: "inline"}}>Range: </h3><p style={{display: "inline"}}>{spellData.range}</p>
                    <br />
                    <br />
                    <h3 style={{display: "inline"}}>Duration: </h3><p style={{display: "inline"}}>{spellData.duration}</p>
                    <br />
                    <br />
                    <h2 style={{display: "inline"}}>Concentration: </h2><p style={{display: "inline"}}>{spellData.concentration}</p>
                    <br />
                    <br />
                    <h3 style={{display: "inline"}}>Casting Time: </h3><p style={{display: "inline"}}>{spellData.casting_time}</p>
                    <br />
                    <br />
                    <h3 style={{display: "inline"}}>Level: </h3><p style={{display: "inline"}}>{spellData.level}</p>
                    <br />
                    <br />
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