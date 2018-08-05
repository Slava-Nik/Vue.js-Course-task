import stocks from "../../data/stocks.js";

const state = {
    availableStocks: [],
    savedStocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.availableStocks = stocks;
    },
    'UPDATE_STOCKS' (state) {

        function generateNewPrice(oldPrice) {

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            var extentOfChange = (Math.random() >= 0.85) ? "big" : "small";
            var changeDirection = (Math.random() >= 0.4) ? "+" : "-";
            var changePercent = null;
            var change = null;
            var newPrice = null;

            switch (extentOfChange) {
                case "small":
                    {
                        changePercent = getRandomInt(1, 30);
                        break;
                    }
                case "big":
                    {
                        changePercent = getRandomInt(35, 70);
                        break;
                    }

            }
            change = ((oldPrice * changePercent) / 100);
            newPrice = Number((Number(changeDirection + change) + oldPrice).toFixed(0));
            newPrice = Number(newPrice == 0 ? getRandomInt(1, 21) : newPrice);
            return newPrice;
        }

        state.availableStocks = state.availableStocks.map((currentStock) => {
            currentStock.price = generateNewPrice(currentStock.price);
            return currentStock;
        });

    },

    'SAVE_STOCK_PRICES' (state) {
        var savedStocks = [];
        state.availableStocks.forEach((item) => {
            var id = item.id;
            var name = item.name;
            var price = item.price
            savedStocks.push({id: id, name: name, price: price});
        });
        state.savedStocks = savedStocks;
    },

    'LOAD_STOCK_PRICES' (state) {
        if (state.savedStocks.length == 0) return;
        var savedStocks = [];
        state.savedStocks.forEach((item) => {
            var id = item.id;
            var name = item.name;
            var price = item.price
            savedStocks.push({id: id, name: name, price: price});
        });
        state.availableStocks = savedStocks;

        console.log("loaded");
    }
};

const actions = {
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    },
    updateStocksPrices: ({ commit }) => {
        commit('UPDATE_STOCKS');
    },
    saveStockPrices: ({ commit }) => {
        commit('SAVE_STOCK_PRICES');
    },
    loadStockPrices: ({ commit }) => {
        commit('LOAD_STOCK_PRICES');
    }
};

const getters = {
    availableStocks: (state) => {
        return state.availableStocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};