<template>
  <div
    class="bg-gray-100 dark:bg-dark-back h-screen pb-24"
    v-bind:class="fontClass">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Header from './views/Header.vue';
  import ChaptersList from './views/ChaptersList.vue'

  export default defineComponent({
    components: { Header, ChaptersList },
    data: function () {
      return { };
    },
  });
</script>
