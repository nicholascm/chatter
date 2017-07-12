<template>
    <div>
        <h3>{{ conversation.topic }}</h3>
        <ul class="media-list">
            <li class="media" v-for="message in conversation.comments">
                <div class="media-left">
                <a href="#">
                    <img class="media-object" :src="message.user.photoURL" alt="IMG" height="64px" width="64px">
                </a>
                </div>
                <div class="media-body">
                <h4 class="media-heading">{{ message.date }} - {{ message.user.email }}</h4>
                    {{ message.comment }}
                </div>
            </li>
        </ul>
    <form v-on:submit.prevent="addComment">
      <input type="text" v-model="comment" placeholder="Your thoughts">
      <input type="submit" class="btn btn-primary">
    </form>
    </div>
</template>
<script>
  import { conversationsRef, db } from '../config.js';
  import Firebase from 'firebase';

  export default {
    name: 'conversation',
    data() {
        return {
            comment: ''
        }
    },
    created() {
        this.getCurrentUser();
    },
    ready() {

    },
    firebase() {
        return {
            conversation: {
                source: db.ref(`conversations/${this.$route.params.id}`),
                asObject: true
            }
        }
    },
    methods: {
        addComment() {
            let key = db.ref(`conversations/${this.$route.params.id}`).child('comments').push({
                created_at: new Date().getTime(),
                comment: this.comment,
                user: {
                    uid: this.loggedInUser.uid,
                    photoURL: this.loggedInUser.photoURL,
                    email: this.loggedInUser.email
                }
            }).key;
            db.ref(`users/${this.loggedInUser['.key']}`).child('conversations').push(key);
        },
        getCurrentUser() {
            Firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.loggedInUser = user;
                } else {
                    this.loggedInUser =  false;
                }
            });
        }
    }
  }
</script>

<style>

</style>
