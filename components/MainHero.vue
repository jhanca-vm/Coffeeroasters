<template>
  <section class="main-hero">
    <div class="main-hero--content">
      <h1>Great coffee made simple.</h1>
      <p>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <button class="main-button">Create your plan</button>
    </div>
  </section>
</template>

<style>
.main-hero {
  background: url('https://imgur.com/1gJH83M.jpg') no-repeat;
  background-size: cover;
  border-radius: 1rem;
  height: 50rem;
  padding: 0 24px;
}

.main-hero--content {
  color: var(--color-100);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
}

.main-hero--content h1 {
  font-size: 4rem;
}

.main-hero--content p {
  opacity: 0.8;
}

@media (min-width: 640px) {
  .main-hero {
    background: url('https://imgur.com/ecfF9Hw.jpg') no-repeat;
    background-size: cover;
    padding: 0 58px;
  }

  .main-hero--content {
    max-width: 39.8rem;
    text-align: left;
  }

  .main-hero--content h1 {
    font-size: 4.8rem;
  }

  .main-hero--content button {
    margin: 0;
  }
}

@media (min-width: 1024px) {
  .main-hero {
    background: url('https://imgur.com/I1DcZS6.jpg') no-repeat;
    background-size: cover;
    height: 60rem;
    padding: 0 85px;
  }

  .main-hero--content {
    max-width: 49.3rem;
  }

  .main-hero--content h1 {
    font-size: 7.2rem;
  }

  .main-hero--content p {
    margin: 3.2rem 0 5.6rem;
  }
}

@media (max-width: 1023px) {
  .main-hero--content p {
    margin: 2.4rem 0 4rem;
  }
}
</style>
