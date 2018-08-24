//sud
//randomize cards
//player click card
//change card images
//Then display win or loss

//Variables
var cards = ['card1', 'card2', 'card3']
var queen
var joker

//functions
var randnum = [Math.floor(Math.random() * cards.length + 1)]

$('#card1').on('click', function(){
  if (randnum = 3){
    return $('#results').text(' CONGRATS YOU FOUND THE QUEEN!')
  }else {
    return $('#results').text(' Sorry you missed the Queen!')
  }
})
$('#card2').on('click', function(){
  if (randnum === 3){
    return $('#results').text(' CONGRATS YOU FOUND THE QUEEN!')
  }else {
    return $('#results').text(' Sorry you missed the Queen!')
  }
})
$('#card3').on('click', function(){
  if (randnum === 3){
    return $('#results').text(' CONGRATS YOU FOUND THE QUEEN!')
  }else {
    return $('#results').text(' Sorry you missed the Queen!')
  }
})





//listeners