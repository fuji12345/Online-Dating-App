<template>
    <div class="text-start fixed-top bg-light chat-nav">
        <router-link class="home btn btn-lg border mb-1" to="/">HOME</router-link>
        <h3>chat > {{ $store.state.usersStore.users[$route.params.id].name.first }} {{ $store.state.usersStore.users[$route.params.id].name.last }}</h3>
    </div>
    
    <div class="mt-4 pt-5">
        <div class="w-50 bg-light mx-auto pb-5 mb-5">
            <div class="" v-for="(messages, index) in $store.state.messagesStore.messages[$route.params.id]" :key="messages">
                <div v-if="(index % 2 === 0)" class="d-flex justify-content-end my-3 py-3">
                    <h4>{{ messages }}</h4>
                    <img class="icon" src="../../assets/icon1.png">
                </div>
                <div v-else class="d-flex justify-content-start my-3 py-3">
                    <img class="icon" :src="$store.state.usersStore.users[$route.params.id].picture.medium">
                    <h4>{{ messages }}</h4>
                </div>
            </div>
        </div>

    </div>


    <div class="fixed-bottom bg-dark p-4">
        <input class="w-50 send-message-box" type="text" placeholder="message" v-model="inputMessage">
        <button class="btn btn-lg btn-primary mx-2" @click="sendMessage" >send</button>
    </div>
</template>

<script>
export default {
    name: "chat",
    create(){
        this.messages = this.$store.getters["messagesStore/getMessagesById(this.$route.params.id)"];
    },
    data(){
        return{
            inputMessage: "",
        }
    },
    methods: {
        sendMessage(){
            let storeMessages = [];
            storeMessages.push(this.inputMessage);
            storeMessages.push("これは返信です。");
            this.inputMessage = "";
            
            this.$store.commit("messagesStore/setMessages", {
                id: this.$route.params.id,
                messages: storeMessages
            })


        }
    }
}
</script>