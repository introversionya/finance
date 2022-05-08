import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import messagePlugin from "@/utils/message.plugin";
import Loader from "@/components/app/Loader";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component("Loader", Loader);

firebase.initializeApp({
  apiKey: "AIzaSyDYS-GlieeJwSBVlTu9rYJd3dPEo6v3CzY",
  authDomain: "finance-vue-b0dcc.firebaseapp.com",
  projectId: "finance-vue-b0dcc",
  storageBucket: "finance-vue-b0dcc.appspot.com",
  messagingSenderId: "70372556860",
  appId: "1:70372556860:web:3c5c437b9e0211d7328339",
  measurementId: "G-9B4GLF3NHX",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
