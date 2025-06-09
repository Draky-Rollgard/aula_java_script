let pessoa = {
    nome: "Carla",
    idade: 30,
    profissao: "Engenharia"
};

//Acessso
console.log(pessoa.nome); // Carla
console.log(pessoa["idade"]); // 30

// Modificação
pessoa.idade = 31;
pessoa["profissao"] = "Professor";

// Adição
pessoa.altura = 1.77;
