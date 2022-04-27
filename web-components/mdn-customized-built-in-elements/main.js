
class ExpandingList extends HTMLUListElement {
  constructor() {
    super();

    const uls = Array.from(this.querySelectorAll('ul'))
    const lis = Array.from(this.querySelectorAll('li'))

    for (const ul of uls) {
      ul.style.display = 'none'
    }

    for (const li of lis) {
      if(li.querySelectorAll('ul').length > 0) {
        li.setAttribute('class', 'closed')

        const childText = li.childNodes[0]
        const newSpan = document.createElement('span')

        newSpan.textContent = childText.textContent
        newSpan.style.cursor = 'pointer'

        newSpan.onclick = this.showl

        childText.parentNode.insertBefore(newSpan, childText)
        childText.remove(childText)
      }
    }
  }

  showl(e) {
    const nextul = e.target.nextElementSibling

    if(nextul.style.display == 'block') {
      nextul.style.display = 'none'
      nextul.parentNode.setAttribute('class', 'closed')
    } else {
      nextul.style.display = 'block'
      nextul.parentNode.setAttribute('class', 'open')
    }
    
  }
}

customElements.define('expanding-list', ExpandingList, { extends: 'ul' })