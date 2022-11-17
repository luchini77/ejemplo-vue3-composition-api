<template>
  <div class="container mt-3">
    <div class="card">
      <div class="card-header">
        <h2>Detalles del Usuario</h2>
      </div>
      <div class="card-body">
        <ul>
          <li><h4>Nombre: {{ usuario.name }}</h4></li>
            <li><h4>Direccion: </h4></li>
            <li v-for="(value, propiedad) in usuario.address" :key="value">
              {{propiedad}}: {{ value }}
            </li>
        </ul>
        <p class="card-footer"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {

  name: 'DetallesUsuarios',

  setup() {
    const route = useRoute();

    const store = useStore();

    onMounted(() => {
      store.dispatch("getUsuario", route.params.id);
    });

    return {
      usuario: computed(() => store.getters['allUsuario']),
    };
  },
};
</script>

<style>
</style>