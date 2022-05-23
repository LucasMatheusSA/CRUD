/*
# script-setup-db
  - script para setup do banco de dados para a api
*/

-- criar database `DBNode`
if not exists (select * from sys.databases where name = 'DBNode')
    create database [DBNode]

GO

use [DBNode]

-- criar tabela `person`
if not exists (select * from sysobjects where name='Person' and xtype='U')
    create table [Person] (id int not null IDENTITY(1,1), name varchar(64) not null, surname varchar(64) not null, phone varchar(9) not null, cpf varchar(11) not null, primary key (id))

GO

-- inserir massa de testes
insert into [DBNode].[dbo].[Person] (name, surname, phone, cpf) VALUES ('Joao', 'Pedro', '999999999', '25915370039');
insert into [DBNode].[dbo].[Person] (name, surname, phone, cpf) VALUES ('Diego', 'Santos', '999999998', '26457126065');
insert into [DBNode].[dbo].[Person] (name, surname, phone, cpf) VALUES ('Tiago', 'Lima', '999999997', '11950690067');
insert into [DBNode].[dbo].[Person] (name, surname, phone, cpf) VALUES ('Amanda', 'Carvalho', '999999996', '11832355004');
insert into [DBNode].[dbo].[Person] (name, surname, phone, cpf) VALUES ('Duda', 'Cavalcante', '999999995', '34328312006');
insert into [DBNode].[dbo].[Person] (name, surname, phone, cpf) VALUES ('Ana', 'Ribeiro', '999999994', '45617737031');
insert into [DBNode].[dbo].[Person] (name, surname, phone, cpf) VALUES ('Giovana', 'Martins', '999999993', '97958670087');
insert into [DBNode].[dbo].[Person] (name, surname, phone, cpf) VALUES ('Joao', 'Alves', '999999992', '56375376076');
insert into [DBNode].[dbo].[Person] (name, surname, phone, cpf) VALUES ('Matheus', 'Santana', '999999991', '56375376076');
insert into [DBNode].[dbo].[Person] (name, surname, phone, cpf) VALUES ('Lucas', 'Alves', '999999990', '66035157092');
insert into [DBNode].[dbo].[Person] (name, surname, phone, cpf) VALUES ('Tiago', 'Henrique', '999999980', '67604298001');
insert into [DBNode].[dbo].[Person] (name, surname, phone, cpf) VALUES ('Ana', 'Clara', '999999970', '85250099033');
