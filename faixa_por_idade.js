let idade = 12;

/* ERRADO POIS SWITCH NÃO AVALIA EXPRESSÃO BOOLEANA OU INTERVALOS
switch (idade){
    case 0 < idade <= 17:
        console.log("Menor de idade");
    case 18 <= idade < 65:
        console.log("Adulto(a)")
    case 65 <= idade < 130:
        console.log("Idoso(a)")
    default:
        console.log("Não corresponde a idade") 
}
       sE DESEJO FAZER COM SWITCH, DEVO USAR: 
       

switch (true) {
    case (idade >= 0 && idade <= 17):
        console.log("Menor de idade");
        break;
    case (idade >= 18 && idade < 65):
        console.log("Adulto(a)");
        break;
    case (idade >= 65 && idade < 130):
        console.log("Idoso(a)");
        break;
    default:
        console.log("Não corresponde a idade");
}

*/

idade = 12;

if (idade >= 0 && idade <= 17) {
    console.log("Menor de idade");
} else if (idade >= 18 && idade < 65) {
    console.log("Adulto(a)");
} else if (idade >= 65 && idade < 130) {
    console.log("Idoso(a)");
} else {
    console.log("Não corresponde a idade");
}
