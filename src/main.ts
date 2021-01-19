import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { worker } from "./mocks/browser";

// if (process.env.NODE_ENV === "development") {
worker.start();
// }

createApp(App).use(store).use(router).mount("#app");
