<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="frameworks" id="frameworks">
    <h2 class="frameworks-title">Frameworks</h2>
    <div class="frameworks-block">
      <div
        class="frameworks-block__package"
        v-for="item in items"
        :key="item.name"
      >
        <img :src="item.img" />
        <div class="frameworks-block__list">
          <h3 class="frameworks-block__title">{{ item.name }}</h3>
          <p class="frameworks-block__item">{{ item.include }}</p>
          <div class="frameworks-block__bottom">
            <button class="frameworks-block__button">Read more</button>
            <button class="frameworks-block__button-webinar">Webinar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="info">
    <div class="info-wrap">
      <img src="../image/section3-1.png" />
      <div class="info-meeting">
        <h3 class="info-meeting__title">Setup a Meeting</h3>
        <p class="info-meeting__text">
          Fill out our contact form and have someone get back to you within 24
          hours.
        </p>
        <button class="info-meeting__btn">Schedule a Meeting</button>
      </div>
    </div>
    <div class="info-wrap">
      <img src="../image/section3-2.png" />
      <div class="info-meeting">
        <h3 class="info-meeting__title">Ask a Question</h3>
        <p class="info-meeting__text">
          Have a question? Just fill out our contact us form and we will get
          back to you.
        </p>
        <button class="info-meeting__btn">Ask a Question</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Vue js",
          include:
            "Vue.js is an open source JavaScript framework for creating user interfaces. It is easily integrated into projects using other JavaScript libraries. It can function as a web framework for developing single-page applications in a reactive style.",
          img: require("../image/vue.png"),
        },
        {
          name: "React js",
          include:
            "React is an open source JavaScript library for developing user interfaces. Instagram Facebook, React is developed and supported by a community of individual developers and corporations. React can be used to develop single-page and mobile applications.",
          img: require("../image/react.png"),
        },
        {
          name: "Angular js",
          include:
            "AngularJS is an open source JavaScript framework. Designed for the development of single-page applications. Its goal is to expand browser applications based on the MVC template, as well as simplify testing and development.",
          img: require("../image/angular.png"),
        },
      ],
    };
  },
  methods: {},
};
</script>
