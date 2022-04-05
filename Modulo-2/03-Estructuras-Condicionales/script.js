let pago;
let horasExtra

function Calcular() {
    let horasTrabajo = document.getElementById("horastrabajo").value

    if (horasTrabajo <= 40) {
        pago = horasTrabajo * 16;
        document.getElementById("horasextra").value = 0
        document.getElementById("salario").value = pago
    }
    else {
        horasExtra = parseInt(horasTrabajo) - 40;
        document.getElementById("horasextra").value = horasExtra
        pago = (40*16)+parseInt(horasExtra*20);
        document.getElementById("salario").value = pago
    }
    
}