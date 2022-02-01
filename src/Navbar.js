import { Link } from 'react-router-dom';
import { SiDungeonsanddragons } from 'react-icons/si';

const Navbar = () => {
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
            </div>
        </nav>
    )
}

export default Navbar;