// Generare inimioare plutitoare
(function createHearts() {
    const container = document.querySelector('.hearts-container');
    if (!container) return;

    const HEART_COUNT = 35;

    for (let i = 0; i < HEART_COUNT; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // o singură dimensiune pentru toate părțile inimii
        const size = Math.random() * 10 + 14; // 14–24px
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;

        // pseudoelementele se scalează proporțional
        heart.style.setProperty('--heart-size', `${size}px`);

        // poziționare
        heart.style.left = `${Math.random() * 100}vw`;

        // animație
        const duration = Math.random() * 6 + 8;
        heart.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 5;
        heart.style.animationDelay = `${delay}s`;

        container.appendChild(heart);
    }
})();



// Tranziție intro -> scrisoare
document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.getElementById('open-letter-btn');
    const introScreen = document.getElementById('intro-screen');
    const letterScreen = document.getElementById('letter-screen');

    if (!openBtn || !introScreen || !letterScreen) return;

    openBtn.addEventListener('click', function () {
        introScreen.classList.add('fade-out');

        setTimeout(() => {
            introScreen.style.display = 'none';
            letterScreen.classList.remove('hidden');
            letterScreen.classList.add('active', 'fade-in');
        }, 550);
    });
});
