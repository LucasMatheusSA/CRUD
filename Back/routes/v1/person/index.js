/*
# index.js {index de mapeamento para classe}
  - classe que mapeia os methodos CRUD person para respectivas rotas

  - http://localhost:8000/api/v1/person
*/

const routes = require('express').Router({ mergeParams: true });
const controller = require('../../../controllers/person/controller-person');

// GET http://localhost:8000/api/v1/person/
routes.get('/', controller.findAll);

// GET http://localhost:8000/api/v1/person/:id
routes.get('/:id', controller.findById);

// POST http://localhost:8000/api/v1/person/create
/*
    {
        "name":"pessoa",
        "surname": "pessoa",
        "phone": "999999999"
        "cpf": "99999999999"
    }
*/
routes.post('/create', controller.create);

// POST http://localhost:8000/api/v1/person/update
/*
    {
        "id":"10",
        "name":"pessoa",
        "surname": "pessoa",
        "phone": "999999999"
        "cpf": "99999999999"
    }
*/
routes.post('/update', controller.update);

// DELETE http://localhost:8000/api/v1/person/delete/:id
routes.delete('/delete/:id', controller.delete);

module.exports = routes;