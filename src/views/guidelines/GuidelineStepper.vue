<template>
  <div class='bg-white dark:bg-dark-header outline outline-gray-100 outline-2 h-14'>
    <ul class="stepper max-w-6xl mx-auto" data-mdb-stepper="stepper">
      <li class="stepper-step opacity-50" :class='$route.path.includes("guideline_third_basic") ? "stepper-active" : "" '>
        <div class="stepper-head mt-3.5">
          <div class='border-solid border-2 border-midnight dark:border-dark-open-btn rounded-3xl w-44 h-7 flex '>
            <div class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> 1 </div>
            <div class="stepper-head-text text-sm sm:block  dark:text-dark-open-btn mt-0.5" :class='$route.path.includes("guideline_third_basic") ? "" : "hidden"'> {{ $t("guidelines.basic_data") }} </div>
          </div>
        </div>
      </li>
      <li class="stepper-step opacity-50" :class='$route.path.includes("guideline_third_details") ? "stepper-active" : "" '>
        <div class="stepper-head mt-3.5">
          <div class='border-solid border-2 border-midnight dark:border-dark-open-btn rounded-3xl w-44 h-7 flex'>
            <span class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> 2 </span>
            <span class="stepper-head-text text-sm sm:block text-midnight dark:text-dark-open-btn mt-0.5" :class='$route.path.includes("guideline_third_details") ? "" : "hidden"'> {{ $t("guidelines.detail_of_findings") }} </span>
          </div>
        </div>
      </li>
      <li class="stepper-step opacity-50" :class='$route.path.includes("guideline_third_safety") ? "stepper-active" : "" '>
        <div class="stepper-head mt-3.5">
          <div class='border-solid border-2 border-midnight dark:border-dark-open-btn rounded-3xl w-44 h-7 flex'>
            <span class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> 3 </span>
            <span class="stepper-head-text text-sm sm:block text-midnight dark:text-dark-open-btn mt-0.5" :class='$route.path.includes("guideline_third_safety") ? "" : "hidden"'> {{ $t("guidelines.safety_certificates") }} </span>
          </div>
        </div>
      </li>
      <li class="stepper-step opacity-50" :class='$route.path.includes("guideline_third_control") ? "stepper-active" : "" '>
        <div class="stepper-head mt-3.5">
          <div class='border-solid border-2 border-midnight dark:border-dark-open-btn rounded-3xl w-44 h-7 flex'>
            <span class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> 4 </span>
            <span class="stepper-head-text text-sm sm:block text-midnight dark:text-dark-open-btn mt-0.5" :class='$route.path.includes("guideline_third_control") ? "" : "hidden"'> {{ $t("guidelines.control_findings") }} </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    computed: {},
  });
</script>

<style scoped>
  .stepper:not(.stepper-vertical) .stepper-head-icon {
    margin: 0 10px 0 0 !important;
  }
  .stepper-active {
    opacity: 1 !important;
    transform: scale(1.04);
  }
  .stepper-active .stepper-head-icon {
    background-color: #190E66;
  }
  .dark   .stepper-active .stepper-head-icon {
    background-color: #7B95FF;
  }
  .stepper:not(.stepper-vertical) .stepper-step:not(:last-child) .stepper-head:after {
    height: 2px;
    width: 68px;
    background-color: #190E66;
    margin-left: 0;
  }
  .dark .stepper:not(.stepper-vertical) .stepper-step:not(:last-child) .stepper-head:after {
    background-color: #7B95FF;
  }
   .stepper:not(.stepper-vertical) .stepper-step:not(:first-child) .stepper-head:before {
     height: 2px;
     width: 68px;
     background-color: #190E66;
     margin-right: 0;
   }
   .dark .stepper:not(.stepper-vertical) .stepper-step:not(:first-child) .stepper-head:before {
     background-color: #7B95FF;
   }
  .stepper:not(.stepper-vertical) .stepper-step:first-child .stepper-head {
    padding-left: 5px;
  }
</style>