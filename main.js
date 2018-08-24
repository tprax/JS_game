//sud
//randomize cards
//player click card
//change card images
//Then display win or loss

//Variables
var card1 = document.getElementById('card1')
var card2 = document.getElementById('card2')
var card3 = document.getElementById('card3')
var results = document.getElementById('results')
var again =document.getElementById('again')
var cards = ['joker', 'queen', 'joker']
var userChoice = ''

//functions
function result(userChoice){
  if (userChoice === 'queen'){
    results.innerHTML = "You Caught the Queen Congrats!"
  } else {
    results.innerHTML = "Sorry you just missed the Queen!"
    again.innerHTML ="Try again!"
  }
}


//listeners
card1.addEventListener('click', function(){
  userChoice = cards[Math.floor(Math.random() * cards.length)]
  result(userChoice)
})

card2.addEventListener('click', function(){
  userChoice = cards[Math.floor(Math.random() * cards.length)]
  result(userChoice)
})

card3.addEventListener('click', function(){
  userChoice = cards[Math.floor(Math.random() * cards.length)]
  result(userChoice)
})