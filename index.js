// Pedir al usuario que piense en un numero de 1 al 100 
//Por medio de confrm o por el DOM mostras el numero que podria ser el que penso el cliente y preguntar si es en numero
// Mostras en el dom o por aler "Tu numero es el X, excelente decision "
//Si no esta entre el 1 y el 100 mostras la pregunta inicial 

document.getElementById("boton").addEventListener("click",iniciar);
		function iniciar(){
			let vidas = 10;
			let numComputer = Math.floor((Math.random()*100)+1);
			while(vidas>0){
				let numU = prompt("Te quedan " + vidas +
					" vidas. Escribe el número: ");
				if(numU==numComputer){
					alert("¡Felicidades, ganaste! :D ");
					break;
				}
				if(numU>numComputer){
					alert("Lo siento, el número que pensé es menor");
				}
				if(numU<numComputer){
					alert("Lo siento, el número que pensé es mayor");
				} // Cierra el if
				vidas--;
			} //Cierra el while

			if(vidas==0){
				alert("Lo siento, perdiste :( intentalo de nuevo ");
			}

		} //Cierra la funcion



// codigo del primer intento

/*let nombre = prompt ("Bienvenido al juego Adivina el numero, cual es tu nombre");

  for(intentos; intentos < 5; intentos++){
    numero = parseInt(prompt(nombre+ `, piensa en un numero entre del ` +min  + `al` +max ));

     if(numero >= min && numero <= max ) {
        
    
    } else { 
        alert (`Debe ingregar un numero entre ` +min + `y` +max );
    }
}
*/
