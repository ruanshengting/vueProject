<template>
  <div class="classcomponent">
    <div class="c1" :class="[classList, 'package']">
      { current: active } --- active=true应用current这个样式
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classList: {
        current: true,
        now: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.classcomponent {
  .c1 {
    color: red;
  }
  .current {
    color: black;
  }
  .now {
    border: 5px solid darkblue;
  }
}
</style>
