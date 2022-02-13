import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './services/wAuth';

import Agendamentos from './pages/agendamentos';
import AgendamentoEditar from './pages/agendamentos/agendamentos.editar';
import AgendamentoCadastrar from './pages/agendamentos/agendamentos.cadastrar';

import Usuarios from './pages/usuarios';
import UsuarioEditar from './pages/usuarios/usuarios.editar';
import UsuarioCadastrar from './pages/usuarios/usuarios.cadastrar';

import Login from './pages/login';

export default function RoutesAll() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login} />

                <PrivateRoute path="/" exact component={Agendamentos} />
                <PrivateRoute path="/agendamentos/cadastrar" exact component={AgendamentoCadastrar} />
                <PrivateRoute path="/agendamentos/editar/:idAgendamento" exact component={AgendamentoEditar} />

                <PrivateRoute path="/usuarios" exact component={Usuarios} />
                <PrivateRoute path="/usuarios/cadastrar" exact component={UsuarioCadastrar} />
                <PrivateRoute path="/usuarios/editar/:idUsuario" exact component={UsuarioEditar} />
            </Switch>
        </BrowserRouter>
    )
}