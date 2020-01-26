<template>
  <div class="home-layout">
    <Navigation/>
    <Tree/>
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
@import url('https://fonts.googleapis.com/css?family=Anton&display=swap');
.home-layout {
  padding: 40px;
  height: 100%;
  position: relative;
}

</style>
