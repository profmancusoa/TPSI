/*
Word Guesser

● Create two arrays:
  ○ one for the letters of the word (e.g. 'C', 'A', 'T')
  ○ Another for the current guessed letters (start with '_', '_', '_' and add the correct letters to it).

● Write a function called guessLetter that should:
  ○ Take one parameter, a letter.
  ○ Have a maximum number of guesses (e.g. 6).
  ○ Check if the letter is in the word array.
  ○ If the letter matches, add it in the correct position of the guessed array.
  ○ Show the user the current guessed letters.
  ○ Tell the user if they guessed a correct letter.
  ○ Tell the user how many guesses remain.
  ○ Tell the user if they won or lost the game.

Call your function to make guesses:
  guessLetter('G');
  guessLetter('I');
  guessLetter('O');
  guessLetter('A');
  guessLetter('T');

● Bonus:
  ○ Add a reward for correct guesses and subtract an amount for failed guesses.
  ○ Show the user the total reward (positive or negative).
*/


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