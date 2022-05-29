<template>
  <div>
    <Card :content="content">
      <div>default</div>
      <template v-slot:header>header</template>
      <template #main>main</template>
      <template #footer>footer</template>
    </Card>
    <HdButton></HdButton>
  </div>
</template>

<script>
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
}
</script>

<style lang="scss" scoped></style>
