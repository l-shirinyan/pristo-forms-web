<template>
  <div >
    <div class='sm:text-base text-xs text-font-brown dark:text-white font-medium max-w-6xl xl:mx-auto mx-6 lg:mt-28 sm:mt-12 mt-5'>{{ $t('complete_chapters') }}</div>
    <ChapterListItem />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { setDocumentDirection } from '../utils/setDocumentDirection';
  import { setDocumentLang } from '../utils/setDocumentLang';
  import { setDocumentTitle } from '../utils/setDocumentTitle';
  import ChapterListItem from './ChapterListItem.vue';

  export default defineComponent({
    components: { ChapterListItem },
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