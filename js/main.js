const whats = document.querySelectorAll(".whats");

whats.forEach(btn => {
    btn.addEventListener("click", function(e) {
        // Evita que o formulário recarregue a página caso o botão seja um submit
        e.preventDefault();

        let phone = "5546988192326";
        let finalMessage = "";

        // 1. Tenta encontrar um formulário pai ou próximo a este botão
        const form = btn.closest('form');

        // 2. Lógica Condicional: Se o botão estiver dentro de um formulário, pegamos os dados
        if (form) {
            const nome = form.querySelector('input[type="text"]')?.value || "Não informado";
            const tel = form.querySelector('input[type="tel"]')?.value || "Não informado";
            const assunto = form.querySelector('select')?.value || "Não informado";
            const msgEstendida = form.querySelector('textarea')?.value || "";

            finalMessage = `Olá! Meu nome é ${nome}.
                *Assunto:* ${assunto}
                *Contato:* ${tel}
                *Mensagem:* ${msgEstendida}`;
        } 
        // 3. Se não houver formulário (outros botões do site), usa a mensagem padrão
        else {
            finalMessage = 'Olá, tenho interesse na sua consultoria.';
        }

        // 4. Executa a abertura do WhatsApp
        const messageEncoded = encodeURIComponent(finalMessage);
        window.open(`https://wa.me/${phone}?text=${messageEncoded}`, "_blank");
    });
});

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


//individual
AOS.init({
    duration: 1000,
    once: true,
});

// Lógica do Guia de Respiração
const circle = document.getElementById('breath-circle');
const text = document.getElementById('breath-text');
let state = "inspire";

setInterval(() => {
    if (state === "inspire") {
        circle.style.transform = "scale(1.4)";
        text.innerText = "Expire...";
        state = "expire";
    } else {
        circle.style.transform = "scale(1.0)";
        text.innerText = "Inspire...";
        state = "inspire";
    }
}, 4000);


//casal
AOS.init();

function toggleAccordion(button) {
    const parent = button.closest('.group');
    const content = parent.querySelector('.accordion-content');
    
    parent.classList.toggle('active'); // Adiciona/remove a classe 'active' no pai para o SVG
    
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}


//gestao
AOS.init();

const slider = document.getElementById('anxietyRange');
const responseDiv = document.getElementById('anxietyResponse');

slider.oninput = function() {
    let val = this.value;
    if(val < 33) {
        responseDiv.innerHTML = '<div class="text-teal-400 text-5xl mb-6">🍃</div><h4 class="text-2xl font-bold mb-4 text-white">Equilíbrio em foco.</h4><p class="text-teal-100/60 text-white">Você está em um bom caminho. A terapia aqui serve para blindar sua mente contra estresses futuros.</p>';
    } else if(val < 66) {
        responseDiv.innerHTML = '<div class="text-yellow-400 text-5xl mb-6">⚠️</div><h4 class="text-2xl font-bold mb-4 text-white">Alerta moderado.</h4><p class="text-teal-100/60 text-white">Sua mente está começando a sobrecarregar. É o momento ideal para intervir antes que vire uma crise.</p>';
    } else {
        responseDiv.innerHTML = '<div class="text-red-400 text-5xl mb-6">🔥</div><h4 class="text-2xl font-bold mb-4 text-white">Urgência de Cuidado.</h4><p class="text-teal-100/60 text-white">Você está no limite. Vamos agendar uma sessão prioritária para aliviar esse peso imediatamente.</p>';
    }
};


