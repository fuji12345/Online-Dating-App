<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-secondary bg-secondary">
      <router-link to="/" class="bg-secondary text-white btn"><h2 class="d-flex justify-content-start text-light">Online Dating App</h2></router-link>
      <h3 class="nav-item mx-3"><router-link to="/" class="btn btn-lg btn-secondary">User List</router-link></h3>
      <h5 class="nav-item mx-3"><router-link to="/message-list" class="btn btn-lg btn-secondary">Message List</router-link></h5>
    </nav>
  </div>

  <div>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
