let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
/**
 * Estudo de requisição AJAX utilizando da API https://covid19-brazil-api.now.sh/api/report/v1
 * 
 * Códigos requisição
 *          
 * 0: requisição ainda não iniciada
 * 1: conexão com o servidor estabelecida
 * 2: requisição recebida
 * 3: processando requisição
 * 4: requisição concluída e a resposta esta pronta
 * 
 * status 200: sucesso
 */
function testRequest(){
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://covid19-brazil-api.now.sh/api/report/v1');

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                console.log(xhr.responseText);
            }else{
                console.log('Error on ajax request');
                console.log(xhr.responseText);
            }
        }
    }
    xhr.send();
}

testRequest();