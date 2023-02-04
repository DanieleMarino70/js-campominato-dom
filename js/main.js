// TRACCIA:


// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
// (ovvero quando ha rivelato tutte le celle che non sono bombe).








//CREO BUTTON
const buttonEl = document.getElementById("start-game");


//SOLUZIONE TEMPORANEA
const containerEl = document.querySelector(".container");
containerEl.style.display = "none";



// SI CREA UN ARRAY DI 16 NUMERI CASUALI IN BASE ALLA DIFFICOLTA' (100, 81, 49) 

let bombe = [];
let isGameOver = false;
let squaresNumber = 0;

//AGGIUNGO AL BOTTONE L'EVENTO CLICK DOVE CREERA' LA GRIGLIA IN CONTAINER
buttonEl.addEventListener("click", function(){
    isGameOver = false;
    //CONTAINER CON STYLE TEMPORANEO
    containerEl.style.display = "block";
    //CREO UN ELEMENTO DALL'ID ROW
    const selectDifficultyEl = document.getElementById("game-difficulty");
    const gridEl = document.getElementById("grid");
    const difficultyValue = parseInt(selectDifficultyEl.value);
    //RICHIAMO LA FUNZIONE GRIGLIA
    generateGrid(gridEl, difficultyValue);

  });
  
  
// CLICCHIAMO SULLA CELLA 
    // SE IL NUMERO E' PRESENTE NELLA LISTA DELLE BOMBE
        // CELLA COLORATA DI ROSSO E GAME OVER = TRUE
    // ALTRIMENTI 
        // LA CELLA SI COLORA NORMALMENTE DI AZZURRO;

// SE COUNTER = HA NUMERI CONSENTITI PER VINCERE
    // HAI VINTO;



function generateGrid(grid, difficulty){
    //reset
    grid.innerHTML= "";
    bombe = [];
    squaresNumber = 0;
    let counter = 0;


    //console.log(bombe);
    if (difficulty == 1) {
      squaresNumber = 100;
      // CON NUMERI CHE NON SI RIPETONO
      while (bombe.length < 16) {
        const randomNumber = Math.floor(Math.random() * 100 + 1);
        if (!bombe.includes(randomNumber)) {
          bombe.push(randomNumber);
        }
      }
      console.log(bombe);

      for (let i = 0; i < squaresNumber; i++) {
        const text = i + 1;
        const squareEl = document.createElement("div");
        squareEl.classList.add("square");
        squareEl.classList.add("easy");
        squareEl.setAttribute("data-index", text);
        squareEl.addEventListener("click", function () {
          if (!isGameOver) {
            let allActives = document.querySelectorAll(".active");
            if (bombe.includes(parseInt(this.getAttribute("data-index")))) {
              this.classList.add("red");
              gameOver(allActives.length, false);
            } else {
              this.classList.add("active");
              // VINCERAI SE OCCUPERAI TUTTE LE CASELLE CON ACTIVE SENZA TOCCARE LE BOMBE
            }

            allActives = document.querySelectorAll(".active");
            console.log(allActives);
            if (allActives.length == squaresNumber - bombe.length) {
              gameOver(allActives.length, true);
            }
          } else {
          }
        });
        grid.append(squareEl);
      }

      

    } else if (difficulty == 2) {
      squaresNumber = 81;
      while (bombe.length < 16) {
        const randomNumber = Math.floor(Math.random() * 81 + 1);
        if (!bombe.includes(randomNumber)) {
          bombe.push(randomNumber);
        }
      }
      console.log(bombe);
      for (let i = 0; i < squaresNumber; i++) {
        const text = i + 1;
        const squareEl = document.createElement("div");
        squareEl.classList.add("square");
        squareEl.classList.add("medium");
        squareEl.setAttribute("data-index", text);
        squareEl.addEventListener("click", function () {
          if (!isGameOver) {
            let allActives = document.querySelectorAll(".active");
            if (bombe.includes(parseInt(this.getAttribute("data-index")))) {
              this.classList.add("red");
              gameOver(allActives.length, false);
            } else {
              this.classList.add("active");
              // VINCERAI SE OCCUPERAI TUTTE LE CASELLE CON ACTIVE SENZA TOCCARE LE BOMBE
            }

            allActives = document.querySelectorAll(".active");
            console.log(allActives);
            if (allActives.length == squaresNumber - bombe.length) {
              gameOver(allActives.length, true);
            }
          } else {
          }
        });

        grid.append(squareEl);
      }
    } else if (difficulty == 3) {
      squaresNumber = 49;
      while (bombe.length < 16) {
        const randomNumber = Math.floor(Math.random() * 49 + 1);
        if (!bombe.includes(randomNumber)) {
          bombe.push(randomNumber);
        }
      }
      console.log(bombe);
      for (let i = 0; i < squaresNumber; i++) {
        const text = i + 1;
        const squareEl = document.createElement("div");
        squareEl.classList.add("square");
        squareEl.classList.add("hard");
        squareEl.setAttribute("data-index", text);
        squareEl.addEventListener("click", function () {
          if (!isGameOver) {
            let allActives = document.querySelectorAll(".active");
            if (bombe.includes(parseInt(this.getAttribute("data-index")))) {
              this.classList.add("red");
              gameOver(allActives.length, false);
            } else {
              this.classList.add("active");
              // VINCERAI SE OCCUPERAI TUTTE LE CASELLE CON ACTIVE SENZA TOCCARE LE BOMBE
            }
            
            allActives = document.querySelectorAll(".active");
            console.log(allActives);
            if (allActives.length == (squaresNumber - bombe.length)) {
              gameOver(allActives.length, true);
            }
          } else {
            
          }
        });
        
        
        grid.append(squareEl);
      }
    }  
}



function gameOver(allActives, userWon){
  isGameOver = true;
  console.log(allActives);
  
  if (userWon){
    alert(`Complimenti!, hai totalizzato ${allActives} punti`);
    
  }else{
    alert(`Peccato!, hai totalizzato ${allActives} punti`);
  }
  


  //if (bombe.includes(parseInt(squareEl.getAttribute("data-index"))))
  const squares = document.querySelectorAll(".square");
  for (const square of squares){
    if(bombe.includes(parseInt(square.getAttribute("data-index")))){
      square.append("💣");
    }
  }
    
}














// if (bombe.includes(squareEl.value)) {
//   squareEl.append("💣");
//   squareEl.style.fontSize = "0rem";
// }