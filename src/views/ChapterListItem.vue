<template>
  <div v-for='(item, index) in chaptersInfo'
       :key="index"
       class='max-w-6xl bg-white dark:bg-dark-header shadow-sm rounded-lg flex justify-between items-center lg:mt-6 sm:mt-5 mt-4 sm:py-2.5 py-2.5 lg:mx-auto lg:pl-8 lg:pr-12 sm:pl-4 sm:pr-8'>
    <div class='flex justify center sm:mt-1'>
      <span class='sm:h-7 sm:w-7 h-6 w-6 bg-gray-100 dark:bg-dark-num-btn rounded-lg text-center text-midnight text-sm dark:text-dark-num font-bold justify-center sm:pt-1 pt-0.5 sm:ml-4 mx-2'
      >
        {{ item.id }}
      </span>
      <h1 class='font-medium sm:text-sm text-xs text-font-brown dark:text-white mx-4 self-center'>{{ $t(item.title) }}</h1>
    </div>

    <div class='flex gap-2.5'>
      <div class='flex sm:w-36 w-24 justify-between sm:flex-row flex-row-reverse'>
        <div class='sm:mt-2 mt-1 font-medium sm:text-sm text-xs text-font-brown dark:text-white'>{{ $t(item.chapterState) }}</div>
        <div class='sm:h-8 sm:w-10 sm:mt-1 mt-0 h-7 w-7' v-if='item.chapterState === "chapters.progress" '>
          <i class='icon icon-in-progrress text-progress-btn ml-1.5'></i>
        </div>
        <div :class='completedState' class='sm:mt-1 mt-0 sm:mr-3 mr-2' v-else-if='item.chapterState === "chapters.complete" '>
          <svg class='text-green-complete h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class='h-5 sm:w-8 w-5 ml-1.5 sm:mt-1 mt-0 ' v-else>
          <i class='icon icon-not-started text-light-pink'></i>
        </div>
      </div>
      <div @click="$router.push(`/${item.title.split('.')[1]}/guideline_first`)"
           class='cursor-pointer self-center sm:block hidden bg-midnight dark:bg-dark-open-btn rounded text-white text-xs h-8 py-2 px-6'
      >
        {{ $t(item.openBtn) }}
      </div>
      <i
        v-if='this.$i18n.locale === "en"' class='icon icon-purple-right-arrow sm:hidden block'
        @click="$router.push(`/${item.title.split('.')[1]}/guideline_first`)">
      </i>
      <i
        v-if='this.$i18n.locale === "he"' class='icon icon-purple-left-arrow sm:hidden block'
        @click="$router.push(`/${item.title.split('.')[1]}/guideline_first`)">
      </i>
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
            title: 'chapters.inspection_details',
            chapterState: 'chapters.progress',
            openBtn: 'chapters.open',
          },
          {
            id: 2,
            title: 'chapters.teacher_workforce',
            chapterState: 'chapters.complete',
            openBtn: 'chapters.open',
          },
          {
            id: 3,
            title: 'chapters.teacher_jobs',
            chapterState: 'chapters.not_started',
            openBtn: 'chapters.open',
          },
          {
            id: 4,
            title: 'chapters.parental_payments',
            chapterState: 'chapters.not_started',
            openBtn: 'chapters.open',
          },
          {
            id: 5,
            title: 'chapters.cleanliness_health',
            chapterState: 'chapters.not_started',
            openBtn: 'chapters.open',
          },
          {
            id: 6,
            title: 'chapters.summary_with_manager',
            chapterState: 'chapters.not_started',
            openBtn: 'chapters.open',
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
      completedState: function() {
        if (this.$i18n.locale === 'he') {
          return 'sm:ml-4 ml-8'
        }
      }
    },
  });
</script>

<style scoped>
  .icon-purple-right-arrow:before {
    font-size: 9px;
    margin-right: 10px;
  }
  .icon-purple-left-arrow:before {
    font-size: 9px;
    margin-left: 10px;
  }
</style>