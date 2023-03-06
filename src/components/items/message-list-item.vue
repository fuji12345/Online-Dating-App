<template>
    <div class="card bg-light">
        <div class="card-body d-flex justify-content-center ">
            <div class="">
                <img class="icon" :src="user.picture.medium">
            </div>
            <div class="w-25 px-3 text-start">
                <h4 class="">{{ user.name.first }} {{ user.name.last }}</h4>
                <h5 class="message-box last-message">{{ $store.getters["messagesStore/getLastChat"](user.login.uuid) }}</h5>
            </div>
            <div class="d-flex align-items-center">
                <router-link class="btn btn--message btn--radius" :to="'/user/' + user.login.uuid + '/chat'">message</router-link>
            </div>
        </div>
    </div>

</template>

<script>
    export default{
        name: "messageListItem",
        props: ["user"],

    }
</script>