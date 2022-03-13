<template>
  <div class="bg-red-200 p-3">
    {{ $t('test') }}
    <div class="py-2">
      <ButtonTest v-on:clicked="buttonClicked">{{
        $t('change_language')
      }}</ButtonTest>
      <ButtonTest v-on:clicked="button2Clicked">{{
        $t('change_theme')
      }}</ButtonTest>
      <ButtonDropdown>{{ $t('test') }}</ButtonDropdown>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ButtonTest from '../components/ButtonTest.vue';
  import ButtonDropdown from '../components/ButtonDropdown.vue';
  import { setDocumentTheme } from '../utils/setDocumentTheme';

  export default defineComponent({
    components: { ButtonTest, ButtonDropdown },
    data: function () {
      return {
        isDarkMode: false
      };
    },
    methods: {
      buttonClicked: function () {
        this.$i18n.locale = this.$i18n.locale === 'en' ? 'he' : 'en';
      },
      button2Clicked: function () {
        this.isDarkMode = !this.isDarkMode;
        setDocumentTheme(this.isDarkMode);
      }
    }
  });
</script>
