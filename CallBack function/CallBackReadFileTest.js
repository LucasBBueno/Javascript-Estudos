function readFileTest() {
    fs = require('fs');

    fs.readFile('./arquivo.txt', (erro, dados) => { //Callback function with Error-first-callback
        if (erro) {
            console.log('Erro ao ler arquivo: ' + erro);
            return;
        }
        console.log('' + dados);
    });
}

readFileTest();