document.addEventListener('DOMContentLoaded', () => {

    // NAVEGAÇÃO SUAVE
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // BOTÃO VOLTAR AO TOPO
    const btnTop = document.querySelector('.btn-top');
    if (btnTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btnTop.style.display = 'flex';
            } else {
                btnTop.style.display = 'none';
            }
        });
        btnTop.addEventListener('click', () => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ANIMAÇÕES DE SCROLL (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.project-card').forEach(el => {
        observer.observe(el);
    });

    // BOTÃO MODO DARK/LIGHT
    const btnMode = document.querySelector('.btn-mode');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        btnMode.innerHTML = '☀️';
    } else {
        btnMode.innerHTML = '🌙';
    }

    btnMode.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            btnMode.innerHTML = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            btnMode.innerHTML = '🌙';
        }
    });

    // MANIPULADOR DO FORMULÁRIO DE CONTATO
    const contatoForm = document.querySelector('#contato-form form');
    if(contatoForm) {
        contatoForm.addEventListener('submit', function(e) {
            // Apenas para feedback visual, o envio é gerenciado pelo Formspree
            // Você pode adicionar uma validação mais robusta aqui se desejar
            const btn = this.querySelector('button');
            btn.innerText = 'Enviando...';
            btn.disabled = true;

            // Simula um delay para o usuário ver a mensagem de envio
            setTimeout(() => {
                // O Formspree irá redirecionar para uma página de "obrigado".
                // Se não quiser o redirecionamento, use AJAX.
            }, 1000);
        });
    }
});