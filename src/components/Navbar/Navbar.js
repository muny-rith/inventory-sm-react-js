import './Navbar.css'
// import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { FaUser } from "react-icons/fa";
// import SearchBox from '../Form/SearchBox';

const Header = () => {
    return (

        <header className="header">
            <navBar>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                    <p>Moon Inventory</p>
                </div>
                {/* <SearchBox></SearchBox> */}
                <div className='profile'>
                    <a href='/'> <FaUser className="icon" /></a>

                </div>
            </navBar>
        </header>

    );
}

export default Header;