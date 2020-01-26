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
@import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
.navigation {
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    padding-left: 20px;
    color: #2C3A47;
    font-family: 'Titillium Web', sans-serif;
    font-size: 17px;
    text-transform: uppercase;
  }
}
</style>
