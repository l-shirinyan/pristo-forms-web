<template>
  <div class="bg-white dark:bg-dark-header h-14 justify-between px-5  shadow-gray-200 dark:shadow-dark-back"
       :class='($route.path.includes("guideline_second") || $route.path.includes("guideline_third")) ? "shadow-sm" : "shadow-md"'>
    <div class='max-w-6xl lg:mx-auto flex lg:pt sm:pt-4 pt-1.5 justify-between h-14 z-0'>
      <div class='flex'>
          <i v-if='$route.params.step && this.$i18n.locale === "en"' @click="$router.push('/')" class='icon icon-purple-left-arrow dark:text-white sm:mt-0.5 mt-2.5 mr-4'></i>
          <i v-if='$route.params.step && this.$i18n.locale === "he"' @click="$router.push('/')" class='icon icon-purple-right-arrow dark:text-white sm:mt-0.5 mt-2.5 ml-4'></i>
        <div class='sm:text-base text-sm text-font-brown dark:text-white font-bold sm:my-0 my-auto'>
          {{ $t('header.high_school') }}
          <span v-if='$route.params.step' class='sm:inline block text-chapter-title dark:text-white sm:text-sm text-xs font-medium sm:mx-2.5 sm:mt-0 mt-1'>
              {{ $t(`chapters.${$route.params.step}`)}}
          </span>
        </div>
      </div>
      <div class='flex'>
        <div class="sm:flex hidden">
          <LanguageDropdown>
            <div :class='languageDropdown' id='dropdown' class='z-50  h-[112] w-28 right-0 bg-white dark:bg-dark-back dark:outline outline-[#CED4DA33] outline-1 rounded-md shadow-xl'>
              <CustomButton v-on:clicked="languageButtonClicked('en') && !isRtlLanguage"
                            class='cursor-pointer w-28 block px-4 py-2 text-sm text-font-brown dark:text-white hover:bg-selected-dropdown dark:hover:bg-dark-selected-dropdown'>
                English
              </CustomButton>
              <div class='h-px bg-gray-200 dark:bg-[#CED4DA33] w-28'></div>
              <CustomButton v-on:clicked="languageButtonClicked('he') && isRtlLanguage"
                            class='cursor-pointer w-28 block px-4 py-2 text-sm text-font-brown dark:text-white hover:bg-selected-dropdown dark:hover:bg-dark-selected-dropdown'>
                עברית
              </CustomButton>
              <div class='h-px bg-gray-200 dark:bg-[#CED4DA33] w-28'></div>
              <CustomButton class='cursor-pointer w-28 block px-4 py-2 text-sm text-font-brown dark:text-white hover:bg-selected-dropdown dark:hover:bg-dark-selected-dropdown'>
                عربيه
              </CustomButton>
            </div>
          </LanguageDropdown>
        </div>

        <CustomButton  v-on:clicked="darkModeButtonClicked" class='mb-4'>
          <div class='w-11 sm:mt-0 mt-2.5'>
            <i class='icon icon-theme dark:text-white mx-4'></i>
          </div>
        </CustomButton>

        <ButtonDropdown  class="text-font-brown dark:text-white">
          <div :class='mainDropdown' class='absolute z-50 w-48 h-52 right-0 bg-white dark:bg-dark-back dark:outline outline-[#CED4DA33] outline-1 rounded-md shadow-2xl'>
            <div class='flex px-4 py-3'>
              <div>
                <svg class='h-4 w-4 mt-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <div class='text-sm font-medium mr-2.5 ml-2.5 mt-1'>{{ $t('header.institution') }}</div>
              <div>
                <i class='icon icon-location text-green-pin'></i>
              </div>
            </div>
            <div class='h-px bg-gray-200 dark:bg-[#CED4DA33] w-48'></div>

            <CustomButton class='flex gap-2 px-4 mt-3' v-on:clicked="isOpenDetails = true">
              <div>
                <i  class='icon icon-entity-details dark:text-white mb-8'></i>
              </div>
              <div class='text-xm mt-1'>Show entity details</div>
            </CustomButton>

            <CustomButton class='flex gap-2 px-4 mt-5' v-on:clicked="isImageModalOpen = true">
              <div>
                <i class='icon icon-attachment dark:text-white'></i>
              </div>
              <div class='text-xm mt-1'>Form attachment</div>
            </CustomButton>

            <CustomButton class='flex gap-2 px-4 mt-5' v-on:clicked="isLanguageModalOpen = true">
              <div>
                <i class='icon icon-locale dark:text-white'></i>
              </div>
              <div class='text-xm mt-1'>Change language</div>
            </CustomButton>
          </div>
        </ButtonDropdown>
      </div>
      <ImageModal v-if="isImageModalOpen" v-on:close="isImageModalOpen = false" />
      <DetailsModal v-if="isOpenDetails" v-on:close="isOpenDetails = false" />
      <LanguageModal
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
  import ImageModal from './modals/ImageModal.vue';
  import { setDocumentTheme } from '../utils/setDocumentTheme';
  import DetailsModal from './modals/DetailsModal.vue';
  import LanguageModal from './modals/LanguageModal.vue';
  import LanguageDropdown from '../components/LanguageDropdown.vue';
  import { setDocumentDirection } from '../utils/setDocumentDirection';
  import { isRtlLanguage } from '../utils/isRtlLanguage';

  export default defineComponent({
    components: { setDocumentDirection, LanguageDropdown, LanguageModal, DetailsModal, CustomButton, ButtonDropdown, ImageModal },
    data: function () {
      return {
        isOpenDetails: false,
        isImageModalOpen: false,
        isDarkMode: false,
        isLanguageModalOpen: false,
        isRtlLanguage: false,
      };
    },
    computed: {
      mainDropdown: function() {
        if (this.isRtlLanguage) {
          return 'right-auto -left-2 h-48'
        }
      },
      languageDropdown: function() {
        if (this.isRtlLanguage) {
          return 'right-auto -left-28'
        }
      },
    },
    methods: {
      closeLanguageModal: function() {
        this.isLanguageModalOpen = false
      },
      languageButtonClicked: function (language: string) {
        this.$i18n.locale = language;
        this.isRtlLanguage = !this.isRtlLanguage;
      },
      darkModeButtonClicked: function () {
        this.isDarkMode = !this.isDarkMode;
        setDocumentTheme(this.isDarkMode);
      },
    }
  });
</script>

<style scoped>
</style>
