//状态集中管理
import { reactive } from 'vue'
const store = {
  state: reactive({
    //定义状态
    msg: 'Hello',
    commentList: [],
  }),
  updateMsg: function () {
    this.state.msg = '你好'
  },
  updateCommentList(value) {
    this.state.commentList = value
    console.log(
      '🚀 ~ file: index.js:14 ~ updateCommentList ~  this.state.commentList',
      this.state.commentList,
    )
  },
}
export default store
