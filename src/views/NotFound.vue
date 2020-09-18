<!--  Template -->
<template>
  <div class="contError">
    <header
      class="masthead"
      style="background-image: url('/assets/img/chevrolet-blazer.jpg');"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="post-heading">
              <h1><strong>La página que busca no existe</strong></h1>
            </div>
          </div>
        </div>
      </div>
    </header>

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

<!--  Estilos-->
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.contError {
  max-width: 800px;
  margin: auto;
}
.masthead {
  max-width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  margin-top: 100px;
}
.post-heading {
  padding-top: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgb(255, 145, 0);
}
.footer {
  margin-top: 100px;
}
</style>