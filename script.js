// will match any HTML element that has a class attribute with the value 'frames'.
const frameContainer = document.querySelector('.frames');

let cardChosen = [];
let cardChosenId = [];
let cardsMatched = [];
let clickCounter = 0;


//Creating my Picture collection
const picturesCollection = ["Dear.jpg", "Bear.jpg", "Giraffe.jpg", "Hypo.jpg", 
"Lion.jpg", "Monkey.jpg", "Pig.jpg", "Pinguin.jpg",
"Dear.jpg", "Bear.jpg", "Giraffe.jpg", "Hypo.jpg", 
"Lion.jpg", "Monkey.jpg", "Pig.jpg", "Pinguin.jpg"];


console.log(picturesCollection);


//*Shuffle cards
//generates a random value between -0.5 and 0.5.
picturesCollection.sort(() => 0.5 - Math.random());//random number between 0 and 1
    
//*Creating Frames
function createFrame() {
    for (let i = 0; i < picturesCollection.length; i++) {
        const card = document.createElement("div");
        // creating class list to card
        card.classList.add('card');
        card.setAttribute('data-id', picturesCollection[i]);        
        
        const front = document.createElement("div");
        front.classList.add('front')
        //formating my picturesCollection size to fit frame  
        front.style.backgroundImage = `url(./Images/${picturesCollection[i]})`
        front.style.backgroundSize = "50px 100px"        

        const back = document.createElement("div");
        back.classList.add('back');
        
        //back element becomes a part of the card element's content, and any 
        //content or styling associated with back will now be visible inside the card.
        card.appendChild(back);
        card.appendChild(front);
        card.addEventListener('click', flipCard);
        card.addEventListener('click', updateClickCounter);      

        console.log(card);
        frameContainer.appendChild(card);
    }
}

//*Flipping Cards
function flipCard() {
    //retrieves the value of the data-id attribute from the clicked card
    const cardId = this.getAttribute('data-id');
    console.log(cardId);
    //doesnt allow me to select cards already matched
    if (cardChosen.length >= 2 || cardsMatched.includes(cardId)) {
        // Already selected two cards or the card with current 'cardId' has already matched
        return;
    }
    //'This' refers to the DOM element that trigered the function.
    //in this case, the card being clicked.
    this.classList.toggle('flipped');
    
    //adds the clicked card (the current DOM element) to cardChosen
    cardChosen.push(this);
    //cardId holds the ID's of currently chosen cards
    cardChosenId.push(cardId);
    
    if (cardChosen.length === 2) {
        //the delay of 500 miliseconds allow player to see the second card before
        // checking if it's a pair
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

//*Adding a timer
let timer;
let timeRemaining = 480; //adding 480 seconds timer

function startTimer() {
    //built in JavaScript function  that repeatedly executes a specified function
    // or code block at a defined time interval.
    timer = setInterval(updateTimer, 1000); //Update every second
}

function updateTimer() {
    timeRemaining--;
    if (timeRemaining <= 0) {
        //built-in JavaScript method used to stop the execution of a function that was
        // previously scheduled to run repeatedly at a specified interval using setInterval()
        clearInterval(timer);
        alert('Time is up! Game over.')
        location.reload() //if time is up, it will alert and refresh game
    }
}

//*Adding Click Counter
function updateClickCounter() {
    clickCounter++
    const clicks = document.querySelector('#click-count')
    clicks.textContent = `Click Count: ${clickCounter}`;
}

//* Event listener for the refresh button
const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', () => {
    // Reload the page to reset the game
    location.reload();
});
  
createFrame();
startTimer();


















