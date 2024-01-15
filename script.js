window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    const logo = document.getElementById('logo')

    if (window.scrollY > window.innerHeight - (5*16)){
        nav.classList.add('sticky')
        logo.style.display = "block"
    } else {
        nav.classList.remove('sticky')
        logo.style.display = "none"
    }
})