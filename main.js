function tocasom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}   
const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador<listaDeTeclas.lenght){
    const efeito = listaDeTeclas(contador).classlist[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas(contador).onclick = function(){
        tocasom("#som_tecla_aplausos");
        tocasom(idAudio);
    
    }
    contador = contador +1;
    console.log(contador);
    }

