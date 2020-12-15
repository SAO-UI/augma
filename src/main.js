import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

// css
import "./scss/augma.scss";
import "./index.css";

const app = createApp(App);

import AgmButton from "./components/button/index.vue";
import AgmIcon from "./components/icon/index.vue";
app.component("agm-button", AgmButton);
app.component("agm-icon", AgmIcon);
app.use(store).mount("#app");
