//Creating picture's cointainers/arrays
const frameContainer = document.querySelector(".frames");
const pictures = ['bear', 'monkey', 'giraffe', 'lion', 'hypo', 'pinguin', 'dear', 'pig'];
//..spread operator that replicates twice pictures array to prevent changes to going back to original array
const pictureChoiceList = [...pictures, ...pictures];
const pictureCount = pictureChoiceList.length;

console.log(pictureChoiceList);


//*Pseudocode:
//*Initiating game:
// let revealedPictureCount = 0;
// //null has a falsy value for boolean. Used for intentional absence of an object value
// let clickedFirstPicture = null;
// let clickedSecodPicture = false;

//*Creating frames
function createFrame(picture) {
    const element = document.createElement("div");

    element.classList.add("frame");
    element.setAttribute("picture-data", picture);

    return element;

}


//*Shuffle cards
for (let i = 0; i < pictureCount; i++) {
    //selects pictures randomly through elemnts of array pictureChoiceList
    const shuffleCards = Math.floor(Math.random() * pictureChoiceList.length)
    const picture = pictureChoiceList[shuffleCards];
    const frame = createFrame(picture);
    console.log(picture);

    //to select max 2 pictures of the same. It removes one picture of pictureChoiceList array
    pictureChoiceList.splice(shuffleCards, 1);
    frameContainer.appendChild(frame);

    console.log(picture);
}
//Pseudocoding
//create frames
//shuffle cards
//connect cards to frame
//user clicks on 1st card
//1st card flips
//user click on 2nd card
//2nd card flips
//if cards are a match, both cards keep flipped
//if cards are not the same waiting 3s and, both cards flip back
//if all cards are flipped, you won the game
//if all cards are not flipped, you keep playing
//put button to quit playing game midway???



