import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">Logo</div>
            <div className="navbar__links">
                <a href='/'>About</a>
                <a href='/'>Home</a>
            </div>
        </nav>
    );
}
 
export default Navbar;