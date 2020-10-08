const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')


for (let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
        const imageId = card.getAttribute('id')
        const mealName = card.querySelector('h3').innerHTML
        const authorName = card.querySelector('p').innerHTML

        modalOverlay.querySelector('.modal-overlay img').src=`/assets/${imageId}.png`
        modalOverlay.querySelector('.modal-overlay h3').innerHTML = mealName
        modalOverlay.querySelector('.modal-overlay p').innerHTML = authorName
        
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})

