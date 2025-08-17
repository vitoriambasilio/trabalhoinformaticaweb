function somaTamanhosPalavras(frase) {
    return frase
        .split(' ')
        .reduce((soma, palavra) => soma + palavra.length, 0);
}

// Exemplo de uso:
const frase = "Calcule a soma dos tamanhos das palavras";
console.log(`A soma dos tamanhos das palavras é: ${somaTamanhosPalavras(frase)}`);
// Saída: A soma dos tamanhos das palavras é: 34