<template>
  <div>
    <input v-model="form.title" type="text" />
    <textarea v-model="form.content"></textarea>
    <span>发布</span>
    <input
      type="checkbox"
      v-model="form.isPost"
      true-value="yes"
      false-value="no"
    />

    <hr />
    <label v-for="item in lessons" :key="item.value">
      <input type="checkbox" v-model="form.lessons" :value="item.value" />
      {{ item.title }}
    </label>
    <hr />
    <input type="radio" v-model="form.sex" :value="1" />
    男
    <input type="radio" v-model="form.sex" :value="2" />
    女
    <hr />
    value是object的时候要记得加上:
    <select v-model="form.citys" multiple>
      <option :value="{ name: 'SH' }">上海</option>
      <option :value="{ name: 'BJ' }">北京</option>
    </select>
    <hr />
    <input type="text" v-model.lazy="hd" />
    <hr />
    form： {{ form }}
    <hr />
    hd:{{ hd }}
    <hr />
    <input type="text" v-model.number="num" />
    (加了number修饰符之后就可以计算了)num={{ num + 100 }}
    <hr />
    <input type="text" v-model.trim="title" />
  </div>
</template>

<script>
const lessons = [
  { title: 'php', value: 'php' },
  { title: 'js', value: 'js' },
  { title: 'css', value: 'css' },
]
const form = {
  title: 'test title',
  content: '',
  isPost: false,
  lessons: [],
  sex: 1,
  citys: [],
}
export default {
  data() {
    return {
      form,
      lessons,
      hd: 'houduan.com',
      num: 1,
      title: 'hhhh',
    }
  },
  watch: {
    hd() {
      console.log('网络请求')
    },
    title(n) {
      console.log('n=' + n)
    },
  },
}
</script>

<style scoped></style>
