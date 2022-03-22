<template>
  <div v-click-away='onClickAway' v-on:clicked='openDropdown '>
    <button type='button' ref='buttonRef' v-on:click='openDropdown'>
      <div class='outline outline-1 outline-lg-btn dark:outline-none rounded-md py-1 px-2 dark:bg-dark-back'>
        <div class='flex gap-3 '>
          <i class='icon icon-locale dark:text-white'></i>
          <span v-if='$i18n.locale === "en"' class='text-sm text-font-brown dark:text-white'>EN</span>
          <span  v-if='$i18n.locale === "he"' class='text-sm text-font-brown dark:text-white'>עב</span>
          <i class='icon icon-down-arrow dark:text-white'></i>
        </div>
      </div>
    </button>
    <div
      class='bg-white border border-gray-100 rounded-md shadow-md z-10 text-xs sm:text-sm'
      v-if='isOpen'
      ref='listRef'
      v-on:click='menuClicked'
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
