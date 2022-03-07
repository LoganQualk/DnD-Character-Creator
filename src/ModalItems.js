import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalContext";
import parse from "html-react-parser";
import showdown from "showdown";

const ModalItems = () => {

    const state = useContext(GlobalContext);
    const itemData = state.modalData;

    const converter = new showdown.Converter();
    // console.log(parse(converter.makeHtml(itemData.desc)));

    return (
        <div>
            {
            ((state.isLoaded && itemData && itemData !== undefined) &&
                <React.Fragment>
                    <h1>{itemData.name}</h1>
                    <div className="itemDescription">{parse(converter.makeHtml(itemData.type))}</div>
                    <br />
                    <br />
                    <div className="itemDescription">{parse(converter.makeHtml(itemData.desc))}</div>
                </React.Fragment>
            ) ||
            <p>Loading...</p>
            }
        </div>
    );
}

export default ModalItems;