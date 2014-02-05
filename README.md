calculadorajs
=============

Sua primeira calculadora 

<h2><href="http://codepen.io/valdiney/pen/cIxCA" target="_blank">Veja funcionando no CodePen</h2>

Cá entre nós… Todos os estudantes de computação já sonharam ou ainda sonham em fazer a sua própria calculadora! Não no sentido de seus feitos serem famosos, mas no sentido de poder ver de modo funcional um monte de códigos escritos por você gerarem um programa razoavelmente utilizável. Realmente é grande a quantidade de estudantes que já fizeram e que ainda vão fazer suas próprias calculadoras, pois este feito ajuda a entender o conceito de lógica de programação onde o computador se mantém recebendo, computando e apresentando informações.

Em qualquer linguagem computacional é possível fazer uma calculadora, até mesmo em uma Pseudolinguagem, na verdade a linguagem não importa e sim os passos tomados para que a calculadora funcione bem. No meu exemplo eu utilizei um conjunto de tecnologias que regem o âmbito web!

<b>Html:</b> Linguagem de marcação para estruturar os documentos em um navegador.

<b> Css:</b> Linguagem de estilo para compor a interface do programa.

<b> Javascript:</b>  Linguagem aritmética para compor o algoritmo funcional da calculadora

Estudantes já experientes não vão perder tempo fazendo uma calculadora, mas podes acreditar que lá no fundo eles nunca esqueceram a satisfação, alegria de terem feito suas primeiras calculadoras.

<b>E então você já fez a sua? Pare de ficar se 
jogando pra baixo com frases do tipo: Isso ainda 
é muito difícil… Comece a tentar fazer a sua agora 
mesmo! Mesmo que quebre a cabeça no decorrer do feito, 
no final terás vontade de mostrar para todo mundo e não 
fique triste em vê a cara das pessoas que não entendem 
patavina de computação te achando medíocre por ter feito 
uma calculadora! Perdoa senhor eles não entendem Risos…</b>

<h1>Exemplo de uma das funções disponível no código fonte da nossa calculadora:</h1>
```javascript

var raiz_quadrada = document.getElementById('raiz_quadrada').onclick = function(){
var visor = document.getElementById('visor').value;
 if( visor == ''){
 visor= '';
 } else {
 calculando(" = Raiz "+Math.sqrt(document.getElementById('visor').value));
 }
}


