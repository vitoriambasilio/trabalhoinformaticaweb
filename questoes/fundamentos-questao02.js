// Lados do triângulo
const a = 5;
const b = 6;
const c = 7;

// Fórmula de Heron
const p = (a + b + c) / 2;
const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

console.log(`A área do triângulo com lados ${a}, ${b} e ${c}