<template>
  <nav class="order--nav-menu">
    <ol>
      <li>
        <a href="#01" @click="$store.commit('order/togglePreferences', true)">
          <h4 :style="activeP"><span class="cyan">01</span>Preferences</h4>
        </a>
      </li>
      <li>
        <a href="#02" @click="$store.commit('order/toggleBeanType', true)">
          <h4 :style="activeB"><span class="gray">02</span>Bean Type</h4>
        </a>
      </li>
      <li>
        <a href="#03" @click="$store.commit('order/toggleQuantity', true)">
          <h4 :style="activeQ"><span class="gray">03</span>Quantity</h4>
        </a>
      </li>
      <li>
        <a
          :href="data.preferences === 'Capsule' ? null : '#04'"
          @click="$store.commit('order/toggleGrindOption', true)"
        >
          <h4 :style="[activeG, disabled]">
            <span class="gray">04</span>Grind Option
          </h4>
        </a>
      </li>
      <li>
        <a href="#05" @click="$store.commit('order/toggleDeliveries', true)">
          <h4 :style="activeD"><span class="gray">05</span>Deliveries</h4>
        </a>
      </li>
    </ol>
  </nav>
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
    disabled() {
      return this.data.preferences === 'Capsule'
        ? { opacity: 0.2, cursor: 'default' }
        : null
    },
    activeP() {
      return !this.data.preferences &&
        !this.$store.state.order.options.preferences.hidden
        ? { opacity: 1 }
        : null
    },
    activeB() {
      return !this.data.beanType &&
        !this.$store.state.order.options.beanType.hidden
        ? { opacity: 1 }
        : null
    },

    activeQ() {
      return !this.data.quantity &&
        !this.$store.state.order.options.quantity.hidden
        ? { opacity: 1 }
        : null
    },
    activeG() {
      return !this.data.grindOption &&
        !this.$store.state.order.options.grindOption.hidden
        ? { opacity: 1 }
        : null
    },
    activeD() {
      return !this.data.deliveries &&
        !this.$store.state.order.options.deliveries.hidden
        ? { opacity: 1 }
        : null
    },
  },
}
</script>
