function verificaTrinta(a, b) {
    return a === 30 || b === 30 || (a + b === 30);
}

// Exemplos de uso:
console.log(verificaTrinta(30, 5));   // true
console.log(verificaTrinta(10, 20));  // true
console.log(verificaTrinta(15, 15));  // true
console.log(verificaTrinta(12, 8));   // false