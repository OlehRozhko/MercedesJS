//humburger-menu
const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active')
  burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toggleMenu() )

const menuLists = document.querySelectorAll('.menu-list__link')

menuLists.forEach((menuListItem) => {
  menuListItem.addEventListener('click', () => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
  })
})