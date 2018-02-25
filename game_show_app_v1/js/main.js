//     VARIABLES
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
var missed = 0;
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
const startButton = document.querySelector('.btn__reset');
const letter = document.getElementsByClassName('letter');
const show = document.getElementsByClassName('show');
const title = document.querySelector('.title');


//Attach a event listener to the “Start Game” button
//to hide the start screen overlay.
startButton.addEventListener('click',  (event) => {
        event.target = (1>0)
        overlay.style.display = 'none';
      });

//Create a phrases array that contains at least 5 different phrases as strings.

var phrases = [
        "there is no i in team",
        "needle in a haystack",
        "easy as pie",
        "give a man a fish",
        "raining cats and dogs"
      ];


//     FUNCTIONS

function getRandomPhraseAsArray(arr)
{
  var randomPhrase = Math.floor( Math.random() * 5 );// randomly choose a phrase from the phrases array
  var newArray = arr[randomPhrase].split('');// and split that phrase into a new array of characters.
  return newArray; //return the new character array.
};


function addPhraseToDisplay(arr) {
      for (var i = 0; i < arr.length; i++)   {// loops through an array of characters.
        const li = document.createElement('li');
        li.textContent = arr[i];
        // for each character in the array, you’ll create a list item,
        //put the character inside of the list item, and append
        //that list item to the #phrase ul in your HTML
         ul.appendChild(li);
         if (li.textContent === " " ) {
           //add the class space to the list item
           li.className = 'space';
         } else
         //add the class letter to the list item
           li.className = 'letter';
       }
};
//to use the function, you’ll pass in the phrases array as an argument when you call the function:

// function to  get all of the elements with a class of “letter”
function checkLetter(button) {
        const letter = document.getElementsByClassName('letter');
        // var counter = 0;
        var correctLetter = false;
        // The function should loop over the letters and check
        //if they match the letter in the button the player has chosen.
        for (var i = 0; i < letter.length; i ++)
        //If there’s a match, the function should add the “show” class to the list item containing that letter,
        //store the matching letter inside of a variable, and return that letter.
          if (letter[i].textContent === button.textContent ) {
            letter[i].classList.add('show');
            //counter ++
            correctLetter = true;
              //If a match wasn’t found, the function should return null.
          }
            if (correctLetter)  {
            return letter;
            }else{
              return null;
          }
};

function checkWin() {
        //check if the number of letters with class “show”
        //is equal to the number of letters with class “letters”
        if (letter.length === show.length) {
          //If they’re equal, show the overlay screen with the “win” class and appropriate text.
            overlay.style.display = '';
            overlay.classList.add('win');
            title.textContent = "Congratulations, You Won!";
            startButton.textContent = "Replay";
           // delayRefreshPage(2000);
        } else if (missed === 5) {
            overlay.style.display = '';
            overlay.classList.add('lose');
            title.textContent = "You Lost. Better Luck Next Time!";
            startButton.textContent = "Replay";
            // delayRefreshPage(2000);
        }
}

// function refreshPage() {
//         location.reload(true);
// };
//
// function delayRefreshPage(mileSeconds) {
//         window.setTimeout(refreshPage, mileSeconds);
//   };


qwerty.addEventListener('click', function(event) {
  // When a player chooses a letter, add the “chosen” class
  //to that button so the same letter can’t be chosen twice.
      const clickedButton = event.target;
      if (event.target.tagName === 'BUTTON') {
         var button = clickedButton.parentNode;
         //Pass the button to the checkLetter function
         //store the letter returned inside of a variable called letterFound
         var letterFound = checkLetter(clickedButton);
         clickedButton.className = 'chosen';
         clickedButton.disabled = true;
         clickedButton.setAttribute('disabled', "");

         //If the value is null, remove one of the tries from the scoreboard
         if (letterFound === null ) {
           missed ++;
         } // var li = document.querySelectorAll('.tries');
         //remove one of the tries from the scoreboard.
          if (missed >=1 && missed <= 5) {
          // replace with lostHeart image
            var hearts = document.getElementsByTagName('img');
            hearts[missed -1].src ='images/lostHeart.png';
          }
             checkWin();
           }
  });

//     EXECUTE
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
