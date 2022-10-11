//Exercício - 02

let idadeMotorista = Number(prompt("Digite a sua idade: "))

if(idadeMotorista >=18){
    var res = []
    var resposta = prompt("Você possui carteira de motorista? \n (Sim) Possuo CNH \n (Não) Não Possuo CNH")
    res.push(resposta)
    res.includes("sim","SIM","Sim") ? alert("Você pode dirigir!") : alert("Você não pode dirigir")

}else if(idadeMotorista > 0 && idadeMotorista < 18){    
    confirm("Você é menor de idade. Por isso não pode dirigir e nem tirar CNH!")
}else{
    alert("Informe uma idade válida!")
}
