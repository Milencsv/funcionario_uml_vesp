const {sequelizeDb, sequelizeConfig} = require('./database')

//CRIANDO TABELA
const departamento = sequelizeConfig.define(
    'departamento',//nome da tabela
    {
        nome:{type:sequelizeDb.STRING},
        descricao:{type:sequelizeDb.TEXT}
    }
)
/*
Não iremos criar os campos 'id_funcionario' e a chave estrangeira, pois o sequelize irá criar automaticamente, ou seja, tanto a chave primária quanto a chave estrangeira são criados pelo  sequelize, então não precisamos criar manualmente.
*/
departamento.sync()
module.exports = departamento