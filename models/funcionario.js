const {sequelizeDb, sequelizeConfig} = require ('./database')//estamos utilizando o recurso de desestruturação de objetos para importar apenas os módulos necessários
const departamento = require('./departamento')// importando a tabela departamento

//CRIANDO A TABELA
const funcionario = sequelizeConfig.define(
    'funcionario',//nome da tabela
    {
        nome:{type:sequelizeDb.STRING},
        salario:{type:sequelizeDb.FLOAT},
        cargo:{type:sequelizeDb.STRING}
    }
)
/*
Não iremos criar os campos 'id_funcionario' e a chave estrangeira, pois o sequelize irá criar automaticamente, ou seja, tanto a chave primária quanto a chave estrangeira são criados pelo  sequelize, então não precisamos criar manualmente.
*/

// CONFIGURAR A CHAVE ESTRANGEIRA
departamento.hasMany(funcionario,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
funcionario.belongsTo(departamento)//Estou dizendo que o funcionario pertence a um departamento

funcionario.sync()
module.exports = funcionario