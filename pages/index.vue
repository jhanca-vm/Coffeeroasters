<template>
  <main>
    <MainHero />
    <Collection />
    <WhyChooseUs />
    <section class="how-it-works">
      <h4>How it works</h4>
      <Timeline />
      <Guide />
      <button class="main-button">Create your plan</button>
    </section>
  </main>
</template>

<style>
.how-it-works {
  margin: 71.7rem 0 12rem;
  text-align: center;
}

.how-it-works h4 {
  color: var(--color-400);
}

@media (min-width: 640px) {
  .how-it-works {
    margin: 43.4rem 0 14.4rem;
  }
}

@media (min-width: 768px) {
  .how-it-works {
    text-align: left;
  }
}

@media (min-width: 1175px) {
  .how-it-works {
    margin: 35.1rem 0 20rem;
    padding: 0 85px;
  }
}
</style>
