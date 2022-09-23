<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form" v-show="isModalVisible">
    <form class="modal-form">
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "modal",
  data() {
    return {
      isModalVisible: false,
      errorName: false,
    };
  },
  methods: {
    onClickOutside(event) {
      if (event.target.localName !== "button") {
        this.closeModal();
      }
    },
  },
};
</script>
