class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.button = this.getAttribute('button') || 'Order now';
    this.subtitle = this.getAttribute('subtitle') || '';
    this.titleOne = this.getAttribute('title-one') || '';
    this.titleStrong = this.getAttribute('title-strong') || '';
    this.titleSecond = this.getAttribute('title-second') || '';
    this.price = this.getAttribute('price') || '';
    this.img = this.getAttribute('img') || '';
  }

  static get observedAttributes() {
    return ['button', 'subtitle', 'title-one', 'title-strong', 'title-second', 'price', 'img'];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal;
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = '';

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../../css/components/hero-component.css';
    this.shadowRoot.appendChild(link);

    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: contents;
        heigh:auto;
      }
    `;
    this.shadowRoot.appendChild(style);

    this.shadowRoot.innerHTML += `
      <div class="hero__container">
        <div class="hero__header">
          <h4 class="hero__subtitle">${this.subtitle}</h4>
          <h1 class="hero__title">
            ${this.titleOne} <span class="hero__highlight">${this.titleStrong}</span> ${this.titleSecond}
          </h1>
        </div>

        <div class="hero__cta">
          <button class="hero__button">${this.button}</button>
          <p class="hero__price">Price: $${this.price}</p>
        </div>

        <figure class="hero__image">
          <img src="${this.img}" alt="Hero Image">
        </figure>

        </div>
      </div>
    `;
  }
}

customElements.define("hero-component", Hero);