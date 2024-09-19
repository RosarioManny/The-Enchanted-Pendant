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
     
    handlePath()
    })
});

/// vv Handles path for MAP 4 vv
const handlePath = playerPicks.forEach((pick) => {
    pick.addEventListener("click", () => {
        if (pick.classList[0] == "choice") { 

            if (parseInt(localStorage.getItem("gameScore")) <= 5) {
            setTimeout(window.location.href = "../map-final-G.html", 1)

        } else if (parseInt(localStorage.getItem("gameScore")) > 5) {
            setTimeout(window.location.href = "../map-final-N.html", 1)
        }
        }
    })
})
// vv Music BG vv

const backgroundMusix = () => {
    const audio = document.getElementById('bgmusic');
    audio.volume = .1;
    audio.play()
}

backgroundMusix()
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