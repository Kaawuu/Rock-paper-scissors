
let playerResult = 0;
let computerResult = 0;
function choose(symbolPlayer) {
    const SYMBOLS = ['kamień', 'papier','nożyczki'];
    const drawnNumber = Math.random()*SYMBOLS.length;
    const roundednumber = Math.ceil(drawnNumber)-1;
    const symbolComputer = SYMBOLS[roundednumber];
   
    const winner = compareSymbols(symbolPlayer,symbolComputer)
    
    display(winner);
    


    function display(winner) {
        let effect = ''
        if (winner == undefined) {
            effect = "REMIS! Komputer zagrał: "+ symbolComputer;
        }
        if (winner=='a') {
            effect = "Wygrałeś! Komputer zagrał: "+ symbolComputer;
            playerResult++;
            document.getElementById('player-result').innerHTML = playerResult;
        }
        if (winner=='b') {
            effect =  "Przegrałeś! Komputer zagrał: "+ symbolComputer;
            computerResult++;
            document.getElementById('computer-result').innerHTML = computerResult;
        } 
        document.getElementById('score').innerHTML = effect;
    
        let elementPlayer = document.getElementById('symbol_player');
        let elementComputer = document.getElementById('symbol_computer');
        elementPlayer.className = `symbol symbol_${symbolPlayer}`;
        elementComputer.className = `symbol symbol_${symbolComputer}`;
    }

}

function compareSymbols(a, b) {
    if(a == 'kamień') {
        if (b == 'nożyczki') return 'a';
        if (b == 'kamień') return;
        if (b == 'papier') return 'b';
    }

    if(a == 'nożyczki') {
        if (b == 'nożyczki') return;
        if (b == 'kamień') return 'b';
        if (b == 'papier') return 'a';
    }

    if(a == 'papier') {
        if (b == 'nożyczki') return 'b';
        if (b == 'kamień') return 'a';
        if (b == 'papier') return;
    }
}

/*function scores(winner) {
    let output = '0'
    if(winner == undefined) output = +0;
    if(winner=='a') output = symbol_player +1; 
    if(winner=='b')  output = symbol_computer +1;
    document.getElementById('symbol_player').innerHTML = output;
    document.getElementById('symbol_computer').innerHTML = output;
}*/

/*let scores = {
    pc: 0,
    player: 0
};

var playerResult = document.querySelector('#player');
var pcResult = document.querySelector('#computer');

if (winner === 'a'){
    scores.pc += 1
    }
    else if (winner === 'b'){
      scores.player += 1
}
    
    watchingScore();

function watchingScore(){
    playerResult.innerHTML = 'Wynik gracza: ' + scores.player;
    pcResult.innerHTML = 'Wynik komputera: ' + scores.pc;
}*/
