const pageLoaded = () => {

  const hamburger = document.querySelector('.hamburger')
  const links = document.querySelector('.nav-items')

  hamburger.addEventListener("click", () => {
    links.classList.toggle('active')
  })

}


window.addEventListener("load", pageLoaded)