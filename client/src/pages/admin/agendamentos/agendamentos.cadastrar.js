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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import api from '../../../services/api';

const mdTheme = createTheme();

function DashboardContent() {

  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [cliente, setCliente] = useState('');
  const [convenio, setConvenio] = useState('');
  const [tipo, setTipo] = useState('');
  const [telefone, setTelefone] = useState('');

  async function handleSubmit() {
    const dados = {
      date: data,
      hour: hora,
      client: cliente,
      health_insurance: convenio,
      type: tipo,
      phone: telefone,
    }

    if (data !== '' && hora !== '' && cliente !== '' && convenio !== '' && tipo !== '' && telefone !== '') {
      const response = await api.post('/api/agendamentos', dados);

      if (response.status === 200) {
        window.location.href = '/admin/agendamentos';
      } else {
        alert('Erro ao cadastrar o agendamento!');
      }
    } else {
      alert('Por favor, preencha todos os dados!');
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
                <Button style={{ marginBottom: 10 }} variant="contained" href={'/admin/agendamentos'}><ArrowBackIcon />Voltar</Button>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 360,
                  }}
                >
                  <h2>Cadastro de Agendamentos</h2>
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
                      <TextField
                        required
                        id="hora"
                        name="hora"
                        label="Hora"
                        fullWidth
                        autoComplete="hora"
                        variant="standard"
                        value={hora}
                        onChange={e => setHora(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField
                        required
                        id="cliente"
                        name="cliente"
                        label="Cliente"
                        fullWidth
                        autoComplete="cliente"
                        variant="standard"
                        value={cliente}
                        onChange={e => setCliente(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="convenio"
                        name="convenio"
                        label="Convênio"
                        fullWidth
                        autoComplete="convenio"
                        variant="standard"
                        value={convenio}
                        onChange={e => setConvenio(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <FormControl variant="standard" fullWidth>
                        <InputLabel id="labelTipo">Tipo</InputLabel>
                        <Select
                          labelId="labelTipo"
                          id="tipo"
                          value={tipo}
                          onChange={e => setTipo(e.target.value)}
                          label="tipo"
                        >
                          <MenuItem value={1}>Consulta</MenuItem>
                          <MenuItem value={2}>Exame</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <TextField
                        required
                        id="telefone"
                        name="telefone"
                        label="Telefone"
                        fullWidth
                        autoComplete="telefone"
                        variant="standard"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Button style={{backgroundColor: "green"}} variant="contained" onClick={handleSubmit}><SaveIcon />Salvar</Button>
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

export default function AgendamentoCadastar() {
  return <DashboardContent />;
}