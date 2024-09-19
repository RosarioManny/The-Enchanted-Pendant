const restartButton = document.querySelector(".reset")

let inventory;
let gameScore;

let init = () => {
    inventory = JSON.parse(localStorage.getItem("inventory"));

    inventory.forEach((item) => {
        document.getElementById("mdlText").innerHTML += (`<li>${item}</li>`) 
    })
    gameScore = parseInt(localStorage.getItem("gameScore"));
}

const retryButton = () => {
    restartButton.addEventListener('click', () => {
        window.location.href = "index.html";
    })
    
}

retryButton()

const backgroundMusix = () => {
    const audio = document.getElementById('bgmusic');
    audio.volume = .1;
    audio.play()
}

backgroundMusix()