<template>
  <div class='p-3.5'>
    <div class='accordion max-w-6xl mx-auto mt-3 shadow-sm rounded-md' id='guideAccordion'>
      <div class='h-1 rounded-t-md bg-guideline '></div>
      <div
        class='accordion-item text-midnight dark:text-dark-open-btn bg-white dark:bg-dark-header border border-gray-200 dark:border-dark-header'>
        <h2 class='accordion-header mb-0' id='headingOne'>
          <button
            :class='formTitle'
            class='
            accordion-button
            relative
            flex
            items-center
            w-full
            py-4
            px-10
            sm:text-sm text-xs text-left font-medium
            bg-white
            dark:bg-dark-header
            border-0
            rounded-none
            transition
            focus:outline-none' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true'
                  aria-controls='collapseOne'>
            {{ $t('guidelines.starting_control') }}
          </button>
        </h2>
        <div id='collapseOne' class='accordion-collapse collapse' aria-labelledby='headingOne'
             data-bs-parent='#guideAccordion'>
          <div
            class='accordion-body text-font-brown dark:text-white sm:text-sm text-xs pt-4 sm:pb-12 pb-4 sm:pr-20 pr-4 sm:pl-10 pl-4'>
            <p class='sm:leading-loose leading-relaxed'>
              {{ $t('guidelines.text') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue';

  export default defineComponent({
    computed: {
      formTitle: function() {
        if (this.$i18n.locale === 'he') {
          return 'gap-[915px]'
        }
      }
    }
  });

</script>

<style scoped>
  .accordion-button:not(.collapsed) {
    color: rgb(25 14 102 / var(--tw-text-opacity));
  }

  .accordion-button::after {
    background-image: unset;
    content: '˅';
    font-size: 30px;
    font-family: monospace;
    line-height: 1;
    color: #190E66;
  }
  .accordion-button:not(.collapsed)::after {
    background-image: unset;
    content: '˅';
    font-size: 30px;
    font-family: monospace;
    line-height: 1;
    color: #190E66;
    /*margin-right: 915px;*/
  }
    .dark .accordion-button:not(.collapsed) {
      color: #7B95FF;
      background-color: #1F1D2C;
    }
  .dark .accordion-button::after {
      background-image: unset;
      content: '˅';
      font-size: 30px;
      font-family: monospace;
      line-height: 1;
      color: #7B95FF;
    }
  .dark .accordion-button:not(.collapsed)::after {
      background-image: unset;
      content: '˅';
      font-size: 30px;
      font-family: monospace;
      line-height: 1;
      color: #7B95FF;
    }
  .i18n .accordion-button::after {

  }
</style>