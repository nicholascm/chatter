<!-- App.vue
  This component is the root component for our Vue application. It is rendered
  in the project root's index.html file with the <div id="app"> tag. The Firebase
  instance exists only within this component.
-->

<template>
  <div id="app" class="container">
    <navigation-bar :imageUrl="loggedInUser.photoURL" :name="loggedInUser.email"></navigation-bar>
    <form v-on:submit.prevent="addConversation">
      <input type="text" v-model="newConversation.topic" placeholder="Your topic">
      <input type="submit" class="btn btn-primary">
    </form>
    <modal :is-visible="isLoginModalVisible" modal-class="login-modal">
      <div class="tac">
        <a class="btn" style="background:black; color: white" v-on:click="login('github')">Login with Github</a>
      </div>
    </modal>
      <router-view></router-view>
  </div>
</template>

<script>
  import Firebase from 'firebase';
  import Hello from './components/Hello';
  import NavigationBar from './components/Navigation';
  import Modal from './components/Modal';
  import { conversationsRef, authRef, app } from './config.js';

  export default {
    name: 'app',
    firebase: {
      conversations: conversationsRef.limitToLast(100)
    },
    created() {
      this.$root.$on('openLoginModal', () => {
        this.isLoginModalVisible = true;
      })
      this.$root.$on('close', () =>  {
        this.isLoginModalVisible = false;
      });
      this.$root.$on('logOutUser', () => {
        this.logout();
      });
      this.getCurrentUser();
      var userId = firebase.auth().currentUser.uid;
      console.log(userId);
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
        loggedInUser: {}
      }
    },
    methods: {
      getCurrentUser() {
        Firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.loggedInUser = user;
            console.log(user);
          } else {
            this.loggedInUser =  false;
          }
        });
      },
      addConversation() {
        conversationsRef.push(this.newConversation);
        this.newConversation.topic = '';
      },
      toggleLoginModal: function() {
        this.isLoginModalVisible = true;
      },
      //TODO:: make this re-route to user home page when successful
      login(method) {
        let loginProvider = new Firebase.auth.GithubAuthProvider();
        switch(method) {
          case ('github'):
            authRef.signInWithPopup(loginProvider).then(x => {
              this.isLoginModalVisible = false;
              this.$router.push({ name: 'conversations'});
            });
        }
      },
      logout() {
        authRef.signOut();
        this.$router.push({name: 'home'});
      }
    },
    computed: {
      currentUser: function() {

      }
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
    padding-top: 60px;
  }
  .close-modal {
    position: fixed;
    bottom: 10px;
    z-index: 2;
  }
</style>
