<template>
  <main>
    <section class="subscribe--hero">
      <h1>Create a plan</h1>
      <p>
        Build a subscription plan that best fits your needs. We offer an
        assortment of the best artisan coffees from around the globe delivered
        fresh to your door.
      </p>
    </section>
    <section class="subscribe--steps">
      <Timeline mode="dark" />
      <Steps mode="dark" />
    </section>
    <Order />
  </main>
</template>

<style>
.subscribe--hero {
  background-image: url('https://imgur.com/VDOhUUj.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
  color: var(--color-100);
  display: flex;
  flex-direction: column;
  height: 40rem;
  justify-content: center;
  padding: 24px;
  text-align: center;
}

.subscribe--hero h1 {
  font-size: 4rem;
  margin-bottom: 2.2rem;
}

.subscribe--hero p {
  opacity: 0.8;
  margin-bottom: 3.6rem;
}

.subscribe--steps {
  background-image: url('https://imgur.com/e7iJzTi.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1rem;
  margin: 12rem -24px;
  padding: 0 24px;
  position: relative;
  z-index: 0;
}

@media (min-width: 540px) {
  .subscribe--steps {
    margin: 12rem -40px;
    padding: 0 40px;
  }
}

@media (min-width: 640px) {
  .subscribe--hero {
    background-image: url('https://imgur.com/FdFFFCZ.jpg');
    padding: 58px;
    text-align: left;
  }

  .subscribe--hero h1 {
    font-size: 4.8rem;
    margin-bottom: 2.4rem;
  }

  .subscribe--hero p {
    margin-bottom: 0;
    max-width: 398px;
  }

  .subscribe--steps {
    margin: 14.4rem -40px;
  }
}

@media (min-width: 768px) {
  .subscribe--steps {
    background-image: url('https://imgur.com/JAdzLep.png');
    padding: 5.7rem 40px 5.3rem;
  }
}

@media (min-width: 1024px) {
  .subscribe--hero {
    background-image: url('https://imgur.com/QJr7vj3.jpg');
    height: 45rem;
    padding: 85px;
  }

  .subscribe--hero h1 {
    font-size: 7.2rem;
    margin-bottom: 3.2rem;
  }

  .subscribe--hero p {
    max-width: 445px;
  }

  .subscribe--steps {
    margin: 16.8rem -80px;
    padding: 2rem 85px 3.6rem;
  }
}

@media (min-width: 1175px) {
  .subscribe--steps {
    margin: 16.8rem 0;
  }
}
</style>
