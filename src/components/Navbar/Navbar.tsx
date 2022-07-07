import { Sidebar } from "../Sidebar/Sidebar";
import { red } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function Navbar() {
    return (
        <div className="navbar">
            <Sidebar />
            <p>Capim Grosso | Centro</p>                        
            <ShoppingCartIcon fontSize="large" sx={{ color: red[500] }} />
        </div>
    );
}