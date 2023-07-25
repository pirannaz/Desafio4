const nombre = "Fabian";
const apellido = "Monje";
let edad = 41;
const dni = 12345678;

function calcular() {
    event.preventDefault();
    //Ingresa desde el formulario como STRING
    let N1 = document.getElementById('numero1').value;
    let N2 = document.getElementById('numero2').value;

    //Averiguar de que tipo es nuestro valor ingresado
   console.log(typeof(N1));

    //Parseo de String a Integer
    N1 = parseInt(N1);
    console.log(typeof(N1));
    N2 = parseInt(N2);
    //Imprimo la suma de los dos numeros
    console.log(N1 + N2);
    // Muestro en el HTML el resultado
    document.getElementById("resultado").innerHTML = (N1 + N2);
}