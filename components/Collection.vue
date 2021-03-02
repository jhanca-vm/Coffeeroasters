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

<style>
.collection {
  text-align: center;
}

.collection h2 {
  background: linear-gradient(180deg, #d5d5d4, #f8f6f2);
  background-clip: text;
  color: transparent;
  cursor: default;
  line-height: 0.8;
}

.collection--products {
  display: grid;
  margin-top: 4rem;
  row-gap: 6.4rem;
}

.collection--products > div div {
  margin: 0 auto;
  max-width: 282px;
}

.collection--products > div img {
  height: 19.3rem;
  position: relative;
  right: -12px;
}

.collection--products > div h4 {
  margin: 2rem 0 1.6rem;
}

@media (min-width: 1280px) {
  .collection {
    margin: 20rem 0;
  }

  .collection h2 {
    font-size: 150px;
  }

  .collection--products {
    column-gap: 30px;
    grid-template-columns: repeat(4, 1fr);
    margin: -42px auto 0;
    max-width: 1111px;
  }

  .collection--products > div h4 {
    margin: 7.2rem 0 2.4rem;
  }
}

@media (min-width: 640px) and (max-width: 1279px) {
  .collection {
    margin: 14.4rem 0;
  }

  .collection h2 {
    font-size: 96px;
  }

  .collection--products {
    margin: -27px auto 0;
    max-width: 573px;
    row-gap: 4.8rem;
  }

  .collection--products > div {
    display: flex;
    justify-content: center;
    text-align: left;
  }

  .collection--products > div div {
    margin: 0 0 0 37px;
    position: relative;
    right: -5px;
  }

  .collection--products > div h4 {
    margin: 1.5rem 0 2.4rem;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .collection h2 {
    font-size: 78px;
  }

  .collection--products {
    margin: -23px auto 0;
  }

  .collection--products > div div {
    margin: 0;
    right: -26px;
  }
}

@media (max-width: 767px) {
  .collection {
    margin: 12rem 0;
  }

  .collection--products > div img {
    height: 15.1rem;
  }
}
</style>
