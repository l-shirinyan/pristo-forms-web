<template>
  <div class="bg-red-200 p-3">
    View Test
    <div class="py-2">
      <ButtonTest v-on:clicked="buttonClicked">My button</ButtonTest>
      <ButtonDropdown>Dropdown!</ButtonDropdown>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ButtonTest from '../components/ButtonTest.vue';
  import ButtonDropdown from '../components/ButtonDropdown.vue';

  export default defineComponent({
    components: { ButtonTest, ButtonDropdown },
    methods: {
      buttonClicked: function () {
        console.log('Button Clicked');
      }
    }
  });
</script>
