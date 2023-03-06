<template>
    <div class="text-start m-2">
        <router-link class="home btn btn-lg border" to="/">HOME</router-link>
    </div>
    <div class="p-2" v-for="user in users">
        <messageListItem :user="user"></messageListItem>
    </div>
</template>

<script>
import messageListItem from "../items/message-list-item.vue";

export default {
    name: "messageList",
    created(){
        for(let id in this.$store.state.messagesStore.messages){
            let user = this.$store.getters["usersStore/getUserById"](id);
            this.users.unshift(user);
        }
    },
    components: {
        messageListItem,
    },
    data(){
        return{
            users: [],
        }
    }

}
</script>