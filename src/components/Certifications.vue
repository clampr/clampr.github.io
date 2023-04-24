<script setup lang="ts">
import type { PropType } from 'vue';
import type { Certification } from '@/utilities/interfaces';
import { formatDate } from '@/utilities/date';
import Box from './Box.vue';

const props = defineProps({
  items: Array as PropType<Certification[]>
});
</script>

<template>
  <Box v-for="(item, itemIndex) in items" :key="`certification-${itemIndex}`">
    <div class="box-item">
      <div class="box-item__meta">
        <div class="box-item__meta__main">
          <h3 class="box-item__meta__main__title">{{ item.title }}</h3>
          <div class="box-item__meta__main__time">{{ formatDate(item.date) }}</div>
        </div>
        <div class="box-item__meta__sub">{{ item.org }} • {{ item.location }}</div>
      </div>
      <div class="box-item__details">
        <p class="mb-0">{{ item.description }}</p>
      </div>
    </div>
  </Box>
</template>
