var jogadores = [];

function addJogador() {
  var foto = document.getElementById("addFoto").value;
  var nome = document.getElementById("addNome").value;
  if (foto != "") {
    jogadores.push({
      imagem: foto,
      nome: nome,
      vitorias: 0,
      derrotas: 0,
      empates: 0,
      pontos: 0
    });
  } else if (foto == "") {
    jogadores.push({
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOXCaiyNkrt9Ew-qeU8N7L73RUrvffQHo4xccZur_RSEoa1I8NAIyYyHSajFeN9TW6PY&usqp=CAU",
      nome: nome,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    });
  }
  document.getElementById("addNome").value = "";
  document.getElementById("addFoto").value = "";
  exibirJogadoresNaTela(jogadores);
  console.log(jogadores);
}

function removerJogador() {
  var removerJogador = document.getElementById("addNome").value;
  var jogadorExcluido = jogadores.findIndex((i) => i.nome === removerJogador);

  if (jogadorExcluido < 0) {
    document.getElementById("erro").innerHTML = " Erro em adicionar Jogador";
  } else {
    jogadores.splice(jogadorExcluido, 1);
    exibirJogadoresNaTela(jogadores);
    document.getElementById("addNome").value = "";
  }
}

function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 2 + jogador.empates;
  return pontos;
}

function exibirJogadoresNaTela() {
  var elemento = "";

  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td><img src=" + jogadores[i].imagem + "></td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitoria</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}
exibirJogadoresNaTela();

function reTabela() {
  jogadores = [];
  exibirJogadoresNaTela(jogadores);
}