const tabsHandlerElem = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElem = document.querySelectorAll('[data-tabs-field]')

for (let btn of tabsHandlerElem){
  btn.addEventListener('click', () => {
    tabsHandlerElem.forEach(item => item.classList.remove('design-list__item_active'))
    btn.classList.add('design-list__item_active')
    
    tabsContentElem.forEach(content => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        content.classList.remove('hidden')
      } else {
        content.classList.add('hidden')
      }
    })
  })
}
