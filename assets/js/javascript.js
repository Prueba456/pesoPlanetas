var peso = parseInt(prompt("Ingresa tu peso"));
var planeta = parseInt(prompt("Elige tu planeta \n1. marte 2.jupiter"));
var gravedadTierra = 9.8;
var gravedadMarte = 3.7;
var gravedadJupiter = 24.8;
var gravedadSaturno = 9.05;
var gravedadUrano = 7.77;
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
if(planeta ==3){
  pesoFinal = peso*gravedadSaturno / gravedadTierra;
  pesoFinal = parseInt(pesoFinal);
  planeta = "saturno";
}
if(planeta ==4){
  pesoFinal = peso*gravedadUrano / gravedadTierra;
  pesoFinal = parseInt(pesoFinal);
  planeta = "urano";
}
resultado.innerHTML = "tu peso en "+planeta+"  es: "+pesoFinal;
