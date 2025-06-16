// Scroll Suave para os links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Botão voltar ao topo
const btnTop = document.createElement('button');
btnTop.innerHTML = "🔝";
btnTop.classList.add('btn-top');
btnTop.setAttribute('aria-label', 'Voltar ao topo');
document.body.appendChild(btnTop);

btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    btnTop.style.display = (window.scrollY > 400) ? 'block' : 'none';
});

// Animações quando aparece na tela
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('section, .imagem-container img').forEach(el => {
    observer.observe(el);
});

// Botão modo dark/light
const btnMode = document.createElement('button');
btnMode.innerHTML = "🌙";
btnMode.classList.add('btn-mode');
btnMode.setAttribute('aria-label', 'Alternar modo claro/escuro');
document.body.appendChild(btnMode);

// Verifica tema salvo
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    btnMode.innerHTML = '☀️';
}

btnMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        btnMode.innerHTML = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        btnMode.innerHTML = '🌙';
    }
});
