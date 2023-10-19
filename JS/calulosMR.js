
function CalcularDistancia() {
    let velocidad = document.getElementById("fdVelocidad")
    let tiempo = document.getElementById("fdTiempo")
    if (velocidad == null) { return }
    if (tiempo == null) { return }
    let resultado = (velocidad.value * tiempo.value)
    document.getElementById("fdResultado").innerText = resultado
}

function CalcularVelocidad() {
    let distancia = document.getElementById("fvDistancia")
    let tiempo = document.getElementById("fvTiempo")
    if (distancia == null) { return }
    if (tiempo == null) { return }
    let resultado = (distancia.value / tiempo.value)
    document.getElementById("fvResultado").innerText = resultado
}

function CalcularTiempo() {
    let distancia = document.getElementById("ftDistancia")
    let velocidad = document.getElementById("ftVelocidad")
    if (distancia == null) { return }
    if (velocidad == null) { return }
    let resultado = (distancia.value / velocidad.value)
    document.getElementById("ftResultado").innerText = resultado
}

function CalcularVelocidadInicial(){
    let velocidadInicial = document.getElementById("f2vVelocidadInicial")
    let aceleracion = document.getElementById("f2vAceleracion")
    let tiempo = document.getElementById("f2vTiempo")
    let resultado = (parseFloat(velocidadInicial.value )+ parseFloat( (aceleracion.value*tiempo.value)))
    document.getElementById("f2vResultado").innerText = resultado
}

function CalcularPosicionFinal() {
    let posicionInicial = parseFloat(document.getElementById("f2pPosicion").value);
    let tiempo = parseFloat(document.getElementById("f2pTiempo").value);
    let velocidadInicial = parseFloat(document.getElementById("f2pVelocidadInicial").value);
    let aceleracion = parseFloat(document.getElementById("f2pAceleracion").value);
    console.log(posicionInicial, tiempo,velocidadInicial,aceleracion);
    let resultado = posicionInicial + (velocidadInicial * tiempo) + (0.5 * aceleracion * Math.pow(tiempo, 2));
    console.log(resultado);
    document.getElementById("f2pResultado").innerText = resultado;
}

function  CalcularTiempo2(){
    let velocidadInicial = parseFloat(document.getElementById("f2tVelocidadInicial").value)
    let velocidadFinal = parseFloat(document.getElementById("f2tVelocidadFinal").value)
    let aceleracion = parseFloat(document.getElementById("f2tAceleracion").value)
    console.log(velocidadFinal, velocidadInicial, aceleracion);
    let resultado = (velocidadFinal-velocidadInicial)/aceleracion
    console.log(resultado);
    document.getElementById("f2tResultado").innerText = resultado
}