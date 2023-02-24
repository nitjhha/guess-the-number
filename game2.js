let scoreNum = 10;
let highscore = 0;

// generating random numbers
let randNum = Math.trunc(Math.random() * 20) + 1;
console.log(randNum);

// A Function for showing messages
function displyMsg(msg) {
    document.querySelector('.message').textContent = msg;
}


// making the check button clickable
document.querySelector('.check').addEventListener('click', function () {
    const docs = Number(document.querySelector('.guess').value);
    console.log(docs, typeof docs);

    if (!docs) {
        displyMsg('Empty!')
    }
    else if (docs > 20) {
        displyMsg('select b/w 1 to 20!')
    }

    else if (docs === randNum) {
        displyMsg('You Won!')

        document.querySelector('.myNum').textContent = 'WON WON WON';
        document.querySelector('.number').textContent = randNum;

        if (scoreNum > highscore) {
            highscore = scoreNum;
            document.querySelector('.highScore').textContent = highscore;
        }
    }

    else if (docs !== randNum) {
        if (scoreNum > 1) {
            displyMsg(docs > randNum ? 'Too High' : 'Too Low');
            scoreNum--;
            document.querySelector('.score').textContent = scoreNum;
        }
        else {
            displyMsg('You Lose')
            document.querySelector('.score').value = 0;
        }
    }

});













//  \😁/
//    ▌
//  /  \
// /    \