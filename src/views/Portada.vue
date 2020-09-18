<!-- Template -->
<template>
  <div class="contPortada">
    <header
      class="masthead"
      style="background-image:url('assets/img/home-bg.jpg');"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="site-heading">
              <h1><strong>V8</strong></h1>
              <span class="subheading">Noticias y reseñas de automóviles</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="textoChevrolet container">
      <div class="row">
        <div class="col-md-10 col-lg-8">
          <div class="post-preview">
            <router-link to="/post/1">
              <h2 class="post-title">
                <strong>Chevrolet presenta la totalmente nueva Blazer</strong>
              </h2>
              <h3 class="post-subtitle">
                Llega&nbsp;como la primera SUV deportiva de la marca
              </h3>
            </router-link>
          </div>
          <hr />
        </div>
      </div>
    </div>
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

<!-- Estilos -->
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.contPortada {
  max-width: 1000px;
  margin: auto;
}
.masthead {
  max-width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  margin-top: 100px;
}
.site-heading {
  padding-top: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgb(255, 255, 255);
}
.post-preview {
  padding-top: 20px;
  text-align: left;
}
.post-title {
  font-size: 28px;
  color: rgb(56, 56, 56);
}
.post-subtitle {
  font-size: 20px;
  color: rgb(56, 56, 56);
}
.footer {
  margin-top: 100px;
}
</style>
