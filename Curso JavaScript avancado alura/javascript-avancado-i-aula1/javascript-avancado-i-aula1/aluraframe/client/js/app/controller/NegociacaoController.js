class NegociacaoController {
  constructor() {
    this._ordemAtual = "";

    let $ = document.querySelector.bind(document); //manter associacao com document
    this._inputData = $("#data"); //manipulo o dom e tenho controle dos elementos apenas uma vez
    this._inputQuantidade = $("#quantidade"); //id;
    this._inputValor = $("#valor");

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($("#negociacoesView")),
      "adiciona",
      "esvazia",
      "ordena",
      "inverteOrdem"
    );

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($("#mensagemView")),
      "texto"
    );
  }

  adiciona(event) {
    event.preventDefault(); //previnir submissao para capturar
    try {
      this._listaNegociacoes.adiciona(this._novaNegociao());
      this._mensagem.texto = "Negociação adicionada com sucesso";
      this._limparCamposEFocarCampoData();
    } catch (erro) {
      this._mensagem.texto = erro;
    }
  }

  importaNegociacoes() {
    /* antes com callback
        service.obterNegociacoesDaSemana((erro, negociacoes) => { //callback function, programacao assincrona de Error first
            if (erro) {
                this._mensagem.texto = erro;
                return;
            }
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));

            service.obterNegociacoesSemanaAnterior((erro, negociacoes) => {
                if (erro) {
                    this._mensagem.texto = erro;
                    return;
                }

                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));

                service.obterNegociacoesSemanaRetrasada((erro, negociacoes) => { //callback, sera executada após a função obterNegociacoes
                    if (erro) {
                        this._mensagem.texto = 'Não foi possível obter as negociações da semana retrasada';
                        return;
                    }
                    negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    this._mensagem.texto = 'Negociações da semana retrasada importadas com sucesso';
                });
            });
        }); 
        */
    //Promises
    /*
        service.obterNegociacoesDaSemana() //Faz uma promessa, e então
            .then(negociacoes => { //tem o retorno da promise
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações da semana obtidas com sucesso';
            })
            .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesSemanaAnterior()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações da semana anterior importada com sucesso';
            })
            .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesSemanaRetrasada()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações da semana retrasada importada com sucesso';
            })
            .catch(erro => this._mensagem.texto = erro);
        */
    let service = new NegociacoesService();
    service
      .obterNegociacoes()
      .then((negociacoes) => {
        negociacoes.forEach((negociacao) => {
          this._listaNegociacoes.adiciona(negociacao);
          this._mensagem.texto = "Negociaçoes obtidas com sucesso";
        });
      })
      .catch((erro) => {
        this._mensagem.texto = erro;
      });
  }

  _novaNegociao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  apaga() {
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = "Negociações apagadas com sucesso";
    this._mensagemView.update(this._mensagem);
  }

  _limparCamposEFocarCampoData() {
    this._inputData.value = "";
    this._inputQuantidade.value = 0;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }

  ordena(coluna) {
    if (this._ordemAtual == coluna) {
      //Se X igual a X iverte a ordem
      this._listaNegociacoes.inverteOrdem();
    } else {
      this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
    }
    this._ordemAtual = coluna;
  }
}
