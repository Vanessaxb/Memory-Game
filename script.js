
const frameContainer = document.querySelector('.frames');


let cardChosen = [];
let cardChosenId = [];
let cardsMatched = [];


//Creating my Picture collection
const picturesCollection = ["Dear.jpg", "Bear.jpg", "Giraffe.jpg", "Hypo.jpg", 
"Lion.jpg", "Monkey.jpg", "Pig.jpg", "Pinguin.jpg",
"Dear.jpg", "Bear.jpg", "Giraffe.jpg", "Hypo.jpg", 
"Lion.jpg", "Monkey.jpg", "Pig.jpg", "Pinguin.jpg"];


console.log(picturesCollection);

//*Shuffle cards
picturesCollection.sort(() => 0.5 - Math.random());
    
//*Creating Frames
function createFrame() {
    for (let i = 0; i < picturesCollection.length; i++) {
        const card = document.createElement("div");
        // creating class list
        card.classList.add('card');
        card.setAttribute('data-id', picturesCollection[i]);
        
        
        const front = document.createElement("div");
        front.classList.add('front')
        //formating my picturesCollection size to fit frame  
        front.style.backgroundImage = `url(${picturesCollection[i]})`
        front.style.backgroundSize = "50px 100px"
        

        const back = document.createElement("div");
        back.classList.add('back');
        
        card.appendChild(back);
        card.appendChild(front);
        card.addEventListener('click', flipCard);
        
        console.log(card);
        frameContainer.appendChild(card);
    }
}

let timer;
let timeRemaining = 480; //adding 480 seconds timer

function startTimer() {
    timer = setInterval(updateTimer, 1000); //Update every second
}

function updateTimer() {
    timeRemaining--;
    if (timeRemaining <= 0) {
        clearInterval(timer);
        alert('Time is up! Game over.')
        location.reload() //if time is up, it will alert and refresh game
    }
}



function flipCard() {
    const cardId = this.getAttribute('data-id');
    console.log(cardId);
    if (cardChosen.length >= 2 || cardsMatched.includes(cardId)) {
        // Already selected two cards or the card is already matched
        return;
    }
  
    this.classList.toggle('flipped');
   
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
        // alert('You found a match!');
      cardsMatched.push(optionOneId);
    } else {
      cardChosen[0].classList.remove("flipped");
      cardChosen[1].classList.remove("flipped");
    //   alert('Try again');
    }
    
    cardChosen.length = 0;
    cardChosenId.length = 0;
    
    if (cardsMatched.length === picturesCollection.length / 2) {
        alert(`Congratulations! You've found them all!`);
    }
}

// Event listener for the refresh button
const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', () => {
    // Reload the page to reset the game
    location.reload();
});
  
createFrame();
startTimer();


















