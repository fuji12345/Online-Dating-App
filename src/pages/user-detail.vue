<template>
    <div class="text-start m-2">
        <router-link class="home btn btn-lg border" to="/">HOME</router-link>
    </div>

    <div class="d-flex flex-column align-items-center">
        <div class="col-12">
            <img class="" :src="user.picture.medium" width="300" height="300">
        </div>
        <router-link class="btn btn-lg btn--message btn--radius my-2" :to="'/user/' + $route.params.id + '/chat'">message</router-link>

        <div class="col-9 my-4 d-flex justify-content-center">
            <table class="w-50">
                <tr class="border-bottom">
                    <td><h3>name</h3></td>
                    <td><h4>{{ user.name.first }} {{ user.name.last }}</h4></td>
                </tr>
                <tr>
                    <td><h3>gender</h3></td>
                    <td><h4>{{ user.gender }}</h4></td>
                </tr>
                <tr>
                    <td><h3>age</h3></td>
                    <td><h4>{{ user.dob.age }}</h4></td>
                </tr>
                <tr>
                    <td><h3>country</h3></td>
                    <td><h4>{{ user.location.country }}</h4></td>
                </tr>
                <tr>
                    <td><h3>satate</h3></td>
                    <td><h4>{{ user.location.state }}</h4></td>
                </tr>
                <tr>
                    <td><h3>city</h3></td>
                    <td><h4>{{ user.location.city }}</h4></td>
                </tr>
                <tr>
                    <td><h3>email</h3></td>
                    <td><h4>{{ user.email }}</h4></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "userDetail",
    created(){
        let getMessagesById = this.$store.getters[`usersStore/getUserById`];
        this.user = getMessagesById(this.$route.params.id);
    },
    data(){
        return{
            user: null,
        }
    }

}
</script>