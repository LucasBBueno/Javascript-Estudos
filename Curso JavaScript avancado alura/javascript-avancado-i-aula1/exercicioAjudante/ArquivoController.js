class ArquivoController{
    
    constructor(){
        this._inputdados = document.querySelector(".dados-arquivo");
    }

    envia(){
        let arquivo = ArquivoHelper.cria(this._inputdados.value);
        console.log(arquivo);
        this._limpaFormulario();
    }

    _limpaFormulario(){
        this._inputdados.value = "";
        this._inputdados.focus();
    }
}