function verificaIdade(idade) {
    if(idade < 18){
        return "Adulto";
    } else if(idade >= 18 && idade < 65){
        return "Adulto";
    } else if(idade >= 65){
        return "Idoso";
    } else {
        return "Dado inválido";
    }
}

console.log(verificaIdade(20));