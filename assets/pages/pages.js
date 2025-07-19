//Fonction pour ouvrir le menu au clic sur le burger et fermer si il est ouvert : 
const burger = document.getElementById('burgerSVG');
function openMenu() {
    let burgerContainer = document.getElementById('burgerContainer');
    let currentDisplay = window.getComputedStyle(burgerContainer).display;
    
    console.log('Current display:', currentDisplay); // pour débogage

    if (currentDisplay === 'flex') {
        burgerContainer.style.display = 'none';
        console.log('Setting display to none'); // pour débogage
    } else {
        burgerContainer.style.display = 'flex';
        console.log('Setting display to flex'); // Ajouté pour débogage
    }
}

burger.addEventListener('click', openMenu);
// document.getElementById('menuAnchor').addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('Anchor clicked');
//     currentSlide(1);
//     //A debuguer
// });