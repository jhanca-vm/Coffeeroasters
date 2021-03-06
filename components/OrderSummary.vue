<template>
  <div id="summary" class="order--summary">
    <div class="content">
      <span>
        <small>Order Summary</small>
        <b v-if="data.preferences === 'Capsule'">
          “I drink my coffee using <span class="cyan">Capsules</span>, with a
          <span class="cyan">{{ beanType }}</span> type of bean.
          <span class="cyan">{{ quantity }}</span
          >, sent to me <span class="cyan">{{ deliveries }}</span
          >.”
        </b>
        <b v-else>
          “I drink my coffee as
          <span class="cyan">{{ preferences }}</span
          >, with a <span class="cyan">{{ beanType }}</span> type of bean.
          <span class="cyan">{{ quantity }}</span> ground ala
          <span class="cyan">{{ grindOption }}</span
          >, sent to me <span class="cyan">{{ deliveries }}</span
          >.”
        </b>
      </span>
    </div>
    <button
      class="main-button"
      :disabled="fieldsMissing"
      @click="$store.commit('order/toggleReady')"
    >
      Create my plan!
    </button>
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
  computed: {
    preferences() {
      return this.data.preferences ? this.data.preferences : '_____'
    },
    beanType() {
      return this.data.beanType ? this.data.beanType : '_____'
    },
    quantity() {
      return this.data.quantity ? this.data.quantity : '_____'
    },
    grindOption() {
      return this.data.grindOption ? this.data.grindOption : '_____'
    },
    deliveries() {
      return this.data.deliveries ? this.data.deliveries : '_____'
    },
    fieldsMissing() {
      const {
        preferences,
        beanType,
        quantity,
        grindOption,
        deliveries,
      } = this.data

      if (preferences === 'Capsule') {
        return !preferences || !beanType || !quantity || !deliveries
      }

      return (
        !preferences || !beanType || !quantity || !grindOption || !deliveries
      )
    },
  },
}
</script>
