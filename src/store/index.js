import { createStore } from "vuex"
import { usersStore } from "./modules/users.js"
import { messagesStore } from "./modules/message.js"

export const store = createStore({
    modules:{
        usersStore: usersStore,
        messagesStore: messagesStore
    }
})