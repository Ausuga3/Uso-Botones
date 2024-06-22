
let titulo=document.querySelector('h1')
titulo.innerHTML = "Hora del desafio";


function botonConsole(){
    alert("El boton fue clicado");
}


function botonPromt(){
    let ciudad = prompt("En que ciudad de Brazil estuviste? ");
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}

function botonAlerta(){
    alert("Yo amo JS");
}


function botonSuma(){
    let num1 = parseInt(prompt("Ingrese un numero"))
    let num2 = parseInt(prompt("Ingrese otro numero"))
    
    alert(`la suma de ${num1} y ${num2} es ${num1+num2}`)
}
