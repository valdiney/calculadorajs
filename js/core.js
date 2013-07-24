/////////////////////////////////////
// Projeto Calculadora JS
// Autor: Valdiney França
// Data: 21/07/2013
////////////////////////////////////

window.onload = function(){

//////////////////////////////////////////////////////
// Funções inicias... Evento onclick nos botões
/////////////////////////////////////////////////////
var sete = document.getElementById('sete').onclick = function(){
 calculando(7);
}// end sete
var oito = document.getElementById('oito').onclick = function(){
 calculando(8);
}// end oito
var nove = document.getElementById('nove').onclick = function(){
 calculando(9);
}// end nove
var quatro = document.getElementById('quatro').onclick = function(){
 calculando(4);
}// end quatro
var cinco = document.getElementById('cinco').onclick = function(){
 calculando(5);
}// end cinco
var seis = document.getElementById('seis').onclick = function(){
 calculando(6);
}// end seis
var um = document.getElementById('um').onclick = function(){
 calculando(1);
}// end um
var dois = document.getElementById('dois').onclick = function(){
 calculando(2);
}// end dois
var tres = document.getElementById('tres').onclick = function(){
 calculando(3);
}// end tres
var zero = document.getElementById('zero').onclick = function(){
 calculando(0);
}// end zero
// end..............................
/////////////////////////////////////////////////////////////
// Evento onclick nos Botões que fazem o papel de operadores
////////////////////////////////////////////////////////////
var ponto = document.getElementById('ponto').onclick = function(){
 if(document.getElementById('visor').value == ''){
 document.getElementById('visor').value = '';
 } else {
 calculando('.');
 }
}// end ponto
var soma = document.getElementById('operador_mais').onclick = function(){
var visor = document.getElementById('visor').value;
 if( visor == ''){
 visor = '';
 } else {
 calculando('+');
 }
}// end soma
var subtraindo = document.getElementById('operador_diminuir').onclick = function(){
var visor = document.getElementById('visor').value;
 if( visor == ''){
 visor = '';
 } else {
 calculando('-');
 }
}// end subtrair
var multiplicando = document.getElementById('operador_multiplicar').onclick = function(){
var visor = document.getElementById('visor').value;
 if( visor == ''){
  visor = '';
 } else {
 calculando('*');
 }
}// end multiplicação
var dividindo = document.getElementById('operador_divisao').onclick = function(){
var visor = document.getElementById('visor').value;
 if( visor== ''){
 visor = '';
 } else {
 calculando('/');
 }
}// end divisão
// end operadores................................
/////////////////////////////
// Incluindo os Parênteses
////////////////////////////
var parentese_left = document.getElementById('parentese_left').onclick = function(){
 calculando('(');
}
var parentese_right = document.getElementById('parentese_right').onclick = function(){
 calculando(')');
}
////////////////////
// Raiz quadrada...
///////////////////
var raiz_quadrada = document.getElementById('raiz_quadrada').onclick = function(){
var visor = document.getElementById('visor').value;
 if( visor == ''){
 visor= '';
 } else {
 calculando(" = Raiz "+Math.sqrt(document.getElementById('visor').value));
 }
}
////////////////////
// Porcentagem...
///////////////////
var porcentagem = document.getElementById('porcentagem').onclick = function(){ 
var visor = document.getElementById('visor').value; 
 if( visor == ''){
 visor = '';
 } else {
 calculando('/100');
 }
}
////////////////////////////
// Calculando o valor de PI
///////////////////////////
var constante_pi = document.getElementById('pi').onclick = function(){ 
var visor = document.getElementById('visor').value; 
 if( visor == ''){
 visor = '';
 } else {
 calculando(" PI = "+2*Math.PI*document.getElementById('visor').value);
 }
}
// end ...............................
/////////////////////////////
// Ordenando os números na tela, ou seja, visor.
/////////////////////////////
function calculando(numeros){
 document.getElementById('visor').value = document.getElementById('visor').value + numeros;
}
////////////////////////////////////////////
// Função 'igual' faz os calculos dos valores.
///////////////////////////////////////////
/*Relatório*/ var relatorio_resultado = document.getElementById('b_resultados');

var igual = document.getElementById('igual').onclick = function(){
var visor = document.getElementById('visor').value;
 document.getElementById('erros');// Recupera id 'erros'.
 if( visor == ''){
  erros.innerHTML = "Digite números e operadores antes de computar. Exemplo: 5+3";
 } else {
 relatorio_resultado.innerHTML += visor+" = ";
 /* Calculo */ document.getElementById('visor').value = eval(document.getElementById('visor').value);
 relatorio_resultado.innerHTML +=  eval(document.getElementById('visor').value)+", ";
 erros.innerHTML = "Calculadora (JS): Por Valdiney França";
 }
}// end igual
/////////////////////////////////////
// Limpa o campo de valores 'visor'.
////////////////////////////////////
var limpar_visor = document.getElementById('limpar').onclick = function(){
 document.getElementById('visor').value = '';
}// end limpar



} //....end window...........