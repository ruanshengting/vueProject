<template>
  <div class="lesson">
    <!-- <Lesson v-for="item in db" :key="item.id" :lesson="item" @del="show" /> -->
    <Lesson
      v-for="item in db"
      :key="item.id"
      :lesson="item"
      @del="show"
      v-model.trim="item.title"
    />
    {{ db }}
    <!-- <input type="text" :value="title" @input="title = $event.target.value" />
    {{ title }} -->
    <!-- <HdInput :value="title" @update:value="change" /> -->
    <!-- <HdInput v-model="title" />
    title:{{ title }} -->
  </div>
</template>

<script>
import db from '../data/db'
import Lesson from './components/Lesson.vue'
import HdInput from './components/HdInput.vue'
export default {
  components: { Lesson, HdInput },
  data() {
    return {
      db,
      title: 'ava',
    }
  },
  methods: {
    change(v) {
      this.title = v
    },
    input(event) {
      console.log('🚀 ~ file: App.vue ~ line 22 ~ event', event)
    },
    show(id) {
      const index = this.db.findIndex((fItem) => fItem.id === id)
      console.log('🚀 ~ file: App.vue ~ line 20 ~ show ~ index', index)
      this.db.splice(index, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
.lesson {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
}
</style>
