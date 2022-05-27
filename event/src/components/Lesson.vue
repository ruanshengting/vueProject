<template>
  <div>
    <img :src="lesson.preview" :alt="lesson.title" />
    <h3 @dblclick="inputShow = true">
      <input
        v-if="inputShow"
        type="text"
        v-model="lesson.title"
        @keyup.enter="inputShow = false"
        @blur="inputShow = false"
      />
      <strong v-else>{{ lesson.title }}</strong>
    </h3>
    <h3 @dblclick="inputPrice = true">
      <input
        v-if="inputPrice"
        type="text"
        v-model="lesson.price"
        @input="$emit('update:price', $event.target.value)"
        @keyup.enter="inputPrice = false"
        @blur="inputPrice = false"
      />
      <strong v-else>{{ lesson.price }}</strong>
    </h3>
    <!-- 调用方式1:
    -->
    <!-- <span @click="$emit('del', lesson)">X</span> -->
    <!-- 调用方式2: -->
    <span @click="del">X</span>
  </div>
</template>

<script>
export default {
  isheritAttrs: false,
  data() {
    return {
      inputShow: false,
      inputPrice: false,
    }
  },
  created() {
    console.log(this.modelModifiers)
  },
  props: ['lesson', 'modelValue', 'price', 'modelModifiers'],
  emits: {
    del(v) {
      //emit校验
      if (/^\d+$/.test(v)) {
        return true
      } else {
        console.error('del emit')
      }
    },
    'update:modelValue': null,
    'update:price': null,
  }, //注册自定义事件
  methods: {
    del() {
      confirm('确认删除嘛？')
      this.$emit('del', this.lesson.id)
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  border: 1px solid #ddd;
  text-align: center;
  transition: 1s;
  &:hover {
    box-shadow: 0 0 20px #aaa;
    > span {
      opacity: 1;
    }
  }
  span {
    display: flex;
    background-color: #666;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    opacity: 0;
  }
  h3 {
    padding: 0 0 20px 0;
    margin: 0;
    font-size: 16px;
  }
}
</style>
