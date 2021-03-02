<template>
  <section class="why-choose-us">
    <h2>Why choose us?</h2>
    <p>
      A large part of our role is choosing which particular coffees will be
      featured in our range. This means working closely with the best coffee
      growers to give you a more impactful experience on every level.
    </p>
    <Items />
  </section>
</template>

<style>
.why-choose-us {
  background-color: var(--color-500);
  border-radius: 1rem;
  color: var(--color-100);
  height: 90.2rem;
  padding: 6.4rem 24px;
  text-align: center;
}

.why-choose-us h2 {
  margin-bottom: 2.4rem;
}

.why-choose-us > p {
  opacity: 0.8;
}

@media (min-width: 540px) {
  .why-choose-us {
    padding: 5.6rem 58px;
  }
}

@media (min-width: 640px) {
  .why-choose-us {
    height: 57.3rem;
  }
}

@media (min-width: 768px) {
  .why-choose-us > p {
    padding: 0 38px;
  }
}

@media (min-width: 1024px) {
  .why-choose-us {
    padding: 5.6rem 85px;
  }

  .why-choose-us h2 {
    margin-bottom: 3.2rem;
  }

  .why-choose-us > p {
    margin: 0 auto;
    max-width: 52.8rem;
    padding: 0;
  }
}

@media (min-width: 1175px) {
  .why-choose-us {
    padding: 10rem 85px;
  }
}

@media (max-width: 1023px) {
  .why-choose-us h2 {
    font-size: 3.2rem;
    line-height: 4.8rem;
  }
}

@media (max-width: 639px) {
  .why-choose-us h2 {
    font-size: 2.8rem;
    line-height: 1;
  }
}
</style>
