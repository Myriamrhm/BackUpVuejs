import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "partie"*/ "./views/Home.vue")
    },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "partie"*/ "./views/Home.vue")
    },
    {
      path: "/connexion",
      name: "connexion",
      component: () =>
        import(/* webpackChunkName: "connexion"*/ "./views/Connexion.vue")
    },
    {
      path: "/inscription",
      name: "inscription",
      component: () =>
        import(/* webpackChunkName: "inscription"*/ "./views/Connexion.vue")
    },
    {
      path: "/categories",
      name: "categories",
      component: () =>
        import(/* webpackChunkName: "categories"*/ "./views/Categories.vue")
    },
    {
      path: "/categories/:categoryName",
      name: "specific-category",
      component: () =>
        import(/* webpackChunkName: "partie"*/ "./views/Game.vue")
    },
    {
      path: "/ressourceManag",
      name: "ressourceManag",
      component: () =>
        import(/* webpackChunkName: "partie"*/ "./views/ressource.vue")
    },
    
  ]
});
