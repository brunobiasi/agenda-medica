import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../../../services/api';
import { getNomeTipo, getNomeTipoLabel } from '../../../functions/static_data_sched';

const mdTheme = createTheme();

function DashboardContent() {

  const [data, setData] = useState('');
  const [agendamentos, setAgendamentos] = useState([]);

  async function loadAgendamentos() {
    const response = await api.post("/api/agendamentos/all", { date: data });
    setAgendamentos(response.data);
  }

  async function handleDelete(id) {
    if (window.confirm("Deseja realmente excluir este agendamento?")) {
      var result = await api.delete('/api/agendamentos/' + id);
      if (result.status === 200) {
        window.location.href = '/admin/agendamentos';
      } else {
        alert('Ocorreu um erro. Por favor, tente novamente!');
      }
    }
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <MenuAdmin title={'AGENDAMENTOS'} />
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
          <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="data"
                      name="data"
                      label="Data"
                      fullWidth
                      autoComplete="data"
                      variant="standard"
                      value={data}
                      onChange={e => setData(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Button variant="contained" onClick={() => loadAgendamentos()}>Consultar</Button>
                  </Grid>
                </Grid>
                <Button style={{ marginTop: 10, marginBottom: 10 }} variant="contained" href={'/admin/agendamentos/cadastrar'}><AddIcon />Cadastrar</Button>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 450,
                  }}
                >
                  <h2>Listagem de Agendamentos</h2>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Data</TableCell>
                              <TableCell align="center">Hora</TableCell>
                              <TableCell align="center">Cliente</TableCell>
                              <TableCell align="center">Convênio</TableCell>
                              <TableCell align="center">Tipo</TableCell>
                              <TableCell align="center">Telefone</TableCell>
                              <TableCell align="right">Opções</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {agendamentos.map((row) => (
                              <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                <TableCell component="th" scope="row">
                                  {row.date}
                                </TableCell>
                                <TableCell align="center">{row.hour}</TableCell>
                                <TableCell align="center">{row.client}</TableCell>
                                <TableCell align="center">{row.health_insurance}</TableCell>
                                <TableCell align="center"><Chip label={getNomeTipo(row.type)} color={getNomeTipoLabel(row.type)} /></TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                                <TableCell align="right">
                                  <ButtonGroup aria-label="outlined primary button group">
                                    <Button variant="contained" href={'/admin/agendamentos/editar/' + row.id}><EditIcon /></Button>
                                    <Button variant="contained" onClick={() => handleDelete(row.id)}><DeleteIcon /></Button>
                                  </ButtonGroup>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            <Footer sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function AgendamentosListagem() {
  return <DashboardContent />;
}