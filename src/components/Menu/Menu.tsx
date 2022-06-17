import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';

export function Menu() {
    return (
        <div>
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
          
          <div className="menu menu-1">
          <MenuItem>
          <ListItemIcon>
            <MenuIcon fontSize="small" sx={{ color: red[50] }} />
          </ListItemIcon>
          <ListItemText>Menu</ListItemText>
        </MenuItem>
          </div>
          
      <Divider />
      <div className="menu menu-2">
        <MenuItem>
          <ListItemIcon>
            <LunchDiningIcon fontSize="small" sx={{ color: red[500] }} />
          </ListItemIcon>
          <ListItemText>Cardápio</ListItemText>
        </MenuItem>
        </div>
        <Divider />

        <div className="menu menu-2">
        <MenuItem>
          <ListItemIcon>
            <ShoppingCartIcon fontSize="small" sx={{ color: red[500] }} />
          </ListItemIcon>
          <ListItemText>Pedidos</ListItemText>
        </MenuItem>
        </div>
        <Divider />

        <div className="menu menu-2">
        <MenuItem>
          <ListItemIcon>
            <PersonOutlineIcon fontSize="small" sx={{ color: red[500] }} />
          </ListItemIcon>
          <ListItemText>Perfil</ListItemText>
        </MenuItem>
        </div>
        <Divider />

        <div className="menu menu-2">
        <MenuItem>
          <ListItemIcon>
            <CallIcon fontSize="small" sx={{ color: red[500] }} />
          </ListItemIcon>
          <ListItemText>Contatos</ListItemText>
        </MenuItem>
        </div>
        <Divider />
      </MenuList>
    </Paper>
        </div>
    );
}