<template>
  <nav class="nav">
    <img class="logo-img" src="./image/logo.png" alt="logo" />
    <div class="nav-links">
      <router-link to="/">home</router-link>
      <router-link to="/about">about us</router-link>
      <router-link to="/frameworks">frameworks</router-link>
      <router-link to="/applications">applications</router-link>
      <router-link to="/contact">contact us</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: ["home", "about", "frameworks", "applications", "contact"],
    };
  },
};
</script>
