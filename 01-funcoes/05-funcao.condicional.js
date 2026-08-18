function verificaNota(media) {
    // if(media >= 0){
    //     return "Aprovado"
    // }
    // return "Reprovado"

    return media >= 7 ? "Aprovado" : "Reprovado";
}

console.log(verificaNota(8));