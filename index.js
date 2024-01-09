const arrowbutton = document.querySelectorAll(".footer__arrow-button")
const arrowImage = document.querySelectorAll(".footer__arrow")
const footerTexts = document.querySelectorAll(".footer__text")
const headerMenuButton = document.querySelector(".header__menu-button")
const headerContainer = document.querySelector(".header")
const navBar = document.querySelector(".header__nav-bar")
const headerLinks = document.querySelector(".header__links")
const navBarLines = document.querySelectorAll(".header__menu-button-span")
const navLine1 = document.querySelector(".line-1")
const navLine2 = document.querySelector(".line-2")
const navLine3 = document.querySelector(".line-3")


arrowbutton.forEach((button, i) => {
  button.addEventListener("click", (e) => {
    footerTexts[i].classList.toggle("hidden")
    arrowImage[i].classList.toggle("arrow-inverted")
  })
})

headerMenuButton.addEventListener("click", () => {
  headerContainer.classList.toggle("header--cover")
  navBar.classList.toggle("nav-bar--open")
  navBarLines.forEach((bar, i) => {
    bar.classList.toggle(`line-${i+1}`)
  })
  headerLinks.classList.toggle("hidden")
})
