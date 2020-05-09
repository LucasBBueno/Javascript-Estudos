var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

//submit
var tbody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', function(event){ //callback function apos clicar no formulario

    event.preventDefault(); //impedir que submeta o formulario recarregando a pagina

    var tr = document.createElement('tr');

    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value; //quantidade * valor
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();

});