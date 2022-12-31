import { createApp } from "vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";

import "./assets/style/global.css";
import "./assets/style/colors.css";
import "./assets/style/responsive.css";

import App from "./App.vue";
import router from "./router/index";

createApp(App).use(router).mount("#app");
