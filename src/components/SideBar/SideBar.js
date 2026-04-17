import './SideBar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
// import { implicitXAxis } from 'recharts/types/state/selectors/axisSelectors';
// import { motion } from 'framer-motion';
const SideBar = () => {



    return (
        <nav
            className="sidebar">
            <div className='logo'>
                <img src={logo} alt="logo" />
                <p>Moon INS</p>
            </div>
            <NavLink to="/dashboard" class="active">
                <SpaceDashboardIcon></SpaceDashboardIcon>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to="/product" ><i class="fa-solid fa-cart-shopping"></i>Product</NavLink>
            <NavLink to="/category" ><i class="fa-solid fa-table-list"></i>Category</NavLink>
            <NavLink to="/loan" ><i class="fa-solid fa-coins"></i>Loan</NavLink>
            <NavLink to="/worker" ><i class="fa-solid fa-user"></i>Worker</NavLink>
            <NavLink to="/report" ><i class="fa-regular fa-file-lines"></i>Report</NavLink>
        </nav>
    );

}
export default SideBar;