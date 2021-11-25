const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller');
const Agendamento = require('./controllers/agendamentos.controller');

routes.get('/', Usuario.index);

// Rotas de Usuários
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details/:_id', Usuario.details);
routes.delete('/api/usuarios/:_id', Usuario.delete);
routes.put('/api/usuarios', Usuario.update);
routes.post('/api/usuarios/login', Usuario.login);

// Rotas de Agendamentos
routes.post('/api/agendamentos', Agendamento.create);
routes.get('/api/agendamentos', Agendamento.index);
routes.get('/api/agendamentos.details/:_id', Agendamento.details);
routes.delete('/api/agendamentos/:_id', Agendamento.delete);
routes.put('/api/agendamentos', Agendamento.update);

module.exports = routes;