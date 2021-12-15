const html = document.querySelector("html")
const checkbox = document.querySelector('#btn');

console.log(checkbox);

checkbox.addEventListener('change', function() {
    html.classList.toggle('dark-mode');
})

window.sr= ScrollReveal();
ScrollReveal({ reset: true });

sr.reveal('.title',{ delay: 200 })
sr.reveal('.strong-1',{ delay: 300 })
sr.reveal('.strong-2',{ delay: 400 })
sr.reveal('.paragraph',{ delay: 600 })

sr.reveal(".display-image",{delay: 350})
sr.reveal(".red-title",{delay: 200})
sr.reveal(".green-title",{delay: 400})
sr.reveal(".yellow-title",{delay: 600})

sr.reveal('.brazil-map',{delay: 350})
sr.reveal('.title-2',{delay: 200})
sr.reveal('.paragraph-2',{ delay: 600 })

sr.reveal('.title-3',{ delay: 200 })
sr.reveal('.paragraph-3',{ delay: 300 })
sr.reveal('.childrens-image',{ delay: 350 })
