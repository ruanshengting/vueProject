<template>
  <br />
  ---------- this is content page------------
  <div>
    <slot name="header"></slot>
    <slot name="main">可以填充slot的默认值</slot>
    <slot name="footer"></slot>
    <slot name="default" :listSlots="list" :msg="message"></slot>
  </div>
  ---------- this is content page------------
</template>
<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      message: 'Hello',
    }
  },
}
</script>
