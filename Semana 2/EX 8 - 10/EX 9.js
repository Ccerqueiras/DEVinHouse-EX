var numero = document.getElementById("cont");

function adicionar(){
numero = numero +  1;
console.log(numero);
document.getElementById('cont').innerText = numero;
}
function subtrair(){
numero = numero-1;
console.log(numero);
document.getElementById("cont").innerText = numero;
}

/* (
function(){
var anoA = new Date().getFullYear();
var ano = prompt("Informe um ano");
result = anoA - ano;

Alert(result)})();
 */