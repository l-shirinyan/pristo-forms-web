<template>
  <div class='h-screen'>
    <div class='bg-white dark:bg-dark-header outline outline-gray-100 outline-2 dark:outline-dark-back px-3.5'>
      <ul class="
        nav nav-tabs
        flex
        flex-nowrap
        flex-row
        list-none
        border-b-0
        max-w-6xl
        mx-auto
        pl-0
        mb-4"
        id="tabs-tabJustify" role="tablist">
        <li class="nav-item flex text-center" role="presentation">
          <a href="#tabs-homeJustify" class="
            nav-link
            block
            font-medium dark:font-normal
            sm:text-base text-sm
            text-font-brown dark:text-[#FFFFFF99]
            leading-tight
            border-x-0 border-t-0 border-b-2 border-transparent
            pt-0.5
            pb-2
            mt-2.5
            hover:border-transparent hover:bg-gray-100 dark:hover:bg-dark-header
            focus:border-transparent
            active
          " id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab"
             aria-controls="tabs-homeJustify" aria-selected="true">{{ $t("guidelines.questions_manager") }}</a>
        </li>
        <li class="nav-item mx-10 text-center" role="presentation">
          <a href="#tabs-profileJustify" class="
            nav-link
            block
            font-medium dark:font-normal
            sm:text-base text-sm
            text-font-brown dark:text-[#FFFFFF99]
            leading-tight
            border-x-0 border-t-0 border-b-2 border-transparent
            pt-0.5
            pb-2
            mt-2.5
            hover:border-transparent hover:bg-gray-100 dark:hover:bg-dark-header
            focus:border-transparent
          " id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-profileJustify" role="tab"
             aria-controls="tabs-profileJustify" aria-selected="false">{{ $t("guidelines.questions_coordinator") }}</a>
        </li>
      </ul>
    </div>
    <div class="tab-content" id="tabs-tabContentJustify">
      <div class="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
           aria-labelledby="tabs-home-tabJustify">
        <GuideLineForm />
      </div>
      <div class="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
        <GuideLineForm />
      </div>
      <div class='max-w-6xl mx-auto flex flex-row-reverse px-3.5'>
        <div @click="$router.push('guideline_third_basic')"
             class='cursor-pointer bg-midnight dark:bg-dark-open-btn rounded text-white text-sm py-2 px-5 fixed bottom-11'
        >
          {{$t('guidelines.finish') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import GuideLineForm from '../../components/GuideLineForm.vue';
  export default defineComponent({
    components: { GuideLineForm }
  })

</script>>

<style scoped>
  .nav-tabs .nav-link.active {
    color: #190E66;
    border-color: #190E66;
  }
  .dark   .nav-tabs .nav-link.active {
    color:#7B95FF;
    border-color: #7B95FF;
  }
</style>