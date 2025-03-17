let array1 = ['C', 'A', 'T'];
let array2 = ['_', '_', '_'];
let max_guess = 6;  
let reward = 0
function guessLetter(letter) {
    let check = array1.includes(letter);
    if (check) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] == letter) {
                array2[i] = letter;
            }
        }
        console.log(array2)
        reward+=100;
        console.log(`You guessed the letter Balance ${reward} points`)
        if (array2.includes('_') == false) {
            console.log("You won")
        }
    }
    else {
        max_guess--;
        console.log(array2)
        reward-=50;
        console.log(`You didn't guess the letter Balance ${reward} points`)
        console.log(`Guesses left: ${max_guess}`)
        if (max_guess <= 0) {
            console.log("You lost")
        }
        
    }
    
}
guessLetter("C")
guessLetter("A")
guessLetter("T")