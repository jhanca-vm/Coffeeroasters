<template>
  <ol class="guide">
    <li>
      <span><b>01</b></span>
      <h3>Pick your coffee</h3>
      <p>
        Select from our evolving range of artisan coffees. Our beans are
        ethically sourced and we pay fair prices for them. There are new coffees
        in all profiles every month for you to try out.
      </p>
    </li>
    <li>
      <span><b>02</b></span>
      <h3>Choose the frequency</h3>
      <p>
        Customize your order frequency, quantity, even your roast style and
        grind type. Pause, skip or cancel your subscription with no commitment
        through our online portal.
      </p>
    </li>
    <li>
      <span><b>03</b></span>
      <h3>Receive and enjoy!</h3>
      <p>
        We ship your package within 48 hours, freshly roasted. Sit back and
        enjoy award-winning world-class coffees curated to provide a distinct
        tasting experience.
      </p>
    </li>
  </ol>
</template>

<style>
.guide {
  border-radius: 1rem;
  display: grid;
  list-style: none;
  margin: 0 -24px;
  padding: 8rem 24px;
  row-gap: 5.6rem;
}

.guide li h3 {
  margin: 2.4rem 0;
}

.guide li span {
  color: var(--color-200);
  font-size: 72px;
  line-height: 1;
}

.guide li p {
  margin: 0 auto;
  max-width: 500px;
}

@media (min-width: 540px) {
  .guide {
    margin: 0 -40px;
    padding: 8rem 40px;
  }
}

@media (min-width: 768px) {
  .guide {
    column-gap: 28px;
    grid-template-columns: repeat(3, 1fr);
    padding: 4rem 40px 4.4rem;
  }

  .guide li h3 {
    margin: 4.2rem 0 3.8rem;
  }
}

@media (min-width: 1024px) {
  .guide {
    column-gap: 120px;
    margin: 0;
    max-width: 1045px;
    padding: 6rem 0 6.4rem;
  }

  .guide li h3 {
    margin: 3.8rem 0 4.2rem;
  }
}

@media (max-width: 1023px) {
  .guide li h3 {
    font-size: 2.8rem;
    line-height: 3.2rem;
  }
}
</style>
