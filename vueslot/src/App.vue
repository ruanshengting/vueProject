<template>
  <!-- <div>
    <Card :content="content">
      <div>default</div>
      <template v-slot:header>header</template>
      <template #main>main</template>
      <template #footer>footer</template>
    </Card>
    <HdButton></HdButton>
  </div>-->
  方法1:用template的得到默认的slot的值
  <Lesson v-for="lesson of lessons" :key="lesson.id" :lesson="lesson">
    <template #icon>:)</template>
    <template #default="{id}">
      <button @click="del(id)">Delete</button>
    </template>
  </Lesson>
  <!-- 方法2:如果只使用默认slot就可以这样用 -->
  <!-- <Lesson
    v-for="lesson of lessons"
    :key="lesson.id"
    :lesson="lesson"
    v-slot="{ id }"
  >
    <button @click="del(id)">Delete</button>
  </Lesson> -->
</template>

<script>
/*
import Card from './components/Card.vue'
import HdButton from './components/HdButton.vue'

export default {
  components: { Card, HdButton },
  data() {
    return {
      content: '父组件content',
    }
  },
  methods: {
    show() {
      console.log('父组件')
    },
  },
}*/
import lessons from './data'
import Lesson from './components/Lesson.vue'
export default {
  data() {
    return { lessons } //记得加上{}
  },
  components: { Lesson },
  methods: {
    del(id) {
      const delId = this.lessons.findIndex((item) => item.id === id)
      this.lessons.splice(delId, 1)
    },
  },
}
</script>

<style lang="scss" scoped></style>
