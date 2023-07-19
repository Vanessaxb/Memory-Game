//*Pseudocoding
//*Creating Picture Collection
//Selecting div frames from html
const frameContainer = document.querySelector('.frames');

// const frameContainer = [...document.querySelector('.frame')];
const cardChosen = [];
const cardChosenId = [];
const cardsWon = [];

let revealedPictureCount = 0;
//null has a falsy value for boolean. Used for intentional absence of an object value
let clickedFirstPicture = null;
let clickedSecodPicture = false;
//Creating my Picture collection
const picturesCollection = ["Dear.jpg", "Bear.jpg", "Giraffe.png", "Hypo.jpg", 
"Lion.jpg", "Monkey.jpg", "Pig.jpg", "Pinguin.jpg",
"Dear.jpg", "Bear.jpg", "Giraffe.png", "Hypo.jpg", 
"Lion.jpg", "Monkey.jpg", "Pig.jpg", "Pinguin.jpg"];

// const tempPicCollection = [...picturesCollection]
console.log(picturesCollection);

//*Shuffle cards

picturesCollection.sort(() => 0.5 - Math.random())
//!Need to fix that's taking more than 2 pictures of the same

// const shuffledPictures = [];
// for (picture in picturesCollection) {
//     // for (let i = 0; i < picturesCollection.length; i++) {
//         const shuffleIndex = Math.floor(Math.random() * picturesCollection.length);
        
        
//         shuffledPictures.push(picturesCollection[shuffleIndex]);   
        
//         // picturesCollection.splice(shuffleIndex, 1)// tried this but reduces array to 8 elements
        
//     }
    // console.log(shuffledPictures);
    
    //*Creating Frames
    createFrame(picturesCollection);// changed frm Picture collection to shuffled picture but it's selecting more than 2 of each
    function createFrame(pictures) {
        for (let i = 0; i < pictures.length; i++) {
            const element = document.createElement("div");
            // creating class list
            element.classList.add('frame');
            // element.setAttribute('data-revealed', "false")//dont need it
            // element.setAttribute('data-pictures', pictures)//dont need it
            //formating my pictures size to fit frame  
            element.style.backgroundImage = `url(${pictures[i]})`
            element.style.backgroundSize = "50px 100px"
            //!not sure if line below is doing anything
            element.setAttribute('src', './Blank.png') //!this line is not dpong anything selecting blank card
            element.setAttribute('data-id', pictures[i]);
            //adding event listener to each card
            // element.addEventListener('click', () {


            // }) //it will call a flivcard function
            frameContainer.appendChild(element)
// }
// }

// // //*Adding EventListener
// for (frame of picturesCollection){
//     frame.addEventListener('click', viewCard)
// }

// function viewCard() {
//     //If class already exists in the element's list of classes, it will not add the class again. toggle(): Toggles the existence of a class in an element's list of ...
//     element.classList.toggle("open");
//     element.classList.toggle("show");
//     element.classList.toggle("disabled");
    
// }



// frameContainer.addEventListener('click', flipCard() {
    // frameContainer.addEventListener("click", () => {
    //     const flipped = element.getAttribute("flipped-data");
        
    //     //if player gets a wrong match, returns and doesnt do anything
    //     if (clickedSecodPicture || flipped === "true" || element === clickedFirstPicture) { //avpids clicking on the same tile twice
    //         return;
    //     }
    //     element.style.backgroundImage = picture;

    //     //*if first picture was selected
    //     if (!clickedFirstPicture) {
    //         clickedFirstPicture = element;

    //         return;
    //     }
// })
}
}

//*Checking for Matches
function checkForMatches() {
    const cards = document.querySelectorAll('data-id');
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId [1];
    if (cardChosen[0] === cardChosen[1]){
        alert('You found a match!');
        cardsWon.push(cardChosen);
    }   else {
        cards[optionOneId].setAttribute('src', 'Blank.png')  
        cards[optionTwoId].setAttribute('src', 'Blank.png')  
        alert('Try again')
    }
    const cardChosen = [];
    const cardChosenId = [];
    if (cardsWon.length === picturesCollection.length) {
        alert('Congratulations')
    }
}


// //*Flipping Cards

// function flipCard() {
//     const cardId = this.getAttribute('data-id');
//     cardChosen.push(picturesCollection[cardId]);
//     cardChosenId.push(cardId);
//     this.setAttribute('src', picturesCollection[cardId])//!I might not need this line
//     if (cardChosen.length === 2) {
//         setTimeout(checkForMatches, 500); //it will give 5 secods for second picture to be selected
//     }
// }

//*User clicks on 1st card

//connect cards to frame
//user clicks on 1st card
//1st card flips
//user click on 2nd card
//2nd card flips
//if cards are a match, both cards keep flipped
//if cards are not the same waiting 3s and, both cards flip back
//if all cards are flipped, you won the game
//if all cards are not flipped, you keep playing
//put button to quit playing game midway??