class NegociacaoController {

    constructor(){
            
        let $ = document.querySelector.bind(document); //manter associacao com document
        this._inputData = $('#data'); //manipulo o dom e tenho controle dos elementos apenas uma vez
        this._inputQuantidade = $('#quantidade') //id;
        this._inputValor = $('#valor');
        
        this._listaNegociacoes = new Bind(new ListaNegociacoes, new NegociacoesView($('#negociacoesView')), 'adiciona', 'esvazia');

        this._mensagem = new Bind(new Mensagem(),  new MensagemView($('#mensagemView')), 'texto');

    }

    adiciona(event){
        event.preventDefault(); //previnir submissao para capturar
        this._listaNegociacoes.adiciona(this._novaNegociao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._limparCamposEFocarCampoData();
    }

    _novaNegociao(){
        return new Negociacao(DateHelper.textoParaData(this._inputData.value), 
            this._inputQuantidade.value, 
            this._inputValor.value) ;       
    }

    apaga(){
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }

    _limparCamposEFocarCampoData(){
        this._inputData.value = "";
        this._inputQuantidade.value = 0;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}