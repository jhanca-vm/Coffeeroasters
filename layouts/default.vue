<template>
  <div id="__default" :style="menu || order ? fixed : null">
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
    order() {
      return this.$store.state.order.ready
    },
  },
}
</script>

<style>
#__default {
  position: relative;
}
</style>
