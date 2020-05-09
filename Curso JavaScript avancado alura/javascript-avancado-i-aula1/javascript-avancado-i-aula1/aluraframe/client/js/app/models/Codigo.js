class Codigo{

    constructor(texto){
        if(!this._validaCodigo(texto)) throw new Error(`O text ${texto} não é um código válido`);
        this._texto = texto;
    }

    _validaCodigo(texto){
       return /\D{3}-\D{2}-\d{2}/.test(texto)
    }

    get texto(){
        return this._texto;
    }
}