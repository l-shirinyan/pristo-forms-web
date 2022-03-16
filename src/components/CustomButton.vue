<template>
  <button
    class=""
    v-on:click="$emit('clicked')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({});
</script>
