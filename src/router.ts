import { createRouter, createWebHistory } from 'vue-router';
import ChaptersList from './views/ChaptersList.vue';
import FormPage from './views/FormPages/FormPage.vue';
import PagesPanelTabbed from './views/FormPages/PagesPanelTabbed/PagesPanelTabbed.vue';
import Layout from './views/Layout.vue';
import PagesPanelProgressBasic from './views/FormPages/PagesPanelProgressed/PagesPanelProgressBasic.vue';
import PagesPanelProgressDetails from './views/FormPages/PagesPanelProgressed/PagesPanelProgressDetails.vue';
import PagesPanelProgressSafety from './views/FormPages/PagesPanelProgressed/PagesPanelProgressSafety.vue';
import PagesPanelProgressControl from './views/FormPages/PagesPanelProgressed/PagesPanelProgressControl.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:step/',
      component: Layout,
      children: [
        {
          path: '/',
          component: ChaptersList
        },
        {
          path: 'guideline_first',
          component: FormPage
        },
        {
          path: 'guideline_second',
          component: PagesPanelTabbed
        },
        {
          path: 'progress_basic',
          component: PagesPanelProgressBasic
        },
        {
          path: 'progress_details',
          component: PagesPanelProgressDetails
        },
        {
          path: 'progress_safety',
          component: PagesPanelProgressSafety
        },
        {
          path: 'progress_control',
          component: PagesPanelProgressControl
        },
      ]
    }
  ]
});

