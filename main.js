document.addEventListener('mousemove', (e) => {
const x = (e.clientX - window.innerWidth / 2);
const y = (e.clientY - window.innerHeight / 2);
const powerTriangle = 10; 
const powerLayer = 20;
const powermetallictext = 10;

const triangle = document.querySelector('.triangle');
const layer = document.querySelector('#layer');
const links = document.querySelector('#link-bg');
const metallic_text = document.querySelector('.metallic-text');
const powerBackground = 50; 
document.body.style.backgroundPosition = `calc(50% + ${x / powerBackground}px) calc(50% + ${y / powerBackground}px)`;

if (triangle) {
    triangle.style.transform = `translate(${x / powerTriangle}px, ${y / powerTriangle}px)`;
}

if (layer) {
    layer.style.transform = `translate(${x / powerLayer}px, ${y / powerLayer}px)`;
}
if (metallic_text) {
    metallic_text.style.transform = `translate(${x / powermetallictext}px, ${y / powermetallictext}px)`;
}

if (links) {
    links.style.transform = `translate(${x / 15}px, ${y / 15}px)`;
}
});
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const note = item.querySelector('.mini-note');
        if (note) {
            const yMove = (e.clientY - item.getBoundingClientRect().top - 20) / 5;
            note.style.marginTop = `${yMove}px`;
        }
    });
    
    item.addEventListener('mouseleave', () => {
        const note = item.querySelector('.mini-note');
        if (note) note.style.marginTop = '0px';
    });
});
function ifrm() {
    const loader = document.getElementById('loadingFrame');
    setTimeout(function() {
        loader.classList.add('fade-out'); 
        setTimeout(function() {
            loader.style.display = 'none';
        }, 1000); 
    }, 5000); 
};