const playerPicks = document.querySelectorAll(".choice")

let inventory = [];
// let playerChoices = [];
let gameScore = 0;

// vvvvvv Restart Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

let init = () => {
    inventory = [];
    // playerChoices = []; // I think I don't need this variable because Inventory is basically the player's choices.
    gameScore = 0;   
}
init()

// vvvvvv Changing Scene Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

// vvvvvv Player Choice Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

playerPicks.forEach((pick) => {
    pick.addEventListener("click", () => {
        console.log(pick.classList)
     if (pick.classList[0] == "choice") {
        document.getElementById("mdlText").innerHTML += (`<li>${pick.textContent}</li>`) 
        if (pick.classList[1] == "good") {
            gameScore++
            console.log(gameScore)
        } else if (pick.classList[1] == "nuetral") {
            gameScore += 2
            console.log(gameScore)
        } else if (pick.classList[1] == "bad") {
            gameScore += 3
            console.log(gameScore)
        }
        // *SCRAPPED* document.getElementById("mdlText").append(pick.textContent)
     } 
    })
});

const nextScene = () => {

}

// vvvvvv Inventory Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// The items that are put within the player's inventory

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