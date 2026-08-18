const alunos = [
    {nome: "Victoria", nota: 8},
    {nome: "Matheus", nota: 5},
    {nome: "Miguel", nota: 9},
]

const aprovados = alunos.filter((aluno) => aluno >= 7);

console.log(aprovados);