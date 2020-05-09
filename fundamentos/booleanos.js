let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // Utiliza da negacao NOT NOT, pois o 1 passado é um number

console.log('os verdadeiros...') // Nao sendo originais TRUE e FALSE, mas no contexto empregado se comportam como tal
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // String com algo dentro
console.log(!![]) // Array vazio
console.log(!!{}) // Objeto Literal
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // Pega o true e nao se atribuicao deu certo

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // String vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // Pelo menos um verdadeiro

let nome = 'Lucas'

console.log(nome || 'Desconhecido') // Se nao tiver o nome vai pegar o primeiro retorno de verdadeiro no caso a string com conteudo