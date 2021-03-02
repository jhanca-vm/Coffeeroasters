<template>
  <div class="timeline">
    <span class="line" />
    <div>
      <span class="circle" />
    </div>
    <div>
      <span class="circle" />
    </div>
    <div>
      <span class="circle" />
    </div>
  </div>
</template>

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
  left: 30px;
  width: 100%;
  z-index: -1;
}

@media (min-width: 1024px) {
  .timeline {
    column-gap: 120px;
    margin-top: 8rem;
    max-width: 1045px;
  }

  .timeline .line {
    width: 118%;
  }
}

@media (max-width: 767px) {
  .timeline {
    display: none;
  }
}
</style>
