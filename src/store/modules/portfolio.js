function checkIfFundsEnough(funds, price, quantity) {
    if (!Number.isInteger(quantity) || quantity <= 0) {
        return false;
    } else if (funds >= price * quantity) {
        return true;
    } else {
        return false;
    }
}

const state = {
    fundsValue: 10001,
    userStocks: []
};

const mutations = {
    'BUY_STOCKS' (state, { stockId, stockPrice, stockQuantity }) {
        if (!checkIfFundsEnough(state.fundsValue, stockPrice, stockQuantity)) {
            return new Error("The lack of funds for the purchase");
        } else {
            var record = state.userStocks.find(function(element) { return element.id === stockId; });
            if (record) {
                record.quantity += stockQuantity;
            } else {
                state.userStocks.push({
                    id: stockId,
                    quantity: stockQuantity
                });

            }
            state.fundsValue -= stockPrice * stockQuantity;
        }

    },
    'SELL_STOCKS' (state, { stockId, stockPrice, stockQuantity }) {

        if (!Number.isInteger(stockQuantity) || stockQuantity <= 0) {
            return new Error("Wrong quantity format");
        } else {
            var record = state.userStocks.find(function(element) { return element.id === stockId; });

            if (record) {
                if(record.quantity < stockQuantity){
                    return new Error("You don't have such quantity to sell");
                }
                record.quantity -= stockQuantity;
                if(record.quantity == 0){
                    state.userStocks = state.userStocks.filter(elem => elem.id != stockId);
                }
            } else {
                return new Error("You don't have the stocks to sell");
            }
            state.fundsValue += stockPrice * stockQuantity;
        }
    }
};
const actions = {
    buyStocks: ({ commit }, order) => {
        commit('BUY_STOCKS', order);
    },
    sellStocks: ({ commit }, order) => {
        commit('SELL_STOCKS', order);
    }
};

const getters = {
    
    fundsValue: (state) => {
        return state.fundsValue;
    },

    stockPortfolio: (state, getters) => {
        return state.userStocks.map(stock => {
            const record = getters.availableStocks.find(elem => {
                return elem.id == stock.id
            });
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            };
        });
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};