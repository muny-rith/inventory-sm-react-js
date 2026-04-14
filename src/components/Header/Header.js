import './Header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Header = () => {
    return (

        <header className="header">
            <navBar>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                    <p>Moon Inventory</p>
                </div>
                <div className="search-box">
                    <FaSearch className="icon" />
                    <input type="text" className='input' placeholder="Search here..." />
                </div>
                <div className='profile'>
                    <a href='#'> <FaUser className="icon" /></a>

                </div>
            </navBar>
        </header>

    );
}

export default Header;