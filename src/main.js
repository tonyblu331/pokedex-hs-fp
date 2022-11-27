/* eslint-disable no-unused-vars */
import { createApp } from "vue";
import { createRouter } from "vue-router";

import App from "./views/PokedexView.vue";
import router from "./router/router";

createApp(App).use(router).mount("#app");
