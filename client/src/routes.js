import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './services/wAuth';

// IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';

import Agendamentos from './pages/admin/agendamentos';
import AgendamentoEditar from './pages/admin/agendamentos/agendamentos.editar';
import AgendamentoCadastrar from './pages/admin/agendamentos/agendamentos.cadastrar';

import Usuarios from './pages/admin/usuarios';
import UsuarioEditar from './pages/admin/usuarios/usuarios.editar';
import UsuarioCadastrar from './pages/admin/usuarios/usuarios.cadastrar';

import Login from './pages/admin/login';

// IMPORTS CLIENT
import Home from './pages/client/home';
import ProdutoDetails from './pages/client/produtos/produtos.details';

export default function RoutesAll() {
    return (
        <BrowserRouter>
            <Switch>
                {/* Rota Cliente */}
                <Route path="/" exact component={Home} />
                <Route path="/produtos/:idProduto" exact component={ProdutoDetails} />

                {/* Rota Admin */}
                <Route path="/admin/login" exact component={Login} />
                <PrivateRoute path="/admin" exact component={Dashboard} />

                <PrivateRoute path="/admin/agendamentos" exact component={Agendamentos} />
                <PrivateRoute path="/admin/agendamentos/cadastrar" exact component={AgendamentoCadastrar} />
                <PrivateRoute path="/admin/agendamentos/editar/:idAgendamento" exact component={AgendamentoEditar} />

                <PrivateRoute path="/admin/usuarios" exact component={Usuarios} />
                <PrivateRoute path="/admin/usuarios/cadastrar" exact component={UsuarioCadastrar} />
                <PrivateRoute path="/admin/usuarios/editar/:idUsuario" exact component={UsuarioEditar} />
            </Switch>
        </BrowserRouter>
    )
}