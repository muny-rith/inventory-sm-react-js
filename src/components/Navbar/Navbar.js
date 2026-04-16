import './Navbar.css'
// import { NavLink } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import TocIcon from '@mui/icons-material/Toc';

import {  motion } from 'framer-motion'
// import { useState } from 'react';
// import SearchBox from '../Form/SearchBox';

const Navbar = ({ setOpen }) => {


    //collap sidebar
    const handleToggle = () => {
        setOpen(prev => (prev === "open" ? "close" : "open"));
    };




    return (

        <motion.div
            // data-open={open}
            // variants={sideContainerVariants}
            //   initial={{ opacity: 0, x: -20 }}
            //   animate={{ opacity: 1, x: 0 }}
            // initial = {"closed"}
            // initial = {"open"}
            // animate = {open}

            className="navbar">

            <motion.div
                className='menu-icon'
                whileHover={{
                    scale: 1.2,
                    rotate: 180,
                    background: "rgba(158, 158, 158, 0.56)",
                    borderRadius: "6px",
                    color: "rgb(255, 255, 255)",
                    transition: {
                        // delay: 0.1,
                        duration: 0.4
                    }

                }}
                onClick={handleToggle}
            >
                <TocIcon></TocIcon>
            </motion.div>

            {/* <SearchBox></SearchBox> */}
            <div className='profile'>
                <a href='/'> <FaUser className="icon" /></a>

            </div>

        </motion.div>

    );
}

export default Navbar;