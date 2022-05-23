var config = {};

// configs server
config.config_web = {};
config.config_web.port = 8000;

// connesction SQL Server
config.config_SQLServer = {};
config.config_SQLServer.user = 'admin';
config.config_SQLServer.password = 'admin@123';
config.config_SQLServer.server = "localhost";
config.config_SQLServer.database = 'DBNode';
config.config_SQLServer.port = 1433;
config.config_SQLServer.options = {};
config.config_SQLServer.options.trustServerCertificate = true;
// config.config_SQLServer.options.encrypt = true;
// config.config_SQLServer.options.enableArithAbort = true;
// config.config_SQLServer.options.trustedconnection = true;
// config.config_SQLServer.options.instancename = 'SQLEXPRESS';

module.exports = config;


