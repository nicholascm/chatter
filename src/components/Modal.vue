<template>
    <div class="underlay" v-if="isVisible" transition="modal" @click="onUnderlayClick">
        <div :class="modalClass">
        <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: ['isVisible', 'modalClass'],

  created () {
    // TODO: add event listener only when modal isopened
    window.addEventListener('keyup', this.onKeyUp);
  },

  beforeDestroy () {
    window.removeEventListener('keyup', this.onKeyUp);
  },

  methods: {
    close() {
        console.log('emit event');
        this.$root.$emit('close');
    },
    onUnderlayClick(e) {
      if (e.target.classList.contains('underlay')) {
        this.close();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.underlay {
  position: fixed;
  left: -40vw;
  right: -40vw;
  top: -40vh;
  bottom: -40vh;
  z-index: 1;
  background: gray;
  display:flex;
  align-items: center;
  justify-content: center;
}
.modal {
  position: relative;
  padding: 2em;
  background: #fff;
  border-radius: 4px;
  width: 200px;
  min-width: 200px;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.15);
}
@media screen and (max-width: 700px) {
  .modal {
    width: 95vw;
  }
}
@media screen and (max-width: 400px) {
  .modal {
    width: 98vw;
    padding: 1em;
  }
}
.modal__close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}
.modal-transition {
  will-change: transform, opacity;
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease;
}
.modal-enter, .modal-leave {
  transform: scale(0.7);
  opacity: 0;
}
</style>
