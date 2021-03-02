export const state = () => ({
  visible: false,
})

export const mutations = {
  toggle(state) {
    state.visible = !state.visible
  },
}
