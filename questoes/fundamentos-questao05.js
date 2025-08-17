function checarIntervalo(a, b, c) {
    if (
        a >= 50 && a <= 99 &&
        b >= 50 && b <= 99 &&
        c >= 50 && c <= 99
    ) {
        console.log("Sucesso: Todos os números estão entre 50 e 99.");
    } else {
        console.log("Erro: Um ou mais números não estão entre 50 e 99.");
    }
}

// Exemplos de uso:
checarIntervalo(55, 60, 70); // Sucesso
checarIntervalo(49, 60, 70); // Erro
checarIntervalo(55, 100, 70); // Erro