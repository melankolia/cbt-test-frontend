<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "assets/fonts/style";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background: #bbe3f2;
}

textarea {
  background-color: #fdced7 !important;
}

textarea::placeholder {
  text-align: justify !important;
  color: #000000a6 !important;
}
</style>
