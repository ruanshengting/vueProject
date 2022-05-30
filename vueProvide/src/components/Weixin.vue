<template>
  <card>
    <template #header>微信表单</template>
    <div>
      <XInput title="微信号" v-model="appName"></XInput>
      <XInput title="密码" v-model="key"></XInput>
    </div>
  </card>
</template>

<script>
export default {
  data() {
    return {
      appName: 'test app',
      key: 'fwahefuahufhfhfus',
    }
  },
}
</script>

<style scoped></style>
