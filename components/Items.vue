<template>
  <div class="why-choose-us--items">
    <div v-for="{ id, title, img, description } in items" :key="id">
      <figure>
        <img :src="img" :alt="title" />
      </figure>
      <div>
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.features.items
    },
  },
}
</script>

<style>
.why-choose-us--items {
  display: grid;
  margin-top: 6.4rem;
  row-gap: 2.4rem;
}

.why-choose-us--items > div {
  background-color: var(--color-300);
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  height: 38.2rem;
  justify-content: flex-end;
  padding: 4.8rem 12px;
}

.why-choose-us--items > div figure {
  max-height: 7.2rem;
}

.why-choose-us--items > div h4 {
  margin: 56px 0 2.4rem;
}

.why-choose-us--items > div p {
  padding: 0 28px;
}

@media (min-width: 640px) {
  .why-choose-us--items {
    margin-top: 7rem;
  }
}

@media (min-width: 1175px) {
  .why-choose-us--items {
    column-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 8.6rem;
  }
}

@media (min-width: 640px) and (max-width: 1174px) {
  .why-choose-us--items > div {
    align-items: center;
    flex-direction: row;
    height: 18rem;
    justify-content: flex-start;
    padding: 4.1rem 48px 4.1rem 70px;
    text-align: left;
  }

  .why-choose-us--items > div figure {
    margin-right: 60px;
    max-height: 56px;
    max-width: 56px;
  }

  .why-choose-us--items > div h4 {
    margin: 0 0 1.6rem;
  }

  .why-choose-us--items > div p {
    padding: 0;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .why-choose-us--items > div {
    padding: 4.1rem 48px 4.1rem;
  }
}
</style>
