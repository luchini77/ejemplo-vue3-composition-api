<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        ><h4>Planilla de Usuarios</h4></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/usuarios">Usuarios</router-link>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li> -->
        </ul>
        <span class="navbar-text me-2"> Iniciar Usuario </span>
        <span class="navbar-text me-2"> Crear Usuario </span>
        <span class="navbar-text"> Cerrar Sesion </span>


      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>