const alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [80, 70, 60]],
    ["Aluno4", [100, 90, 80]],
    ["Aluno5", [40, 60, 65]]
];


for (let i = 0; i < alunos.length; i++) {
    const nome = alunos[i][0];
    const notas = alunos[i][1];
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    const status = media >= 70 ? "Aprovado" : "Reprovado";
    console.log(`${nome}, média ${media.toFixed(2)}, ${status}.`);
}
