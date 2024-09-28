//Calculadora de Prestamo
let nombre=prompt("Ingresa tu nombre")
if(nombre !==""){
}else{
    console.log("Reingresa tu nombre")
}
let apellido=prompt("Ingresa tu apellido")
if(nombre !==""){
}else{
    console.log("Reingresa tu apellido")
}
let email=prompt("Ingresa tu email")
if(nombre !==""){
}else{
    console.log("Reingresa tu email")
}

let montoInicial;
while (true) {
    montoInicial = parseFloat(prompt("Ingresa el préstamo a sacar"));
    if (montoInicial > 0) {
        break; 
    }
    alert("Por favor, ingresa un monto válido mayor que 0.");
}
function calcular(montoInicial) {
    const TASA_INTERES = 0.25; 

    function calcularInteres() {
        return montoInicial * TASA_INTERES;
    }

    let intereses = calcularInteres(); 
    console.log("Total de intereses: " + intereses);

    let monto = montoInicial + intereses; 
    console.log("Monto total a pagar: " + monto);

    let años = prompt("Ingrese los años a pagar");
    let meses = años * 12; 
    let porMes = monto / meses; 

    console.log("Pago por mes: " + porMes .toFixed(2));
    
}
calcular(montoInicial); 




