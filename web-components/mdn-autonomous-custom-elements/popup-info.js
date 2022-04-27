
class PopUpInfo extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    const imgSrc = this.hasAttribute('img') ? this.getAttribute('img') : 'img/default.png'
    const infoContent = this.getAttribute('data-text')
    
    this.shadowRoot.innerHTML = `
      <style>
        .wrapper {
          position: relative;
        }
        .info {
          font-size: 0.8rem;
          width: 200px;
          display: inline-block;
          border: 1px solid black;
          padding: 10px;
          background: white;
          border-radius: 10px;
          opacity: 0;
          transition: 0.6s all;
          position: absolute;
          bottom: 20px;
          left: 10px;
          z-index: 3;
        }
        img {
          width: 1.2rem;
        }
        .icon:hover + .info, .icon:focus + .info {
          opacity: 1;
        }
      </style>
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