
const btn = document.querySelector('button');

btn.addEventListener('click',function(){
  // Vado a prendere la const della griglia

  const grigliaGioco = document.getElementById('campo-gioco');

 // Vado a specificare il numero di quadratini che devono esserci in tutta la griglia
 const celle = 100;

 //Creo un ciclo per formare numeri progressivi da 1 a 100
 for(let i = 0; i < celle; i++)
 console.log(i)




})

function quadratino(){
    // Creo una const per poi successivamente assegnargli classe css 
    const quadratino = document.createElement ('div');
    
    //Aggiungo alla const la classe css
    quadratino.classList.add('cella-gioco');

}