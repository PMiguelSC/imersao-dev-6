var numeroSecreto = parseInt(Math.random() * 1001);
var quantidadeChutes = 0;

while(chute != numeroSecreto){
  var chute = prompt('Digite o um número entre 0 e 1000');
  
  if(chute == numeroSecreto){
    alert('Acertou');
  } else if (chute > numeroSecreto) {
    alert('Errou... O número secreto é menor que ' + chute);
  } else if(chute < numeroSecreto) {
    alert('Errou... O número secreto é maior que ' + chute);
  }
  if(quantidadeChutes != numeroSecreto){
    quantidadeChutes += 1;
    alert('Tentativas: ' + quantidadeChutes);
  }
  if(quantidadeChutes == 25) {
    alert("Limite de tentativas excedido, você perdeu!")
    break;
  }
}