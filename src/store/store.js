import Vue from 'vue';
import Vuex from 'vuex';
import items from './modules/board.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        items
    }
});