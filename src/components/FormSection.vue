<template>
  <div class='sm:px-3.5 py-1 '>
    <div class='accordion max-w-6xl mx-auto shadow-sm rounded-md overflow-y-auto' id='guideAccordion'>
      <div class='h-1 rounded-t-md bg-guideline '></div>
      <div
        class='accordion-item text-midnight dark:text-dark-open-btn bg-white dark:bg-dark-header border border-gray-200 dark:border-dark-header'>
        <div :class='sectionHeader' class='accordion-header flex justify-between py-4 sm:px-11 px-3 mb-0' id='headingOne'>
          <div class='flex '>
            <div>
              <i class='icon icon-reports'></i>
            </div>
            <button
              :class='formTitle'
              class='
              accordion-button
              relative
              items-center
              w-full
              sm:mx-4 mx-2
              sm:text-sm text-xs text-left font-medium
              bg-white
              dark:bg-dark-header
              border-0
              rounded-none
              transition
              focus:outline-none' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true'
                aria-controls='collapseOne'>
                {{ $t('formPages.starting_control') }}
              </button>
            </div>
          <div class='focus:"outline-none h-4 sm:scale-90 scale-75' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true'
               aria-controls="collapseOne">
            <i class='icon icon-down-arrow text-midnight dark:text-dark-open-btn cursor-pointer'></i>
          </div>
        </div>
        <div id='collapseOne' class='accordion-collapse collapse' aria-labelledby='headingOne'
             data-bs-parent='#guideAccordion'>
          <div
            :class='sectionText'
            class='accordion-body text-font-brown dark:text-white sm:text-sm text-xs sm:pt-2 pt-1 sm:pb-12 pb-2.5 sm:pr-20 pr-2.5 sm:pl-11 pl-2.5'>
            <p class='sm:leading-loose leading-relaxed'>
              {{ $t('formPages.text') }}
              {{ $t('formPages.text') }}
              {{ $t('formPages.text') }}
              {{ $t('formPages.text') }}
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
      sectionHeader: function() {
        if (this.$i18n.locale === 'he') {
          return ' py-4 sm:pr-6 sm:pl-11 px-3'
        }
      },
      sectionText: function() {
        if (this.$i18n.locale === 'he') {
          return 'sm:pr-14 sm:pl-24 pr-3.5 pl-3.5'
        }
      },
      formTitle: function() {
        if (this.$i18n.locale === 'he') {
          return 'gap-[9px]'
        }
      }
    }
  });

</script>

<style scoped>
  .accordion-button:not(.collapsed) {
    color: rgb(25 14 102 / var(--tw-text-opacity));
    box-shadow: unset;
  }
  .accordion-button::after {
    background-image: unset;

  }
  .accordion-button:not(.collapsed)::after {
    background-image: unset;
  }
    .dark .accordion-button:not(.collapsed) {
      color: #7B95FF;
      background-color: #1F1D2C;
    }
  .dark .accordion-button::after {
      background-image: unset;
    }
  .dark .accordion-button:not(.collapsed)::after {
      background-image: unset;
    }
</style>