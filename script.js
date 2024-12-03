
const pontuacao ={
  vitorias: 0,
  derrotas: 0,
  empates: 0,
};


function escolherMovimentoComputador() {

const numeroAleatorio3 = Math.random();

let movimentoComputador = ' ';
if (numeroAleatorio3 >= 0 && numeroAleatorio3 < 1 / 3) {
  movimentoComputador = 'pedra';
}
else if (numeroAleatorio3 >= 1 / 3 && numeroAleatorio3 < 2 / 3) {
  movimentoComputador = 'papel';
}
else {
  movimentoComputador = 'tesoura';
}

return movimentoComputador;
}

function resultadoJogo(movimentoJogador) {

movimentoComputador = escolherMovimentoComputador();

let resultado = ' ';
if (movimentoJogador === 'tesoura') {
  if (movimentoComputador === 'pedra') {
    resultado = 'Voce perdeu!';
  }
  else if (movimentoComputador === 'papel') {
    resultado = 'Voce ganhou!'
    
  }
  else {
    resultado = 'Empate!'
     
  }
}

else if (movimentoJogador === 'pedra') {
  if (movimentoComputador === 'pedra') {
    resultado = 'Empate!';
    
  }
  else if (movimentoComputador === 'papel') {
    resultado = 'Voce perdeu!'
    
  }
  else {
    resultado = 'Voce ganhou!'
    
  }
}

else {
  if (movimentoComputador === 'pedra') {
    resultado = 'Voce ganhou!';
    
  }
  else if (movimentoComputador === 'papel') {
    resultado = 'Empate!'
    
  }
  else {
    resultado = 'Voce perdeu!'
    
  }
}
if (resultado === 'Voce ganhou!'){
  pontuacao.vitorias++
}else if (resultado === 'Voce perdeu!'){
  pontuacao.derrotas++
}else{
  pontuacao.empates++
}

return alert(`Voce escolheu ${movimentoJogador}. O computador escolheu ${movimentoComputador}. ${resultado}`);
}

