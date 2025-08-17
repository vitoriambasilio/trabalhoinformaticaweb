function ultimosElementos(lista, n) {
    return lista.slice(-n);
}

// Exemplo de uso:
const numeros = [10, 58, 68, 88, 25, 45];
const n = 3;
console.log(ultimosElementos(numeros, n)); // Saída: [88, 25, 45]