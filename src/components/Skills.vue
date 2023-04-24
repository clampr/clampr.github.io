<script setup lang="ts">
import type { PropType } from 'vue';
import type { Skill } from '@/utilities/interfaces';

const props = defineProps({
  skills: Array as PropType<Skill[]>
});
</script>

<template>
  <div class="d-flex flex-wrap">
    <span v-for="(skill, skillIndex) in skills" :key="`skill-${skillIndex}`" class="badge rounded py-1 px-2">
      <i v-if="skill.icon" :class="`fa-brands fa-${skill.icon}`"></i>
      {{ skill.name }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap/scss/functions';
@import '../../node_modules/bootstrap/scss/variables';
@import '../../node_modules/bootstrap/scss/mixins';

.badge {
  color: $dark;
  border: 1px solid $gray-400;
  font-size: 110%;
  font-weight: 500;
  margin-right: 0.25rem;
  margin-bottom: 0.3rem;

  i {
    margin-right: 0.2rem;
  }
}
</style>
