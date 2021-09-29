var computador = Math.floor(Math.random() * 10 + 1);
var tentativa = 3;
console.log(computador);
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == computador) {
    computador = Math.floor(Math.random() * 10 + 1);
    tentativa = 3;
    elementoResultado.innerHTML =
      "Você acertou!" + "<br>" + "Pensei em outro número tente acertar.";
  } else if (chute > computador && chute < 11) {
    tentativa -= 1;
    elementoResultado.innerHTML =
      "Errou. Um pouco menos. Faltam " + tentativa + " chances.";
  } else if (chute < computador && chute > 0) {
    tentativa -= 1;
    elementoResultado.innerHTML =
      "Errou. Um pouco mais. Faltam " + tentativa + " chances.";
  } else if (chute > 10 || Number.isNaN(chute)) {
    tentativa -= 1;
    elementoResultado.innerHTML =
      "Erro! O valor digitado precisa ser um número e precisa estar entre 1 e 10. Faltam " +
      tentativa +
      " tentativas.";
  }
  if (tentativa == 0) {
    computador = Math.floor(Math.random() * 10 + 1);
    tentativa = 3;
    elementoResultado.innerHTML =
      "Acabaram as chances, o número foi " +
      computador +
      ", pensei em outro número, tente acertar";
  }
}