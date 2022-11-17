<template>
  <h1 class="text-center my-3">Usuarios</h1>
  <div class="row">
    <CardUsuario 
        v-for="usuario in usuarios" 
        :key="usuario.id" 
        :usuario="usuario"
    />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import CardUsuario from "./CardUsuario.vue"

export default {
    components: {
        CardUsuario,
    },

    setup(){
        const store = useStore()

        const usuarios = computed(() => store.state.usuarios)

        onMounted(() => {
            store.dispatch('getUsuarios')
        })

        return{
            usuarios,
        }
    }

}
</script>

<style>

</style>