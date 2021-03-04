<template>
  <section class="our-commitment--quality">
    <picture>
      <source
        srcset="https://imgur.com/skBNq5y.jpg"
        media="(min-width: 1175px)"
      />
      <source
        srcset="https://imgur.com/2DJ1Pv5.jpg"
        media="(min-width: 640px)"
      />
      <img src="https://imgur.com/V7yaB4l.jpg" alt="Quality" />
    </picture>
    <div>
      <h2>Uncompromising quality</h2>
      <p>
        Although we work with growers who pay close attention to all stages of
        harvest and processing, we employ, on our end, a rigorous quality
        control program to avoid over-roasting or baking the coffee dry. Every
        bag of coffee is tagged with a roast date and batch number. Our goal is
        to roast consistent, user-friendly coffee, so that brewing is easy and
        enjoyable.
      </p>
    </div>
  </section>
</template>

<style>
.our-commitment--quality {
  background-image: url('https://imgur.com/nFyOpU3.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
  color: var(--color-100);
  margin-top: 20.8vw;
  padding: 37.86vw 24px 60px;
  position: relative;
}

.our-commitment--quality picture {
  left: 0;
  margin: 0 24px;
  position: absolute;
  right: 0;
  top: -20.8vw;
}

.our-commitment--quality img {
  border-radius: 0.8rem;
  width: 100%;
}

.our-commitment--quality h2 {
  font-size: 2.8rem;
  hyphens: auto;
  line-height: 1;
  margin-bottom: 2.4rem;
}

@media (min-width: 640px) {
  .our-commitment--quality {
    background-image: url('https://imgur.com/QMxTCW6.png');
    padding: 29.16vw 74px 67px;
  }

  .our-commitment--quality picture {
    margin: 0 58px;
  }

  .our-commitment--quality h2 {
    font-size: 3.2rem;
    line-height: 4.8rem;
  }
}

@media (min-width: 1024px) {
  .our-commitment--quality h2 {
    font-size: 4rem;
    margin-bottom: 3.2rem;
  }
}

@media (min-width: 1175px) {
  .our-commitment--quality {
    background-image: url('https://imgur.com/hn7rg1k.png');
    column-gap: 110px;
    display: grid;
    grid-template-columns: 1fr 445px;
    margin-top: 88px;
    min-height: 474px;
    padding: 0 85px;
  }

  .our-commitment--quality picture {
    grid-column: 2;
    height: 474px;
    margin: 0;
    position: relative;
    top: -88px;
  }

  .our-commitment--quality div {
    grid-row: 1;
    margin: 88px 0;
    text-align: left;
  }
}
</style>
