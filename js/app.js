let x = document.querySelector('.x');
let y = document.querySelector('.y');
const answerInput = document.querySelector('#ans-input');
const form = document.querySelector('#checker');

const minMax = {
    min: 1,
    max: 100
}

answerInput.focus();
x.textContent = getRandomNumbers(minMax.min, minMax.max);
y.textContent = getRandomNumbers(minMax.min, minMax.max);

// Event Listener
form.addEventListener('submit', checkAnswer);


function checkAnswer(e) {
    let result = parseInt(x.textContent) + parseInt(y.textContent);
    let guess = parseInt(answerInput.value);

    if (isNaN(result)) {
        // show alert
        showAlert(`Please check you numbers`, 'wrong');
    } else {
        if (result === guess) {
            // show alert
            showAlert(`Correct!! Answer is ${result}`, 'correct');
        } else {
            showAlert(`Wrong!! Answer is ${result}`, 'wrong');
        }

        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    e.preventDefault();
}

// get random numbers
function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * max + min);
}

// show alert
function showAlert(msg, className) {
    const p = document.createElement('p');
    p.classList += className;
    p.appendChild(document.createTextNode(msg));
    // get alert container
    const remark = document.querySelector('.remark');
    remark.appendChild(p);
}