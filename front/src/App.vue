<template>
  <div id="app">
    <nav class="nav">
      <a href="#">Link</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
    </nav>
    <section class="tree">
      <Background />
    </section>
    <section class="text">
      <p>My text is going to be here</p>
    </section>
    <section class="second-text">
      <p>My text is going to be here</p>
    </section>
  </div>
</template>

<script>
import Background from "./components/Background.vue";

export default {
  name: "app",
  components: {
    Background
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  #app {
    height: 100%;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 200px 1fr 1fr;
    .nav {

    }
    .tree {
      grid-column: 2;
      grid-row: 2 / span 2;
    }
    .text {
      grid-column: 2 / span 2;
    }
    .second-text {
      grid-row:2 / span 2;
      grid-column: 3;
    }
  }
}
</style>
