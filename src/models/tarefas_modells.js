let id = 0 
export class Tarefa{
    constructor(titulo, descricao, status, data){
        this.id = id++;
        this.titulo = this.validarTitulo(titulo);
        this.descricao = descricao;
        this.status = status;
        this.data = data;
    }

    validarTitulo(titulo){
        if(typeof titulo === 'string'){
            return titulo
        }else{
            throw new Error('Seu titulo precisar conter caracteres')
        }
    }
}