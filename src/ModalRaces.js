import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalContext";
import parse from "html-react-parser";
import showdown from "showdown";

const ModalRaces = () => {

    const state = useContext(GlobalContext);
    const raceData = state.modalData;

    const converter = new showdown.Converter();
    console.log(raceData);

    return (
        <div>
            {
            ((state.isLoaded && raceData && raceData !== undefined) &&
                <React.Fragment>
                    <h1>{raceData.name}</h1>
                    <div className="raceDescription">{parse(converter.makeHtml(raceData.desc))}</div>
                    <br />
                    <div className="raceDescription">{parse(converter.makeHtml(raceData.asi_desc))}</div>
                    <br />
                    <div className="raceDescription">{parse(converter.makeHtml(raceData.alignment))}</div>
                </React.Fragment>
            ) ||
            <p>Loading...</p>
            }
        </div>
    );
}

export default ModalRaces;