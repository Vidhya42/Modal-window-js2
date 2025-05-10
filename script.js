'use strict';

const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btncloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

//function-open hidden layout
const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove('hidden');
};

//function-close hidden layout
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

//When show modal is clicked, opens the hidden modal.
for(let i=0; i<showModal.length; i++){
    showModal[i].addEventListener("click", openModal);
}

//When X btn is clicked, closes the modal.
btncloseModal.addEventListener('click', closeModal);
//When background layout is clicked, closes the modal.
overlay.addEventListener('click', closeModal);

//Keyboard events
//When keyyboard esc key is pressed, closes the modal.
document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal();
    }
});


