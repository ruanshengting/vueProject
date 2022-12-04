<template>
  <div>
    this is home
  </div>
  <div>
    {{ store.state.msg }}
    <h2>{{ message }}</h2>
  </div>
  <button @click="updatemsg">改变Msg</button>
  <!-- <ul>
    <li v-for="item in commentList" :key="item.commentId">
      <div>
        <img :src="item.user.avatarUrl" alt="" class="avater" />
        {{ item.content }}
      </div>
    </li>
  </ul> -->
  <ul>
    <li v-for="item in store.state.commentList" :key="item.commentId">
      <div>
        <img :src="item.user.avatarUrl" alt="" class="avater" />
        {{ item.content }}
      </div>
    </li>
  </ul>
</template>
<script>
import axios from 'axios'
export default {
  inject: ['store'],
  methods: {
    updatemsg: function () {
      this.store.updateMsg()
    },
  },
  data() {
    return {
      commentList: [],
    }
  },
  props: ['message'],
  created() {
    /*
  fetch('http://localhost:4000/comment/music?id=186016&limit=1')//默认执行get请求
      .then((res) => {
        //json()可以把响应的body，解析成Promise JSON
        return res.json()
      })
      .then((res) => {
        console.log('🚀 ~ file: Home.vue:25 ~ created ~ res', res)
        this.store.updateCommentList(res.hotComments) //改变store里的数据
      }) */
    //axios:HTTP库
    /*
    axios
      .get('http://localhost:4000/comment/music?id=186016&limit=1')
      .then((res) => {
        console.log('🚀 ~ file: Home.vue:25 ~ created ~ res', res.data)
      })
    */
    //https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8D%97%E5%AE%81&ci=99&channelId=4
    //跨域请求数据，是因为浏览器的同源策略保护机制，用Proxy（中转服务器）去解决，vite.config.js里去配置
    axios
      .get(
        '/path/api/mmdb/movie/v3/list/hot.json?ct=%E5%8D%97%E5%AE%81&ci=99&channelId=4',
      )
      .then((res) => {
        console.log('🚀 ~ file: Home.vue:25 ~ created ~ res', res.data.data.hot)
      })
  },
}
</script>
<style scoped>
.avater {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
</style>
