<template>
  <div class="bg-white dark:bg-dark-header h-14 lg:justify-evenly justify-between px-5">
    <div class='max-w-6xl  md:mx-auto flex lg:pt pt-4 lg:justify-evenly justify-between'>
      <div class='lg:block hidden text-sm text-font-brown dark:text-white '>{{ $t('institution') }}</div>
      <div class='lg:mx-auto sm:text-base text-sm text-font-brown dark:text-white font-bold'>{{ $t('high_school') }}</div>
      <div class="lg:flex hidden">

        <CustomButton class='outline outline-1 outline-lg-btn dark:outline-none rounded-md py-1 px-2 mr-8 dark:bg-dark-back' v-on:clicked="isLanguageDropdownOpen = !isLanguageDropdownOpen">
          <div class='flex gap-3 '>
            <i class='icon icon-locale dark:text-white'></i>
            <span v-if='$i18n.locale === "en" ' class='text-sm text-font-brown dark:text-white'>EN</span>
            <span  v-if='$i18n.locale === "he" ' class='text-sm text-font-brown dark:text-white'>עב</span>
            <i class='icon icon-down-arrow dark:text-white'></i>
          </div>
        </CustomButton>

        <div v-if='isLanguageDropdownOpen' id='dropdown' class='absolute h-[112] w-28 mt-8 bg-white dark:bg-dark-back dark:outline outline-[#CED4DA33] outline-1 rounded-md shadow-xl'>
          <CustomButton v-on:clicked="languageButtonClicked('en')"
                      class='cursor-pointer w-28 block px-4 py-2 text-sm text-font-brown dark:text-white hover:bg-selected-dropdown dark:hover:bg-dark-selected-dropdown'>
            English
          </CustomButton>
          <div class='h-px bg-gray-200 dark:bg-[#CED4DA33] w-28'></div>
          <CustomButton v-on:clicked="languageButtonClicked('he')"
                      class='cursor-pointer w-28 block px-4 py-2 text-sm text-font-brown dark:text-white hover:bg-selected-dropdown dark:hover:bg-dark-selected-dropdown'>
            עברית
          </CustomButton>
          <div class='h-px bg-gray-200 dark:bg-[#CED4DA33] w-28'></div>
          <CustomButton class='cursor-pointer w-28 block px-4 py-2 text-sm text-font-brown dark:text-white hover:bg-selected-dropdown dark:hover:bg-dark-selected-dropdown'>
            عربيه
          </CustomButton>
        </div>

        <CustomButton  class='mr-6' v-on:clicked="isImageModalOpen = true">
          <i class='icon icon-attachment dark:text-white'></i>
        </CustomButton>

        <CustomButton  class='mr-6' v-on:clicked="isOpenDetails = true">
          <i class='icon icon-entity-details dark:text-white'></i>
        </CustomButton>

        <CustomButton class='mr-6'>
          <i class='icon icon-location text-green-pin'></i>
        </CustomButton>

        <CustomButton  v-if='isDarkMode' v-on:clicked="darkModeButtonClicked">
          <i class='icon icon-theme dark:text-white mr-6'></i>
        </CustomButton>


      </div>

      <ButtonDropdown  class="lg:hidden text-font-brown dark:text-white">
        <div :class='LanguageDropdown' class='absolute w-48 h-52 right-0 bg-white dark:bg-dark-back dark:outline outline-[#CED4DA33] outline-1 rounded-md shadow-xl'>
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
              <i class='icon icon-entity-details dark:text-white'></i>
            </div>
            <div>Show entity details</div>
          </CustomButton>

            <CustomButton class='flex gap-2 px-4 mt-6' v-on:clicked="isImageModalOpen = true">
              <div>
                <i class='icon icon-attachment dark:text-white'></i>
              </div>
              <div>Form attachment</div>
            </CustomButton>

          <CustomButton class='flex gap-2 px-4 mt-6' v-on:clicked="isLanguageModalOpen = true">
            <div>
              <i class='icon icon-locale dark:text-white'></i>
            </div>
            <div>Change language</div>
          </CustomButton>

        </div>
      </ButtonDropdown>

      <ImgModal v-if="isImageModalOpen" v-on:close="isImageModalOpen = false" />
      <DetailsModal v-if="isOpenDetails" v-on:close="isOpenDetails = false" />
      <LgModal
        @close-language-modal='closeLanguageModal'
        v-if="isLanguageModalOpen"
        v-on:close="isLanguageModalOpen = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import CustomButton from '../components/CustomButton.vue';
  import ButtonDropdown from '../components/ButtonDropdown.vue';
  import ImgModal from './modals/ImgModal.vue';
  import { setDocumentTheme } from '../utils/setDocumentTheme';
  import DetailsModal from './modals/DetailsModal.vue';
  import LgModal from './modals/LgModal.vue';

  export default defineComponent({
    components: { LgModal, DetailsModal, CustomButton, ButtonDropdown, ImgModal },
    data: function () {
      return {
        isOpenDetails: false,
        isLanguageDropdownOpen: false,
        isImageModalOpen: false,
        isDarkMode: false,
        isLanguageModalOpen: false,
        // styles: {
        //   dropdown: '',
        // }
      };
    },
    computed: {
      LanguageDropdown: function() {
        if (this.$i18n.locale === 'he') {
          return 'right-auto -left-2'
        }
      }
    },
    methods: {
      closeLanguageModal: function() {
        this.isLanguageModalOpen = false
      },
      languageButtonClicked: function (language: string) {
        this.$i18n.locale = language;
        this.isLanguageDropdownOpen = false
      },
      darkModeButtonClicked: function () {
        this.isDarkMode = !this.isDarkMode;
        setDocumentTheme(this.isDarkMode);
      },
    }
  });
</script>
