module.exports = (repository) => {

    const repo = require(repository);

    var module = {};

    module.findAll = async (req, res) => {

        result = await repo.FindAll();
        
        res.status(200).json({ data: result });
        
    };
    
    module.findById = async (req, res) => {

        result = await repo.FindByIdPonto(req.params.id);
        
        res.status(200).json({ data: result });
        
    };

    module.create = async (req, res) => {

        obj = req.body;

        result = await repo.Create(obj);

        res.status(200).json(result);

    };

    module.update = async (req, res) => {

        obj = req.body;

        result = await repo.Update(obj);
        
        res.status(200).json({});
        
    };
    
    module.delete = async (req, res) => {
        
        result = await repo.Delete(req.params.id);

        res.status(200).json({});
        
    };

    return module;
};