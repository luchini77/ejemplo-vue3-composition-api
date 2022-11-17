<template>
  <div class="col col-12 col-md-6 col-lg-5 mb-2">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ usuario.name }}</h5>
            <p class="card-text">{{ usuario.email }}</p>
            <router-link 
                :to="`/usuarios/${usuario.id}`"
                class="btn btn-primary"
            >
                Mas Información
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {

    props: {
        usuario: Object
    }

}
</script>

<style>

</style>