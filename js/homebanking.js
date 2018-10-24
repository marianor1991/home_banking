//Declaración de variables

//Variables iniciales
var saldoCuenta = 0; //saldoCuenta
var limiteExtraccion = 3000;

//VARIABLES LOGIN
var nombreUsuario = "Mariano";
var contraseña = "perrogato";

//VARIABLES SERVICIOS
var agua = 350;
var luz = 210;
var internet = 570;
var telefono = 425;

//VARIABLES TRANSFERENCIA
var nombres_cuentas = ["Laura", "Alejandro"];
var nros_cuentas = [1234567, 7654321];

var arreglo_arreglos = [
    ["Laura",1234567],
    ["Alejandro", 7654321]
]




//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    var cont = document.getElementById("contenido");
    cont.style.display = "none";
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var ant = limiteExtraccion;
    var nuevo = prompt("Ingrese el nuevo límite de extracción.");
    var nuevo_limite = nuevo.trim();
    parseInt(nuevo_limite);
    if (validaciones(nuevo_limite)) {
        if ( nuevo_limite >= 100 ) {
        limiteExtraccion = nuevo_limite
        alert(`HAS CAMBIADO EL LIMITE DE EXTRACCION!\nNuevo límite de extracción $ ${limiteExtraccion}\nLimite de extracción anterior $ ${ant}`);
        actualizarLimiteEnPantalla();
        }
        else
        {
            alert("El límite de extracción debe ser un número mayor o igual a 100.");
        }
    }
}

function extraerDinero() {

    var saldoAnterior = saldoCuenta;

    if (haySaldo()) {
        var ext = prompt("Ingrese la cantidad a extraer:");
        extraccion = ext.trim();
        parseInt(extraccion);
        if (validaciones(extraccion)) {

            if (extraccion < 100) {
                alert("El dinero a extraer debe ser mayor o igual a $100.")
            }
            else if (extraccion > saldoAnterior) {
                alert("El dinero a extraer supera el saldo en su cuenta.")
            }
            else if (extraccion > limiteExtraccion) {
                alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.")
            }
            else if (extraccion <= saldoAnterior) {
                var x = (extraccion % 100);
                if (parseInt(x) === 0) {
                    var resultado = saldoAnterior - extraccion;
                    alert(`Saldo anterior: $ ${saldoAnterior}\nHas extraido: $ ${extraccion.trim()}\n Saldo actual: $ ${resultado}`);
                    saldoCuenta = resultado;
                    actualizarSaldoEnPantalla();
                }
                else {
                    alert("Solo puedes extraer billetes de $100.")
                }
            }
        }
    }
}


function depositarDinero() {

    var saldoAnterior = saldoCuenta;
    var deposito = prompt("Ingresa la cantidad de dinero a depositar.");
    parseInt(deposito);

    if (validaciones(deposito)) {
        var resultado = saldoAnterior + parseInt(deposito);
        alert(`Saldo anterior: $ ${saldoAnterior}\nHas depositado: $ ${deposito.trim()}\n Saldo actual: $ ${resultado}`);
        saldoCuenta = resultado;
        actualizarSaldoEnPantalla();
    }
}


