const express = require('express');

const routes = express.Router();

const User = require('./controllers/UserController');
const Scheduling = require('./controllers/SchedulingController');

routes.get('/', User.index);

// Rotas de Usuários
routes.post('/api/usuarios', User.create);
routes.get('/api/usuarios', User.index);
routes.get('/api/usuarios.details/:id', User.details);
routes.delete('/api/usuarios/:id', User.delete);
routes.put('/api/usuarios', User.update);
routes.post('/api/usuarios/login', User.login);
routes.get('/api/usuarios/checktoken', User.checkToken);
routes.get('/api/usuarios/destroytoken', User.destroyToken);

// Rotas de Agendamentos
routes.post('/api/agendamentos', Scheduling.create);
routes.post('/api/agendamentos/all', Scheduling.index);
routes.get('/api/agendamentos.details/:id', Scheduling.details);
routes.delete('/api/agendamentos/:id', Scheduling.delete);
routes.put('/api/agendamentos', Scheduling.update);

module.exports = routes;