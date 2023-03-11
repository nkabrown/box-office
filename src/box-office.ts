import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('box-office')
export class BoxOfficeApp extends LitElement {
  static styles = css`
    :host {
    }
  `;

  render() {
    return html`<main>Smoketest</main>`;
  }
}
