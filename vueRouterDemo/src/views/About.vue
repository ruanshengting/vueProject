<template>
  <div>this is about</div>
  <button @click="goBack()">Back</button>
  <button @click="goForward()">Forwards</button>
</template>
<script>
export default {
  methods: {
    goBack() {
      //this.$router.go(-1)相当于this.$router.back()
      this.$router.back()
    },
    goForward() {
      this.$router.forward() //相当于this.$router.go(1)
    },
  },
}
</script>
