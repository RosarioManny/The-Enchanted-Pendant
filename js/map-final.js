const imageChg = document.querySelector("img")
const gameEnd = document.querySelector("#result")
const newStory = document.querySelector("#story")
const firstLine = document.querySelector("span")

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

// const endResult = () => {
//     if (parseInt(localStorage.getItem("gameScore")) <= 4) {
//         gameEnd.innerHTML = "Good Ending"
//         imageChg.src = "https://www.mtgpics.com/pics/art/chk/286.jpg"
//         firstLine.innerHTML = "You are the goodest"
//         newStory.innerHTML = "You have won the game. !!!!@E!@ADA"

//     } else if (parseInt(localStorage.getItem("gameScore")) > 4 && parseInt(localStorage.getItem("gameScore")) <= 7) {
//         gameEnd.innerHTML = "Nuetral Ending"
//         imageChg.src = "https://www.mtgpics.com/pics/art/pla/138.jpg"

//     } else if(parseInt(localStorage.getItem("gameScore")) > 7) {
//         gameEnd.innerHTML = "Bad Ending"
//         imageChg.src = "https://www.mtgpics.com/pics/art/lci/269.jpg"
//     }
// }

// endResult()
// console.log(localStorage.getItem("gameScore"))
   