function pagarServicio() {

    var saldoAnterior = saldoCuenta;

    if (haySaldo()) {
        var sel = prompt("Ingrese el número que corresponda con el servicio que queres pagar\n1-Agua\n2-Luz\n3-Internet\n4-Teléfono")
        parseInt(sel);
        if (validaciones(sel))
            switch (sel) {
                case "1":
                    if (saldoCuenta >= agua) {
                        var res = saldoCuenta - agua;
                        saldoCuenta = res;
                        alert(`Has pagado el servicio: $ ${agua}.\nSaldo Anterior: $ ${saldoAnterior}.\nDinero descontado: $ ${agua}.\nSaldo Actual: $${saldoCuenta}`);
                        actualizarSaldoEnPantalla();
                    }
                    else {
                        alert("No tiene dinero suficiente para pagar el servicio.");
                    }
                    break;
                case "2":
                    if (saldoCuenta >= luz) {
                        var res = saldoCuenta - luz;
                        saldoCuenta = res;
                        alert(`Has pagado el servicio: $ ${luz}.\nSaldo Anterior: $ ${saldoAnterior}.\nDinero descontado: $ ${luz}.\nSaldo Actual: $${saldoCuenta}`);
                        actualizarSaldoEnPantalla();
                    }
                    else {
                        alert("No tiene dinero suficiente para pagar el servicio.");
                    }
                    break;
                case "3":
                    if (saldoCuenta >= internet) {
                        var res = saldoCuenta - internet;
                        saldoCuenta = res;
                        alert(`Has pagado el servicio: $ ${internet}.\nSaldo Anterior: $ ${saldoAnterior}.\nDinero descontado: $ ${internet}.\nSaldo Actual: $${saldoCuenta}`);
                        actualizarSaldoEnPantalla();
                    }
                    else {
                        alert("No tiene dinero suficiente para pagar el servicio.");
                    }
                    break;
                case "4":
                    if (saldoCuenta >= telefono) {
                        var res = saldoCuenta - telefono;
                        saldoCuenta = res;
                        alert(`Has pagado el servicio: $ ${telefono}.\nSaldo Anterior: $ ${saldoAnterior}.\nDinero descontado: $ ${telefono}.\nSaldo Actual: $${saldoCuenta}`);
                        actualizarSaldoEnPantalla();
                    }
                    else {
                        alert("No tiene dinero suficiente para pagar el servicio.");
                    }
                    break;
                default:
                    alert("El servicio no existe.")
                    break;
            }
    }
}

function transferirDinero() {
    
    var saldoAnterior = saldoCuenta;
    var res = false;
    var nro;

    if (haySaldo()) {
        monto_transferir = prompt("Ingrese el monto a transferir");
        if (validaciones(monto_transferir)) {
            if (parseInt(monto_transferir) <= saldoAnterior) {
                nro = prompt("Ingrese el nro de cuenta destino para la transferencia");
                parseInt(nro);
                if (validaciones(nro)) {
                    var i = 0;
                    var long = nros_cuentas.length;
                    for ( i ; i < long ; i++ ) {
                        if (nro == nros_cuentas[i]) {
                            res = true;
                            break;
                        }
                    }
                        if ( res == true){
                            alert(`Se han transferido: $ ${monto_transferir}.\nCuenta destino: ${nro}.`)
                            saldoCuenta = saldoAnterior - monto_transferir;
                            actualizarSaldoEnPantalla();
                        }
                        else
                        {
                            alert('El nro de cuenta destino no existe');
                        }
                }
            }
            else{
                alert("El monto a transferir supera el saldo de tu cuenta");
            }
        }
    }
}

function IniciarSesion() {
    
    var user = document.getElementById("username").value;
    var passwd = document.getElementById("password").value;
    var mip = document.getElementById("message");

    if (user === null || user === "") {
        mip.innerHTML = "Por favor, completar con un nombre de usuario";
    }
    else if (user !== nombreUsuario) {
        mip.innerHTML = "El nombre de usuario ingresado es incorrecto";
    }
    else if (passwd === contraseña) {
        alert(`Bienvenido/a: ${user} ya puedes comenzar a realizar operaciones`);
        document.getElementById("show").style.display = "none";
        document.getElementById("contenido").style.display = "block";
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
    }
    else {
        mip.innerHTML = "La contraseña ingresada no es correcta";
    }

}

function haySaldo() {
    if (saldoCuenta > 0 && saldoCuenta >= 100) {
        return true;
    }
    else if (saldoCuenta > 0 && saldoCuenta < 100) {
        alert("No hay dinero suficiente para realizar extracciones.");
    }
    else {
        alert("No hay dinero en la cuenta.")
    }
}

function validaciones(x) {

    if (!x || !x.trim()) {
        alert("Debe ingresar un valor");
        return false;
    }
    else if (isNaN(x)) {
        alert("El valor ingresado debe ser un número entero.");
        return false;
    }
    else if (x < 0) {
        alert("No pueden ingresarse números iguales o menores a 0.");
        return false;
    }
    else {
        return true;
    }
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
