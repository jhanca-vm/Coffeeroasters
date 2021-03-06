<template>
  <section class="order">
    <NavMenu :data="orderSummary" />
    <section class="order--fields">
      <Field
        id="01"
        v-model="preferences"
        :items="order.preferences.values"
        :hidden="order.preferences.hidden"
        legend="How do you drink your coffee?"
        name="Preferences"
        @showHide="$store.commit('order/togglePreferences')"
      />
      <Field
        id="02"
        v-model="beanType"
        :items="order.beanType.values"
        :hidden="order.beanType.hidden"
        legend="What type of coffee?"
        name="Bean Type"
        @showHide="$store.commit('order/toggleBeanType')"
      />
      <Field
        id="03"
        v-model="quantity"
        :items="order.quantity.values"
        :hidden="order.quantity.hidden"
        legend="How much would you like?"
        name="Quantity"
        @showHide="$store.commit('order/toggleQuantity')"
      />
      <Field
        id="04"
        v-model="grindOption"
        :items="order.grindOption.values"
        :hidden="order.grindOption.hidden"
        legend="Want us to grind them?"
        name="Grind Option"
        @showHide="$store.commit('order/toggleGrindOption')"
      />
      <Field
        id="05"
        v-model="deliveries"
        :items="order.deliveries.values"
        :hidden="order.deliveries.hidden"
        legend="How often should we deliver?"
        name="Deliveries"
        @showHide="$store.commit('order/toggleDeliveries')"
      />
      <OrderSummary :data="orderSummary" />
    </section>
    <Modal v-if="$store.state.order.ready" :data="orderSummary" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      preferences: undefined,
      beanType: undefined,
      quantity: undefined,
      grindOption: undefined,
      deliveries: undefined,
    }
  },
  computed: {
    order() {
      return this.$store.state.order.options
    },
    orderSummary() {
      return this.preferences === 'Capsule'
        ? {
            preferences: this.preferences,
            beanType: this.beanType,
            quantity: this.quantity,
            deliveries: this.deliveries,
          }
        : {
            preferences: this.preferences,
            beanType: this.beanType,
            quantity: this.quantity,
            grindOption: this.grindOption,
            deliveries: this.deliveries,
          }
    },
  },
}
</script>

<style src="~/assets/css/components/order.css"></style>
