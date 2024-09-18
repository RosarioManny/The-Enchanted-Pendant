const playerPicks = document.querySelectorAll(".choice")

let inventory;
let gameScore;

// vvvvvv Restart Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

let init = () => {
    inventory = JSON.parse(localStorage.getItem("inventory"));

    inventory.forEach((item) => {
        document.getElementById("mdlText").innerHTML += (`<li>${item}</li>`) 
    })
    gameScore = parseInt(localStorage.getItem("gameScore"));
}

init()

// vvvvvv Player Choice && Inventory Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Player makes a choice. Points go up. Choice is pushed into Inventory

playerPicks.forEach((pick) => {
    pick.addEventListener("click", () => {
     if (pick.classList[0] == "choice") {
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
     
    //  window.location.href = "../html/map-3.html"
    handlePath()
    })
});

// vv Handles path for MAP 3 vv
const handlePath = playerPicks.forEach((pick) => {
    pick.addEventListener("click", () => {
            if (pick.classList[1] == "good" || pick.classList[1] == "nuetral")
                window.location.href = "./map-5.html"
    
            else if (pick.classList[1] == "bad") {
                window.location.href = "./map-6.html"
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