<template>
  <div class="timeline">
    <span class="line" />
    <div>
      <span class="circle" :class="bgDark" />
    </div>
    <div>
      <span class="circle" :class="bgDark" />
    </div>
    <div>
      <span class="circle" :class="bgDark" />
    </div>
  </div>
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
    bgDark() {
      return this.mode === 'dark' ? 'bg-dark' : null
    },
  },
}
</script>

<style>
.timeline {
  column-gap: 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
}

.timeline span {
  display: inline-block;
}

.timeline .circle {
  background-color: var(--color-100);
  border: 2px solid var(--color-300);
  border-radius: 50%;
  height: 31px;
  width: 31px;
}

.timeline .line {
  background-color: var(--color-200);
  bottom: 24px;
  position: relative;
  grid-column: span 2;
  grid-row-start: 2;
  height: 2px;
  left: 15.5px;
  width: calc(100% + 28px);
  z-index: -1;
}

.bg-dark {
  background: transparent !important;
}

@media (min-width: 1024px) {
  .timeline {
    column-gap: 120px;
    margin-top: 8rem;
    max-width: 1045px;
  }

  .timeline .line {
    width: calc(100% + 120px);
  }
}

@media (max-width: 767px) {
  .timeline {
    display: none;
  }
}
</style>
