function compararNumeros(a, b) {
    if (a > b) {
        console.log(`${a} é maior que ${b}.`);
    } else if (b > a) {
        console.log(`${b} é maior que ${a}.`);
    } else {
        console.log(`Os números são iguais.`);
    }
}

// Exemplo de uso:
compararNumeros(10, 20); // Saída: 20 é maior que 10.
compararNumeros(30, 5);  // Saída: 30 é maior que 5.
compararNumeros(7, 7);   // Saída: Os números são iguais.