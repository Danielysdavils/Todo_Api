export class UsuarioDao{
    
    constructor(db){
        this.db = db;
    }

    listarAluno(){
        return new Promise((res,req) => {
            this.db.all(`select * from usuarios`, (err, resultado)=>{
                if(err){
                    req("[ERROR] Error ao selecionar o banco")
                }else{
                    res({"table" : resultado})
                } 
            })
        })
    }
    
    insereUsuario(usuario){
        return new Promise((res,req) => {
            this.db.run(
                "INSERT INTO USUARIOS VALUES (?)", usuario, (err,resultado) => 
                {
                    if(err){
                        req('[error] error ao seleccionar o banco')
                    }else{
                        res({"usuario adicionado": resultado})
                    }  
                }
            )
        })
    }
}