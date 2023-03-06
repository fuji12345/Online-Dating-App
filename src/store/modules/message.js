export const messagesStore = {
    namespaced: true,
    state() {
        return{
            messages: {},
        }
    },
    getters: {
        getMessagesById: (state) => (id) => {
            return state.messages[id];
        },
        getLastChat: (state) => (id) => {
            let userMessasges = state.messages[id];
            return userMessasges[userMessasges.length - 1];
        }
    },
    mutations: {
        setMessages(state, payload){
            for(let i = 0; i < payload.messages.length; i++){
                if(state.messages[payload.id] === undefined){
                    let messageList = [];
                    messageList.push(payload.messages[i]);
                    state.messages[payload.id] = messageList;
                }
                else{
                    state.messages[payload.id].push(payload.messages[i]);
                }
            }
        }
    },
    actions: {
    }
}