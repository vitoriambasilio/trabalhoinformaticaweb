function inverterNumero(numero) {
    // Converte o número para string, separa, inverte e junta novamente
    return parseInt(numero.toString().split('').reverse().join(''));
}


// Exemplo de uso:
console.log(inverterNumero(12356)); // Saída: 65321
