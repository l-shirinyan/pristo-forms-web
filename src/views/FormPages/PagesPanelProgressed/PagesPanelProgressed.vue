<template>
  <div class='bg-white dark:bg-dark-header outline outline-gray-100 dark:outline-dark-back outline-2 h-12'>
    <div class='max-w-6xl mx-auto overflow-hidden'>
      <ul class="stepper max-w-7xl mx-auto" id='stepper' data-mdb-stepper="stepper">
        <li class="stepper-step opacity-25" :class='$route.path.includes("guideline_third_basic") ? "stepper-active" : "" '>
          <div class="stepper-head mt-3">
            <div class='stepper-border border-solid border border-midnight dark:border-dark-open-btn rounded-3xl w-36 h-6 flex'
                 :class='$route.path.includes("guideline_third_basic") ? "" : "sm:flex hidden sm:border border-0"'>
              <div v-if='$route.path.includes("guideline_third_basic")'
                   class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"
              >
                1
              </div>
              <div v-else class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> ✔ </div>
              <div class="stepper-head-text text-xs self-center font-semibold sm:block text-midnight dark:text-dark-open-btn mx-1.5"
              >
                {{ $t("formPages.basic_data") }}
              </div>
            </div>
            <div class='sm:hidden flex'>
              <div class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> ✔ </div>
            </div>
          </div>
        </li>
        <li class="stepper-step opacity-25"
            :class='$route.path.includes("guideline_third_details") ? "stepper-active" : ""'>
          <div class="stepper-head mt-3">
            <div class='stepper-border border-solid border border-midnight dark:border-dark-open-btn rounded-3xl w-36 h-6 flex'
                 :class='$route.path.includes("guideline_third_details") ? "" : "sm:flex hidden sm:border border-0"'>
              <div v-if='$route.path.includes("guideline_third_basic") || $route.path.includes("guideline_third_details")'
                   class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"
              >
                2
              </div>
              <div v-else class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn "> ✔ </div>
              <div class="stepper-head-text text-xs self-center font-semibold sm:block text-midnight dark:text-dark-open-btn mx-1.5"
              >
                {{ $t("formPages.detail_of_findings") }}
              </div>
            </div>
            <div class='sm:hidden flex'>
              <div class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> ✔ </div>
            </div>
          </div>
        </li>
        <li class="stepper-step opacity-25" :class='$route.path.includes("guideline_third_safety") ? "stepper-active" : "" '>
          <div class="stepper-head mt-3">
            <div class='stepper-border border-solid border border-midnight dark:border-dark-open-btn rounded-3xl w-36 h-6 flex'
                 :class='$route.path.includes("guideline_third_safety") ? "" : "sm:flex hidden sm:border border-0"'>
              <div v-if='$route.path.includes("guideline_third_basic") || $route.path.includes("guideline_third_details") || $route.path.includes("guideline_third_safety")'
                   class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"
              >
                3
              </div>
              <div v-else class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn "> ✔ </div>
              <div class="stepper-head-text text-xs self-center font-semibold sm:block text-midnight dark:text-dark-open-btn mx-0.5"
              >
                {{ $t("formPages.safety_certificates") }}
              </div>
            </div>
            <div class='sm:hidden flex'>
              <div class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> ✔ </div>
            </div>
          </div>
        </li>
        <li class="stepper-step opacity-25" :class='$route.path.includes("guideline_third_control") ? "stepper-active" : "" '>
          <div class="stepper-head mt-3">
            <div class='stepper-border border-solid border border-midnight dark:border-dark-open-btn rounded-3xl w-36 h-6 flex'
                 :class='$route.path.includes("guideline_third_control") ? "" : "sm:flex hidden sm:border border-0"'>
              <div class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"
              >
                4
              </div>
              <div class="stepper-head-text text-xs self-center sm:block font-semibold text-midnight dark:text-dark-open-btn mx-1.5"
              >
                {{ $t("formPages.control_findings") }}
              </div>
            </div>
            <div class='sm:hidden flex'>
              <div class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> ✔ </div>
            </div>
          </div>
        </li>
      </ul>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    data: function () {
      return {};
    },

  });
</script>

<style scoped>
  .stepper:not(.stepper-vertical) .stepper-head-icon {
    margin: -1px !important;
  }
  .stepper-head {
    pointer-events: none;
  }
  .stepper-active {
    opacity: 1 !important;
    transform: scale(1.05);
  }
  .stepper-active .stepper-border {
    width: 168px;
  }
  .stepper-active .stepper-head-text {
    font-size: 14px !important;
    margin: 0 8px
  }
  .stepper-active .stepper-head-icon {
    background-color: #190E66;
  }
  .stepper:not(.stepper-vertical) .stepper-step:first-child .stepper-head {
    padding-left: 0 !important;
  }
  .stepper:not(.stepper-vertical) .stepper-step:last-child .stepper-head {
    padding-right: 0 !important;
  }
  .stepper:not(.stepper-vertical) .stepper-step:not(:last-child) .stepper-head:after {
    height: 2px !important;
    width: 64px;
    background-color: #190E66;
    margin-left: 0;
    opacity: 0.25 !important;
  }
  .stepper:not(.stepper-vertical) .stepper-step:not(:first-child) .stepper-head:before {
    height: 2px !important;
    width: 64px;
    background-color: #190E66;
    margin-right: 0;
    opacity: 0.25 !important;
  }
  .dark   .stepper-active .stepper-head-icon {
    background-color: #7B95FF;
  }
  .dark .stepper:not(.stepper-vertical) .stepper-step:not(:last-child) .stepper-head:after {
    background-color: #7B95FF;
  }
  .dark .stepper:not(.stepper-vertical) .stepper-step:not(:first-child) .stepper-head:before {
     background-color: #7B95FF;
  }
</style>