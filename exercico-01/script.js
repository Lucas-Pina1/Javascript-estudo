/* 
1 - Faça uma página que ao entrar vai pedir o nome do usuário e depois a idade, em seguida mostre na tela uma mensagem de saudação de acordo com a idade do usuário:  

"Olá [nome], você é MAIOR de idade" 

ou 

"Olá [nome], você é MENOR de idade"  
*/

/* 
2 - Modifique o exercício anterior para exibir uma mensagem personalizada caso o nome da pessoa seja "Thomas Anderson", exibir: 

"Olá [nome], você é MAIOR de idade. Você é personagem do filme The Matrix!". 

Mantenha a mensagem condizente com a idade informada.
*/

​/* 3 - Modifique o exercício anterior para pedir os dados do usuário somente depois dele clicar em um botão escrito "Entrar". 

Faça a mensagem de saudação ser exibida em um H1, e a mensagem personalizada em um H2.​ */

let titulo = document.querySelector('#titulo');
let titulo = document.querySelector('#subtitulo');


function entrar() {
  let nome = prompt(`Digite seu nome`);
  let idade = prompt(`Digite sua idade`);
  
  let mensagem;
  let mensagem2;
  
  
  if (idade >= 18) {
    mensagem = `Olá ${nome}, você é Maior de idade.`
  } else {
    mensagem = `Olá ${nome}, você é Menor de idade.`
  }
  
  if (nome === 'Thomas Anderson' ||"thomas anderson") {
    mensagem += 'Você é personagem do filme The Matrix!'
  }

  titulo.innerHTML = mensagem;
  subtitulo.innerHTML = mensagem2;
}

