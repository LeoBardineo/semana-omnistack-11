const express = require('express');

const OngController = require('./controllers/OngController');
const IncidenteController = require('./controllers/IncidenteController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidenteController.index);
routes.post('/incidents', IncidenteController.create);
routes.delete('/incidents/:id', IncidenteController.delete);

module.exports = routes;