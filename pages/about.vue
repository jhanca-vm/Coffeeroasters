<template>
  <main>
    <section class="about--hero">
      <h1>About Us</h1>
      <p>
        Coffeeroasters began its journey of exotic discovery in 1999,
        highlighting stories of coffee from around the world. We have since been
        dedicated to bring the perfect cup - from bean to brew - in every
        shipment.
      </p>
    </section>
    <Commitment />
    <Headquarters />
  </main>
</template>

<style>
.about--hero {
  background-image: url('https://imgur.com/CG7Bpui.jpg');
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

.about--hero h1 {
  font-size: 2.8rem;
  margin: 2rem 0 2.4rem;
}

@media (min-width: 640px) {
  .about--hero {
    background-image: url('https://imgur.com/eYowuzP.jpg');
    padding: 58px;
    text-align: left;
  }

  .about--hero h1 {
    font-size: 3.2rem;
    line-height: 4rem;
    margin-top: 0;
  }

  .about--hero p {
    max-width: 400px;
  }
}

@media (min-width: 1024px) {
  .about--hero {
    padding: 85px;
  }

  .about--hero p {
    max-width: 445px;
  }
}

@media (min-width: 1280px) {
  .about--hero {
    background-image: url('https://imgur.com/ndmEjq4.jpg');
    height: 45rem;
  }
}

@media (max-width: 1279px) {
  .about--hero p {
    opacity: 0.8;
  }
}
</style>
