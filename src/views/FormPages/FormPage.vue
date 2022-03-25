<template>
  <div class='p-4 flex flex-col justify-between'>
    <div>
      <FormSection class='py-16'/>
    </div>
    <div>
      <div class='max-w-6xl fixed right-0 left-0 bottom-0 mx-auto flex justify-end py-3 bg-back-gray dark:bg-dark-back'>
        <div @click="$router.push('guideline_second')"
             class='cursor-pointer bg-midnight dark:bg-dark-open-btn rounded text-white text-sm py-2 px-5'
        >
          {{$t('formPages.finish') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue';
  import FormSection from '../../components/FormSection.vue';

  export default defineComponent({
    components: { FormSection }
  });

</script>

<style scoped>

</style>