//CARREGAR OS MÓDULOS
const express = require('express')
const handlebars = require("express-handlebars")

const app = express()
const porta = 5600

//CONFIGURANDO O EXPRESS PARA RECEBER DADOS DO FORMULÁRIO
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//CONFIGURANDO HANDLEBARS
app.engine("handlebars", handlebars.engine({extended:true}))
app.set('view engine', 'handlebars')// definindo o hadlebars como mecanismo de vizulaização padrão.

//CARREGAR AS ROTAS
const funcionarioRouter = require('./routes/funconario')

//UTLIZANDO AS ROTAS
app.use('/funcionario', funcionarioRouter)

//EXIBINDO INFORMAÇÕES NA TELA
app.get('/', (req, res) => {
    //res.send("<h1>Tudo Funcionando </h1>")
    res.render('home')

})

//EXCUTANDO O SERVIDOR
app.listen(porta, ()=>{
    console.log("Servidor executando na porta", porta)
})