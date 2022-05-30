<template>
  <card>
    <template #header>微信表单</template>
    <div>
      <XInput title="微信号" v-model="appName"></XInput>
    </div>
    this is {{ appName }}
  </card>
</template>

<script>
export default {
  data() {
    return {
      appName: 'test app',
    }
  },
}
</script>

<style scoped></style>
