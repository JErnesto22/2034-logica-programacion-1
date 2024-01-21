let rango = prompt("En que rango quieres jugar?");
let numeroSecreto = Math.floor(Math.random()*rango) + 1; // declaramos variable con let
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maxIntentos = 5;
console.log("el numero secreto es: " , numeroSecreto)

while (numeroSecreto != numeroUsuario){ // mientras numeroSecreto sea diferente a numero usuario se repetira el codigo
    console.log('El numero secreto es: ' , numeroSecreto);
    numeroUsuario = parseInt(prompt(`Ingresa un numero entre 1 y ${rango} `));    // le permite al usuario ingresar informacion / let guarda el valor que ingresa el user/ parseInt convierte un dato a tipo Int
    console.log('El valor elegido es: ' , numeroUsuario);
    if (numeroUsuario == numeroSecreto){
        alert(`Acertaste, el numero secreto es: ${numeroUsuario} lo hiciste en ${intentos} ${intentos > 1 ? 'veces' : 'vez' } `);//muestra una alerta en pantalla
        /* 
        TEMPLATE STRING
        se usan comillas invertidas (``) para poder usar valores de variables en conjunto con valores ya establecidos, 
        para esto es necesario usar dentro de las comillas invertidas el signo $ seguido de llaves{} y dentro de estas
        colocar el valor de la variable (o codigo js). Ejemplo ${nombreUsuario}
        */ 
    } else if (numeroUsuario > numeroSecreto){
        alert('El numero secreto es menor');
    } else {
        alert('El numero secreto es mayor');
    }
    console.log('El resultado de la comparacion es: ' , numeroUsuario == numeroSecreto);
    /* 
    Se puede crear un contador usando :
    contador = contador + 1;
    contador += 1;
    contador++;
    */
    intentos++;//incremento del contador
    if (intentos > maxIntentos){ //evalua el numero de intentos, si es mayor a maxIntentos, termina el juego
        alert(`Llegaste al numero maximo de ${maxIntentos} intentos`);
        break; // termina el ciclo
    }
}





