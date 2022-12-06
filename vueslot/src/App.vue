<template>
  <SetupWatch />
  <CombinedAPI />

  <!-- <div>
    <Card :content="content">
      <div>default</div>
      <template v-slot:header>header</template>
      <template #main>main</template>
      <template #footer>footer</template>
    </Card>
    <HdButton></HdButton>
  </div>-->

  <!--  方法1:用template的得到默认的slot的值
  <Lesson v-for="lesson of lessons" :key="lesson.id" :lesson="lesson">
    <template #icon>:)</template>
    <template #default="{id}">
      <button @click="del(id)">Delete</button>
    </template>
  </Lesson> -->
  <!-- 方法2:如果只使用默认slot就可以这样用 -->
  <!-- <Lesson
    v-for="lesson of lessons"
    :key="lesson.id"
    :lesson="lesson"
    v-slot="{ id }"
  >
    <button @click="del(id)">Delete</button>
  </Lesson> -->

  <div>
    <Content>
      <!-- v-slot只能添加到template上 -->
      <template v-slot:header><button>Button</button></template>
      <template v-slot:footer><button>Footer</button></template>
      <template v-slot:main>
        <div>{{ msg }}</div>
      </template>
    </Content>
    <Content>
      <!-- 这个slotProps，接受了slot传过来的所有值 -->
      <template v-slot:default="slotProps">
        <ul v-for="item in slotProps.listSlots" :key="item">
          <li>{{ item }}</li>
        </ul>
      </template>
    </Content>
    <button @click="isShow = !isShow">Change isShow</button>
    <Father v-if="isShow" />
  </div>
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
import Content from './components/Content.vue'
import Father from './components/Father.vue'
import CombinedAPI from './components/CombinedAPI.vue'
import SetupWatch from './components/SetupWatch.vue'
export default {
  data() {
    return { lessons, msg: 'Hello', isShow: true } //记得加上{}
  },
  components: { Lesson, Content, Father, CombinedAPI, SetupWatch },
  methods: {
    del(id) {
      const delId = this.lessons.findIndex((item) => item.id === id)
      this.lessons.splice(delId, 1)
    },
  },
}
</script>

<style lang="scss" scoped></style>
