import { createApp } from "vue";
import App from "./App.vue";
import "virtual:svg-icons-register";
import "@/styles/index.scss";
import "uno.css";
import { createPinia } from "pinia";
import router from "@/router";
import "@/permission";

createApp(App).use(router).use(createPinia()).mount("#app");
