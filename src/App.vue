<template>
  <div
    class="bg-blue-400 dark:bg-gray-700 p-3 h-screen"
    v-bind:class="fontClass"
  >
    {{ $t('hello_forms') }}
    <ViewTest />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { setDocumentDirection } from './utils/setDocumentDirection';
  import { setDocumentLang } from './utils/setDocumentLang';
  import { setDocumentTitle } from './utils/setDocumentTitle';
  import ViewTest from './views/ViewTest.vue';

  export default defineComponent({
    components: { ViewTest },
    computed: {
      fontClass: function () {
        return `font-${this.$i18n.locale}`;
      }
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
    }
  });
</script>
