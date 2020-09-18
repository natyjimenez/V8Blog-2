<!--  Template -->
<template>
  <div class="contPost">

    <div class="masthead">
      <h1 v-text="tituloEntrada"></h1>
      <router-link :to="paginar(false)">Anterior</router-link>|
      <router-link :to="paginar(true)">Siguiente</router-link>
    </div>

    <router-link :to="{ name: 'Contenido' }">Ver Contenido</router-link>
    <p></p>
    <router-view> </router-view>

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <span class="fa-stack fa-lg"
                  ><i class="fa fa-circle fa-stack-2x"></i
                  ><i class="fa fa-twitter fa-stack-1x fa-inverse"></i
                ></span>
              </li>
              <li class="list-inline-item">
                <span class="fa-stack fa-lg"
                  ><i class="fa fa-circle fa-stack-2x"></i
                  ><i class="fa fa-facebook fa-stack-1x fa-inverse"></i
                ></span>
              </li>
              <li class="list-inline-item">
                <span class="fa-stack fa-lg"
                  ><i class="fa fa-circle fa-stack-2x"></i
                  ><i class="fa fa-github fa-stack-1x fa-inverse"></i
                ></span>
              </li>
            </ul>
            <p class="text-muted copyright">Copyright&nbsp;©&nbsp;V8 - 2018</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<!--  Script -->
<script>
export default {
  methods: {
    paginar(siguiente) {
      let entrada = parseInt(this.$route.params.entrada);
      if (siguiente)
        return entrada < 10 ? `/post/${entrada + 1}` : `/post/${entrada}`;
      else return entrada > 1 ? `/post/${entrada - 1}` : `/post/${entrada}`;
    },
  },
  computed: {
    tituloEntrada() {
      return `Entrada ${this.$route.params.entrada} del Blog`;
    },
  },
};
</script>

<!--  Estilos -->
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.contPost{
  max-width: 800px;
  margin: auto;
}
.masthead {
  width: 100%;
  margin-top: 100px;
}
.footer {
  margin-top: 100px;
}
</style>

