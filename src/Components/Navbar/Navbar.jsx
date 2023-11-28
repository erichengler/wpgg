import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='menu'>
                <a href='/games'>Games</a>
                <a href='/addgame'>Add Game</a>
                <a href='/about'>About</a>
                <a href='/login'>Logout</a>
            </div>
        </nav>
    );
}

export default Navbar;