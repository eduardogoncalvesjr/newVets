const top_arrow = document.querySelector('.top')
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const navMenuLinks = document.querySelectorAll('.nav-link')


let scrollFunc = function() {
    let y = window.scrollY;
    if (y >= 400) {
        top_arrow.style.opacity = 1
    } else {
        top_arrow.style.opacity = 0
    }
}

window.addEventListener('scroll', scrollFunc)


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

navMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
  })
});