//Declaración de variables
var nombreUsuario =  "Bryan A. Leitao";
var saldoCuenta = 400;
var limiteExtraccion = 200;
var billetesDisponibles = 100;
var estado = actualizarEstado();

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar


function cambiarLimiteDeExtraccion() {
    var dinero = parseInt(prompt("De cuanto desea el limite de extraccion? minimo $100"));
    
    if(dinero >= 100){
        limiteExtraccion = dinero; 
        actualizarLimiteEnPantalla();
    }else alert("Ingrese una denominacion mayor o igual a $100");
}

function extraerDinero() {

    var dinero = parseInt(prompt("Cuanto desea extraer? limite: $" + limiteExtraccion)); 
    var saldoAnterior = saldoCuenta;
    var validacion;
    
    validacion = validacionExtraccion(dinero);
    validacion = validacionBilletes(dinero);
    validacion = validacionSaldo(dinero);

    if(validacion.codigo == 1){
        saldoCuenta -= dinero;
        
        alert("Has extraido: $" + dinero + 
        "\nSaldo anterior: $" + saldoAnterior +
        "\nSaldo actual: $" + saldoCuenta);

        actualizarSaldoEnPantalla();
    }else{
        alert(validacion.mensaje);
    }

    estado = actualizarEstado();
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
    var opcion = prompt("Que servicio desea abonar?" +
                        "\n1- Agua = $100"+
                        "\n2- Looz = $1500"+
                        "\n3- Internet = $500"+
                        "\n4- Gas = $300"
                    );
    switch(opcion){
        case "1":                    
            estado = validacionSaldo(100);
            console.log(estado.codigo == 1);
            if(estado.codigo == 1){
                saldoCuenta -= 100;
            }
            break;
       case 2:
            estado = validacionSaldo(100);
            if(validacionSaldo(1500) == 1){
                saldoCuenta -= 1500;
            }
            break;
        case 3:
            estado = validacionSaldo(100);
            if(estado.codigo == 1){
                saldoCuenta -= 500;
            }
            break;
        case 4:
            estado = validacionSaldo(100);
            if(estado.codigo == 1){
                saldoCuenta -= 300;
            }
            break;
        default:
            actualizarSaldoEnPantalla();
            actualizarEstado();
    }

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

//Funciones propias

function actualizarEstado(){
    return {"codigo" : 1, 
    "mensaje" : "Ok"
    };
}

function validacionExtraccion(dinero) {
    if(dinero > limiteExtraccion){
        estado.codigo = 2;
        estado.mensaje = "Solo puede extraer hasta $" + limiteExtraccion;
    }
    return estado;
}

function validacionSaldo(dinero) {
    if((saldoCuenta <= 0) || (saldoCuenta < dinero)){
        estado.codigo = 3;
        estado.mensaje = "Su saldo es de $" + saldoCuenta;
    }
    return estado;
}

function validacionBilletes(dinero) {
    if((dinero % billetesDisponibles) != 0 ){
        estado.codigo = 4;
        estado.mensaje = "Solo pueden ser dividendos multiplos de $" + billetesDisponibles;
    }
    return estado;
}
