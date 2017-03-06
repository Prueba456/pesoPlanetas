var peso = parseInt(prompt("Ingresa tu peso"));
var planeta = parseInt(prompt("Elige tu planeta \n1. marte 2.jupiter"));
var gravedadTierra = 9.8;
var gravedadMarte = 3.7;
var gravedadJupiter = 24.8;
var resultado = document.getElementById('mostrar');
var pesoFinal;
if(planeta ==1){
  pesoFinal = peso*gravedadMarte / gravedadTierra;
  pesoFinal = parseInt(pesoFinal);
  planeta = "marte";
}
if(planeta ==2){
  pesoFinal = peso*gravedadJupiter / gravedadTierra;
  pesoFinal = parseInt(pesoFinal);
  planeta = "jupiter";
}



resultado.innerHTML = "tu peso en "+planeta+"  es: "+pesoFinal;
