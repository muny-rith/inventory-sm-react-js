import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBar/SideBar";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./MainLayout.module.css";
import { useState } from "react";

import { motion } from 'framer-motion';

export default function MainLayout() {

    const [open, setOpen] = useState("open");

    const sideContainerVariants = {
        open: {
            // width: "15rem",
            opacity: 1,
            transition: {
                duration: 0.3,
                // ease: "easeInOut"
            },
            width: "250px",

        },
        close: {
            opacity: 0,
            pointerEvents: "none",
            transition: { duration: 0.3 },
            width: "0px",
        }
    };

    return (
        <div className={styles.layout}>
            <motion.div
                className={styles.sidebar}
                initial={"open"}
                variants={sideContainerVariants}
                animate={open}
            >
                <Sidebar />
            </motion.div>

            <div
                className={styles.main}
                // animate={open}
                // variants={mainContainerVariants}

            >
                <div className={styles.navbar}>
                    <Navbar setOpen={setOpen} />
                </div>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}