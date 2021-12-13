
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuAdmin from '../../../components/menu-admin';
import { getTipoUsuario } from '../../../services/auth';
import Footer from '../../../components/footer-admin';
import DashFuncionario from './funcionario';
import DashGerente from './gerente';
import DashAdmin from './admin';

const mdTheme = createTheme();

function getDashboard(){
  if(getTipoUsuario() == '1'){
    return <DashAdmin />
  } else if(getTipoUsuario() == '2'){
    return <DashGerente />
  } else {
    return <DashFuncionario />
  }
}

function DashboardContent() {
  
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <MenuAdmin title={'DASHBOARD'}/>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {getDashboard()}
            </Grid>
            <Footer sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}