<template>
  <div class='pb-24 pt-11'>
    <div class='sm:mx-5 mx-2.5'>
    <div class='sm:text-sm text-xs text-font-brown dark:text-white font-medium max-w-6xl lg:mx-auto lg:mt-12 sm:mt-8 mt-7'>{{ $t('chapters.complete_chapters') }}</div>
    </div>
    <div class='sm:mx-5 mx-2.5'>
      <ChapterListItem v-for='(item, index) in chaptersInfo' :key="index" :chapter='item'/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ChapterListItem from './ChapterListItem.vue';
  import Header from './Header.vue';

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
    components: { Header, ChapterListItem },
  });
</script>

<style scoped>

</style>