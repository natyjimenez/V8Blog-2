<!-- Template -->
<template>
  <div id="app">
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand">V8</a
        ><button
          data-toggle="collapse"
          data-target="#navbarResponsive"
          class="navbar-toggler"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <!-- MENU DE NAVEGACION -->
          <ul class="nav navbar-nav ml-auto" id="menu-v8">
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
              <a class="linkNav"
                ><router-link class="linkNav" :to="{ name: 'Portada' }">Portada</router-link></a
              >|
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
              <a class="linkNav"
                ><router-link class="linkNav" :to="{ name: 'SobreMi' }"
                  >Sobre mi</router-link
                ></a
              >|
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA ESTÁTICA -->
              <a class="linkNav"
                ><router-link class="linkNav" to="/contacto">Contacto</router-link></a
              >|
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A RUTA ESTÁTICA -->
              <a class="linkNav"
                ><router-link class="linkNav" to="/post/1">Último post</router-link></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <transition name="mi-transicion">
      <router-view></router-view>
    </transition>
  </div>
</template>


<!-- Estilos -->
<style lang="scss">
#app {
  font-family:'Hind Madurai', 'Acme', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
.navbar {
  background-color: rgb(34, 34, 34);  
  height: 80px;
}
.navbar-brand { 
  font-family: 'Acme', 'Avenir', Helvetica, Arial, sans-serif;;
  color: #7fb1f3 !important;
  font-size: 42px !important;
}
.linkNav {
  font-weight: bold;
  color: #ffffff;
  padding-left: 5px;
}
.router-link-exact-active {
  color: #fca400;
}
.mi-transicion-enter-active,
.mi-transicion-leave-active {
  transition: opacity 0.1s;
}
.mi-transicion-enter,
.mi-transicion-leave-to {
  opacity: 0;
}
</style>
