let order = []; //atribuir em arr 
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vemelho
//2 - amarelo
//3 - azul

const blue   = document.querySelector('.blue');
const red    = document.querySelector('.red');
const green  = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
} 

//checa se os botoes são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Inicando próximo nivel`);
        nextLevel();
    }
}

//função para   clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

}

//função que retorna a cor
let createColorElement = (color) => {
    switch(color){
        case 0:
            return green;
        case 1:
            return red;
        case 2:
            return yellow;
        case 3:
            return blue;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo:\nClique em OK para iniciar um jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    order = [];
    clickedOrder = [];
    alert('Bem vindo ao Gênesis! Iniciando novo jogo');
    score = 0;

    setTimeout(() => {
        nextLevel();
    }, 300)
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();