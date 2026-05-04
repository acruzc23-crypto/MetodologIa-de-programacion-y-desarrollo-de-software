//Cruz Chalen Alfredo Josua.
const txt_venta1 = document.getElementById("txt-venta1")
const txt_venta2 = document.getElementById("txt-venta2")
const txt_venta3 = document.getElementById("txt-venta3")
const txt_nombre = document.getElementById("txt-nombre")
const txt_total_ventas = document.getElementById("txt-total-ventas")
const txt_comision = document.getElementById("txt-comision")
const div_resultado = document.getElementById("div-resultado")
const txt_vendedor = document.getElementById("txt-vendedor")
const btn_calcular = document.getElementById("btn_calcular")
const txt_respuesta = document.getElementById("txt-respuesta")
const txt_sueldo_total = document.getElementById("txt-sueldo-total")

const txt_sueldo = document.getElementById("txt-sueldo")

btn_calcular.addEventListener("click", (e) => {
    let nombre=txt_nombre.value
    let sueldo=parseFloat(txt_sueldo.value)
    let ventas=[
        parseFloat(txt_venta1.value),
        parseFloat(txt_venta2.value),
        parseFloat(txt_venta3.value)
    ]

    if (nombre == "" || isNaN(sueldo) || isNaN(ventas[0]) || isNaN(ventas[1]) || isNaN(ventas[2])) {
        txt_respuesta.value="Ingrese todos los datos"
        return
    }

    calcular_sueldo(nombre, sueldo, ventas)
})

function calcular_sueldo(nombre, sueldo, ventas) {
    let total_ventas=0

    for (let i = 0; i < ventas.length; i++) {
        total_ventas=total_ventas + ventas[i]
    }

    let comision=total_ventas * 0.10
    let sueldo_total=sueldo + comision

    txt_vendedor.textContent="Vendedor: " + nombre
    txt_total_ventas.textContent="Total ventas: "+ total_ventas.toFixed(2)
    txt_comision.textContent="Comisión (10%): "+ comision.toFixed(2)
    txt_sueldo_total.textContent="Sueldo total: "+ sueldo_total.toFixed(2)
    txt_respuesta.value="Sueldo total: "+ sueldo_total.toFixed(2)
    div_resultado.style.display="block"
}