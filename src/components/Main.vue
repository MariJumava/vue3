<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <main class="main">
      <div class="home">
        <img class="home-img__img" src="../image/main.png" alt="main" />
        <div class="home-description">
          <h1 class="home-description__title">Welcome to Test Page</h1>
          <p class="home-description__subtitle">Front-end developer</p>
        </div>
      </div>

      <AboutUs />
      <Frameworks />
      <Applications />
    </main>
    <ContactUs />
    <div class="footer">
      <p class="footer-title">©2015-2022 Success Craft</p>
    </div>
  </div>
</template>

<script>
import AboutUs from "./AboutUs";
import Frameworks from "./Frameworks";
import Applications from "./Applications";
import ContactUs from "./ContactUs";
export default {
  components: {
    AboutUs,
    Frameworks,
    Applications,
    ContactUs,
  },
};
</script>
