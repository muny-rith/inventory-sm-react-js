import { FaSearch } from "react-icons/fa";
import './Form.css'
const SearchBox = () => {
    return (
        <div className="search-box">
            <FaSearch className="icon" />
            <input type="text" className='input' placeholder="Search here..." />
        </div>
    );
};
export default SearchBox;