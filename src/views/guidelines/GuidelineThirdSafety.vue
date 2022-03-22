<template>
  <div class='h-screen flex-col flex justify-between'>
    <div>
      <GuidelineStepper class='mb-4'/>
      <GuideLineForm />
    </div>
    <div>
      <div class='max-w-6xl mx-auto flex justify-between p-3.5'>
        <div @click="$router.push('guideline_third_details')"
             class='cursor-pointer bg-midnight dark:bg-dark-open-btn rounded float-left text-white text-sm py-1.5 px-6  bottom-11'
        >
          {{ $t('guidelines.previous') }}
        </div>
        <div @click="$router.push('guideline_third_control')"
             class='cursor-pointer bg-midnight dark:bg-dark-open-btn rounded text-white text-sm py-1.5 px-10 float-right  bottom-11'
        >
          {{ $t('guidelines.next') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue';
  import GuideLineForm from '../../components/GuideLineForm.vue';
  import GuidelineStepper from './GuidelineStepper.vue';

  export default defineComponent({
    components: { GuideLineForm, GuidelineStepper }
  });

</script>

<style scoped>

</style>