<template>
  <section class="collection">
    <h2>our collection</h2>
    <div class="collection--products">
      <div v-for="{ id, name, description, img } in collection" :key="id">
        <img :src="img" :alt="name" />
        <div>
          <h4>{{ name }}</h4>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    collection() {
      return this.$store.state.collection.products
    },
  },
}
</script>

<style src="~/assets/css/components/collection.css"></style>
