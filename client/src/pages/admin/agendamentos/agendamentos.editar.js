import { useEffect, useState } from 'react';
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
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';

const mdTheme = createTheme();

function DashboardContent() {

  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [cliente, setCliente] = useState('');
  const [convenio, setConvenio] = useState('');
  const [medico, setMedico] = useState('');
  const [proced, setProced] = useState('');
  const [status, setStatus] = useState('');
  const [telefone, setTelefone] = useState('');

  const { idAgendamento } = useParams();

  useEffect(() => {
    async function getAgendamento() {
      var response = await api.get('/api/agendamentos.details/' + idAgendamento);

      setData(response.data.date);
      setHora(response.data.hour);
      setCliente(response.data.client);
      setConvenio(response.data.health_insurance);
      setMedico(response.data.doctor);
      setProced(response.data.procedure);
      setStatus(response.data.status);
      setTelefone(response.data.phone);
    }

    getAgendamento();
  }, []);

  async function handleSubmit() {
    const dados = {
      date: data,
      hour: hora,
      client: cliente,
      health_insurance: convenio,
      doctor: medico,
      procedure: proced,
      status: status,
      phone: telefone,
      id: idAgendamento,
    }

    if (data !== '' && hora !== '' && cliente !== '' && convenio !== '' && medico !== '' && proced !== '' && status !== '' && telefone !== '') {
      const response = await api.put('/api/agendamentos', dados);

      if (response.status === 200) {
        window.location.href = '/admin/agendamentos';
      } else {
        alert('Erro ao atualizar o agendamento!');
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
                <Button style={{ marginBottom: 10, marginRight: 5 }} variant="contained" href={'/admin/agendamentos'}><ArrowBackIcon />Voltar</Button>
                <Button style={{ marginBottom: 10 }} variant="contained" href={'/admin/agendamentos/cadastrar'}><AddIcon />Cadastrar</Button>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 450,
                  }}
                >
                  <h2>Atualização de Agendamentos</h2>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                      <TextField
                        required
                        type="date"
                        id="data"
                        name="data"
                        fullWidth
                        autoComplete="data"
                        variant="outlined"
                        value={data}
                        onChange={e => setData(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <TextField
                        required
                        type="time"
                        id="hora"
                        name="hora"
                        fullWidth
                        autoComplete="hora"
                        variant="outlined"
                        value={hora}
                        onChange={e => setHora(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                      <FormControl variant="standard" fullWidth required>
                        <InputLabel id="labelConvenio">Convênio</InputLabel>
                        <Select
                          labelId="labelConvenio"
                          id="convenio"
                          value={convenio}
                          onChange={e => setConvenio(e.target.value)}
                          label="convenio"
                        >
                          <MenuItem value={'Amil'}>Amil</MenuItem>
                          <MenuItem value={'Bradesco Saúde'}>Bradesco Saúde</MenuItem>
                          <MenuItem value={'Capesesp'}>Capesesp</MenuItem>
                          <MenuItem value={'Casf'}>Casf</MenuItem>
                          <MenuItem value={'Saúde Petrobras'}>Saúde Petrobras</MenuItem>
                          <MenuItem value={'Postal Saúde'}>Postal Saúde</MenuItem>
                          <MenuItem value={'Sulamérica'}>Sulamérica</MenuItem>
                          <MenuItem value={'Unimed'}>Unimed</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl variant="standard" fullWidth required>
                        <InputLabel id="labelMedico">Médico</InputLabel>
                        <Select
                          labelId="labelMedico"
                          id="medico"
                          value={medico}
                          onChange={e => setMedico(e.target.value)}
                          label="medico"
                        >
                          <MenuItem value={'Jairo Lopes Barja'}>Jairo Lopes Barja</MenuItem>
                          <MenuItem value={'Ricardo Robson Mesquita da Silva'}>Ricardo Robson Mesquita da Silva</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl variant="standard" fullWidth required>
                        <InputLabel id="labelProced">Procedimento</InputLabel>
                        <Select
                          labelId="labelProced"
                          id="proced"
                          value={proced}
                          onChange={e => setProced(e.target.value)}
                          label="proced"
                        >
                          <MenuItem value={'Consulta'}>10101012 - Consulta</MenuItem>
                          <MenuItem value={'Tonometria'}>41301323 - Tonometria</MenuItem>
                          <MenuItem value={'Mapeamento de retina'}>41301250 - Mapeamento de retina</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <FormControl variant="standard" fullWidth required>
                        <InputLabel id="labelStatus">Status</InputLabel>
                        <Select
                          labelId="labelStatus"
                          id="status"
                          value={status}
                          onChange={e => setStatus(e.target.value)}
                          label="status"
                        >
                          <MenuItem value={'1'}>Marcado</MenuItem>
                          <MenuItem value={'2'}>Confirmado</MenuItem>
                          <MenuItem value={'3'}>Cancelado</MenuItem>
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
                      <Button style={{ backgroundColor: "green" }} variant="contained" onClick={handleSubmit}><SaveIcon />Salvar</Button>
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

export default function AgendamentoEditar() {
  return <DashboardContent />;
}