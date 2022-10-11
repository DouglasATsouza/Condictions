//Exercício - 01

const idadeMotorista = Number(prompt("Digite uma idade: "))

if(idadeMotorista > 0){
    if(idadeMotorista >= 18 ? console.log("Pode Dirigir") : console.log("Não pode dirigir"));
}else{
    alert("Informe uma idade válida!")
}

