<template>
  <div
    class="dark:bg-dark-back"
    v-bind:class="fontClass">
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Header from './views/Header.vue';
  import ChaptersList from './views/ChaptersList.vue'
  import { setDocumentLang } from './utils/setDocumentLang';
  import { setDocumentDirection } from './utils/setDocumentDirection';
  import { setDocumentTitle } from './utils/setDocumentTitle';

  export default defineComponent({
    components: { Header, ChaptersList },
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

    data: function () {
      return { };
    },
  });
</script>
