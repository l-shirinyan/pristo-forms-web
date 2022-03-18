<template>
  <div>
    <ul class="
      nav nav-tabs nav-justified
      flex
      flex-row
      list-none
      border-b-0
      w-2/5 mx-auto
      pl-0
      mb-4
    " id="tabs-tabJustify" role="tablist">
      <li class="nav-item flex flex-grow text-center" role="presentation">
        <a href="#tabs-homeJustify" class="
          nav-link
          fill-midnight
          w-full
          block
          font-bold
          text-base
          leading-tight
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
          active
        " id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab"
           aria-controls="tabs-homeJustify" aria-selected="true">Questions with a manager</a>
      </li>
      <li class="nav-item flex-grow text-center" role="presentation">
        <a href="#tabs-profileJustify" class="
          nav-link
          w-full
          block
          font-bold
          text-base
          leading-tight
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        " id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-profileJustify" role="tab"
           aria-controls="tabs-profileJustify" aria-selected="false">Questions with a coordinator</a>
      </li>

    </ul>
    <div class="tab-content" id="tabs-tabContentJustify">
      <div class="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
           aria-labelledby="tabs-home-tabJustify">
        <GuideLineForm />
      </div>
      <div class="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
        <GuideLineForm />
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

</style>