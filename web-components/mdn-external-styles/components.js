
class PopUpInfo extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    const imgSrc = this.hasAttribute('img') ? this.getAttribute('img') : 'img/default.png'
    const infoContent = this.getAttribute('data-text')
    
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="style.css">
      <span class="wrapper">
        <span class="icon" tabindex="0">
          <img src="${imgSrc}">
        </span>
        <span class="info">
          ${infoContent}
        </span>
      </span>
    `
  }
}

customElements.define('popup-info', PopUpInfo)