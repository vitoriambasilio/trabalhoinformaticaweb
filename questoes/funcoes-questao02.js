function contarVogaisConsoantes(frase) {
    const vogais = "aeiouAEIOU";
    let qtdVogais = 0;
    let qtdConsoantes = 0;


    for (let char of frase) {
        if (/[a-zA-Z]/.test(char)) {
            if (vogais.includes(char)) {
                qtdVogais++;
            } else {
                qtdConsoantes++;
            }
        }
    }


    return { vogais: qtdVogais, consoantes: qtdConsoantes };
}


// Exemplo de uso:
const resultado = contarVogaisConsoantes("Exemplo de frase");
console.log("Vogais:", resultado.vogais);
console.log("Consoantes:", resultado.consoantes);