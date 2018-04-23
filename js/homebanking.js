//Declaración de variables
var nombreUsuario =  "Bryan A. Leitao";
var saldoCuenta = 400;
var limiteExtraccion = 200;
var billetesDisponibles = 100;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar

function validacionExtraccion(dinero) {
    var error = {"codigo" : 1, 
                "mensaje" : "Ok"
                };

    console.log(error.codigo);
    if(dinero > limiteExtraccion){
        if(saldoCuenta <= 0){
            if((dinero % billetesDisponibles) != 0 ){
                error.codigo = 2;
                error.mensaje = "Puede hacer extracciones multiplos de $" + billetesDisponibles;
                console.log(error.codigo);
            }
            error.codigo = 3;
            error.mensaje = "Su saldo es de $" + saldoCuenta;
            console.log(error.codigo);
        }
        error.codigo = 3;
        error.mensaje = "Solo puede extraer hasta $" + limiteExtraccion;
        console.log(error.codigo);
    }

    return error;
}

function cambiarLimiteDeExtraccion() {

}

function extraerDinero() {

    var dinero = parseInt(prompt("Cuanto desea extraer? limite: $" + limiteExtraccion)); 
    var saldoAnterior = saldoCuenta;
    
    
    var validacion = validacionExtraccion(dinero);
    console.log(validacion[0]);

    if(validacion.codigo == 1){
        saldoCuenta -= dinero;
        
        alert("Has extraido: $" + dinero + 
        "\nSaldo anterior: $" + saldoAnterior +
        "\nSaldo actual: $" + saldoCuenta);

        actualizarSaldoEnPantalla();
    }else{
        alert(validacion.mensaje);
    }

}

function depositarDinero() {

        var dinero = parseInt(prompt("Cuanto desea depositar?")); 

        var saldoAnterior = saldoCuenta;

        saldoCuenta += dinero;

        alert("Has depositado: $" + dinero + 
        "\nSaldo anterior: $" + saldoAnterior +
        "\nSaldo actual: $" + saldoCuenta);
        actualizarSaldoEnPantalla();
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

