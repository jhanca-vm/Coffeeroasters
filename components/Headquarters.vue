<template>
  <section class="headquarters">
    <h4>Our headquarters</h4>
    <div class="headquarters--content">
      <div v-for="{ id, country, address, phone, img } in data" :key="id">
        <img :src="img" :alt="country" />
        <h3>{{ country }}</h3>
        <p v-for="(item, i) in address" :key="i + 1">{{ item }}</p>
        <p>{{ phone }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.state.headquarters.data
    },
  },
}
</script>

<style>
.headquarters {
  margin: 12rem 0;
  text-align: center;
}

.headquarters h4 {
  color: var(--color-400);
  margin-bottom: 7.2rem;
}

.headquarters--content {
  display: grid;
  row-gap: 8rem;
}

.headquarters--content h3 {
  font-size: 2.8rem;
  margin: 4.5rem 0 2.2rem;
}

@media (min-width: 640px) {
  .headquarters {
    margin: 14.4rem 0;
    text-align: left;
  }

  .headquarters--content {
    column-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }

  .headquarters--content h3 {
    font-size: 2.4rem;
  }

  .headquarters--content div:last-of-type h3 {
    padding-top: 4px;
  }
}

@media (min-width: 1024px) {
  .headquarters {
    margin: 16.8rem 0;
  }

  .headquarters--content {
    column-gap: 54px;
  }

  .headquarters--content h3 {
    font-size: 3.2rem;
  }
}

@media (min-width: 1280px) {
  .headquarters {
    padding: 0 85px;
  }
}
</style>
