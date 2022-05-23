/*
# controller-person.js 
  - classe de controle dos metodos CRUD da classe person

  - res.status(200).json({ error: 0, payload: { id: image.id, url: image.url } });
*/

const repo = require('../../repository/repository-person');

// definicao de metodos CRUD controller
module.exports = {

    findAll : async (req, res) => {

        result = await repo.FindAll();
        
        res.status(200).json({ data: result });
        
    },
    
    findById : async (req, res) => {

        result = await repo.FindById(req.params.id);
        
        res.status(200).json({ data: result });
        
    },

    create : async (req, res) => {

        user = req.body;

        result = await repo.Create(user);

        res.status(200);

    },

    update : async (req, res) => {

        user = req.body;

        result = await repo.Update(user);
        
        res.status(200);
        
    },
    
    delete : async (req, res) => {
        
        result = await repo.Delete(req.params.id);

        res.status(200);
        
    }

} 