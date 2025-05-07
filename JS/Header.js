function Header() {
    const HeaderHTML = `
        <header>
            <div id="Intestazione">
                <img id="immagine" src="Immagini/Logo (black).png" width="100" height="100" alt="Logo">
                <div id="Testo">
                    <h1>
                        <span class="Title1">&ensp;AVVENTURE</span>
                        <span class="Title2"> MEDITERRANEE</span>
                    </h1>
                </div>
            </div>
            <div class="Menu-desktop">
                <a href="Home.html">Home</a>
                <a href="Chi-Siamo.html">Chi Siamo</a>
                <a href="Viaggi.html">Viaggi</a>
                <a href="Last-minute.html">Last-minute</a>
                <a href="Contatti.html">Contatti</a>
            </div> 
            <div class="Menu-mobile">
                <button class="Menu-tendina" onclick="toggleDropdown()">☰</button>
                <ul class="Contenuto-menu">
                    <ul><a href="Home.html">Home</a></ul>
                    <ul><a href="Chi-Siamo.html">Chi Siamo</a></ul>
                    <ul><a href="Viaggi.html">Viaggi</a></ul>
                    <ul><a href="Last-minute.html">Last-minute</a></ul>
                    <ul><a href="Contatti.html">Contatti</a></ul>
                </ul>
            </div>

    `;
    document.body.insertAdjacentHTML('afterbegin', HeaderHTML);
}
document.addEventListener('DOMContentLoaded', Header);
