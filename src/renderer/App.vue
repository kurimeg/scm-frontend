<template>
  <div id="app">
    <router-view></router-view>
    <!-- <loading></loading>
    <modal></modal> -->
  </div>
</template>

<script>
  // import Modal from './components/Modal'
  // import Loading from './components/Loading'

  export default {
    // components: {
    //   Loading, Modal
    // }
  }
</script>

<style>
  body {
    margin: 0 0 0 0;
    font-family: 'Century Gothic';
  }
  input:focus {
    outline:none;
  }
  button:focus {
    outline:none;
  }
  .seat-layer {
    position: absolute;
    z-index: 999; 
  }
  .desk-layer {
    position: absolute;
    z-index: 1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to{
    opacity: 0
  }
  .fade-loading-leave-active {
    transition: opacity .3s
  }
  .fade-loading-leave-to{
    opacity: 0
  }
</style>
