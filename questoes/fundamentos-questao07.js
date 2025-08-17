function modificarFrase(frase) {
    return frase
        .split(' ')
        .map(palavra => 
            palavra.length < 5 
                ? palavra.toUpperCase() 
                : palavra.toLowerCase()
        )
        .join(' ');
}

// Exemplo de uso:
const frase = "Hoje é um ótimo DIA para Programar Javascript";
const fraseModificada = modificarFrase(frase);
console.log(fraseModificada);
// Saída: "HOJE É UM ÓTIMO dia para programar javascript"