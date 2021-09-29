function ConverterReal() {
  var valor = parseFloat(document.getElementById("valor").value);
  var valorEmReal = parseFloat(valor * 5.24).toFixed(2);
  var elementoConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em ral é R$: " + valorEmReal;
  elementoConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valor = parseFloat(document.getElementById("valor").value);
  var valorEmEuro = parseFloat(valor * 0.85).toFixed(2);
  var elementoConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em euro é €: " + valorEmEuro;
  elementoConvertido.innerHTML = valorConvertido;
}

function ConverterIene() {
  var valor = parseFloat(document.getElementById("valor").value);
  var valorEmIene = parseFloat(valor * 109.37).toFixed(2);
  var elementoConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em iene é ¥: " + valorEmIene;
  elementoConvertido.innerHTML = valorConvertido;
}

function ConverterBitcoin() {
  var valor = parseFloat(document.getElementById("valor").value);
  var valorEmBitcoin = parseFloat(valor * 0.000024);
  var elementoConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Bitcoin é ₿: " + valorEmBitcoin;
  elementoConvertido.innerHTML = valorConvertido;
}