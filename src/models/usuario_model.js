let id = 0;

export class Usuario{
    constructor(nome, email, senha){
        this.id = id++;
        this.nome = nome;
        this.email = email;
        this.senha = this.validarSenha(senha);
    }

    validarSenha(senha){
        if(senha.length > 5){
            return senha
        }else{
            throw new Error('Senha precisa ter mais de 5 caracteres')
        }
    }
}

