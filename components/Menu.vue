<template>
  <nav class="header--menu" :class="[!menu ? 'hidden' : null]">
    <ul>
      <li @click="hideMenu"><NuxtLink to="/">Home</NuxtLink></li>
      <li @click="hideMenu"><NuxtLink to="/about">About Us</NuxtLink></li>
      <li @click="hideMenu">
        <NuxtLink to="/subscribe">Create Your Plan</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$store.state.menu.visible
    },
  },
  methods: {
    hideMenu() {
      if (this.menu) {
        this.$store.commit('menu/toggle')
      }
    },
  },
}
</script>

<style>
.header--menu {
  animation: 0.25s ease descend;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 8.2rem;
}

.header--menu::before {
  background: linear-gradient(
    180deg,
    rgba(254, 252, 247, 0.504981) 0%,
    #fefcf7 55.94%
  );
  content: '';
  height: 100%;
  position: absolute;
  transform: matrix(1, 0, 0, -1, 0, 0);
  width: 100%;
  z-index: -1;
}

.header--menu ul {
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
}

.header--menu ul li {
  font-family: 'Fraunces';
  font-size: 2.4rem;
  font-weight: 900;
  line-height: 3.2rem;
  margin-top: 3.2rem;
  text-align: center;
  width: fit-content;
}

@media (min-width: 640px) {
  .header--menu {
    display: block;
    height: auto;
    position: static;
  }

  .header--menu::before {
    display: none;
  }

  .header--menu ul {
    flex-direction: row;
  }

  .header--menu ul li {
    font-family: 'Barlow';
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.092rem;
    line-height: 1.5rem;
    margin: 0 0 0 20px;
  }

  .header--menu li a {
    color: var(--color-400);
    text-transform: uppercase;
  }

  .header--menu li a:hover {
    color: var(--colo-500);
  }
}

@media (min-width: 768px) {
  .header--menu ul li {
    margin: 0 0 0 32px;
  }
}
</style>
