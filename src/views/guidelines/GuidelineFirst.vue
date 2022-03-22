<template>
  <div class='p-3.5 h-screen flex flex-col justify-between'>
    <GuideLineForm />
    <div>
      <div class='max-w-6xl mx-auto flex flex-row-reverse'>
        <div @click="$router.push('guideline_second')"
             class='cursor-pointer bg-midnight dark:bg-dark-open-btn rounded text-sm text-white py-2 px-5 fixed bottom-11'
        >
          {{$t('guidelines.finish') }}
        </div>
      </div>
    </div>
</div>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue';
  import GuideLineForm from '../../components/GuideLineForm.vue';

  export default defineComponent({
    components: { GuideLineForm }
  });

</script>

<style scoped>

</style>