<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <img alt="Chatter">
          </a>
        </div>
        <span v-if="!name">
          <a class="btn btn-danger" @click="openLoginModal()">Sign In</a>
        </span>
        <span v-if="name || imageUrl">
          <img :src="imageUrl" height="40px" width="40px" class="img-circle">
          <a class="btn btn-link">Welcome, {{ name }} </a>
          <a class="btn btn-link" @click="logOut">Sign Out</a>
        </span>
      </div>
    </nav>
</template>

<script>
export default {
  props: ['username', 'name', 'imageUrl'],
  name: 'navigation-bar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    openLoginModal() {
      this.$root.$emit('openLoginModal');
    },
    logOut() {
      this.$root.$emit('logOutUser');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
