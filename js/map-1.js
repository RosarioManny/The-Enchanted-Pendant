const playerPicks = document.querySelectorAll(".choice")

let inventory = [];
let playerChoices = [];
let gameScore = 0;

let init = () => {
    inventory = [];
    playerChoices = [];
    gameScore = 0;   
}

init()


// playerPicks.onclick = function(evt) {
//     console.log(evt.target.innerText)
// };

playerPicks.forEach((pick) => {
    pick.addEventListener("click", (e) => {
        console.log(pick.classList)
     if (pick.classList[0] == "choice") {
        console.log("Hello")
     } else {
        console.log("Not Workin")
     }
    })
});

// vvvvvv Game Ending Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game ending will be decided by a value given to each choice. 
// If value <= 4 = Good Ending; If value > 4 && < 7 = Nuetral Ending; If value > 8 = Bad Ending;

// vvvvvv Inventory Modal Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
const modal = document.querySelector("#inventoryModal");
const openInventory = document.querySelector("#inventory");
const closeModal = document.querySelector(".close");

openInventory.onclick = () => {
    modal.style.display = "block"
}

closeModal.onclick = function() {
    modal.style.display = "none";
  }
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}