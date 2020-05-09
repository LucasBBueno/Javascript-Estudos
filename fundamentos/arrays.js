const valores = [7.7, 8.9, 6.3, 9.2] // Forma Literal
console.log(valores[0], valores[3]) 
console.log(valores[4]) // Vai imprimir undefined

valores[4] = 10
console.log(valores)
valores[10] = 15
console.log(valores) 
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // Retirar e retornar o ultimo valor do array
delete valores[0]
console.log(valores)

console.log(typeof valores) // Array em JS é do tipo object