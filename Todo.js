import express from 'express'
const app = express();

import {usuario} from './src/controller/usuario_controller.js'
import {tarefa} from './src/controller/tarefa_controller.js'

usuario(app); 
tarefa(app);

app.listen(3333, ()=> {
    console.log('Rodando na porta 3333');
})