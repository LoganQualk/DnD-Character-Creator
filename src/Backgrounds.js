import backgrounds from "./Data/Backgrounds";

const Backgrounds = () => {

    console.log(backgrounds);

    return (
        <div>
            <h1>Backgrounds</h1>
            <div className="grid">
                {backgrounds.sort().map((background, index) => <a href={"https://roll20.net/compendium/dnd5e/" + background} target="_blank" rel="noopener noreferrer"><p key={index} title={background}>{background}</p></a>)}
            </div>
                
        </div>
    );
}

// http://dnd5e.wikidot.com/background:
 
export default Backgrounds;