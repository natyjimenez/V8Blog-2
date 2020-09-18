import Vue from "vue";
import VueRouter from "vue-router";
import Contenido from "../views/Contenido";
import NotFound from "../views/NotFound.vue";
import Administrador from "../views/Administrador.vue";
import Simple from "../views/Simple.vue";
import Avanzado from "../views/Avanzado.vue";

Vue.use(VueRouter);

const routes = [
  // Home
  {
    // ruta nombrada
    path: "/",
    name: "Portada",
    alias: ["/portada"],
    component: () =>
      import(/* webpackChunkName: "portada" */ "../views/Portada.vue"),
  },
  // Redirect de Home a portada
  {
    // ruta nombrada
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "portada" */ "../views/Home.vue"),
    redirect:  "/"
  },
  // Redirect de Inicio a portada
  {
    // ruta nombrada
    path: "/inicio",
    name: "Inicio",
    component: () =>
      import(/* webpackChunkName: "portada" */ "../views/Inicio.vue"),
    redirect:  "/"
  },
  // Administrador
  {
    // ruta nombrada
    path: "/administrador",
    name: "Administrador",
    component: Administrador,
    children: [
      {
        path: "simple",
        component: Simple,
        name: "Simple",
      },
      {
        path: "avanzado",
        component: Avanzado,
        name: "Avanzado",
      },
    ],
  },
  // Sobre mi
  {
    // ruta nombrada
    path: "/sobremi",
    name: "SobreMi",
    alias: ["/acerca"],
    component: () =>
      import(/* webpackChunkName: "sobremi" */ "../views/SobreMi.vue"),
  },
  // Contacto
  {
    // Ruta estática
    path: "/contacto",
    alias: ["/contactame"],
    component: () =>
      import(/* webpackChunkName: "contacto" */ "../views/Contacto.vue"),
  },
  // Último Post
  {
    // Ruta estática
    path: "/post/:entrada",
    component: () => import(/* webpackChunkName: "post" */ "../views/Post.vue"),
    children: [
      {
        path: "contenido",
        component: Contenido,
        name: "Contenido",
      },
    ],
  },
  // Error de ruta
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
