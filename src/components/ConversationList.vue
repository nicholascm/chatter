<template>
    <div>
        <ul class="list-group">
          <li class="list-group-item" v-for="conversation in conversations">
              {{ conversation.topic }},  {{ conversation['.key'] }}
              <router-link :to="childRefUrl(conversation)">Join</router-link>
          </li>
        </ul>
    </div>
</template>
<script>
  import { conversationsRef } from '../config.js';

  export default {
    name: 'conversation-list',
    created() {
      this.conversations.forEach(convo => {
        console.log(convo['.key']);
      })
    },
    firebase: {
      conversations: conversationsRef.limitToLast(100)
    },
    methods: {
      childRefUrl(conversation) {
        // console.log(conversation['.key']);
        // return conversationsRef.child(conversation['.key']);
        return {
          name: 'viewConversation',
          params:  {
            id: conversation['.key']
          }
        }
      }
    },
  }
</script>

<style>

</style>
