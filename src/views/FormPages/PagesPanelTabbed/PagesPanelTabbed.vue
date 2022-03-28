<template>
  <div class='pt-14'>
    <div class='bg-white dark:bg-dark-header outline outline-gray-100 outline-2 dark:outline-dark-back px-5 fixed w-full z-[5]'>
      <ul class="
        nav nav-tabs
        overflow-y-auto
        flex
        flex-nowrap
        flex-row
        list-none
        border-b-0
        max-w-6xl
        mx-auto
        pl-0"
        id="tabs-tabJustify" role="tablist">
        <li class="nav-item flex shrink-0 text-center" role="presentation">
          <a href="#tabs-homeJustify" class="
            nav-link
            block
            font-semibold dark:font-normal
            sm:text-base text-sm
            text-font-brown dark:text-[#FFFFFF99]
            leading-tight
            border-x-0 border-t-0 border-b-2 border-transparent
            pt-3
            pb-2
            hover:border-transparent
            focus:border-transparent
            active"
             id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab"
             aria-controls="tabs-homeJustify" aria-selected="true">{{ $t("formPages.questions_manager") }}</a>
        </li>
        <li class="nav-item flex shrink-0 mx-10 text-center" role="presentation">
          <a href="#tabs-profileJustify" class="
            nav-link
            block
            font-semibold dark:font-normal
            sm:text-base text-sm
            text-font-brown dark:text-[#FFFFFF99]
            leading-tight
            border-x-0 border-t-0 border-b-2 border-transparent
            pt-3
            pb-2
            hover:border-transparent
            focus:border-transparent
          " id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-profileJustify" role="tab"
             aria-controls="tabs-profileJustify" aria-selected="false">{{ $t("formPages.questions_coordinator") }}</a>
        </li>
      </ul>
    </div>
    <div class="tab-content pt-16" id="tabs-tabContentJustify">
      <div class="tab-pane fade show active px-4" id="tabs-homeJustify" role="tabpanel"
           aria-labelledby="tabs-home-tabJustify">
        <PagesPanelTabbedManager />
      </div>
      <div class="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
        <PagesPanelTabbedCoordinator />
      </div>

      <div class='max-w-6xl fixed sm:right-7 sm:left-7 right-4 left-4 bottom-0 mx-auto flex justify-end py-3 bg-back-gray dark:bg-dark-back'>
        <div @click="$router.push('guideline_third_basic')"
             class='cursor-pointer bg-midnight dark:bg-dark-open-btn rounded text-white text-sm py-2 px-5'
        >
          {{$t('formPages.finish') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import PagesPanelTabbedManager from './PagesPanelTabbedManager.vue';
  import PagesPanelTabbedCoordinator from './PagesPanelTabbedCoordinator.vue';
  export default defineComponent({
    components: { PagesPanelTabbedCoordinator, PagesPanelTabbedManager },

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