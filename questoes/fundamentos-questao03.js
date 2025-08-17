// Função para converter Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Função para converter Fahrenheit para Celsius
function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Exemplos de uso:
const tempC = 25;
const tempF = 77;

console.log(`${tempC}°C equivalem a ${celsiusParaFahrenheit(tempC).toFixed(2)}°F`);
console.log(`${tempF}°F equivalem a ${fahrenheitParaCelsius(tempF).toFixed(2)}°C`);