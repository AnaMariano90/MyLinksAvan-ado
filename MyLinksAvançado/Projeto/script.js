function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") // resume tudo aquilo nessa linha de codigo, o "togle" serve como troca.

  //vai verificar se existe a classe light feita no html
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")

  } else {
    html.classList.add("light")
  }*/
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //alterando o atributo src para modificar a imagem
    img.setAttribute("src", "./assets/chloeDia.png.png")
  } else {
    img.setAttribute("src", "./assets/chloeNoite.png.png")
  }
}
