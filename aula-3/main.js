var listaFilmes = ['https://4.bp.blogspot.com/-BqAr1oi8d1o/VjLHIBujBYI/AAAAAAAACkA/KBXwucqK2GM/s1600/O%2BHomem%2Bda%2BTerra%2B2007%2Bposter.jpg', 'https://br.web.img3.acsta.net/pictures/14/02/04/13/20/128334.jpg', 'https://img.elo7.com.br/product/original/26A84E9/big-poster-serie-bojack-horseman-lo03-tamanho-90x60-cm-presente-nerd.jpg', 'https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg', 'https://i.pinimg.com/736x/1a/29/34/1a293489d2bbc60c81b84439e5d49508.jpg'];

var nomeFilmes = ['Homem da Terra', 'The Office', 'Bojack Horseman', 'Matrix', 'SWord Art Online: Ordinal Scale'];

for (var i=0; i < listaFilmes.length; i++){
  if(listaFilmes[i].endsWith('jpg')){
    document.write('<img src=' + listaFilmes[i] + '>' + nomeFilmes[i]);
  }
}



