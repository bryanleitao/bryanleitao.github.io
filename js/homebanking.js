//Declaración de variables
var nombreUsuario =  "Bryan A. Leitao";
var saldoCuenta = 400;
var limiteExtraccion = 200;
var billetesDisponibles = 100;
var estado = actualizarEstado();
var servicios = [{"nombre" : "Agua", 
                "importe" : 350},
                {"nombre" : "Telefono", 
                "importe" : 425},
                {"nombre" : "Luz", 
                "importe" : 210},
                {"nombre" : "Internet", 
                "importe" : 570},
                ];
var cuentasAmigas = [{"nombre" : "CA1",
                     "nroCuenta": "12345"},
                     {"nombre" : "CA1", 
                     "nroCuenta": "67890"}
                    ];


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar


function cambiarLimiteDeExtraccion() {
    var dinero = parseInt(prompt("De cuanto desea el limite de extraccion? minimo $100"));
    
    if(dinero >= 100){
        limiteExtraccion = dinero; 
        alert("Su limite de extracion nuevo es de $" + limiteExtraccion);
        actualizarLimiteEnPantalla();
    }else alert("Ingrese una denominacion mayor o igual a $100");
}

function extraerDinero() {

    var dinero = parseInt(prompt("Cuanto desea extraer? limite: $" + limiteExtraccion)); 
    var saldoAnterior = saldoCuenta;
    
    estado = validacionExtraccion(dinero);
    estado = validacionBilletes(dinero);
    estado = validacionSaldo(dinero);

    if(estado.codigo == 1){
        saldoCuenta -= dinero;
        
        alert("Has extraido: $" + dinero + 
        "\nSaldo anterior: $" + saldoAnterior +
        "\nSaldo actual: $" + saldoCuenta);

        actualizarSaldoEnPantalla();
    }else{
        alert(estado.mensaje);
    }

    estado = actualizarEstado();
}

function depositarDinero() {

        var dinero = parseInt(prompt("Cuanto desea depositar?")); 
        var saldoAnterior = saldoCuenta;

        if(!isNaN(dinero)){
            saldoCuenta += dinero;

            alert("Has depositado: $" + dinero + 
            "\nSaldo anterior: $" + saldoAnterior +
            "\nSaldo actual: $" + saldoCuenta);
            actualizarSaldoEnPantalla();
    }
}
function pagarServicio() {
    var mensaje = "Que servicio desea abonar?";

    for(var i = 0; i < servicios.length; i++){
        mensaje += "\n"+ (i+1) + " - " + servicios[i].nombre + " - $" + servicios[i].importe;
    };

    var opcion = prompt(mensaje);

    
    switch(opcion){
        case "1":                 
        case "2":                 
        case "3":                 
        case "4":                 
            importeServicio = servicios[opcion-1].importe;
            nombreServicio = servicios[opcion-1].nombre;

            estado = validacionSaldo(importeServicio);
            
            if(estado.codigo == 1){
                saldoCuenta -= importeServicio;
                alert("Se ha abonado " + nombreServicio + " $" + importeServicio)
            }else{
                alert("No se ha podido abonar el servicio " + nombreServicio + ". " + estado.mensaje);
            }
            break;
        default:
            alert("ingrese una opcion correcta");
       
    }
    actualizarSaldoEnPantalla();
    estado = actualizarEstado();
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
    console.log("actualizo estado");
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
