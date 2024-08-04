const number = document.getElementById('number');
const button = document.getElementById('button');
const result = document.getElementById('result');

const letters = {
    0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F",
    6: "G", 7: "H", 8: "I", 9: "J", 10: "K", 11: "L",
    12: "M", 13: "N", 14: "O", 15: "P", 16: "Q", 17: "R",
    18: "S", 19: "T", 20: "U", 21: "V", 22: "W", 23: "X",
    24: "Y", 25: "Z"
}

const numberToLetter = () => {
    if (number.value >= 1 && number.value <= 26) {
        result.innerText = ` Letra: ${letters[parseInt(number.value) - 1]}`
        number.value= ""
        this.focus()
    } else {
        result.innerText = 'Digite um número entre 1 e 26'
    }
}

button.addEventListener('click', numberToLetter);
number.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        numberToLetter();
        e.preventDefault();
        number.value= ""
        this.focus()
    }
})

