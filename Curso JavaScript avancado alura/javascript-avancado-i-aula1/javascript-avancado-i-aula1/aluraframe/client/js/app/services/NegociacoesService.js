class NegociacoesService {

    obterNegociacoesDaSemana(cb) { //callBack function
        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/negociacoes/semana');

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    cb(null, JSON.parse(xhr.responseText) //callBack
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))) //gera um novo array de negociacao
                } else {
                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações', null);
                }
            }
        }

        xhr.send();
    }

    obterNegociacoesSemanaAnterior(cb) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/negociacoes/anterior');

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    cb(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                } else {
                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações', null);
                }
            }
        }
        xhr.send();
    }

    obterNegociacoesSemanaRetrasada(cb) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/negociacoes/retrasada');

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    cb(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                } else {
                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações da semana retrasada', null);
                }
            }
        }
        xhr.send();
    }
}