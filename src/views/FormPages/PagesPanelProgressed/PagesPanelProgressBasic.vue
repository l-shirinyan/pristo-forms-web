<template>
  <div class='flex-col flex justify-between pt-14'>
    <div>
      <PagesPanelProgressed class='mb-4 fixed w-full z-10' />
    </div>
    <div class='overflow-x-auto pt-16 pb-20'>
      <FormSection class='mx-4'/>
    </div>

    <div class='max-w-6xl fixed right-0 left-0 bottom-0 mx-auto flex justify-between py-3 bg-back-gray dark:bg-dark-back'>
      <div @click="$router.push('guideline_second')"
           class='cursor-pointer bg-midnight dark:bg-dark-open-btn rounded float-left text-white text-sm py-1.5 px-6 bottom-11'
      >
        {{ $t('formPages.previous') }}
      </div>
      <div @click="$router.push('guideline_third_details')"
           class='cursor-pointer bg-midnight dark:bg-dark-open-btn rounded text-white text-sm py-1.5 px-10 float-right  bottom-11'
      >
        {{ $t('formPages.next') }}
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue';
  import FormSection from '../../../components/FormSection.vue';
  import PagesPanelProgressed from './PagesPanelProgressed.vue';

  export default defineComponent({
    components: { PagesPanelProgressed, FormSection }
  });

</script>

<style scoped>

</style>