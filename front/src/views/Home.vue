<template>
  <div class="home-layout">
    <Navigation/>
    <section class="main-section">
        <p>My text is going to be here</p>
        <Tree/>
    </section>
  </div>
</template>

<script>
import Tree from "@/components/Tree.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "home",
  components: {
    Tree,
    Navigation
  }
};
</script>

<style lang="scss">
.home-layout {
  height: 100%;
  padding: 0px;
  display: flex;
  .main-section {
    display: grid;
  }
}

</style>
