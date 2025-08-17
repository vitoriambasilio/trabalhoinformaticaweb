function maiorMenor(lista) {
    if (lista.length === 0) return null;
    let maior = lista[0];
    let menor = lista[0];


    for (let num of lista) {
        if (num > maior) maior = num;
        if (num < menor) menor = num;
    }


    return { maior, menor };
}


// Exemplo de uso:
const numeros = [12, 45, 7, 89, 23, 56, 3, 78, 34, 67];
const resultado = maiorMenor(numeros);
console.log("Maior:", resultado.maior);
console.log("Menor:", resultado.menor);
