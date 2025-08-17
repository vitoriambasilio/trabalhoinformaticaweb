const diasSemana = [
    "domingo", "segunda-feira", "terça-feira", "quarta-feira",
    "quinta-feira", "sexta-feira", "sábado"
];

const agora = new Date();

const diaSemana = diasSemana[agora.getDay()];
const hora = agora.getHours().toString().padStart(2, '0');
const minuto = agora.getMinutes().toString().padStart(2, '0');
const segundo = agora.getSeconds().toString().padStart(2, '0');

console.log(`Hoje é: ${diaSemana}.`);
console.log(`A hora atual é: ${hora}:${minuto}:${segundo}.`);