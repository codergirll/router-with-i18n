import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import locales from './locales';


Vue.use(Router);


const router = new Router({
  routes: [
    {
      path: '/:lang([a-z]{2})',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
      ],
    },
    {
      path: '*',
      name: 'NotFound',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/NotFound.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // console.log(Vue.i18n);
  // console.log(this.i18n);

  const l = to.params.lang;
  if (l && l !== locales.def && locales.all.indexOf(l) !== -1) {
    Vue.i18n.set(l);
    next();
  } else if (l && locales.all.indexOf(l) === -1) {
    Vue.i18n.set(locales.def);
    next({ name: 'NotFound' });
  } else {
    Vue.i18n.set(locales.def);
    next();
  }
});


router.beforeEach((to, from, next) => {
  // next({ name: 'NotFound' });
  let l = to.params.lang;
  if (l && l !== locales.def && locales.all.indexOf(l) !== -1) {
    // Vue.i18n.set(l);
    // this.i18n.locale = l;
    next();
  } else if (l && locales.all.indexOf(l) === -1) {
    Vue.i18n.set(locales.def);
    next({ name: 'NotFound' });
  } else {
    Vue.i18n.set(locales.def);
    next();
  }
});

export default router;
