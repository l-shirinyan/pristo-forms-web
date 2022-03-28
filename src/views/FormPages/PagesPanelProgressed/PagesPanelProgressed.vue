<template>
  <div class='bg-white dark:bg-dark-header outline outline-gray-100 dark:outline-dark-back outline-2 h-12 z-[5]'>
    <div class='lg:max-w-6xl w-[985px] mx-auto md:overflow-hidden overflow-x-auto'>
      <ul class="stepper lg:max-w-7xl w-[985px] mx-auto" id='stepper' data-mdb-stepper="stepper">
        <li class="stepper-step opacity-25" :class='$route.path.includes("guideline_third_basic") ? "stepper-active" : "" '>
          <div class="stepper-head mt-3">
            <div class='stepper-border border-solid border border-midnight dark:border-dark-open-btn rounded-3xl w-36 h-6 flex'
                 :class='$route.path.includes("guideline_third_basic") ? "" : "sm:flex hidden sm:border border-0"'>
              <div v-if='$route.path.includes("guideline_third_basic")'
                   class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"
              >
                1
              </div>
              <div v-else class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> ✔ </div>
              <div class="stepper-head-text text-xs self-center font-semibold sm:block text-midnight dark:text-dark-open-btn mx-1.5"
              >
                {{ $t("formPages.basic_data") }}
              </div>
            </div>
            <div :class='$route.path.includes("guideline_third_basic") ? "hidden" : "sm:hidden"'>
              <div class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> ✔ </div>
            </div>
          </div>
        </li>
        <li class="stepper-step opacity-25"
            :class='$route.path.includes("guideline_third_details") ? "stepper-active" : ""'>
          <div class="stepper-head mt-3">
            <div class='stepper-border border-solid border border-midnight dark:border-dark-open-btn rounded-3xl w-36 h-6 flex'
                 :class='$route.path.includes("guideline_third_details") ? "" : "sm:flex hidden sm:border border-0"'>
              <div v-if='$route.path.includes("guideline_third_basic") || $route.path.includes("guideline_third_details")'
                   class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"
              >
                2
              </div>
              <div v-else class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn "> ✔ </div>
              <div class="stepper-head-text text-xs self-center font-semibold sm:block text-midnight dark:text-dark-open-btn mx-1.5"
              >
                {{ $t("formPages.detail_of_findings") }}
              </div>
            </div>
            <div :class='$route.path.includes("guideline_third_details") ? "hidden" : "sm:hidden"'>
              <div class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> ✔ </div>
            </div>
          </div>
        </li>
        <li class="stepper-step opacity-25" :class='$route.path.includes("guideline_third_safety") ? "stepper-active" : "" '>
          <div class="stepper-head mt-3">
            <div class='stepper-border border-solid border border-midnight dark:border-dark-open-btn rounded-3xl w-36 h-6 flex'
                 :class='$route.path.includes("guideline_third_safety") ? "" : "sm:flex hidden sm:border border-0"'>
              <div v-if='$route.path.includes("guideline_third_basic") || $route.path.includes("guideline_third_details") || $route.path.includes("guideline_third_safety")'
                   class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"
              >
                3
              </div>
              <div v-else class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn "> ✔ </div>
              <div class="stepper-head-text text-xs self-center font-semibold sm:block text-midnight dark:text-dark-open-btn mx-0.5"
              >
                {{ $t("formPages.safety_certificates") }}
              </div>
            </div>
            <div :class='$route.path.includes("guideline_third_safety") ? "hidden" : "sm:hidden"'>
              <div class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> ✔ </div>
            </div>
          </div>
        </li>
        <li class="stepper-step opacity-25" :class='$route.path.includes("guideline_third_control") ? "stepper-active" : "" '>
          <div class="stepper-head mt-3">
            <div class='stepper-border border-solid border border-midnight dark:border-dark-open-btn rounded-3xl w-36 h-6 flex'
                 :class='$route.path.includes("guideline_third_control") ? "" : "sm:flex hidden sm:border border-0"'>
              <div class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"
              >
                4
              </div>
              <div class="stepper-head-text text-xs self-center sm:block font-semibold text-midnight dark:text-dark-open-btn mx-1.5"
              >
                {{ $t("formPages.control_findings") }}
              </div>
            </div>
            <div :class='$route.path.includes("guideline_third_control") ? "hidden" : "sm:hidden"'>
              <div class="stepper-head-icon dark: bg-midnight dark:bg-dark-open-btn"> ✔ </div>
            </div>
          </div>
        </li>
      </ul>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    data: function () {
      return {};
    },
    computed: {
      routerPath() {
        return this.$route.fullPath
      }
    },
    methods: {
      changeStepPosition: function() {
        if (window.innerWidth > 1024) {
          if (this.$i18n.locale === 'en') {
            let element = document.getElementById('stepper');
            if(this.$route.fullPath === '/inspection_details/guideline_third_basic') {
              element!.style.paddingLeft = '420px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_details') {
              element!.style.paddingLeft = '145px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_safety') {
              element!.style.right = '125px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_control') {
              element!.style.paddingRight = '100px'
              element!.style.right = '395px'
            }
          }
          else {
            let element = document.getElementById('stepper');
            if(this.$route.fullPath === '/inspection_details/guideline_third_basic') {
              element!.style.paddingRight = '420px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_details') {
              element!.style.paddingRight = '145px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_safety') {
              element!.style.left = '125px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_control') {
              element!.style.paddingLeft = '100px'
              element!.style.left = '395px'
            }
          }
        }
        if (window.innerWidth === 1024) {
          if (this.$i18n.locale === 'en') {
            let element = document.getElementById('stepper');
            if(this.$route.fullPath === '/inspection_details/guideline_third_basic') {
              element!.style.paddingLeft = '430px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_details') {
              element!.style.paddingLeft = '155px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_safety') {
              element!.style.right = '140px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_control') {
              element!.style.paddingRight = '100px'
              element!.style.right = '390px'
            }
          }
          else {
            let element = document.getElementById('stepper');
            if(this.$route.fullPath === '/inspection_details/guideline_third_basic') {
              element!.style.paddingRight = '430px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_details') {
              element!.style.paddingRight = '155px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_safety') {
              element!.style.left = '140px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_control') {
              element!.style.paddingLeft = '100px'
              element!.style.left = '390px'
            }
          }
        }
        if (window.innerWidth === 768) {
          if (this.$i18n.locale === 'en') {
            let element = document.getElementById('stepper');
            if(this.$route.fullPath === '/inspection_details/guideline_third_basic') {
              element!.style.paddingLeft = '310px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_details') {
              element!.style.paddingLeft = '35px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_safety') {
              element!.style.right = '235px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_control') {
              element!.style.paddingRight = '100px'
              element!.style.right = '500px'
            }
          }
          else {
            let element = document.getElementById('stepper');
            if(this.$route.fullPath === '/inspection_details/guideline_third_basic') {
              element!.style.paddingRight = '310px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_details') {
              element!.style.paddingRight = '35px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_safety') {
              element!.style.left = '235px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_control') {
              element!.style.paddingLeft = '100px'
              element!.style.left = '500px'
            }
          }
        }
        if (window.innerWidth === 425) {
          if (this.$i18n.locale === 'en') {
            let element = document.getElementById('stepper');
            if(this.$route.fullPath === '/inspection_details/guideline_third_basic') {
              element!.style.paddingLeft = '130px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_details') {
              element!.style.left = '-30px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_safety') {
              element!.style.right = '300px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_control') {
              element!.style.paddingRight = '100px'
              element!.style.right = '650px'
            }
          }
          else {
            let element = document.getElementById('stepper');
            if(this.$route.fullPath === '/inspection_details/guideline_third_basic') {
              element!.style.paddingRight = '130px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_details') {
              element!.style.right = '-30px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_safety') {
              element!.style.left = '300px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_control') {
              element!.style.paddingLeft = '100px'
              element!.style.left = '650px'
            }
          }
        }
        if (window.innerWidth === 360) {
          if (this.$i18n.locale === 'en') {
            let element = document.getElementById('stepper');
            if(this.$route.fullPath === '/inspection_details/guideline_third_basic') {
              element!.style.paddingLeft = '100px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_details') {
              element!.style.left = '-60px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_safety') {
              element!.style.right = '325px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_control') {
              element!.style.paddingRight = '100px'
              element!.style.right = '680px'
            }
          }
          else {
            let element = document.getElementById('stepper');
            if(this.$route.fullPath === '/inspection_details/guideline_third_basic') {
              element!.style.paddingRight = '100px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_details') {
              element!.style.right = '-60px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_safety') {
              element!.style.left = '325px'
            }else if(this.$route.fullPath === '/inspection_details/guideline_third_control') {
              element!.style.paddingLeft = '100px'
              element!.style.left = '680px'
            }
          }
        }
      },
    },
    created() {
      this.$nextTick(() => {
        this.changeStepPosition()
      })
    },
    watch: {
      routerPath() {
        console.log(window.innerWidth)
        this.$nextTick(() => {
          this.changeStepPosition()
        })
      }
    }
  });
