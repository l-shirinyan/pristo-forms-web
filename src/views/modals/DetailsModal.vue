<template>
  <MPRModalDialog modalName='detailsModal'  :title="$t('details.entity_details')">
    <div class='h-[415px]'>
      <ul class='leading-10 text-sm sm:mt-16 mt-10'>
        <li>{{ $t('details.today') }}</li>
        <li>{{ $t('details.jerusalem') }}</li>
        <li>{{ $t('details.bus_egged') }}</li>
        <div class='h-px bg-gray-200 lg:w-80 w-64 my-3'></div>
        <li>{{ $t('details.name') }}</li>
        <li>{{ $t('details.operator') }}</li>
        <li>{{ $t('details.bus_line') }}</li>
        <li>{{ $t('details.bus_type') }}</li>
        <li>{{ $t('details.frequency') }}</li>
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