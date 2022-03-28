<template>
  <div class='pb-24 pt-11'>
    <div class='sm:mx-5 mx-2.5'>
    <div class='sm:text-sm text-xs text-font-brown dark:text-white font-medium max-w-6xl lg:mx-auto lg:mt-12 sm:mt-8 mt-7'>{{ $t('chapters.complete_chapters') }}</div>
    </div>
    <div class='sm:mx-5 mx-2.5'>
      <ChapterListItem />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { setDocumentDirection } from '../utils/setDocumentDirection';
  import { setDocumentLang } from '../utils/setDocumentLang';
  import { setDocumentTitle } from '../utils/setDocumentTitle';
  import ChapterListItem from './ChapterListItem.vue';
  import Header from './Header.vue';

  export default defineComponent({
    components: { Header, ChapterListItem },
    computed: {
      fontClass: function () {
        return `font-${this.$i18n.locale}`;
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