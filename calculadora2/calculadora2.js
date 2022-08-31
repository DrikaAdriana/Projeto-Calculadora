const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');//o * seleciona parte de um atributo (idtecla7, id tecla8...)
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

const calcular = () => {
  if (operacaoPendente()){
    const numeroAtual = parseFloat(display.textContent);
    novoNumero = true;
    if (operador ==='+'){
      atualizarDisplay(numeroAnterior + numeroAtual);
    }
  }
}


const atualizarDisplay = (texto) => {
  if (novoNumero) {
    display.textContent = texto;
    novoNumero = false;
  }else{
    display.textContent += texto;
  }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach (numero => numero.addEventListener ('click', inserirNumero));

const selecionarOperador = (evento) => {
  novoNumero = true;
  operador = evento.target.textContent;
  numeroAnterior = parseFloat(display.textContent);
}
operadores.forEach (operador => operador.addEventListener('click', selecionarOperador));