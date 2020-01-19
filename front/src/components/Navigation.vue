<template lang="html">
  <nav class="navigation">
    <router-link
      :to="{ name: 'writings', params: {} }">My writings
    </router-link>
    <router-link
      :to="{ name: 'projects', params: {} }">My projects
    </router-link>
    <router-link
      :to="{ name: 'contact', params: {} }">My contact
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style lang="scss">
.navigation {
  height: 100%;
  width: 20%;
  display: grid;
  a {
    color: #fff;
    font-family: 'Righteous', cursive;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a:first-child {
    background-color: #fc427b;
    &.router-link-exact-hover {
      color: #e67e22;
    }
  }
  a:nth-child(2) {
    background-color: #82589f;
  }
  a:nth-child(3) {
    background-color: #6d214f;
  }
}
</style>
