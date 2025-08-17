function numeroMaisFrequente(arr) {
    const contagem = {};
    let maxNum = arr[0];
    let maxCount = 0;

    for (const num of arr) {
        contagem[num] = (contagem[num] || 0) + 1;
        if (contagem[num] > maxCount) {
            maxCount = contagem[num];
            maxNum = num;
        }
    }

    return maxNum;
}

// Exemplo de uso:
const numeros = [1, 3, 2, 3, 4, 3, 5, 2, 1, 3];
console.log(`O número com maior ocorrência é: ${numeroMaisFrequente(numeros)}`);