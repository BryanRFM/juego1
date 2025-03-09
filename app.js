

// let parrafo=document.querySelector('p');
// parrafo.innerHTML='Escoge un número del 1 al 10';
let numeroSecreto=0;
let intentos=1;
let listaNumerosSorteados= [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
console.log(numeroSecreto); 
function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);    
    if(numeroDeUsuario===numeroSecreto){
            asignarTextoElemento('p',`Encontraste el valor en ${intentos} ${(intentos===1)?'vez':'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            if(numeroDeUsuario>numeroSecreto){
                asignarTextoElemento('p','El número es menor');
            }else{
                asignarTextoElemento('p','El número es mayor');
            }
            intentos++;
            limpiarCaja()
        }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*10)+1;

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
function condicionesInciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indica un número del 1 al 100');
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
    document.getElementById('reiniciar').disabled=true;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesInciales();
}

condicionesInciales();
