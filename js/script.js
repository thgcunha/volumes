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
