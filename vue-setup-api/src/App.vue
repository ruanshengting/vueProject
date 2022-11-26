<template>
  <Computed />
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <h1>{{ title }}</h1>
  <button @click="addNum">点击增加num{{ num }}</button>
  <button @click="changeCounter">点击增加counter{{ counter }}</button>
  <h1>{{ user.username }}</h1>
  <h1>{{ user.type }}</h1>
  <h1>{{ username }}</h1>
  <h1 @click="changeType">{{ type }}</h1>
  <h1>reverseType: {{ reverseType }}</h1>
</template>
<script>
import { ref, reactive, toRefs, computed, onMounted } from 'vue' //reactive:使对象变成响应式，ref:使数字/字符串变成响应式,computed是计算属性
import Computed from './components/Computed.vue'
export default {
  setup() {
    const list = ['hello ', 'user', 'nice to meet you']
    const title = ref('')
    onMounted(() => {
      console.log('this is onMounted：在beforeMount和mounted之间执行')
      let i = 0

      let t = setInterval(() => {
        title.value = list[i]
        i++
        if (i === 3) {
          clearInterval(t)
        }
      }, 500)
    })
    //setup可以直接代替created
    console.log(
      '如果是对象，就用reactive来使他变成响应式对象，如果是基本类型那就用ref使它变成响应式变量',
    )
    const user = reactive({
      //现在user是一个响应式变量
      username: 'ava',
      age: 22,
      type: 'coder',
      reverseType: computed(() => {
        return user.type.split('').reverse().join('')
      }),
    })
    console.log('setup')
    const counter = ref(0) //现在counter是一个响应式变量
    function changeCounter() {
      counter.value += 10
    }
    function changeType() {
      user.type = 'front-end'
    }

    return { counter, changeCounter, user, ...toRefs(user), changeType, title }
  },
  data() {
    console.log('data')
    return {
      num: 0,
    }
  },
  methods: {
    addNum() {
      this.num++
    },
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  components: { Computed },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
