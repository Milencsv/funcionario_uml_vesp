const express = require('express')
const router = express.Router()

const funcionario = require('../models/funcionario')
const departamento = require('../models/departamento')

//CRIANDO AS ROTAS
//1ª ROTA - INSERIR DADOS NATABELA
router.post('/store', async(req,res)=>{
    const resultado = await funcionario.create({
        nome: req.body.nome,
        salario: req.bodysalario,
        cargo: req.body.cargo,
        departamentoId: req.body.departamento //Esse campo é a chave estrangeira
    })

    if(resultado){
        res.redirect('/')
    }

    else{
        res.json({erro:"Os dados não foram cadastrados no banco"})
    }
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

//4ª ROTA - DELETAR DADOS DA TABELA
// id significa que iremos pasar o valor na rota, ou seja, iremos informar o valor que poderá ser diferente e que será armazenada pela variável :id
router.get('destroy/:id', async(req,res)=>{
    const resultado = await  funcionario.destroy({
        where:{
            id:req.params.id // estamos recebendo o id via parametor que está sendo passadon rota, no caso, é o :id que estamos recebendo
        }
    })
})

//5ª ROTA - EXIBIR  FORMULÁRIO DE CADASTRO
router.get('/creat', (req,res)=>{
    res.render('funcionario/addFuncionario')
})
module.exports = router