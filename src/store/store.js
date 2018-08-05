import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import stocks from "./modules/stocks.js";
import portfolio from "./modules/portfolio.js";

export const store = new Vuex.Store({
    
    modules: {
        stocks,
        portfolio
    }
})