<template>
  <div class="writings">
    <router-link
      :to="{ name: 'home', params: {} }">Back to home
    </router-link>
    <h1>This is my writings</h1>
    <h1>{{ $prismic.richTextAsPlain(fields.title) }}</h1>
  </div>
</template>

<script>

export default {
  name: "Writings",
  data() {
    return {
      fields: {
        title: null,
      }
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.getSingle('blog_post')
      .then((document) => {
        this.fields.title = document.data.body1;
      })
    }
  },
  created() {
    this.getContent();
  }
}
</script>
<style lang="scss">

</style>
