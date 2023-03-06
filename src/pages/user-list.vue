<template>
    <div>
        <h1 v-if="Object.keys($store.state.usersStore.users).length < 10">Now Searching・・・</h1>
    </div>
    <div class="d-flex flex-wrap pt-4 d-flex justify-content-center">
        <userCard class="m-3" v-for="user in $store.state.usersStore.users" :key="user.login.id" :userData="user"></userCard>
    </div>
    <div>
        <button class="btn btn-lg search-btn" @click="addusers">Search More</button>
    </div>
</template>

<script>
import userCard from "../components/user-card.vue"

export default {
    name: "userList",
    created(){
        if(Object.keys(this.$store.state.usersStore.users).length < 10){
            this.$store.dispatch("usersStore/fetchUsers");
        }
    },
    components: {
        userCard,
    },
    data(){
        return{
            searching: false,
        }
    },
    methods: {
        addusers(){
            this.$store.dispatch("usersStore/fetchUsers");
        }
    }
}
</script>