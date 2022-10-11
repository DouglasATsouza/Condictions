//Exercício - 04
    let codigo = prompt("Digite o código do dia da semana que você mais gosta: \n (1) Domingo \n (2) Segunda-feira \n (3) Terça-feira \n (4) Quarta-feira \n (5) Quinta-feira \n (6) Sexta-feira \n (7) Sábado");
    
    switch(codigo){
        case  "1":
        alert("O dia da semana escolhido é Doimingo");
        break;

        case  "2":
        alert("O dia da semana escolhido é Segunda-feira");
        break;

        case  "3":
        alert("O dia da semana escolhido é Terça-feira");
        break;

        case  "4":
        alert("O dia da semana escolhido é Quarta-feira");
        break;

        case  "5":
        alert("O dia da semana escolhido é Quinta-feira");
        break;

        case  "6":
        alert("O dia da semana escolhido é Sexta-feira");
        break;
    
        case  "7":
        alert("O dia da semana escolhido é Sábado");
        break;

        default:
        alert("Dia não reconhecido!");
    }