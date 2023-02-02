function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  
  var trailerFilme = document.getElementById("trailer").value;
  
  if(filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".jpeg") || filmeFavorito.endsWith(".png")) {
    var elementoListaFilmes = document.getElementById("listaFilmes");
    
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + "<a href=" + trailerFilme + " target='_blank'>" + "<img src=" + filmeFavorito + ">" + "</a>";
  } else {
    alert("o tipo do arquivo é inválido");
  }
  document.getElementById("filme").value = "";
  document.getElementById("trailer").value = "";
}