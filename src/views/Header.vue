<template>
  <div class="bg-white dark:bg-dark-header h-14 flex lg:justify-evenly justify-between">
    <div class='md:w-4/6 w-full md:mx-auto mx-5 flex items-center lg:justify-evenly justify-between'>
      <div :class='styles.instMargin' class='lg:block hidden text-sm text-font-brown dark:text-white'>{{ $t('institution') }}</div>
      <div class='lg:mx-auto sm:text-base text-sm text-font-brown dark:text-white font-bold'>{{ $t('high_school') }}</div>
      <div class="py-2 lg:flex hidden">

        <CustomButton class='outline outline-1 outline-lg-btn dark:outline-none rounded-md py-1 px-2 mr-8 dark:bg-dark-back' v-on:clicked="isOpenLgDropdown = !isOpenLgDropdown">
          <div class='flex gap-3 '>
            <svg class='h-4 w-4 dark:text-white' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span v-if='$i18n.locale === "en" ' class='text-sm text-font-brown dark:text-white'>EN</span>
            <span  v-if='$i18n.locale === "he" ' class='text-sm text-font-brown dark:text-white'>עב</span>
            <svg class='h-4 w-4 text-font-brown dark:text-white' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </CustomButton>

        <div v-if='isOpenLgDropdown' id='dropdown' class='absolute h-[112] w-28 mt-8 bg-white dark:bg-dark-back dark:outline outline-[#CED4DA33] outline-1 rounded-md shadow-xl'>
          <CustomButton v-on:clicked="buttonClicked('en')"
                      class='cursor-pointer w-28 block px-4 py-2 text-sm text-font-brown dark:text-white hover:bg-selected-dropdown dark:hover:bg-dark-selected-dropdown'>
            English
          </CustomButton>
          <div class='h-px bg-gray-200 dark:bg-[#CED4DA33] w-28'></div>
          <CustomButton v-on:clicked="buttonClicked('he')"
                      class='cursor-pointer w-28 block px-4 py-2 text-sm text-font-brown dark:text-white hover:bg-selected-dropdown dark:hover:bg-dark-selected-dropdown'>
            עברית
          </CustomButton>
          <div class='h-px bg-gray-200 dark:bg-[#CED4DA33] w-28'></div>
          <CustomButton class='cursor-pointer w-28 block px-4 py-2 text-sm text-font-brown dark:text-white hover:bg-selected-dropdown dark:hover:bg-dark-selected-dropdown'>
            عربيه
          </CustomButton>
        </div>

        <CustomButton  class='mr-6' v-on:clicked="isModalOpen = true">
          <svg class='h-4 w-4 text-font-brown dark:text-white' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
        </CustomButton>

        <CustomButton  class='mr-6' v-on:clicked="isOpenDetails = true">
          <svg class='h-4 w-4 dark:text-white' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
          </svg>
        </CustomButton>

        <CustomButton class='mr-6'>
          <svg class='h-4 w-4 fill-green-pin dark:text-white' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </CustomButton>

        <CustomButton v-if='isDarkMode' v-on:clicked="button2Clicked" :class='styles.darkMargin'>
          <svg class='h-4 w-4 dark:text-white' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </CustomButton>

        <CustomButton v-if='!isDarkMode' v-on:clicked="button2Clicked" :class='styles.darkMargin'>
          <svg class='h-4 w-5 dark:text-white' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </CustomButton>
      </div>

      <ButtonDropdown class="lg:hidden text-font-brown dark:text-white">
        <div :class='styles.dropdown' class='absolute w-48 h-52 right-0 bg-white dark:bg-dark-back dark:outline outline-[#CED4DA33] outline-1 rounded-md shadow-xl'>
          <div class='flex p-4'>
            <div>
              <svg class='h-5 w-5 mt-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
            <div class='text-sm font-medium mr-2.5 ml-2.5'>{{ $t('institution') }}</div>
            <div>
              <svg class='h-4 w-4 fill-green-pin dark:text-white mt-1' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div class='h-px bg-gray-200 dark:bg-[#CED4DA33] w-48'></div>

          <CustomButton class='flex gap-2 px-4 mt-3' v-on:clicked="isOpenDetails = true">
            <div>
              <svg class='h-4 w-4 dark:text-white' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
              </svg>
            </div>
            <div>Show entity details</div>
          </CustomButton>

            <CustomButton class='flex gap-2 px-4 mt-6' v-on:clicked="isModalOpen = true">
              <div>
                <svg class='h-4 w-4 text-font-brown dark:text-white' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </div>
              <div>Form attachment</div>
            </CustomButton>

          <CustomButton class='flex gap-2 px-4 mt-6' v-on:clicked="isOpenLg = true">
            <div>
              <svg class='h-4 w-4 dark:text-white' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>Change language</div>
          </CustomButton>

        </div>
      </ButtonDropdown>

      <ImgModal v-if="isModalOpen" v-on:close="isModalOpen = false" />
      <DetailsModal v-if="isOpenDetails" v-on:close="isOpenDetails = false" />
      <LgModal
        @close-language-modal='closeLanguageModal'
        v-if="isOpenLg"
        v-on:close="isOpenLg = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import CustomButton from '../components/CustomButton.vue';
  import ButtonDropdown from '../components/ButtonDropdown.vue';
  import ImgModal from './ImgModal.vue';
  import { setDocumentTheme } from '../utils/setDocumentTheme';
  import DetailsModal from './DetailsModal.vue';
  import LgModal from './LgModal.vue';

  export default defineComponent({
    components: { LgModal, DetailsModal, CustomButton, ButtonDropdown, ImgModal },
    data: function () {
      return {
        isOpenDetails: false,
        isOpenLgDropdown: false,
        isModalOpen: false,
        isDarkMode: false,
        isOpenLg: false,
        styles: {
          instMargin: '',
          darkMargin: '',
          dropdown: '',

        }
      };
    },
    methods: {
      closeLanguageModal: function() {
        this.isOpenLg = false
      },
      buttonClicked: function (language: string) {
        this.$i18n.locale = language;

        if ( this.$i18n.locale === 'he') {
          this.styles.instMargin = 'mr-0';
          this.styles.darkMargin = 'mr-4';
          this.styles.dropdown = 'right-auto -left-2'
        }
        else {
          this.styles.instMargin = '';
          this.styles.darkMargin = '';
          this.styles.dropdown = ''
        }
        this.isOpenLgDropdown = false
      },
      button2Clicked: function () {
        this.isDarkMode = !this.isDarkMode;
        setDocumentTheme(this.isDarkMode);
      },
    }
  });
</script>
