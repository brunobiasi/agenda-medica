import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { getToken, logout } from '../services/auth';
import api from '../services/api';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/usuarios">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuários" />
    </ListItem>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Agendamentos" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opções</ListSubheader>
    <ListItem button onClick={confirmSair}>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);

async function confirmSair() {
  if (window.confirm("Deseja realmente sair do sistema?")) {
    const response = await api.get('/api/usuarios/destroytoken', { headers: { token: getToken() } });
    if (response.status === 200) {
      logout();
      window.location.href = '/login';
    } else {
      alert("Não foi possível fazer o logout!");
    }
  }
}