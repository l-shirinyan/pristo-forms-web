<template>
  <teleport to='#app'>
    <transition
      enter-active-class='transition ease-out duration-300 transform'
      enter-from-class='opacity-0'
      enter-to-class='opacity-100'
      leave-active-class='transition ease-in duration-300 transform'
      leave-from-class='opacity-100'
      leave-to-class='opacity-0'
    >
      <div
        ref='modal-backdrop'
        v-show='showModal'
        :class='modalBackdropClasses'
        v-on:click='closeClicked'
      >
        <div
          class='flex items-start justify-center min-h-screen pt-12 sm:py-10 text-center'
        >
          <transition
            enter-active-class='transition ease-out duration-300 transform '
            enter-from-class='opacity-0 translate-y-10 scale-95'
            enter-to-class='opacity-100 translate-y-0 scale-100'
            leave-active-class='ease-in duration-200'
            leave-from-class='opacity-100 translate-y-0 scale-100'
            leave-to-class='opacity-0 translate-y-10 translate-y-0 scale-95'
          >
            <div
              role='dialog'
              ref='modal'
              aria-modal='true'
              aria-labelledby='modal-headline'
              v-show='showModal && !reloadModal'
              :class='modalClasses'
              v-on:click='(e) => e.stopPropagation()'
              class='bg-white dark:bg-dark-back text-font-brown dark:text-white relative bg-white sm:rounded-lg rounded-md text-left text-gray-dark overflow-auto shadow-md pt-5 pb-2 px-5 sm:p-8'
            >
              <button :class='buttonClasses' v-on:click='closeClicked'>
                <i class='icon icon-close text-gray-dark icon-sm pt-16'></i>
              </button>

              <div class='flex flex-col flex-grow overflow-hidden text-start'>
                <div
                  class='text-modal-title font-bold dark:font-semibold dark:text-white text-base sm:text-lg'
                >
                  {{ title }}
                </div>
                <slot></slot>
              </div>

              <div class='flex sm:justify-end justify-center'>
                <CustomButton
                  class='text-indigo-dark border border-indigo-dark font-medium w-32 mt-10 me-5'
                  size='sm'
                  v-on:click='closeClicked'
                  :disabled='disabled'
                  v-if='hasCancelButton'
                >
                  {{ $t('oper.cancel') }}
                </CustomButton>
                <CustomButton
                  class='bg-indigo-dark dark:bg-blue-medium text-white font-normal w-32 mt-10'
                  size='sm'
                  v-on:click='confirm'
                  :disabled='disabled'
                  v-if='hasConfirmButton'
                >
                  {{ confirmButtonLabel }}
                </CustomButton>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue';
  import CustomButton from './CustomButton.vue';

  export default defineComponent({
    emits: ['close', 'confirm'],
    components: {
      CustomButton: CustomButton
    },
    data: function() {
      return {
        showModal: false,
        reloadModal: false,
      };
    },
    props: {
      modalName: String,
      size: { type: String, required: false, default: 'default' },
      disabled: { type: Boolean, required: false, default: false },
      hasConfirmButton: { type: Boolean, required: false, default: false },
      hasCancelButton: { type: Boolean, required: false, default: false },
      confirmButtonLabel: {
        type: String,
        required: false,
        default: ''
      },
      title: { type: String, required: false, default: '' }
    },
    mounted: function() {
      this.showModal = true;
    },
    computed: {
      modalBackdropClasses: function(): string[] {
        let classes = [
          `fixed z-50 inset-0 overflow-y-auto bg-black sm:px px-2.5 sm:pt bg-opacity-60 font-${this.$i18n.locale}`
        ];
        if (this.disabled) {
          classes.push('cursor-not-allowed');
        }
        return classes;
      },
      buttonClasses: function(): string[] {
        let classes = ['absolute top-4 end-4'];
        if (this.disabled) {
          classes.push('cursor-not-allowed');
        }
        return classes;
      },
      modalClasses: function() {
        if(this.modalName === 'imageModal') {
          return 'w-[690px]';
        }else if(this.modalName === 'detailsModal') {
          return  'w-[495px]'
        }else if(this.modalName === 'languageModal') {
          return 'w-[245px]'
        }



      }
    },
    methods: {
      closeClicked: function(e: Event): void {
        if (!this.disabled) this.closeModal();
      },
      closeModal: function(): void {
        this.showModal = false;
        setTimeout(() => this.$emit('close'), 300);
      },
      confirm: function(e: Event): void {
        this.$emit('confirm', {
          closeModal: this.closeModal
        });
      }
    },
    watch: {
      modalWidth() {
        this.reloadModal = true;
        this.$nextTick(() => {
          this.reloadModal = false;
        })
      }
    }
  });
</script>
