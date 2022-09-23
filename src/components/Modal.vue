<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form" v-show="isModalVisible">
    <form class="modal-form" v-click-outside="onClickOutside">
      <h2 class="modal-form__title">Your form has been submitted</h2>
      <button
        type="button"
        class="modal-form__button-close"
        @click="closeModal"
      >
        ✖
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {},
};
</script>
