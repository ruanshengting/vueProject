<template>
  <div :key="task.id" v-for="task in tasks">
    <Task
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>
<script>
/* eslint-disable */
import Task from './Task.vue'
export default {
  name: 'Tasks',
  props: {
    tasks: Array,
  },
  components: { Task },
  emits: ['delete-task', 'toggle-reminder'], //这里是emits，不要漏加s!!
}
</script>
