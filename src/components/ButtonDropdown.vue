<template>
  <div v-click-away="onClickAway" v-on:clicked="openDropdown ">
    <button type="button" ref="buttonRef" v-on:click="openDropdown">
      <div class='sm:scale-100 scale-75 sm:mt-0 mt-1.5'>
        <i class="icon icon-dot-menu text-gray-dark "></i>
      </div>
    </button>
    <div
      class="bg-white border border-gray-100 rounded-md shadow-md z-10 text-xs sm:text-sm"
      v-if="isOpen"
      ref="listRef"
      v-on:click="menuClicked"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { createPopper } from '@popperjs/core';

  export default defineComponent({
    data: function () {
      return {
        isOpen: false,
        preventClickaway: true
      };
    },
    methods: {
      menuClicked: function () {
        this.isOpen = false;
      },
      onClickAway() {
        if (!this.preventClickaway) {
          this.isOpen = false;
        }
      },
      openDropdown: function (): void {
        if (!this.isOpen) {
          this.$nextTick(() =>
            this.$nextTick(() => {
              createPopper(
                this.$refs.buttonRef as HTMLElement,
                this.$refs.listRef as HTMLElement,
                {
                  placement: 'bottom-end',
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [0, 10]
                      }
                    }
                  ]
                }
              );
            })
          );
        }
        this.isOpen = !this.isOpen;
        this.preventClickaway = !this.isOpen;
      }
    }
  });
</script>


<style scoped>
  @media min
  /*.icon-dot-menu:before {*/
  /*  font-size: 14px;*/
  /*}*/
</style>