import { Link } from 'react-router-dom';
import { SiDungeonsanddragons } from 'react-icons/si';

const Navbar = () => {

    // changes light or dark theme, default is dark
    const darkOrLightMode = () => {
        if (document.documentElement.style.getPropertyValue('--dark-mode') === '#121212'){
            document.documentElement.style.setProperty('--dark-mode', '#FFFFFF');
            document.documentElement.style.setProperty('--text-color', '#121212');
        } else {
            document.documentElement.style.setProperty('--dark-mode', '#121212');
            document.documentElement.style.setProperty('--text-color', '#FFFFFF');
        }
        
    }

    return (
        <nav className='navbar'>
            <div>
                <Link to="/"><SiDungeonsanddragons id="onlyIcon"></SiDungeonsanddragons></Link>
                <Link to="/create">Create</Link>
                <Link to="/spells">Spells</Link>
                <Link to="/items">Items</Link>
                <Link to="/races">Races</Link>
                <Link to="/backgrounds">Backgrounds</Link>
                <Link to="/notes">Notes</Link>
                <button onClick={() => darkOrLightMode()}>Light/Dark</button>
            </div>
        </nav>
    )
}

export default Navbar;