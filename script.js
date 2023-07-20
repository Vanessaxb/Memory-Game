

const frameContainer = document.querySelector('.frames');

// const frameContainer = [...document.querySelector('.frame')];
let cardChosen = [];
let cardChosenId = [];
let cardsMatched = [];


//Creating my Picture collection
const picturesCollection = ["Dear.jpg", "Bear.jpg", "Giraffe.jpg", "Hypo.jpg", 
"Lion.jpg", "Monkey.jpg", "Pig.jpg", "Pinguin.jpg",
"Dear.jpg", "Bear.jpg", "Giraffe.jpg", "Hypo.jpg", 
"Lion.jpg", "Monkey.jpg", "Pig.jpg", "Pinguin.jpg"];

// const tempPicCollection = [...picturesCollection]//!do i need a copy of my original array?
console.log(picturesCollection);

//*Shuffle cards
picturesCollection.sort(() => 0.5 - Math.random());
    
//*Creating Frames
function createFrame() {
    for (let i = 0; i < picturesCollection.length; i++) {
        const element = document.createElement("div");
        // creating class list
        element.classList.add('frame');
        // element.setAttribute('data-revealed', "false")//dont need it
        // element.setAttribute('data-picturesCollection', picturesCollection)//dont need it
        
        //formating my picturesCollection size to fit frame  
        element.style.backgroundImage = `url(${picturesCollection[i]})`
        element.style.backgroundSize = "50px 100px"
        // element.setAttribute('data-id', i);
        element.setAttribute('data-id', picturesCollection[i]);

        element.addEventListener('click', flipCard);
        
        frameContainer.appendChild(element)
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
  
    if (cardChosen.length >= 2 || cardsMatched.includes(cardId)) {
      // Already selected two cards or the card is already matched
      return;
    }
  
    this.classList.add('flipped');
    cardChosen.push(this);
    cardChosenId.push(cardId);
  
    if (cardChosen.length === 2) {
      setTimeout(checkForMatches, 500);
    }
  }
  

//*Checking for Matches
function checkForMatches() {
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
  
    if (optionOneId === optionTwoId) {
      alert('You found a match!');
      cardsMatched.push(optionOneId);
    } else {
      cardChosen[0].classList.remove("flipped");
      cardChosen[1].classList.remove("flipped");
      alert('Try again');
    }
  
    cardChosen.length = 0;
    cardChosenId.length = 0;
  
    if (cardsMatched.length === picturesCollection.length / 2) {
      alert('Congratulations');
    }
  }
  
createFrame();// changed f


//*User clicks on 1st card














