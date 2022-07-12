import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
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

type Anchor = 'left';

function handleRedirectToMenu() {
  window.location.href = '/';
}

function handleRedirectToCart() {
  window.location.href = '/carrinho';
}

function handleRedirectToUser() {
  window.location.href = '/user';
}

function handleRedirectToContact() {
  window.location.href = '/contato';
}

export function Sidebar() {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
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
  <div className="menu menu-2" onClick={handleRedirectToMenu}>
    <MenuItem>
      <ListItemIcon>
        <LunchDiningIcon fontSize="small" sx={{ color: red[500] }} />
      </ListItemIcon>
      <ListItemText>Cardápio</ListItemText>
    </MenuItem>
    </div>
    <Divider />

    <div className="menu menu-2" onClick={handleRedirectToCart}>
    <MenuItem>
      <ListItemIcon>
        <ShoppingCartIcon to="/carrinho" fontSize="small" sx={{ color: red[500] }} />
      </ListItemIcon>
      <ListItemText>Pedidos</ListItemText>
    </MenuItem>
    </div>
    <Divider />

    <div className="menu menu-2" onClick={handleRedirectToUser}>
    <MenuItem>
      <ListItemIcon>
        <PersonOutlineIcon fontSize="small" sx={{ color: red[500] }} />
      </ListItemIcon>
      <ListItemText>Perfil</ListItemText>
    </MenuItem>
    </div>
    <Divider />

    <div className="menu menu-2" onClick={handleRedirectToContact}>
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

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
        <MenuIcon className="toggle-button" fontSize="large" onClick={toggleDrawer(anchor, true)} />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
