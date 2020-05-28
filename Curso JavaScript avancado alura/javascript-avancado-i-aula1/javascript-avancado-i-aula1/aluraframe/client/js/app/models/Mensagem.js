class Mensagem {

    constructor(texto){
        
        this._texto = texto || ''; //se texto for undefined pega ''
    }

    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
}