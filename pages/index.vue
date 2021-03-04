<template>
  <main>
    <section class="hero">
      <div class="hero--content">
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <NuxtLink to="/subscribe">
          <button class="main-button">Create your plan</button>
        </NuxtLink>
      </div>
    </section>
    <Collection />
    <WhyChooseUs />
    <section class="how-it-works">
      <h4>How it works</h4>
      <Timeline />
      <Guide />
      <NuxtLink to="/subscribe">
        <button class="main-button">Create your plan</button>
      </NuxtLink>
    </section>
  </main>
</template>

<style>
.hero {
  background-image: url('https://imgur.com/1gJH83M.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
  height: 50rem;
  padding: 0 24px;
}

.hero--content {
  color: var(--color-100);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
}

.hero--content h1 {
  font-size: 4rem;
}

.hero--content p {
  opacity: 0.8;
}

.how-it-works {
  margin: 71.7rem 0 12rem;
  text-align: center;
}

.how-it-works h4 {
  color: var(--color-400);
}

@media (min-width: 640px) {
  .hero {
    background-image: url('https://imgur.com/ecfF9Hw.jpg');
    padding: 0 58px;
  }

  .hero--content {
    max-width: 39.8rem;
    text-align: left;
  }

  .hero--content h1 {
    font-size: 4.8rem;
  }

  .hero--content button {
    margin: 0;
  }

  .how-it-works {
    margin: 43.4rem 0 14.4rem;
  }
}

@media (min-width: 768px) {
  .how-it-works {
    text-align: left;
  }
}

@media (min-width: 1024px) {
  .hero {
    background-image: url('https://imgur.com/I1DcZS6.jpg');
    height: 60rem;
    padding: 0 85px;
  }

  .hero--content {
    max-width: 49.3rem;
  }

  .hero--content h1 {
    font-size: 7.2rem;
  }

  .hero--content p {
    margin: 3.2rem 0 5.6rem;
  }
}

@media (min-width: 1175px) {
  .how-it-works {
    margin: 35.1rem 0 20rem;
    padding: 0 85px;
  }
}

@media (max-width: 1023px) {
  .hero--content p {
    margin: 2.4rem 0 4rem;
  }
}
</style>
