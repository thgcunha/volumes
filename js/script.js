function calcVolumeCubo() {
    let ladocubo = document.getElementById("ladocubo").value
    let volumecubo = ladocubo**3
    document.getElementById("volumecubo").innerText = volumecubo
}

function calcVolumeCubo() {
    let ladocubo = document.getElementById("ladocubo").value
    let volumecubo = ladocubo**3
    document.getElementById("volumecubo").innerText = volumecubo
}

function calcAreaLosango() {
    let diagonalmaior = document.getElementById("diagonalmaior").value
    let diagonalmenor = document.getElementById("diagonalmenor").value
    let area =  ( diagonalmaior * diagonalmenor ) / 2 
    document.getElementById("arealosango").innerText = area
}

function calcAreaTrapezio() {
    let basemaior = document.getElementById("basemaior").value
    let basemenor = document.getElementById("basemenor").value
    let alturatrapezio = document.getElementById("alturatrapezio").value
    let area =  (basemaior + basemenor)  * alturatrapezio  / 2  
    document.getElementById("areatrapezio").innerText = area
}


function calcEquacaoSegundoGrau() {
    let valora = document.getElementById("valora").value
    let valorb = document.getElementById("valorb").value
    let valorc = document.getElementById("valorc").value
    let delta =  valorb**2 - 4* valora * valorc
    document.getElementById("delta").innerText ="O valor de delta é:" + delta

    let x1 = (-valorb - Math.sqrt(delta)) /( 2 * valora)
    document.getElementById("x1").innerText = "O valor de x1 é:" +  x1

    let x2= (-valorb + Math.sqrt(delta)) / (2 *valora)
    document.getElementById("x2").innerText = "O valor de x1 é:" +  x2
    
}

