//Exercício - 03

    let codigo = Number(prompt("Digite o código do dia da semana que você mais gosta: \n (1) Domingo \n (2) Segunda-feira \n (3) Terça-feira \n (4) Quarta-feira \n (5) Quinta-feira \n (6) Sexta-feira \n (7) Sábado"));
       
    if(codigo == 1){
    alert(`O dia da semana escolhido é Doimingo`);
    }else if(codigo == 2){
    alert(`O dia da semana escolhido é Segunda-feira`);
    }else if(codigo == 3){
    alert(`O dia da semana escolhido é Terça-feira`);
    }else if(codigo == 4){
    alert(`O dia da semana escolhido é Quarta-feira`);
    }else if(codigo == 5){
    alert(`O dia da semana escolhido é Quinta-feira`);
    }else if(codigo == 6){
    alert(`O dia da semana escolhido é Sexta-feira`);
    }else if(codigo == 7){
    alert(`O dia da semana escolhido é Sábado`);
    }else{
    alert("Dia não reconhecido!");
    }