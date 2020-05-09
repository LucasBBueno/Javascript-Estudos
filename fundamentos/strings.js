const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Nao retorna nada, nem erro
console.log(escola.charCodeAt(3)) // Retorna o valor ASC correspondente 
console.log(escola.indexOf('3')) // Com o indice retorna o valor

console.log(escola.substring(1)) // Pega a partir do indice passado
console.log(escola.substring(0, 3)) // Pega a partir do indice e o segundo nao imprime o indice

console.log('Escola'.concat(escola).concat("!")) // Concatenação
console.log('Escola' + escola + "!") //Concatenacao
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e')) //Rejex

console.log('Ana, Maria, Pedro'.split(',')) // Separar e gera um array