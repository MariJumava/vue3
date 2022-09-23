<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="contact">
    <h2 class="contact-title">Contact Us</h2>
    <form class="contact-form" @submit.prevent="onSubmit">
      <div class="contact-form__item">
        <h4 class="contact-form__title">First Name*</h4>
        <input
          type="text"
          placeholder="Enter Your First Name"
          v-model="v$.form.firstName.$model"
        />
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.firstName.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="contact-form__item">
        <h4 class="contact-form__title">Last Name*</h4>
        <input
          type="text"
          placeholder="Enter Your Last Name"
          class="form-control"
          v-model="v$.form.lastName.$model"
        />
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.lastName.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="contact-form__item">
        <h4 class="contact-form__title">Company*</h4>
        <input type="text" placeholder="Enter Your Company" />
      </div>
      <div class="contact-form__item">
        <h4 class="contact-form__title">Email*</h4>
        <input
          type="email"
          placeholder="Enter Your Email"
          v-model="v$.form.email.$model"
        />
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.email.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="contact-form__item">
        <h4 class="contact-form__title">Job Title*</h4>
        <input type="text" placeholder="Enter Your Job Title" />
      </div>
      <div class="contact-form__item">
        <h4 class="contact-form__title">Country</h4>
        <input type="text" placeholder="Enter Your Country" />
      </div>
      <div class="contact-form__item">
        <h4 class="contact-form__title">State*</h4>
        <input type="text" placeholder="Enter Your State" />
      </div>
      <div class="contact-form__item">
        <h4 class="contact-form__title">Zip Code*</h4>
        <input type="password" placeholder="Enter Your Zip Code" />
      </div>
    </form>
    <button class="contact-button" :disabled="v$.form.$invalid">Submit</button>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
}

export default {
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },

  validations() {
    return {
      form: {
        firstName: {
          required,
          name_validation: {
            $validator: validName,
            $message:
              "Invalid Name. Valid name only contain letters, dashes (-) and spaces",
          },
        },
        lastName: {
          required,
          name_validation: {
            $validator: validName,
            $message:
              "Invalid Name. Valid name only contain letters, dashes (-) and spaces",
          },
        },
        email: { required, email },
      },
    };
  },
};
</script>
