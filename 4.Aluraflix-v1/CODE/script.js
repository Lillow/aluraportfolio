var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/0/0e/Matrix_reloaded_.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/9/94/Matrix_revolutions.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/9/98/The_Matrix_Resurrections.png"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src =" + listaFilmes[i] + ">");
}