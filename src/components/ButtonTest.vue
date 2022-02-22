<template>
  <button
    class="bg-blue-300 p-3 border border-gray-300 hover:bg-blue-700"
    v-on:click="$emit('clicked')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({});
</script>
