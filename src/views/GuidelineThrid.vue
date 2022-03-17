<template>
  <div>
    <ul class="stepper w-2/5 mx-auto" data-mdb-stepper="stepper">
      <li class="stepper-step stepper-active">
        <div class="stepper-head">
          <span class="stepper-head-icon"> 1 </span>
          <span class="stepper-head-text text-sm"> Basic data </span>
        </div>
        <div class="stepper-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </li>
      <li class="stepper-step">
        <div class="stepper-head">
          <span class="stepper-head-icon"> 2 </span>
          <span class="stepper-head-text text-sm"> Detail of findings </span>
        </div>
        <div class="stepper-content">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </li>
      <li class="stepper-step">
        <div class="stepper-head">
          <span class="stepper-head-icon"> 3 </span>
          <span class="stepper-head-text text-sm"> Safety certificates </span>
        </div>
        <div class="stepper-content">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </li>
      <li class="stepper-step">
        <div class="stepper-head">
          <span class="stepper-head-icon"> 4 </span>
          <span class="stepper-head-text text-sm"> Control findings </span>
        </div>
        <div class="stepper-content">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </li>
    </ul>

    <GuideLineForm />

  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import GuideLineForm from '../components/GuideLineForm.vue';
  export default defineComponent({
    components: { GuideLineForm }
  })

</script>

<style scoped>

</style>