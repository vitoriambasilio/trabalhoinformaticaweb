function somaCubos(lista) {
    return lista
        .map(num => Math.pow(num, 3))
        .reduce((soma, cubo) => soma + cubo, 0);
}

// Exemplo de uso:
const numeros = [2, 3, 4];
console.log(somaCubos(numeros)); // Saída: 99 (2³ + 3³ + 4³ = 8 + 27 + 64 = 99)