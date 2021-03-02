<template>
  <div id="__default" :style="[menu ? fixed : null]">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixed: {
        height: '100vh',
        overflow: 'hidden',
      },
    }
  },
  computed: {
    menu() {
      return this.$store.state.menu.visible
    },
  },
}
</script>
