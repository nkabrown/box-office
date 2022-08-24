import { css, html, LitElement } from 'lit';

export default class AppContainerElement extends LitElement {
  static properties = {};

  static styles = css`
    main {
      display: flex;
      flex-wrap: wrap;
      padding: 0 40px;
    }
  `;

  render() {
    return html`
      <main>
        <h1>Smoketest</h1>
      </main>
    `;
  }
}

customElements.define('app-container', AppContainerElement);
