<script setup lang="ts">
import { formatDate } from '@/utilities/date';
import Box from './Box.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  presentLabel: {
    type: String,
    default: 'Present'
  }
});

const organizeItems = (items: any[]): any => {
  const groupedItems: any[] = [];
  items.forEach((item, index) => {
    item = {
      ...item,
      start: formatDate(item.start, props.presentLabel),
      end: formatDate(item.end, props.presentLabel)
    };
    if (index === 0) {
      groupedItems.push([item]);
    } else {
      if (item['company'] === items[index - 1]['company']) {
        groupedItems[groupedItems.length - 1].push(item);
      } else {
        groupedItems.push([item]);
      }
    }
  });
  return groupedItems;
};
</script>

<template>
  <Box v-for="(item, itemIndex) in organizeItems(items)" :key="`experience-${itemIndex}`">
    <div v-for="(role, roleIndex) in item" :key="`experience-${itemIndex}-${roleIndex}`" class="box-item">
      <div class="box-item__meta">
        <div class="box-item__meta__main">
          <h3 class="box-item__meta__main__title">{{ role.title }}</h3>
          <div class="box-item__meta__main__time">{{ role.start }} - {{ role.end }}</div>
        </div>
        <div class="box-item__meta__sub">{{ role.company }} • {{ role.location }}</div>
      </div>
      <div class="box-item__details">
        <p>{{ role.description }}</p>
        <ul>
          <li v-for="(task, taskIndex) in role.tasks" :key="`experience-${itemIndex}-${roleIndex}-task-${taskIndex}`">
            {{ task }}
          </li>
        </ul>
      </div>
    </div>
  </Box>
</template>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap/scss/functions';
@import '../../node_modules/bootstrap/scss/variables';
@import '../../node_modules/bootstrap/scss/mixins';
.box-item + .box-item {
  margin-top: 2rem;
  border-top: 1px solid $gray-300;
  padding-top: 1rem;
}
</style>
