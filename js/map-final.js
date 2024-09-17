const playerPicks = document.querySelectorAll(".choice")
const imageChg = document.querySelector("#scene1")

let inventory;
let gameScore;

// vvvvvv Restart Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

// let init = () => {
//     inventory = JSON.parse(localStorage.getItem("inventory"));

//     inventory.forEach((item) => {
//         document.getElementById("mdlText").innerHTML += (`<li>${item}</li>`) 
//     })
//     gameScore = parseInt(localStorage.getItem("gameScore"));
// }

// init()

// vvvvvv Game Ending Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game ending will be decided by a value given to each choice. 
// If value <= 4 = Good Ending; If value > 4 && < 7 = Nuetral Ending; If value > 8 = Bad Ending;

const endResult = () => {
    if (parseInt(localStorage.getItem("gameScore")) <= 4) {
        document.querySelector("#result").innerHTML = "Good ending"

    } else if (parseInt(localStorage.getItem("gameScore")) > 4 && parseInt(localStorage.getItem("gameScore")) <= 7) {
        document.querySelector("#result").innerHTML = "Silly Ending"

    } else if(parseInt(localStorage.getItem("gameScore")) > 7) {
        document.querySelector("#result").innerHTML = "Bad Ending"
    }
}

endResult()
console.log(localStorage.getItem("gameScore"))
   