import './SideBar.css'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
    return (
        <nav className="sidebar">
            <NavLink to="/dashboard" class="active"><i class="fa-solid fa-layer-group"></i>Dashboard</NavLink>
            <NavLink to="/product" ><i class="fa-solid fa-cart-shopping"></i>Product</NavLink>
            <NavLink to="/category" ><i class="fa-solid fa-table-list"></i>Category</NavLink>
            <NavLink to="/loan" ><i class="fa-solid fa-coins"></i>Loan</NavLink>
            <NavLink to="/worker" ><i class="fa-solid fa-user"></i>Worker</NavLink>
            <NavLink to="/report" ><i class="fa-regular fa-file-lines"></i>Report</NavLink> 
        </nav>
    );

}
export default SideBar;