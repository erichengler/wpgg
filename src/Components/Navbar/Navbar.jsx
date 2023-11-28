import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='menu'>
                <a className='menu-item' href='/games'>Games</a>
                <a className='menu-item' href='/addgame'>Add Game</a>
                <a className='menu-item' href='/about'>About</a>
                <a className='menu-item' href='/login'>Logout</a>
            </div>
        </nav>
    );
}

export default Navbar;