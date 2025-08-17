function ordenarLista(lista) {
    return lista.slice().sort((a, b) => a - b);
}

// Exemplo de uso:
const numeros = [10, 3, 25, 7, 1, 18];
console.log(ordenarLista(numeros)); // Saída: [1, 3, 7, 10, 18, 25]