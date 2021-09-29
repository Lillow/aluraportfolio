function Media() {
	var nota1 = parseFloat(document.getElementById("nota1").value);
	var nota2 = parseFloat(document.getElementById("nota2").value);
	var nota3 = parseFloat(document.getElementById("nota3").value);
	var nota4 = parseFloat(document.getElementById("nota4").value);

	var notaFinal = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);
	var elementoMedia = document.getElementById("mediaFinal");
	var media = "A sua média foi: " + notaFinal;
	elementoMedia.innerHTML = media;
	if (notaFinal >= 6) {
		var elementoAprovado = document.getElementById("resultado");
		var aprovado = "Você foi aprovado!";
		elementoAprovado.innerHTML = aprovado;
	} else {
		var elementoReprovado = document.getElementById("resultado");
		var reprovado = "Você foi reprovado!";
		elementoReprovado.innerHTML = reprovado;
	}
}

//Revisão
//Variáveis, Strings, console.log, toFixed, operações matemáticas e concatenação