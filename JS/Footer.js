function Footer() {
    const footerHTML = `
        <footer>
                <br>
                I contenuti del presente Sito - comprensivi di dati, notizie , informazioni, immagini, grafici, marchi e nomi a dominio - sono di propriet\u00E0 di Avventure Mediterranee S.p.a
                <br> Avventure Mediterranee S.p.a &copy; 2024
                <br><br> Corso Italia, 20 - 89900 Vibo Valentia (VV)
                <br> Tel: +39 0963.1234567 | P.IVA 09123456789
            </p>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);


}

document.addEventListener('DOMContentLoaded', Footer);
