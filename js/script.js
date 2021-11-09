// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

document.getElementById('start').addEventListener('click', startGame);
const container =document.querySelector('.main-container');
const content = document.querySelector('.main-content h1');
let arr=[];
let i = 0;
let counter = 0 ;
let guess=[];

function startGame(){
  for (let i=0;i<5;i++){
    let x = Math.ceil(Math.random()*100);
    if(arr.includes(x)===false){
      console.log(arr.includes(x));
      arr.push(x)
    }else{
      i--
    }
  }

  container.innerHTML= arr;
  setInterval(function(){ 
    i++;
    if(i < 30){ 
      container.innerHTML= i
    }
    if(i == 30){
      for (let i = 0; i < 5; i++){   
        let numeroUtente = parseInt(prompt('inserisci un numero'));
        console.log(numeroUtente);
        if(arr.includes(numeroUtente)==true){
          counter++;
          guess.push(numeroUtente)
        }
      }
      
      if(counter===5){
        container.innerHTML=`Complimenti hai indovinato tutti i numeri`;
        content.innerHTML=guess;
      }else{
        container.innerHTML=`hai indovinato ${guess.length} numeri`;
        content.innerHTML=guess;
      }    
    } 
  }, 100);
}