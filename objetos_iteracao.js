let pessoa = {
    nome: "Alex",
    idade: 60
};

for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}
