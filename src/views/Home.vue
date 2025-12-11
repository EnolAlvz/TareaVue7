<template>
  <section class="home">
    <h2>Bienvenido</h2>
    <p>Esta aplicación demo gestiona un inventario simple usando Vue 3 y un patrón AbstractFactory para el almacenamiento.</p>
    <router-link to="/inventory" class="btn">Ir al inventario</router-link>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>
