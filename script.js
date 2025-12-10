function toggleMode() {
  const html = document.documentElement /*
               document = a UI do site
               documentElement = HTML

  /* if(html.classList.contains('light')) {
    html.classList.remove('light')
  }else{
    html.classList.add('light')
  } */

  /* modo dificil mas que também funciona acima */

  html.classList.toggle("light")
  /* modo simples */

  /* pegar a tag image */

  const img = document.querySelector("#Profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", " mayk em uma camiseta azul sem oculos.")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
