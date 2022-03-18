<template>
  <div     v-for='(item, index) in  chaptersInfo'
           :key="index"
           class='max-w-6xl bg-white dark:bg-dark-header shadow-sm rounded-lg flex justify-between items-center mt-4 sm:py-8 py-4 xl:mx-auto sm:mx-5 mx-2.5 lg:px-8 sm:px-4 px-0'
  >
    <div class='flex justify center sm:mt-1'>
      <span class='h-7 w-7 bg-num-gray dark:bg-dark-num-btn rounded-lg text-center text-midnight  dark:text-dark-num  font-bold justify-center pt-0.5 sm:mx-4 mx-2'> {{ item.id }} </span>
      <h1 class='font-medium sm:text-base sm:mt-0 mt-2 text-xs text-font-brown dark:text-white'>{{ $t(item.title) }}</h1>
    </div>

    <div class='flex gap-2.5'>
      <div class='flex sm:gap-4 gap-2.5 sm:flex-row flex-row-reverse'>
        <div class='sm:mt-2 mt-3 font-medium sm:text-base text-xs text-font-brown dark:text-white'>{{ $t(item.chapterState) }}</div>
        <div class='sm:h-8 sm:w-8 h-7 w-7 mt-1' v-if='item.chapterState === "progress" '>
          <i class='icon icon-in-progrress text-progress-btn'></i>
        </div>
        <div class='sm:h-6 sm:w-6 h-6 w-6 mt-1 sm:mr-3 mr-2' v-else-if='item.chapterState === "complete" '>
          <svg class='text-green-complete' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class='h-5 sm:w-8 w-5 mt-1 ml-1.5' v-else>
          <i class='icon icon-not-started text-light-pink'></i>
        </div>
      </div>
      <div @click="$router.push('/guideline_first')"
           class='cursor-pointer sm:block hidden bg-midnight dark:bg-dark-open-btn rounded text-white py-2 px-5'
      >
        {{ $t(item.openBtn) }}
      </div>
      <i v-if='this.$i18n.locale === "en"' class='icon icon-purple-right-arrow sm:hidden block h-6 w-6 mt-2'></i>
      <i v-if='this.$i18n.locale === "he"' class='icon icon-purple-left-arrow sm:hidden block h-6 w-6 mt-2'></i>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { setDocumentDirection } from '../utils/setDocumentDirection';
  import { setDocumentLang } from '../utils/setDocumentLang';
  import { setDocumentTitle } from '../utils/setDocumentTitle';

  export default defineComponent({
    data: function () {
      return {
        chaptersInfo: [
          {
            id: 1,
            title: 'inspection_details',
            chapterState: 'progress',
            openBtn: 'open',
          },
          {
            id: 2,
            title: 'teacher_workforce',
            chapterState: 'complete',
            openBtn: 'open',
          },
          {
            id: 3,
            title: 'teacher_jobs',
            chapterState: 'not_started',
            openBtn: this.$t('open'),
          },
          {
            id: 4,
            title: 'parental_payments',
            chapterState: 'not_started',
            openBtn: 'open',
          },
          {
            id: 5,
            title: 'cleanliness_health',
            chapterState: 'not_started',
            openBtn: 'open',
          },
          {
            id: 6,
            title: 'summary_with_manager',
            chapterState: 'not_started',
            openBtn: 'open',
          },
        ],
        isScreenSmall: false,
        styles: {

        }
      };
    },
    computed: {
      fontClass: function () {
        return `font-${this.$i18n.locale}`;
      },
      chevronClasses: function () {
        if ( this.$i18n.locale === 'he') {
          let classes = ['flex flex-row-reverse'];
        }
      }
    },
    created() {
      setDocumentLang(this.$i18n.locale);
      setDocumentDirection(this.$i18n.locale);
      setDocumentTitle(this.$t('app_title'));
    },
    watch: {
      '$i18n.locale': function (newLocale: string, oldLocale: string) {
        if (newLocale === oldLocale) {
          return;
        }
        setDocumentLang(newLocale);
        setDocumentDirection(newLocale);
        setDocumentTitle(this.$t('app_title'));
      }
    },
  });
</script>

<style scoped>

</style>