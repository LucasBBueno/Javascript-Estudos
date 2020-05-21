class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); //manter associacao com document
        this._inputData = $('#data'); //manipulo o dom e tenho controle dos elementos apenas uma vez
        this._inputQuantidade = $('#quantidade') //id;
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind(new ListaNegociacoes, new NegociacoesView($('#negociacoesView')), 'adiciona', 'esvazia');

        this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagemView')), 'texto');
    }

    adiciona(event) {
        event.preventDefault(); //previnir submissao para capturar
        this._listaNegociacoes.adiciona(this._novaNegociao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._limparCamposEFocarCampoData();
    }

    importaNegociacoes() {
        let service = new NegociacoesService();

        service.obterNegociacoesDaSemana((erro, negociacoes) => { //callback function, programacao assincrona de Error first
            if (erro) {
                this._mensagem.texto = erro;
                return;
            }
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso';
        });
    }

    importaNegociacoesSemanaAnterior() {
        let service = new NegociacoesService();

        service.obterNegociacoesSemanaAnterior((erro, negociacoes) => {
            if (erro) {
                this._mensagem.texto = erro;
                return;
            }

            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações da semana anterior importadas com sucesso';
        })
    }

    importaNegociacoesSemanaRetrasada() {
        let service = new NegociacoesService();

        service.obterNegociacoesSemanaRetrasada((erro, negociacoes) => { //callback, sera executada após a função obterNegociacoes
            if (erro) {
                this._mensagem.texto = 'Não foi possível obter as negociações da semana retrasada';
                return;
            }
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações da semana retrasada importadas com sucesso';
        });
    }

    _novaNegociao() {
        return new Negociacao(DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }

    _limparCamposEFocarCampoData() {
        this._inputData.value = "";
        this._inputQuantidade.value = 0;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}