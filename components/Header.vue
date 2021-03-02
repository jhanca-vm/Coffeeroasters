<template>
  <header class="header">
    <img src="~/assets/images/logo.svg" alt="Coffeeroasters Logo" />
    <Menu />
    <button
      :style="{ backgroundImage: `url(${icon})` }"
      @click="showHideMenu"
    />
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    menu() {
      return this.$store.state.menu.visible
    },
    icon() {
      return this.menu
        ? require(`~/assets/icons/icon-close.svg`)
        : require(`~/assets/icons/icon-hamburger.svg`)
    },
  },
  methods: {
    ...mapMutations({
      showHideMenu: 'menu/toggle',
    }),
  },
}
</script>

<style>
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 24px 4rem;
}

.header img {
  height: 1.8rem;
  width: 16.3rem;
}

.header button {
  background-repeat: no-repeat;
  background-size: cover;
  height: 1.5rem;
  width: 1.6rem;
}

@media (min-width: 540px) {
  .header {
    padding: 4rem 40px 5.3rem;
  }
}

@media (min-width: 640px) {
  .header img {
    height: 2.6rem;
    width: 23.6rem;
  }

  .header button {
    display: none;
  }
}

@media (min-width: 1024px) {
  .header {
    padding: 4.35rem 80px;
  }
}
</style>
