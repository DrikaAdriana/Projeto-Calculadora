let valor;
let resultado;
function botao(num) {
  valor = document.calc.visor.value += num;
}
function limpar() {
  document.calc.visor.value = '';
}
function calcular() {
   resultado= eval(valor)
   document.calc.visor.value = resultado.toLocaleString('pt-br')
}



