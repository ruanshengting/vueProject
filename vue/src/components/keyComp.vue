<template>
  <div>
    按键修饰符
  </div>
  <label>akeyEvent</label>
  <input type="text" @keyup.a="akeyEvent" />
  <label>backspacekeyEvent</label>
  <input type="text" @keyup.backspace="backspacekeyEvent" />
  <label>ctrlKEvent</label>
  <input type="text" @keyup.ctrl.k="ctrlKEvent" />
  <label>upEvent</label>
  <input type="text" @keyup.up="upEvent" />
  <label>enterEvent</label>
  <input type="text" @keyup.enter="enterEvent" />
  <div
    style="height: 50px; width: 500px; background-color: #3596b5;"
    @click.alt.exact="hd"
  >
    alt+click才触发(不能多按别的按键)
  </div>
  <div
    style="height: 50px; width: 500px; background-color: #9b89b3;"
    @click.alt="hd"
  >
    alt+click触发(可多按别的按键)
  </div>
</template>

<script>
export default {
  methods: {
    akeyEvent() {
      console.log('按下字母a触发')
    },
    backspacekeyEvent() {
      console.log('按下删除键（backspace）触发')
    },
    ctrlKEvent() {
      console.log('按下k+ctrl触发')
    },
    upEvent() {
      console.log('按下up触发')
    },
    hd() {
      console.log('alt+click触发')
    },
    enterEvent() {
      console.log('enterEvent')
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
</style>
