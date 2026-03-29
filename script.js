// 1. Configurações da Música de Fundo
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-control');

// Define um volume bem baixo para ser "ambiente" (0.1 a 0.3 é o ideal)
music.volume = 0.1;

musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play().catch(error => {
            console.log("O navegador bloqueou o autoplay. Clique novamente.");
        });
        musicBtn.innerText = "Música: ON";
        musicBtn.style.color = "#fff";
        musicBtn.style.borderColor = "#fff";
    } else {
        music.pause();
        musicBtn.innerText = "Música: OFF";
        musicBtn.style.color = "#666";
        musicBtn.style.borderColor = "#222";
    }
});

// 2. Rolagem Suave para Links Internos
// Isso faz com que ao clicar em "Cortes", a tela deslize suavemente
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Compensa um pouco de espaço no topo
                behavior: 'smooth'
            });
        }
    });
});

// 3. Efeito de Revelação (Opcional)
// Faz o título e as fotos aparecerem com um leve delay ao carregar a página
window.addEventListener('load', () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease";
        document.body.style.opacity = "1";
    }, 100);
});