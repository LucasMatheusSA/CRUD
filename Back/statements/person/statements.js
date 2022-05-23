/*
# statements.js {statements para objeto person}
  - definicoes de scripts para CRUD person
*/

const config = require('../../app-config');

var DBConfig = config.config_SQLServer;

var Person = {};

Person.FindAll = 'SELECT * FROM [' + DBConfig.database + '].[dbo].[Person]';
Person.FindById = 'SELECT * FROM [' + DBConfig.database + '].[dbo].[Person] WHERE id = @id';
Person.Create = 'INSERT INTO [' + DBConfig.database + '].[dbo].[Person] (name, surname, phone, cpf) VALUES (@name, @surname, @phone, @cpf);';
Person.Update = 'UPDATE [' + DBConfig.database + '].[dbo].[Person] SET name = @name, surname = @surname, phone = @phone, cpf = @cpf WHERE id = @id';
Person.Delete = 'DELETE FROM [' + DBConfig.database + '].[dbo].[Person] WHERE id = @id;';

module.exports = Person;


