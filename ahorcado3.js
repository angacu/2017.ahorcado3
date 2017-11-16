// definimos las variables
var palabras=["puigde","piña","dragon","oriol","indapa"];
var aleatorio = palabras[Math.floor(Math.random() * palabras.length)];
var palabra0="";
var letraAlmacenada="";
var numeroAciertos=0;
// salir del while de comprobacion
var bucle=false;
var intentos=0;
var solucion=[];
var acertado=false;
// definimos salirBucle
var salirBucle=false;

//Comprobacion con consoleLog
var adivinar=aleatorio;
console.log(adivinar);

for (var i = 0; i < adivinar.length; i++) {
  adivinar[i]
  console.log(adivinar);
}

//Cambiamos las letras por 0s
for (var i = 0; i < adivinar.length; i++) {
  palabra0=palabra0+"0";
}

// empezamos el bucle // charAt -> caracter x caracter
while (intentos<10 && salirBucle==false) {
    letraAlmacenada=prompt("Dime una letra");
  for (var i = 0; i < adivinar.length; i++) {

    if (adivinar.charAt(i)==letraAlmacenada) {
      acertado=true;
      solucion[i]=adivinar.charAt(i);
    }
  }
  if (acertado==false) {
    alert("Has fallado");
    intentos++;
  }else {
        alert("Has acertado");
          numeroAciertos++;
      }
      // numero de aciertos es igual q la longitud d la variable adiviar
      if (numeroAciertos==adivinar.length) {
        alert("has ganado fiera");
        salirBucle=true
      }
    acertado=false;
}

console.log(palabras);
console.log(solucion);
console.log(palabra0);

// mostramos resultados con el get element
var element = document.getElementById("palabraAdivinar");
element.textContent="Tu palabra era: "+adivinar;

var element = document.getElementById("intentos");
element.textContent="Has utilizado estos intentos:  "+intentos;
