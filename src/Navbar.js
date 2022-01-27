import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Nav</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
                <Link to="/spells">Spells</Link>
            </div>
        </nav>
    )
}

export default Navbar;