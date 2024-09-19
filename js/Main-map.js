const playerPicks = document.querySelectorAll(".choice")

let inventory;
let gameScore;

// vvvvvv Restart Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

let init = () => {
    inventory = [];
    gameScore = 0;   
}

init()

// vvvvvv Player Choice Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

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

// vv Handles path for MAP 1 vv
const handlePath = playerPicks.forEach((pick) => {
    pick.addEventListener("click", () => {
        if (pick.classList[0] == "choice") { 
            if (parseInt(localStorage.getItem("gameScore")) < 3) {
            setTimeout(window.location.href = "./map-2.html", 1)
        } else if (parseInt(localStorage.getItem("gameScore")) >= 3) {
            setTimeout(window.location.href = "./map-3.html", 1)
        }
        }
    })
})

// vv Music BG & SFX vv

const backgroundMusix = () => {
    const audio = document.getElementById('bgmusic');
    audio.volume = .1;
    audio.play()
}
backgroundMusix()

playerPicks.forEach(pick => {
    const sfxSounds = document.getElementById("sfx");
    pick.addEventListener("click", (event) => {
        sfxSounds.volume = 1;
        sfxSounds.play()
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