</script>

<style scoped>
  .stepper:not(.stepper-vertical) .stepper-head-icon {
    margin: -1px !important;
  }
  .stepper-head {
    pointer-events: none;
  }
  .stepper-active {
    opacity: 1 !important;
    transform: scale(1.05);
  }
  .stepper-active .stepper-border {
    width: 168px;
  }
  .stepper-active .stepper-head-text {
    font-size: 14px !important;
    margin: 0 8px
  }
  .stepper-active .stepper-head-icon {
    background-color: #190E66;
  }
  .stepper:not(.stepper-vertical) .stepper-step:not(:last-child) .stepper-head:after {
    height: 2px !important;
    width: 63px;
    background-color: #190E66;
    margin-left: 0;
    opacity: 0.25 !important;
  }
  .stepper:not(.stepper-vertical) .stepper-step:not(:first-child) .stepper-head:before {
    height: 2px !important;
    width: 63px;
    background-color: #190E66;
    margin-right: 0;
    opacity: 0.25 !important;
  }
  .stepper:not(.stepper-vertical) .stepper-step:first-child .stepper-head {
    padding-left: 0 !important;
  }
  .stepper:not(.stepper-vertical) .stepper-step:last-child .stepper-head {
    padding-right: 0 !important;
  }
  .stepper-active .stepper:not(.stepper-vertical) .stepper-step:not(:last-child) .stepper-head:after {
    opacity: 0.25 !important;
  }
  .dark .stepper-active .stepper-head-icon {
    background-color: #7B95FF;
  }
  .dark .stepper:not(.stepper-vertical) .stepper-step:not(:last-child) .stepper-head:after {
    background-color: #7B95FF;
  }
  .dark .stepper:not(.stepper-vertical) .stepper-step:not(:first-child) .stepper-head:before {
     background-color: #7B95FF;
  }
  @media only screen and (max-width: 640px) {
    .stepper:not(.stepper-vertical) .stepper-step:not(:last-child) .stepper-head:after {
      width: 0;
    }
    .stepper:not(.stepper-vertical) .stepper-step:not(:first-child) .stepper-head:before {
      width: 235px;
    }
    .stepper-step {
      z-index: 999;
    }
  }
</style>
