document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html');
    const btnFontUp = document.querySelector('#btnFontUp');
    const btnFontDown = document.querySelector('#btnFontDown');
    let fontSize = 20;

    btnFontUp.addEventListener('click', () => {
        fontSize += 2;
        html.style.fontSize = `${fontSize}px`;
    });

    btnFontDown.addEventListener('click', () => {
        if (fontSize <= 12) return;

        fontSize -= 2;
        html.style.fontSize = `${fontSize}px`;
    });
});
