import { createRouter, createWebHistory } from "vue-router"
import userList from "./components/pages/user-list.vue"
import userDetail from "./components/pages/user-detail.vue"
import messageList from "./components/pages/message-list.vue"
import chat from "./components/pages/chat.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "user-list",
            component: userList,
        },
        {
            path: "/user/:id",
            name: "user-detail",
            component: userDetail,
        },
        {
            path: "/user/:id/chat",
            name: "user-chat",
            component: chat,
        },
        {
            path: "/message-list",
            name: "message-list",
            component: messageList,
        },
    ]
})