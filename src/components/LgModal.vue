<template>
  <MPRModalDialog size="sm" :title="$t('Change language')">
    <div class='bg-white dark:bg-dark-back'>
      <CustomButton v-on:click="buttonClicked('en')"
                    class='cursor-pointer block px-4 py-2.5 text-sm text-font-brown dark:text-white hover:bg-selected-dropdown dark:hover:bg-dark-selected-dropdown'>
        English
      </CustomButton>

      <CustomButton v-on:click="buttonClicked('he')"
                    class='cursor-pointer block px-4 py-2.5 text-sm text-font-brown dark:text-white hover:bg-selected-dropdown dark:hover:bg-dark-selected-dropdown'>
        עברית
      </CustomButton>

      <CustomButton class='cursor-pointer block px-4 py-2.5 text-sm text-font-brown dark:text-white hover:bg-selected-dropdown dark:hover:bg-dark-selected-dropdown'>
        عربيه
      </CustomButton>
    </div>
  </MPRModalDialog>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    methods: {
      buttonClicked: function (language: string) {
          this.$emit('close-language-modal')
          this.$i18n.locale = language;
        }
      },
  });
</script>

<style scoped>

</style>