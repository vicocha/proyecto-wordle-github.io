let diccionario = ["PERRO", "PARED", "LUCIA", "GATOS", "SOBRE", "GANAS", "TAREA", "LINDA", "MUJER"]
let jugadas = 7
let verde = "#43AA8B"
const BOTON = document.getElementById("guess-button")
BOTON.addEventListener("click", intentar)

function palabra(){
    let aleatorio = Math.floor(Math.random()*diccionario.length) 
    return diccionario[aleatorio]
}
let palabraOculta = palabra()
function intentar(){
  const INTENTO = document.getElementById("guess-input").value.toUpperCase()
  let fila = document.createElement("div")
  fila.className = "row"
  for (const i in INTENTO){
    let letra = document.createElement("span")
    letra.className = "letter"
    letra.innerText = INTENTO[i]
    fila.appendChild(letra)
        if (INTENTO[i]==palabraOculta[i]){
            letra.style.background = verde
          } else if (palabraOculta.includes(INTENTO[i])) {
            letra.style.background = "#F2DD6E"
          } else {
            letra.style.background = "#495D63"
          }
  }
  let grilla = document.getElementById("grid")
  grilla.appendChild(fila)

  jugadas--
    if (jugadas==0){
        terminar( "<h1>PERDISTE! INTENTA DE NUEVO </h1>")
      }   
      if (palabraOculta == INTENTO){
        terminar( "<h1>FELICIDADES! </h1>")

} 
} 
function terminar(mensaje){
  const INPUT = document.getElementById("guess-input");
  INPUT.disabled = true;
  BOTON.disabled = true;
  let contenedor = document.getElementById('guesses');
  contenedor.innerHTML = mensaje;
}
