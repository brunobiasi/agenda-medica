const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/UserController');
const Agendamento = require('./controllers/SchedulingController');

routes.get('/', Usuario.index);

// Rotas de Usuários
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details/:id', Usuario.details);
routes.delete('/api/usuarios/:id', Usuario.delete);
routes.put('/api/usuarios', Usuario.update);
routes.post('/api/usuarios/login', Usuario.login);
routes.get('/api/usuarios/checktoken', Usuario.checkToken);
routes.get('/api/usuarios/destroytoken', Usuario.destroyToken);

// Rotas de Agendamentos
routes.post('/api/agendamentos', Agendamento.create);
routes.get('/api/agendamentos', Agendamento.index);
routes.get('/api/agendamentos.details/:id', Agendamento.details);
routes.delete('/api/agendamentos/:id', Agendamento.delete);
routes.put('/api/agendamentos', Agendamento.update);

module.exports = routes;