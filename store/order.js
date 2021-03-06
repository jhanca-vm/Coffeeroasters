export const state = () => ({
  ready: false,
  options: {
    preferences: {
      values: [
        {
          id: 'capsule',
          value: 'Capsule',
          description: 'Compatible with Nespresso systems and similar brewers',
        },
        {
          id: 'filter',
          value: 'Filter',
          description:
            'For pour over or drip methods like Aeropress, Chemex, and V60',
        },
        {
          id: 'espresso',
          value: 'Espresso',
          description:
            'Dense and finely ground beans for an intense, flavorful experience',
        },
      ],
      hidden: false,
    },
    beanType: {
      values: [
        {
          id: 'single-origin',
          value: 'Single Origin',
          description:
            'Distinct, high quality coffee from a specific family-owned farm',
        },
        {
          id: 'decaf',
          value: 'Decaf',
          description:
            'Just like regular coffee, except the caffeine has been removed',
        },
        {
          id: 'blended',
          value: 'Blended',
          description:
            'Combination of two or three dark roasted beans of organic coffees',
        },
      ],
      hidden: true,
    },
    quantity: {
      values: [
        {
          id: 'q-250g',
          value: '250g',
          description:
            'Perfect for the solo drinker. Yields about 12 delicious cups.',
        },
        {
          id: 'q-500g',
          value: '500g',
          description:
            'Perfect option for a couple. Yields about 40 delectable cups.',
        },
        {
          id: 'q-1000g',
          value: '1000g',
          description:
            'Perfect for offices and events. Yields about 90 delightful cups.',
        },
      ],
      hidden: true,
    },
    grindOption: {
      values: [
        {
          id: 'wholebean',
          value: 'Wholebean',
          description: 'Best choice if you cherish the full sensory experience',
        },
        {
          id: 'g-filter',
          value: 'Filter',
          description:
            'For drip or pour-over coffee methods such as V60 or Aeropress',
        },
        {
          id: 'cafetiere',
          value: 'Cafetiére',
          description:
            'Course ground beans specially suited for french press coffee',
        },
      ],
      hidden: true,
    },
    deliveries: {
      values: [
        {
          id: 'every-week',
          value: 'Every week',
          description:
            '$7.20 per shipment. Includes free first-class shipping.',
        },
        {
          id: 'every-2-weeks',
          value: 'Every 2 weeks',
          description: '$9.60 per shipment. Includes free priority shipping.',
        },
        {
          id: 'every-month',
          value: 'Every month',
          description: '$12.00 per shipment. Includes free priority shipping.',
        },
      ],
      hidden: true,
    },
  },
})

export const mutations = {
  toggleReady(state) {
    state.ready = !state.ready
  },
  togglePreferences(state, payload) {
    if (payload) {
      state.options.preferences.hidden = false
    } else {
      state.options.preferences.hidden = !state.options.preferences.hidden
    }
  },
  toggleBeanType(state, payload) {
    if (payload) {
      state.options.beanType.hidden = false
    } else {
      state.options.beanType.hidden = !state.options.beanType.hidden
    }
  },
  toggleQuantity(state, payload) {
    if (payload) {
      state.options.quantity.hidden = false
    } else {
      state.options.quantity.hidden = !state.options.quantity.hidden
    }
  },
  toggleGrindOption(state, payload) {
    if (payload) {
      state.options.grindOption.hidden = false
    } else {
      state.options.grindOption.hidden = !state.options.grindOption.hidden
    }
  },
  toggleDeliveries(state, payload) {
    if (payload) {
      state.options.deliveries.hidden = false
    } else {
      state.options.deliveries.hidden = !state.options.deliveries.hidden
    }
  },
}
