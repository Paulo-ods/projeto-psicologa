// Mudar estilo do Header ao rolar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg', 'bg-white/95');
        nav.classList.remove('bg-white/80');
    } else {
        nav.classList.remove('shadow-lg', 'bg-white/95');
        nav.classList.add('bg-white/80');
    }
});