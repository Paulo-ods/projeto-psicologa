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

function destacarCard(idClicado) {
    // 1. Seleciona todos os cards
    const cards = document.querySelectorAll('.card-especialidade');
    
    cards.forEach(card => {
        // Seleciona os elementos internos do card
        const icon = card.querySelector('.icon-container');
        const title = card.querySelector('.card-title');
        const text = card.querySelector('.card-text');
        const link = card.querySelector('.card-link');

        if (card.id === idClicado) {
            // ESTADO ATIVO (Escuro e em destaque)
            card.classList.add('bg-teal-900', 'scale-105', 'z-10', 'shadow-2xl');
            card.classList.remove('bg-white/60', 'scale-95', 'opacity-80');
            
            icon.classList.add('bg-white/10', 'text-teal-300', 'border', 'border-white/10');
            icon.classList.remove('bg-teal-100', 'text-teal-700');
            
            title.classList.add('text-white');
            text.classList.add('text-teal-100/80');
            link.classList.add('text-teal-300');
        } else {
            // ESTADO INATIVO (Claro e recuado)
            card.classList.remove('bg-teal-900', 'scale-105', 'z-10', 'shadow-2xl');
            card.classList.add('bg-white/60', 'scale-95', 'opacity-80');
            
            icon.classList.remove('bg-white/10', 'text-teal-300', 'border', 'border-white/10');
            icon.classList.add('bg-teal-100', 'text-teal-700');
            
            title.classList.remove('text-white');
            title.classList.add('text-slate-800');
            text.classList.remove('text-teal-100/80');
            text.classList.add('text-slate-600');
            link.classList.remove('text-teal-300');
            link.classList.add('text-teal-700');
        }
    });
}

// Inicia o primeiro card como ativo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    destacarCard('card-individual'); 
});