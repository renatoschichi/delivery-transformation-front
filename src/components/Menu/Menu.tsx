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
import MenuIcon from '@mui/icons-material/Menu';;

export function Menu() {
    return (
        <div>
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>

          <div className="menu-1">
          <MenuItem>
          <ListItemIcon>
            <MenuIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Menu</ListItemText>
        </MenuItem>
          </div>
          
      <Divider />
      <div className="menu-2">
        <MenuItem>
          <ListItemIcon>
            <LunchDiningIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cardápio</ListItemText>
        </MenuItem>
        </div>
        <Divider />

        <div className="menu-2">
        <MenuItem>
          <ListItemIcon>
            <ShoppingCartIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Pedidos</ListItemText>
        </MenuItem>
        </div>
        <Divider />

        <div className="menu-2">
        <MenuItem>
          <ListItemIcon>
            <PersonOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Perfil</ListItemText>
        </MenuItem>
        </div>
        <Divider />

        <div className="menu-2">
        <MenuItem>
          <ListItemIcon>
            <CallIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Contatos</ListItemText>
        </MenuItem>
        </div>

      </MenuList>
    </Paper>
        </div>
    );
}