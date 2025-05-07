var IndiceCorrente = 0;

function MovimentoSlide(step) {
    const immagini = document.querySelectorAll('.Galleria-Immagini img');
    const immaginitotali = immagini.length;  

    IndiceCorrente += step;

    if (IndiceCorrente < 0) {
        IndiceCorrente = immaginitotali - 1;  
    } else if (IndiceCorrente >= immaginitotali) {
        IndiceCorrente = 0;  
    }

    const Galleria = document.querySelector('.Galleria-Immagini');
    Galleria.style.transform = `translateX(-${IndiceCorrente * 100}%)`;  
}

function toggleDropdown() 
{
    const content = document.querySelector('.Contenuto-menu');
    content.classList.toggle('show');
}




