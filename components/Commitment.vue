<template>
  <section class="our-commitment">
    <div class="our-commitment--content">
      <picture>
        <source
          srcset="https://imgur.com/holMwP7.jpg"
          media="(min-width: 1175px)"
        />
        <source
          srcset="https://imgur.com/aVZi0Gp.jpg"
          media="(min-width: 640px)"
        />
        <img src="https://imgur.com/RfcX7xX.jpg" alt="Commitment" />
      </picture>
      <div>
        <h2>Our commitment</h2>
        <p>
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </div>
    <Quality />
  </section>
</template>

<style>
.our-commitment {
  margin: 12rem 0;
  text-align: center;
}

.our-commitment p {
  opacity: 0.8;
}

.our-commitment--content {
  padding-bottom: 12rem;
}

.our-commitment--content img {
  border-radius: 0.8rem;
}

.our-commitment--content div h2 {
  font-size: 3.2rem;
  margin: 4.8rem 0 3.2rem;
}

@media (min-width: 640px) {
  .our-commitment {
    margin: 14.4rem 0;
  }
}

@media (min-width: 768px) {
  .our-commitment--content {
    column-gap: 69px;
    display: grid;
    grid-template-columns: 281px 1fr;
    padding-bottom: 14.4rem;
    text-align: left;
  }

  .our-commitment--content div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .our-commitment--content div h2 {
    margin-top: 0;
  }
}

@media (min-width: 1024px) {
  .our-commitment {
    margin: 16.8rem 0;
  }

  .our-commitment--content {
    column-gap: 112px;
    padding-bottom: 16.8rem;
  }

  .our-commitment--content div h2 {
    font-size: 4rem;
  }
}

@media (min-width: 1175px) {
  .our-commitment--content {
    grid-template-columns: 445px 1fr;
  }
}

@media (min-width: 1280px) {
  .our-commitment--content {
    padding: 0 85px 16.8rem;
  }
}
</style>
