let cards = []
let sum = 0
let message = ""
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let player = {
    name: "shruti",
    chips: 100
}

playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let random = Math.ceil(Math.random()*13)
    if (random === 1) {
        return 11
    } else if (random > 10) {
        return 10
    } else {
        return random
    }
}

function startGame() {
    if (isAlive === true) {
        return
    } else {
        clearGame()
        isAlive = true
        firstCard = getRandomCard()
        secondCard = getRandomCard()
        cards.push(firstCard, secondCard)
        sum = firstCard + secondCard
        renderGame()
    }
}

function clearGame() {
    cards = []
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        isAlive = false
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (cards.length < 2) {
        startGame()
        return
    }
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from deck")
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    } else {
        isAlive = true
        message = "start game first"    
        messageEl.textContent = message
    }
}
