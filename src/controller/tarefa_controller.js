export const tarefa = (app) => {
    app.get('/tarefa', (req, res) => {
        res.send('Aqui suas tarefas!')
    })
    
    app.post('/tarefa', (req, res) => {
        res.send('tarefas com post')
    })
}

