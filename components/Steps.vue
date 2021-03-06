<template>
  <ol class="steps" :class="dark">
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

<script>
export default {
  props: {
    mode: {
      type: String,
      default: () => null,
    },
  },
  computed: {
    dark() {
      return this.mode === 'dark' ? 'dark' : null
    },
  },
}
</script>

<style src="~/assets/css/components/steps.css"></style>
