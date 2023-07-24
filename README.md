# The Memory Game
This is a Kid's Memory game, built using the DOM.

**How is the game played?** 
The player selects the first card, the card flipps. When the second card is selected, if they match: cards keep being flipped. If cards don't match, they will both flip back. Player keeps selecting cards, two by two, either until all cards are selected or time runs out.

### Live version: (https://vanessaxb.github.io/Memory-Game/)

## Features

**Win state**: all cards are matched within timer.

**Lose state**: cards are not macthed within timer.

**Multiple rounds**: cards will be automaticly shuffled and ready to play again when current game round is over.

**Reset Game**: at any time, player can choose to click on the New Game button to restard the game.

**Click Count**: added a click count tracker for scoring. 

## Tech Stack
    1. HTML
    2. CSS with FlexBox
    3. JS

## Challenges
I had two main challenges:
1. I chose to compare cards using their class id and not names. This was done by this line: card.setAttribute('data-id', picturesCollection[i]);
As you can see on elements, this code line made 'data-id' = card names, therefore, I could compare them.

2. My flipping wasn't showing the back of my card. To solve that, on the createFrame function I had to add 2 more div's, each representing a card's face (front/back) so that I could toggle them using the flipping function.

## Images
#### Start Screen
![alt text](Images/GameSartScreen.png "Memory Game Start Screen")
#### Win State
![alt text](Images/Win_State.png "Win State Screen")
#### Lose State
![alt text](Images/Lose_State.png "Lose State Screen")

## Resources

#### setTimeOut: (https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

#### alert(): (https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

#### Adding pictures to my README.md: (https://code.visualstudio.com/docs/languages/markdown#:~:text=Inserting%20images%20and%20links%20to%20files&text=You%20can%20also%20insert%20images,inserted%20when%20you%20drop%20it.)

#### toggle(): (https://www.w3schools.com/howto/howto_js_toggle_class.asp)

#### flipping(): (https://css-tricks.com/almanac/properties/b/backface-visibility/)

#### location.reload(): (https://www.w3schools.com/jsref/met_loc_reload.asp)

#### transform and rotate: (https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style)
(https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY)

#### setInterval() and clearInterval: (https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)

#### Array.prototype.includes(): (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)