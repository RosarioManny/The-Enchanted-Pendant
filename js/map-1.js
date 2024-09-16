const buttonFirst = document.querySelector(".first")

let Inventory = [];
let playerChoices = [
    {item: "Banana"},
    {item: "Apple"},
    {item: "Melon"}
];


buttonFirst.addEventListener("click", (e) => {
    console.log(e.target)
})