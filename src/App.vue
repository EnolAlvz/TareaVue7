<template>
  <div id="app">
    <header class="app-header">
      <h1>Tarea Vue — Enol</h1>
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/inventory">Inventario</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="app-footer">Hecho con Vue.js — Práctica DWEC</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
