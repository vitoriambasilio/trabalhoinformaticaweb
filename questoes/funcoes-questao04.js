function palavraNaFrase(frase, palavra) {
    return frase.includes(palavra);
}


// Exemplo de uso:
const frase = "O céu está azul hoje";
const palavra = "azul";
console.log(palavraNaFrase(frase, palavra)); // true
