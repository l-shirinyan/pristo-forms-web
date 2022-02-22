<template>
  <div class="bg-blue-400 p-3">
    Hello Forms
    <ViewTest />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ViewTest from './views/ViewTest.vue';

  export default defineComponent({ components: { ViewTest } });
</script>
