<template>
    <div class="card m-2" style="width: 18rem;">
        <img class="card-img-top" :src="userData.picture.medium">
        <div class="card-body">
            <h5>{{ userData.name.first }} {{ userData.name.last }}</h5>
            <router-link class="btn btn--message btn--radius m-1" :to="'/user/' + userData.login.uuid">Profile</router-link>
            <router-link class="btn btn--message btn--radius m-1" :to="'/user/' + userData.login.uuid + '/chat'">Message</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-card",
        props: ["userData"],
    }
</script>