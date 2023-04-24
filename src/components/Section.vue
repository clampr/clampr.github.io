<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: null
  }
});
</script>

<template>
  <section>
    <h2 v-if="title" class="section-title fw-bold">
      <span v-if="icon" class="section-title__icon"><i :class="icon"></i></span>
      <span class="section-title__text">{{ title }}</span>
    </h2>
    <div class="section-content">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap/scss/functions';
@import '../../node_modules/bootstrap/scss/variables';
@import '../../node_modules/bootstrap/scss/mixins';
@import '../style/variables';

section {
  margin-bottom: 3rem;

  .section-title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
    color: darken($primary, 15%);
    position: relative;
    margin-top: 0;
    margin-bottom: 20px;
    &__icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      margin-right: 8px;
      color: #fff;
      @include border-radius(50%);
      background: $primary;
      text-align: center;
      font-size: 16px;
      position: relative;
      top: -2px;
      .svg-inline--fa {
        font-size: 14px;
        margin-top: 6px;
      }
    }
  }
}
</style>
