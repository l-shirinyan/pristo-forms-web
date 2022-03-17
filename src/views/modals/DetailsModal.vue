<template>
  <MPRModalDialog detailsModal='details' :title="$t('entity_details')">
    <div>
      <ul class='leading-10'>
        <li>{{ $t('details_today') }}</li>
        <li>{{ $t('details_jerusalem') }}</li>
        <li>{{ $t('details_bus_egged') }}</li>
        <div class='h-px bg-gray-200 lg:w-80 w-64 my-3'></div>
        <li>{{ $t('details_name') }}</li>
        <li>{{ $t('details_operator') }}</li>
        <li>{{ $t('details_bus_line') }}</li>
        <li>{{ $t('details_bus_type') }}</li>
        <li>{{ $t('details_frequency') }}</li>
      </ul>
    </div>
  </MPRModalDialog>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({})

</script>

<style scoped>

</style>