<template>
    <div>
        <ul class="list-group">
        <li class="list-group-item" v-for="conversation in conversations">
            {{ conversation.topic }}
            <button class="btn btn-link pull-right">Join</button>
        </li>
        </ul>
    </div>
</template>
<script>
  import { conversationsRef } from '../config.js';

  export default {
    name: 'conversations',
    firebase: {
      conversations: conversationsRef.limitToLast(100)
    },
  }
</script>

<style>

</style>
