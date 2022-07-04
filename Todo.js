import express from 'express'
import cors from 'cors';
import sqlite3 from "sqlite3";

const app = express();
const db = new sqlite3.Database('./src/infra/database.db');

app.use(express.json());
app.use(cors());

import {usuario} from './src/controller/usuario_controller.js';
import {tarefa} from './src/controller/tarefa_controller.js';

//-------------------------------------------------------------//

usuario(app,db); 
tarefa(app);

app.listen(3333, ()=> {
    console.log('Rodando na porta 3333');
})

