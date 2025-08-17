function maiorPalavra(frase) {
    const palavras = frase.split(/\s+/);
    let maior = "";


    for (let palavra of palavras) {
        if (palavra.length > maior.length) {
            maior = palavra;
        }
    }


    return maior;
}


// Exemplo de uso:
const frase = "O desenvolvimento de software é fascinante";
console.log(maiorPalavra(frase)); // Saída: desenvolvimento
