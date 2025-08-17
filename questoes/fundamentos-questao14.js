function palavraPresente(frase, palavra) {
    return frase.includes(palavra);
}

// Exemplo de uso:
const frase = "A inteligência artificial está mudando o mundo.";
const palavra = "artificial";

if (palavraPresente(frase, palavra)) {
    console.log(`A palavra "${palavra}" está presente na frase.`);
} else {
    console.log(`A palavra "${palavra}" NÃO está presente na frase.`); 
}