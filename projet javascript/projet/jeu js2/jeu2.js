
// Player name
var sPlayer1 = "Joueur 1";
var sPlayer2 = "Joueur 2";
var TabScores, nRoundScore, nActivePlayer, bGamePlaying;


// Change player Name
function editNames() {
    sPlayer1 = prompt("Changer le nom du joueur 1");
    sPlayer2 = prompt("Changer le nom du joueur 2");
    init();
}

function nextPlayer() {
    //Next player
    nActivePlayer === 0 ? nActivePlayer = 1 : nActivePlayer = 0;
    nRoundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');



    document.querySelector('.dice').style.display = 'none';
}

function init() {
    TabScores = [0, 0];
    nActivePlayer = 0;
    nRoundScore = 0;
    bGamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = sPlayer1;
    document.getElementById('name-1').textContent = sPlayer2;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}




document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (bGamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice' + dice + '.png';


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            nRoundScore += dice;
            document.querySelector('#current-' + nActivePlayer).textContent = nRoundScore;
        } else {
            //Next player
            nextPlayer();
            
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (bGamePlaying) {
        // Add CURRENT score to GLOBAL score
        TabScores[nActivePlayer] += nRoundScore;

        // Update the UI
        document.querySelector('#score-' + nActivePlayer).textContent = TabScores[nActivePlayer];

        // Check if player won the game
        if (TabScores[nActivePlayer] >= 100) {
            document.querySelector('#name-' + nActivePlayer).textContent = 'Gagnant!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + nActivePlayer + '-panel').classList.add('Gagnant');
            document.querySelector('.player-' + nActivePlayer + '-panel').classList.remove('active');
            bGamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

init();










