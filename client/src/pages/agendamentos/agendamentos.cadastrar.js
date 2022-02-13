import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuAdmin from '../../components/menu-admin';
import Footer from '../../components/footer-admin';
import TextMaskCustom from '../../components/text-mask-custom';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import api from '../../services/api';
import { setDate } from '../../services/date';

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
    }

    if (data !== '' && hora !== '' && cliente !== '' && convenio !== '' && medico !== '' && proced !== '' && status !== '' && telefone !== '') {
      const response = await api.post('/api/agendamentos', dados);

      if (response.status === 200) {
        setDate(data);
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
                <Button style={{ marginBottom: 10 }} variant="contained" href={'/'}><ArrowBackIcon />Voltar</Button>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 450,
                  }}
                >
                  <h2>Cadastro de Agendamentos</h2>
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
                          <MenuItem value={'CONSULTA EM CONSULTORIO'}>10101012 - CONSULTA EM CONSULTORIO</MenuItem>
                          <MenuItem value={'AUTOTRANSPLANTE CONJUNTIVAL'}>30303010 - AUTOTRANSPLANTE CONJUNTIVAL</MenuItem>
                          <MenuItem value={'PTERIGIO - EXERESE'}>30303060 - PTERIGIO - EXERESE</MenuItem>
                          <MenuItem value={'TUMOR DE CONJUNTIVA - EXERESE'}>30303109 - TUMOR DE CONJUNTIVA - EXERESE</MenuItem>
                          <MenuItem value={'CORPO ESTRANHO DA CORNEA - RETIRADA'}>30304032 - CORPO ESTRANHO DA CORNEA - RETIRADA</MenuItem>
                          <MenuItem value={'CAPSULOTOMIA YAG OU CIRURGICA'}>30306019 - CAPSULOTOMIA YAG OU CIRURGICA</MenuItem>
                          <MenuItem value={'FACECTOMIA COM LENTE INTRA-OCULAR COM FACOEMULSIFICACAO'}>30306027 - FACECTOMIA COM LIO COM FACO</MenuItem>
                          <MenuItem value={'IMPLANTE SECUNDARIO / EXPLANTE / FIXACAO ESCLERAL OU IRIANA'}>30306060 - IMPLANTE SECUNDARIO</MenuItem>
                          <MenuItem value={'CIRURGIAS FISTULIZANTES ANTIGLAUCOMATOSAS'}>30310032 - CIRURGIAS FISTULIZANTES ANTIGLAUCOMATOSAS</MenuItem>
                          <MenuItem value={'IRIDECTOMIA (LASER OU CIRURGICA)'}>30310083 - IRIDECTOMIA (LASER OU CIRURGICA)</MenuItem>
                          <MenuItem value={'CAMPIMETRIA COMPUTADORIZADA - MONOCULAR'}>40103137 - CAMPIMETRIA COMPUTADORIZADA - MONOCULAR</MenuItem>
                          <MenuItem value={'CURVA TENSIONAL DIARIA - BINOCULAR'}>41301129 - CURVA TENSIONAL DIARIA - BINOCULAR</MenuItem>
                          <MenuItem value={'GONIOSCOPIA - BINOCULAR'}>41301242 - GONIOSCOPIA - BINOCULAR</MenuItem>
                          <MenuItem value={'MAPEAMENTO DE RETINA OFTALMOSCOPIA INDIRETA - MONOCULAR'}>41301250 - MAPEAMENTO DE RETINA - MONOCULAR</MenuItem>
                          <MenuItem value={'TONOMETRIA - BINOCULAR'}>41301323 - TONOMETRIA - BINOCULAR</MenuItem>
                          <MenuItem value={'TESTE PROVOCATIVO PARA GLAUCOMA - BINOCULAR'}>41401301 - TESTE PROVOCATIVO PARA GLAUCOMA - BINOCULAR</MenuItem>
                          <MenuItem value={'BIOMETRIA ULTRA-SONICA - MONOCULAR'}>41501012 - BIOMETRIA ULTRA-SONICA - MONOCULAR</MenuItem>
                          <MenuItem value={'PAQUIMETRIA ULTRA-SONICA - MONOCULAR'}>41501128 - PAQUIMETRIA ULTRA-SONICA - MONOCULAR</MenuItem>
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
                      <FormControl variant="standard">
                        <InputLabel id="labelTelefone">Telefone</InputLabel>
                        <Input
                          value={telefone}
                          onChange={e => setTelefone(e.target.value)}
                          name="telefone"
                          id="telefone"
                          inputComponent={TextMaskCustom}
                        />
                      </FormControl>
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

export default function AgendamentoCadastar() {
  return <DashboardContent />;
}