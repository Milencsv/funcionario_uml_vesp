const express = require('express')
const router = express.Router()

const funcionario = require('../models/funcionario')
const departamento = require('../models/departamento')

//CRIANDO AS ROTAS
//1ª ROTA - INSERIR DADOS NATABELA
router.get('/store', async(req,res)=>{
    const resultado = await funcionario.create({
        nome: 'Danyel Balbi',
        salario: 5000,
        cargo: 'Dançarina de luxo',
        departamentoId: 1 //Esse campo é a chave estrangeira
    })
})

//2ª ROTA - EXIBIR A PÁGINA INICIAL DO FUNCIONÁRIO
router.get('/', async(req,res)=>{
    res.send("<h1>Página inicial do funcionário</h1>")
})

//3ª ROTA - CONSULTAR DADOS DA TABELA
router.get('/show',async(req,res)=>{
    const resultado = await funcionario.findAll()

    if (resultado){
        console.log(resultado)
    }

    else{
        console.log('Não foi possível exibir dados')
    }
})

module.exports = router