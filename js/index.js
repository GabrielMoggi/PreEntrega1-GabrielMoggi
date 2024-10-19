class Prestamo {
    constructor(nombre, apellido, email, montoInicial) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.montoInicial = montoInicial;
        this.TASA_INTERES = 0.25;
        this.intereses = this.calcularInteres();
        this.montoTotal = this.calcularMontoTotal();
    }

    calcularInteres() {
        return this.montoInicial * this.TASA_INTERES;
    }

    calcularMontoTotal() {
        return this.montoInicial + this.intereses;
    }

    calcularPagoMensual(años) {
        let meses = años * 12;
        return this.montoTotal / meses;
    }
}

let prestamos = [];

function solicitarPrestamo() {
    let nombre = prompt("Ingresa tu nombre");
    let apellido = prompt("Ingresa tu apellido");
    let email = prompt("Ingresa tu email");

    let montoInicial;
    while (true) {
        montoInicial = parseFloat(prompt("Ingresa el préstamo a sacar"));
        if (montoInicial > 0) {
            break; 
        }
        alert("Por favor, ingresa un monto válido mayor que 0.");
    }

    const nuevoPrestamo = new Prestamo(nombre, apellido, email, montoInicial);
    prestamos.push(nuevoPrestamo);

    let años = parseInt(prompt("Ingrese los años a pagar"));
    let pagoMensual = nuevoPrestamo.calcularPagoMensual(años);

    console.log(`Préstamo de ${nuevoPrestamo.montoInicial} por ${años} años`);
    console.log("Total de intereses: " + nuevoPrestamo.intereses);
    console.log("Monto total a pagar: " + nuevoPrestamo.montoTotal);
    console.log("Pago por mes: " + pagoMensual.toFixed(2));
}
