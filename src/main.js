import { createApp } from "vue";
import App from "./App";
import router from "./router";
import "./styles/style.scss";

createApp(App).use(router).mount("#app");
