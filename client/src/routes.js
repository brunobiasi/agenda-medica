import {BrowserRouter, Routes, Route} from 'react-router-dom';

// IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';

import Produtos from './pages/admin/produtos';
import ProdutoEditar from './pages/admin/produtos/produtos.editar';
import ProdutoCadastrar from './pages/admin/produtos/produtos.cadastrar';

import Usuarios from './pages/admin/usuarios';
import UsuarioEditar from './pages/admin/usuarios/usuarios.editar';
import UsuarioCadastrar from './pages/admin/usuarios/usuarios.cadastrar';

// IMPORTS CLIENT
import Home from './pages/client/home';
import ProdutoDetails from './pages/client/produtos/produtos.details';

export default function RoutesAll(){
    return(
        <BrowserRouter>
            <Routes>
                {/* Rota Cliente */}
                <Route path="/" exact element={<Home/>}/>
                <Route path="/produtos/:idProduto" exact element={<ProdutoDetails/>}/>

                {/* Rota Admin */}
                <Route path="/admin" exact element={<Dashboard/>}/>

                <Route path="/admin/produtos" exact element={<Produtos/>}/>
                <Route path="/admin/produtos/cadastrar" exact element={<ProdutoCadastrar/>}/>
                <Route path="/admin/produtos/editar/:idProduto" exact element={<ProdutoEditar/>}/>

                <Route path="/admin/usuarios" exact element={<Usuarios/>}/>
                <Route path="/admin/usuarios/cadastrar" exact element={<UsuarioCadastrar/>}/>
                <Route path="/admin/usuarios/editar/:idProduto" exact element={<UsuarioEditar/>}/>
            </Routes>
        </BrowserRouter>
    )
}