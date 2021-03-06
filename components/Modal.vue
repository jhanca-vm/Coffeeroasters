<template>
  <div class="modal">
    <div class="modal--container">
      <header><h2>Order Summary</h2></header>
      <div>
        <b v-if="data.preferences === 'Capsule'">
          “I drink my coffee using <span class="cyan">Capsules</span>, with a
          <span class="cyan">{{ data.beanType }}</span> type of bean.
          <span class="cyan">{{ data.quantity }}</span
          >, sent to me <span class="cyan">{{ data.deliveries }}</span
          >.”
        </b>
        <b v-else>
          “I drink my coffee as
          <span class="cyan">{{ data.preferences }}</span
          >, with a <span class="cyan">{{ data.beanType }}</span> type of bean.
          <span class="cyan">{{ data.quantity }}</span> ground ala
          <span class="cyan">{{ data.grindOption }}</span
          >, sent to me <span class="cyan">{{ data.deliveries }}</span
          >.”
        </b>
        <p>
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
        <span>
          <b>$14.00 / mo</b>
          <button
            class="main-button"
            @click="$store.commit('order/toggleReady')"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style src="~/assets/css/components/modal.css"></style>
