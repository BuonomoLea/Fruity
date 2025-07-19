function currentSlide(slideIndex) {
    const slides = document.querySelectorAll('.slides');
    const dots = document.getElementsByClassName('dot');
    const liMenu = document.getElementsByClassName('burgerLi');
  
    slides.forEach(function(slide, index) {
      slide.style.display = (index === slideIndex - 1) ? 'block' : 'none';
    });
    
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
      dots[i].style.backgroundColor = '';
    }
    dots[slideIndex - 1].classList.add('active');
    if (slideIndex === 1) {
        dots[0].style.backgroundColor = '#e95f7f';
        dots[1].style.backgroundColor = '#ef819a';
        dots[2].style.backgroundColor = '#ef819a';
        dots[3].style.backgroundColor = '#ef819a';
        dots[4].style.backgroundColor = '#ef819a';
        liMenu[0].style.color = '#e95f7f';
        liMenu[1].style.color = '#e95f7f';
        liMenu[2].style.color = '#e95f7f';
    } if (slideIndex === 2) {
        dots[0].style.backgroundColor = '#8ce05f';
        dots[1].style.backgroundColor = '#5be213';
        dots[2].style.backgroundColor = '#8ce05f';
        dots[3].style.backgroundColor = '#8ce05f';
        dots[4].style.backgroundColor = '#8ce05f'; 
        liMenu[0].style.color = '#5be213';
        liMenu[1].style.color = '#5be213';
        liMenu[2].style.color = '#5be213';
    } if (slideIndex === 3) {
        dots[0].style.backgroundColor = '#ffd900';
        dots[1].style.backgroundColor = '#ffd900';
        dots[2].style.backgroundColor = '#e6c300';
        dots[3].style.backgroundColor = '#ffd900';
        dots[4].style.backgroundColor = '#ffd900';
        liMenu[0].style.color = '#e6c300';
        liMenu[1].style.color = '#e6c300';
        liMenu[2].style.color = '#e6c300';
    } if (slideIndex === 4) {
        dots[0].style.backgroundColor = '#bb8fb8';
        dots[1].style.backgroundColor = '#bb8fb8';
        dots[2].style.backgroundColor = '#bb8fb8';
        dots[3].style.backgroundColor = '#8f558f';
        dots[4].style.backgroundColor = '#bb8fb8';
        liMenu[0].style.color = '#8f558f';
        liMenu[1].style.color = '#8f558f';
        liMenu[2].style.color = '#8f558f';
    } else if (slideIndex === 5) {
        dots[0].style.backgroundColor = '#4f86f7';
        dots[1].style.backgroundColor = '#4f86f7';
        dots[2].style.backgroundColor = '#4f86f7';
        dots[3].style.backgroundColor = '#4f86f7';
        dots[4].style.backgroundColor = '#0947c7';
        liMenu[0].style.color = '#0947c7';
        liMenu[1].style.color = '#0947c7';
        liMenu[2].style.color = '#0947c7';
    }
}
  
// Initialiser la première slide
currentSlide(1);

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