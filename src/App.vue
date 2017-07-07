<!-- App.vue
  This component is the root component for our Vue application. It is rendered
  in the project root's index.html file with the <div id="app"> tag. The Firebase
  instance exists only within this component.
-->

<template>
  <div id="app" class="container">
    <a @click="toggleLoginModal()">Login</a>
    <form v-on:submit.prevent="addConversation">
      <input type="text" v-model="newConversation.topic" placeholder="Your topic">
      <input type="submit" class="btn btn-primary">
    </form>
    <modal :is-visible="isLoginModalVisible" modal-class="login-modal">
      <div class="tac">
        <a class="btn" style="background:black; color: white" v-on:click="login('github')">Login with Github</a>
        <a class="btn" style="background:#04A4FF; color: white" v-on:click="login('twitter')">Login with Twitter</a>
      </div>
    </modal>
      <router-view></router-view>
  </div>
</template>

<script>
  import Hello from './components/Hello';
  import NavigationBar from './components/Navigation';
  import Modal from './components/Modal';
  import { conversationsRef } from './config.js';

  export default {
    name: 'app',
    firebase: {
      conversations: conversationsRef.limitToLast(100)
    },
    created() {
      this.$root.$on('close', () =>  {
        this.isLoginModalVisible = false;
      })
    },
    data () {
      return {
        newGreeting: {
          lang: '',
          text: ''
        },
        newConversation: {
          topic: ''
        },
        isLoginModalVisible: false,
      }
    },
    methods: {
      addConversation: function() {
        conversationsRef.push(this.newConversation);
        this.newConversation.topic = '';
      },
      toggleLoginModal: function() {
        this.isLoginModalVisible = true;
      },
    },
    components: {
      Hello, NavigationBar, Modal
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .close-modal {
    position: fixed;
    bottom: 10px;
    z-index: 2;
  }
</style>
