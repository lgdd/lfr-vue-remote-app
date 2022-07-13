import { createApp } from 'vue'
import App from './App.vue'

const ELEMENT_ID = 'lfr-vue-remote-app'

class WebComponent extends HTMLElement {
  connectedCallback() {
    createApp(App).mount(this)
  }
}

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, WebComponent);
}

createApp(App).mount('#lfr-vue-remote-app')