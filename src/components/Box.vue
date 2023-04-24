<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap/scss/functions';
@import '../../node_modules/bootstrap/scss/variables';
@import '../../node_modules/bootstrap/scss/mixins';
.box {
  background-color: $gray-100;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 2rem;

  @include media-breakpoint-down(sm) {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 0;
  }
}
</style>
