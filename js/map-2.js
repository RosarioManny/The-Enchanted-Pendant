const playerPicks = document.querySelectorAll(".choice")

let inventory;
// let playerChoices = [];
let gameScore;

// vvvvvv Restart Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

let init = () => {
    inventory = JSON.parse(localStorage.getItem("inventory"));

    inventory.forEach((item) => {
        document.getElementById("mdlText").innerHTML += (`<li>${item}</li>`) 
    })

    // playerChoices = []; // I think I don't need this variable because Inventory is basically the player's choices.
    gameScore = parseInt(localStorage.getItem("gameScore"));
}

init()
// vvvvvv Player Choice Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

playerPicks.forEach((pick) => {
    pick.addEventListener("click", () => {
        // console.log(pick.classList)
     if (pick.classList[0] == "choice") {
        // document.getElementById("mdlText").innerHTML += (`<li>${pick.textContent}</li>`) 
        inventory.push(pick.textContent) // adding pick to inventory array

        if (pick.classList[1] == "good") {
            gameScore++
            // console.log(gameScore)
        } else if (pick.classList[1] == "nuetral") {
            gameScore += 2
            // console.log(gameScore)
        } else if (pick.classList[1] == "bad") {
            gameScore += 3
            // console.log(gameScore)
        }
        
        localStorage.setItem("inventory", JSON.stringify(inventory));
        localStorage.setItem("gameScore", gameScore)
     } 
     
     window.location.href = "../html/map-3.html"
    })
});

// vvvvvv Inventory Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// The choices that are put within the player's inventory

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