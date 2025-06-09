
let estudantes = [
    {nome: "Ana", turma: 5, nota: 0},
    {nome: "Pablo", turma: 5, nota: 6.0},
    {nome: "Paula", turma: 4, nota: 7.0},
    {nome: "Rogério", turma: 2, nota: 9.0},
    {nome: "Gilmar", turma: 5, nota: 3.0},
    {nome: "Gilson", turma: 5, nota: 5.0},
    {nome: "Melina", turma: 5, nota: 4.2},
    {nome: "Sabrina", turma: 1, nota: 10.0},
    {nome: "Clodoaldo", turma: 1, nota: 9.75},
    {nome: "Roger", turma: 3, nota: 8.25}
];

for(let i = 0; i < estudantes.length; i++)
{
    if(estudantes[i].nota >= 7)
    {
        console.log(estudantes[i].nome)
    }
}