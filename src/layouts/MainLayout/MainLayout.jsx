import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBar/SideBar";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./MainLayout.module.css";

export default function MainLayout() {
    return (
        <div className={styles.layout}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.main}>
                <div className={styles.navbar}>
                    <Navbar />
                </div>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}