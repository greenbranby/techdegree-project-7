//-----------Variables-------------------------

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
var missed = 0;
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');

overlay.addEventListener('click',  (event) => {
        event.target = (1>0)
        overlay.style.display = 'none';
      });


var phrases = [
        "there's no I in team",
        "needle in a haystack",
        "easy as pie ",
        " give a man a fish",
        "raining cats and dogs"
      ];

function getRandomPhraseAsArray(arr)
{
  var randomPhrase = Math.floor( Math.random() * 5 );
  var newArray = arr[randomPhrase].split('');
  return newArray;
};


function addPhraseToDisplay(arr) {
      for (var i = 0; i < arr.length; i++)
      {
         var li = document.createElement('li');
         li.textContent = arr[i];
         ul.appendChild(li);
         if (li.textContent != '' ) {
           //add the class letter to the list item
           li.className = 'letter';
         }
    }
};

const ranPhrase = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(ranPhrase);

// const keysUsed =

function checkLetter(button)
{
  var letter = document.getElementByClassName('letter');
  correctLetter = false;
  for (var i = 0; i < letter.length; i ++)
    if (letter[i].textContent === button.textContent )
    {
      li.className = 'show';
      correctLetter = true;
    } else (correctLetter)
      return null;
    };

document.getElementById('qwerty').addEventListener('click', function(event) {
      var clickedButton = event.target;
      if(clickedButton.tagName === 'BUTTON') {
         var button = clickedButton.parentNode;
         var letterFound = checkLetter(clickedButton);
         clickedButton.className = 'chosen';
         clickedButton.setAttribute('disabled');
      }
  });
