//CARREGAR OS MÓDULOS
const express = require('express')
const handlebars = require("express-handlebars")

const app = express()
const porta = 5600

//EXIBINDO INFORMAÇÕES NA TELA
app.get('/', (req, res) => {
    res.send("<h1>Tudo Funcionando </h1>")
})




//EXCUTANDO O SERVIDOR
app.listen(porta, () => {
    console.log("Servidor executando na porta", porta)
})