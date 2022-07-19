import { Navbar } from "../components/Navbar/Navbar";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { red } from "@mui/material/colors";

export function SearchForUnits() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex' }}
                    >
                    <SearchIcon sx={{ p: '10px', color: red[500] }} />
                    <InputBase
                        placeholder="Pesquisar"
                    />
                </Paper>
            </div>
        </div>
    )
}