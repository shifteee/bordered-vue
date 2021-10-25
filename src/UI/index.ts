import Vue, { App as IApp } from 'vue';

import App from './App.vue';

export default class UI {
    private readonly app: IApp;

    constructor() {
        this.app = Vue.createApp({
            components: {
                App,
            },
        });
    }

    provide(key: string, value: any) {
        this.app.provide(key, value);
    }

    render(container: HTMLElement) {
        this.app.mount(container);
    }
}
