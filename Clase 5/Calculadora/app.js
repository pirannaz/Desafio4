const nombre = "Fabian";
const apellido = "Monje";
let edad = 41;
const dni = 12345678;

function calcular() {
    event.preventDefault();
    let resultado = 0;
    let color = "";
    //Ingresa desde el formulario como STRING
    let N1 = document.getElementById('numero1').value;
    let N2 = document.getElementById('numero2').value;
    let OP = parseInt(document.getElementById('operadores').value);
    console.log(typeof(OP));

    //Averiguar de que tipo es nuestro valor ingresado
   //console.log(typeof(N1));

    //Parseo de String a Integer
    N1 = parseInt(N1);
    //console.log(typeof(N1));
    N2 = parseInt(N2);
    //Imprimo la suma de los dos numeros
    //console.log(N1 + N2);
    // Muestro en el HTML el resultado

    if(OP === 1){ //SUMA
            resultado = N1 + N2;
            color = "green";
    }

    if(OP === 2){ //RESTA
            resultado = N1 - N2;
            color = "red";
    }

    if(OP === 3){ //MULTIPLICACION
            resultado = N1 * N2;
            color = "black";
    }

    if(OP === 4){ //DIVISION
            resultado = N1 / N2;
            color = "orange";
    }

    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("nombre").innerHTML = N1;
    document.getElementById("apellido").innerHTML = N2;
    document.getElementById("resultado").style.color = color;
}