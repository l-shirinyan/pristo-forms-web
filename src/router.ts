import { createRouter, createWebHistory } from 'vue-router';
import ChaptersList from './views/ChaptersList.vue';
import GuidelineFirst from './views/GuidelineFirst.vue';
import GuidelineSecond from './views/GuidelineSecond.vue';
import GuidelineThrid from './views/GuidelineThrid.vue';


export default createRouter ({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ChaptersList,
    },
    {
      path: '/guideline_first',
      component: GuidelineFirst,
    },
    {
      path: '/guideline_second',
      component: GuidelineSecond,
    },
    {
      path: '/guideline_third',
      component: GuidelineThrid,
    },
 ]
})

