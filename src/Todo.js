const express = require('express');
const app = express();

app.get('/usuario', (req, res) => {
    res.send('Bem-vindo usuário!')
})

app.get('/tarefa' , (req, res) => {
    res.send('Aquí estão suas tarefas!')
})

app.listen(3333, ()=> {
    console.log('Rodando na porta 3333');
})