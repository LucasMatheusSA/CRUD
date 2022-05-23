/*
# index.js {index de rotas}
  - classe que indexa rotas
*/

const router = require('express').Router();

const person = require('./person'); 

// cadastrando rotas de CRUD person 
router.use('/person', person);

module.exports = router;