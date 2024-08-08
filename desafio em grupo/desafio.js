const readline = require('readline-sync');

function jogoDeAdivinhação() {
  
  let secretNumber = Math.floor(Math.random() * 100) + 1;

  console.log('Bem-vindo ao Jogo de Adivinhação Simples!');
  console.log('Tente adivinhar o número secreto entre 1 e 100.');

  while (true) {

    let userGuess = readline.questionInt('Digite seu palpite: ');

    
    if (userGuess < secretNumber) {
      console.log('Tente um número maior.');
    } else if (userGuess > secretNumber) {
      console.log('Tente um número menor.');
    } else {
      console.log(`Parabéns! Você acertou o número secreto ${secretNumber}.`);
      break;
    }
  }
}


jogoDeAdivinhação();