export const usuario = (app) => {
    app.get('/usuario', (req, res) => {
        res.send('Bem-vindo usuário!')
    })
    
    app.post('/usuario', (req, res) => {
        res.send('rota com post')
    })
}
