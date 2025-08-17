function converterNome(nomeCompleto) {
    const partes = nomeCompleto.trim().split(' ');
    if (partes.length < 2) return nomeCompleto; // Retorna como está se não houver nome e sobrenome

    const primeiroNome = partes[0];
    const iniciais = partes.slice(1).map(p => p[0].toUpperCase() + '.').join(' ');

    return `${iniciais} ${primeiroNome}`;
}

// Exemplo de uso:
const nome = "Alan Mathison Turing";
console.log(converterNome(nome)); // Saída: "M. T. Alan"