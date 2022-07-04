import {Usuario} from '../models/usuario_model.js'
import {UsuarioDao} from '../DAO/usuario_dao.js'

export const usuario = (app, db) => {
const userDao = new UsuarioDao(db)
    app.get('/usuario', (req, res) => {
        userDao.listarAluno()
        .then((resultado) => {res.json({"table" : resultado})})
        .catch((error) => {res.send(error)})
    })

    app.get('/usuario', async (req, res) => {
        try {
            const usuario = await UsuarioDao.listarAluno()
            res.status(200).json(usuario)            
        }catch (e){
            res.status(404).json(e)
        }
    })

    //------------------------------------------

    app.put('/usuario/:nome', (req, res) => {
        const nome = req.params.nome;
        const body = req.body;
        const i = bd.usuario.findIndex(u => u.nome === nome)
        if(i > -1){
            const dadoA = bd.usuario[i]
            const dadoN = new Usuario(
                body.nome  || dadoA.nome,
                body.email || dadoA.email,
                body.senha || dadoA.senha
            )
            const uA = bd.usuario.splice(i,1, dadoN) // Não obrigatorio
            res.json({"nomeAlterado": uA})
        }else{
            res.json("nome não encontrado no banco")
        }
    })

    //------------------------------------------

    app.post('/usuario', (req, res) => {
        const usuario1 = new Usuario(req.body.id,req.body.nome,req.body.senha, req.body.email) 
        userDao.insereUsuario(usuario1)
        .then((resultado) => {res.json({"usuario" : resultado})})
        .catch((error) => {res.send(error)})
    })

    //------------------------------------------

    app.delete('/usuario/:nome', (req, res) => {
        const nome = req.params.nome;
        const i = bd.usuario.findIndex(u => u.nome === nome)
        if(i > -1){
            const uD = bd.usuario.splice(i, 1)
            res.json({"nomeDeletado": uD})
        }else{
            res.json("nome não encontrado no banco")
        }
    })
}
