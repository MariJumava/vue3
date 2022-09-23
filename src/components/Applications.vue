<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="applications" id="applications">
    <h2 class="applications-title">Applications</h2>
    <div class="applications-block">
      <div
        class="applications-block__package"
        v-for="item in items"
        :key="item.name"
      >
        <img :src="item.img" />
        <h4 class="applications-block__title">{{ item.name }}</h4>
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
          name: "App 1",
          img: require("../image/app1.png"),
        },
        {
          name: "App 2",
          img: require("../image/app2.png"),
        },
        {
          name: "App 3",
          img: require("../image/app3.png"),
        },
        {
          name: "App 4",
          img: require("../image/app4.png"),
        },
        {
          name: "App 5",
          img: require("../image/app5.png"),
        },
        {
          name: "App 6",
          img: require("../image/app6.png"),
        },
        {
          name: "App 7",
          img: require("../image/app7.png"),
        },
        {
          name: "App 8",
          img: require("../image/app8.png"),
        },
      ],
    };
  },
  methods: {},
};
</script>
