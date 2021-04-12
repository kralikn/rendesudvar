const pageLoaded = () => {

  console.log("betöltés");

  const hamburger = document.querySelector('.hamburger')
  const links = document.querySelector('.nav-items')

  hamburger.addEventListener("click", () => {
    console.log("click");
    links.classList.toggle('active')
  })

}


window.addEventListener("load", pageLoaded)