/*
# index.js {index de main}
  - classe que indexa principais rotas 
*/

const version = require('./v1');
const routes = require('express').Router();

// cadastro de rotas por versao 
routes.use('/v1', version);

// rota para verificar se o back esta ligado
routes.get('/', (req, res) => {
    res.status(200).json(   { message: "It's Aliveeee !" });
});

module.exports = routes;
