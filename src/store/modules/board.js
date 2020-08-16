import data from '@/data'

const state = {
    items: []
};

const mutations = {
    SET_STORE(state, items) {
        state.items = items;
    },
    boardSave(state, title, content){
        var dataNumber = data.board.length+1;
        var d = {"no":dataNumber, "title":title, "content":content, "view":"1"};
        state.items.push(d);
    },
    boardDelete(state, no){
        for(var i=0; i< data.board.length; i++){
            if(state.items[i].no==no+1) //data 인덱스는 1부터시작
            state.items.splice(i,1);
        }
    }
};

const actions= {
    initStore: ({ commit }) => {
        // axios.get('/static/board.json').then(response => {
        // console.log(response.data.board);
        // commit("SET_STORE", response.data.board);
        // });
        commit("SET_STORE", data.board);
    }
};

const getters= {
    items: state => state.items
}

export default {
    state,
    getters,
    actions,
    mutations
}