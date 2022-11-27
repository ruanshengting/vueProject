<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 也就是router里的path-->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签 在不重新加载页面的情况下 更改URL-->
      <router-link to="/">Go to Home</router-link>
      <br />
      <router-link to="/about">Go to About</router-link>
      <br />
      <router-link to="/user/123">Go to User</router-link>
      <br />
      <!-- <router-link to="/news/321">Go to news</router-link> -->
      <router-link :to="{ name: 'news', params: { id: 999 } }">
        Go to news
      </router-link>
      <br />
      <router-link to="/parent">Go to Parent</router-link>
      <br />
      <router-link to="/page">Go to Page</router-link>
      <br />
      <router-link to="/shop">Go to Shop</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 占位符 -->
    <router-view name="shopTopViewName"></router-view>
    <router-view></router-view>
    <!-- 命名视图 -->
    <router-view name="shopFooterViewName"></router-view>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
