import { createRouter, createWebHistory } from 'vue-router';
import ChaptersList from './views/ChaptersList.vue';
import GuidelineFirst from './views/guidelines/GuidelineFirst.vue';
import GuidelineSecond from './views/guidelines/GuidelineSecond.vue';
import Layout from './views/Layout.vue';
import GuidelineThirdBasic from './views/guidelines/GuidelineThirdBasic.vue';
import GuidelineThirdDetails from './views/guidelines/GuidelineThirdDetails.vue';
import GuidelineThirdSafety from './views/guidelines/GuidelineThirdSafety.vue';
import GuidelineThirdControl from './views/guidelines/GuidelineThirdControl.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ChaptersList
    },
    {
      path: '/:step/',
      component: Layout,
      children: [
        {
          path: 'guideline_first',
          component: GuidelineFirst
        },
        {
          path: 'guideline_second',
          component: GuidelineSecond
        },
        {
          path: 'guideline_third_basic',
          component: GuidelineThirdBasic
        },
        {
          path: 'guideline_third_details',
          component: GuidelineThirdDetails
        },
        {
          path: 'guideline_third_safety',
          component: GuidelineThirdSafety
        },
        {
          path: 'guideline_third_control',
          component: GuidelineThirdControl
        },
      ]
    }
  ]
});

