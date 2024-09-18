const playerPicks = document.querySelectorAll(".choice")

let inventory;
// let playerChoices = [];
let gameScore;

// vvvvvv Restart Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

let init = () => {
    inventory = [];
    // playerChoices = []; // I think I don't need this variable because Inventory is basically the player's choices.
    gameScore = 0;   
}

init()

// vvvvvv Player Choice Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

playerPicks.forEach((pick) => {
    pick.addEventListener("click", () => {
        
     if (pick.classList[0] == "choice") {
        // document.getElementById("mdlText").innerHTML += (`<li>${pick.textContent}</li>`) 
        inventory.push(pick.textContent) // adding pick to inventory array

        if (pick.classList[1] == "good") {
            gameScore++
    
        } else if (pick.classList[1] == "nuetral") {
            gameScore += 2
            
        } else if (pick.classList[1] == "bad") {
            gameScore += 3
           
        }
    
        localStorage.setItem("inventory", JSON.stringify(inventory));
        localStorage.setItem("gameScore", gameScore)
     } 
    
    window.location.href = "./map-2.html"
    handlePath()
    })
});

// vv Handles path for MAP 1 vv
const handlePath = playerPicks.forEach((pick) => {
    pick.addEventListener("click", () => {
            if (pick.classList[1] == "good" || pick.classList[1] == "nuetral")
                window.location.href = "./map-2.html"
    
            else if (pick.classList[1] == "bad") {
                window.location.href = "./map-3.html"
            }
    }) 
})


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