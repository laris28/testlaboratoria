const name= prompt('Que bom ver você! Qual é o seu nome?')
document.getElementById("name").innerHTML = ("Olá "+ name +", seja bem-vindo!")

const follow = prompt('Você deseja testar seus conhecimentos? \nSe deseja continuar digite 1 \nSe não digite 2');
    if (follow==1){
    alert("Vamos começar");
    document.getElementById("")
    }else{
    alert("Obrigada")
}


function quiz1(){
    const questao1 = parseInt(prompt('O que é o HTML?\n1.Uma Liguagem de Marcação.\n2.Uma Linguagem de Programação.\n3.Nenhuma das anteriores.'));
    if(questao1==1){
        document.getElementById("1correta").innerHTML = "Resposta da primeira questão correta"
    }else{
        document.getElementById("1incorreta").innerHTML = "Resposta da primeira questão incorreta"
    }
}

function quiz2(){
    const questao2 = parseInt(prompt('Java é a mesma coisa que JavaScript? \n1.Sim\n2. Não'));
    if(questao2==2){
        document.getElementById("2correta").innerHTML = "Resposta da segunda questão correta"
    }else{
        document.getElementById("2incorreta").innerHTML = "Resposta da segunda questão incorreta"
    }
}

function quiz3(){
    const questao3 = parseInt(prompt('Quantos níveis de títulos possue o HTL?\n1. São 5 níveis de títulos \n2. São 6 níveis de títulos \n3. São 2 níveis de títulos'));
    if(questao3==1){
        document.getElementById("3correta").innerHTML = "Resposta  da terceira questão correta"
    }else{
        document.getElementById("3incorreta").innerHTML = "resposta da terceira questão incorreta"
    }
}