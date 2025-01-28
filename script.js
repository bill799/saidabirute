function checkAnswer() {
    const answer = document.getElementById('answer').value.toLowerCase();
    const result = document.getElementById('result');

    if (answer === 'blue') {
        result.innerHTML = 'Congratulations! You unlocked my love for you! ❤️ I love you more than all the lines of code in the world!';
    } else {
        result.innerHTML = 'Oops, that’s not correct! Try again! 💻';
    }
}
