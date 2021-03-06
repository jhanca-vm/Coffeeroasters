<template>
  <fieldset :name="name" class="field">
    <legend>
      <span @click="$emit('showHide')">{{ legend }}</span>
      <span :class="{ up: !hidden }" @click="$emit('showHide')" />
    </legend>
    <div class="field--options" :class="{ hide: hidden }">
      <div v-for="{ id, value, description } in items" :key="id">
        <input :id="id" v-model="choice" :value="value" type="radio" />
        <label :for="id">
          <b>{{ value }}</b>
          <br />
          {{ description }}
        </label>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  model: {
    event: 'change',
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    legend: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: () => null,
    },
    hidden: Boolean,
  },
  data() {
    return {
      choice: undefined,
    }
  },
  watch: {
    choice() {
      this.$emit('change', this.choice)
    },
  },
}
</script>

<style src="~/assets/css/components/field.css"></style>
