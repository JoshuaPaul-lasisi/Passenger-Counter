// methods are functions that are attached to an object e.g. console.log(), Math.floor() etc. The console, math are objects with log() and floor() functions in them.
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") //the # is to show it is an id.
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    randomCard =  (Math.floor(Math.random()*13)) + 1
    if(randomCard === 1){
        return 11
    } else if ( randomCard > 10 ){
        return 10
    }else return randomCard
}

function startGame(){
let isAlive = true
    let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard
    renderGame()
    console.log(isAlive)
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20 ){
    console.log("You have a total of " + sum)
 message = "Do you want to draw a new card?"
} else if (sum === 21 ){
    console.log("You have a total of " + sum)
 message = "You've got Blackjack!"
    hasBlackJack = true 
} else {
    console.log("You have a total of " + sum)
 message = "You're out of the game!"
    isAlive = false
}
messageEl.textContent = message
}
 function newCard(){
     if(isAlive === true  && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
     }
 }


