<template>
  <div
    class="bg-gray-100 dark:bg-dark-back h-full pb-24"
    v-bind:class="fontClass">
<!--    <router-view />-->
    <Header />
    <ViewContent/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Header from './views/Header.vue';
  import ViewContent from './views/ViewContent.vue'

  export default defineComponent({
    components: { Header, ViewContent },
    data: function () {
      return { };
    },
  });
</script>
