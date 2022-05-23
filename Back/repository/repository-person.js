/*
# repository-person.js
  - classe de metodos de acesso ao banco para CRUD da classe person
*/

const sql = require('mssql');
const logger = require('../log/logger');
const StatmentsPerson = require('../statements/person/statements');
const config = require('../app-config');

var DBConfig = config.config_SQLServer;

// definicao dos metodos CRUD DB (create = Create; request = FindAll, FindById; update = Update; delete = Delete)
module.exports = {

    FindAll : async function () {
        
        try {

            let pool = await sql.connect(DBConfig);
            let result = await pool.request().query(StatmentsPerson.FindAll);

            logger.info("(Repository) findAll persons.");

            return result.recordset;
            
        } catch (err) {
            
            logger.error(err);

        }

    },

    FindById : async function (id) {
        
        try {

            let pool = await sql.connect(DBConfig);
            let result = await pool.request()
                                   .input('id', sql.Int, id)                     
                                   .query(StatmentsPerson.FindById);
                                 
            logger.info("(Repository) findById person.");

            return result.recordset[0];
            
        } catch (err) {
            
            logger.error(err);

        }

    },

    Create : async function (input) {
        
        try {
            
            let pool = await sql.connect(DBConfig);
            
            let result = await pool.request()  
                                   .input('name', sql.NVarChar, input.name)   
                                   .input('surname', sql.NVarChar, input.surname)   
                                   .input('phone', sql.NVarChar, input.phone)   
                                   .input('cpf', sql.NVarChar, input.cpf)   
                                   .query(StatmentsPerson.Create);
                                    
            logger.info("(Repository) create person.");
            
            return result.recordset;
            
        } catch (err) {
            
            logger.error(err);
            
        }
        
    },
    
    Update : async function (input) {
        
        try {

            let pool = await sql.connect(DBConfig);
            
            let result = await pool.request()
                                   .input('id', sql.Int, input.id)   
                                   .input('name', sql.NVarChar, input.name)   
                                   .input('surname', sql.NVarChar, input.surname)   
                                   .input('phone', sql.NVarChar, input.phone)   
                                   .input('cpf', sql.NVarChar, input.cpf)   
                                   .query(StatmentsPerson.Update);
                                  
            logger.info("(Repository) update person.");

            return result.recordset;
            
        } catch (err) {
            
            logger.error(err);

        }

    },

    Delete : async function (id) {
        
        try {

            user = await this.FindById(id);

            let pool = await sql.connect(DBConfig);
            let result = await pool.request()
                                   .input('id', sql.Int, id)   
                                   .query(StatmentsPerson.Delete);

            await repoToken.Delete(user.idToken);
                        
            logger.info("(Repository) delete person.");

            return result.recordset;
            
        } catch (err) {
            
            logger.error(err);

        }

    }
    
};