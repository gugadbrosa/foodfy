const hideIngredients = document.querySelector(".hide-ingredients");
const showIngredients = document.querySelector(".show-ingredients");
const ingredients = document.querySelector(".ingredients");

const hidePreparation = document.querySelector(".hide-preparation");
const showPreparation = document.querySelector(".show-preparation");
const preparation = document.querySelector(".preparation");

const hideInformation = document.querySelector(".hide-information");
const showInformation = document.querySelector(".show-information");
const information = document.querySelector(".information");

function hide(button1, button2, thing) {
    button1.addEventListener("click", function(){
        button1.classList.add("hidden");
        button2.classList.remove("hidden");
        thing.classList.add("hidden");
    })

    button2.addEventListener("click", function(){
        button2.classList.add("hidden");
        button1.classList.remove("hidden");
        thing.classList.remove("hidden");
    })
}

hide(hideIngredients, showIngredients, ingredients);
hide(hideInformation, showInformation, information);
hide(hidePreparation, showPreparation, preparation);