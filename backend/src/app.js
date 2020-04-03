const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const app = express();

app.use(cors());
app.use(express.json()); // Converte os JSON da requisição em objetos javascript
app.use(routes);
app.use(errors());

module.exports = app;

/*
O Nodemon serve pro servidor atualizar a cada atualização.
Nodemon foi instalado como uma DevDependencie por meio do -D, uma DevDependencie é um pacote que só serve para o desenvolvimento, quando for pra produção será ignorado.

Metodos HTTTP:
    GET: buscar informação do back-end
    POST: criar uma informaçã no back-end
    PUT: alterar uma informação no backend
    DELETE: deletar uma informação no back-end

Tipos de parâmetros:
    Query: Parãmetros nomeados enviados na rota após '?' (Filtros, paginação) URL Exemplo: exemplo.com/user/?page=2
    Route: Parâmetros utilizados para identificar recursos URL Exemplo: exemplo.com/user/1
    Request body: Corpo da requisição, utilizado para criar ou alterar recursos (utiliza POST) URL Exemplo: exemplo.com/user

Será utilizado o Knex para o query builder
Driver: SELECT * FROM users
Query Builder: table('users').select('*').where()
*/
