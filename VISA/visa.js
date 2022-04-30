const tourist = document.getElementById("tourist")
const affaire = document.getElementById("affaire")
const medical = document.getElementById("medical")
const etude = document.getElementById("etude")


function touristiqueCall() {
    tourist.classList.add("active")
    affaire.classList.remove("active")
    medical.classList.remove("active")
    etude.classList.remove("active")
}

function affaireCall() {
    tourist.classList.remove("active")
    affaire.classList.add("active")
    medical.classList.remove("active")
    etude.classList.remove("active")
}

function medicalCall() {
    tourist.classList.remove("active")
    affaire.classList.remove("active")
    medical.classList.add("active")
    etude.classList.remove("active")
}

function etudeCall() {
    tourist.classList.remove("active")
    affaire.classList.remove("active")
    medical.classList.remove("active")
    etude.classList.add("active")
}

touristiqueCall()

const print1 = document.getElementById("print1")
const print2 = document.getElementById("print2")
const print3 = document.getElementById("print3")
const print4 = document.getElementById("print4")

print1.addEventListener("click", printFirst)
function printFirst() {
    touristiqueCall()
    window.print()
}

print2.addEventListener("click", printSecond)
function printSecond() {
    affaireCall()
    window.print()
}

print3.addEventListener("click", printThird)
function printThird() {
    medicalCall()
    window.print()
}

print4.addEventListener("click", printFourth)
function printFourth() {
    etudeCall()
    window.print()
}