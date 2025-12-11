<template>
  <div class="item-list">
    <h3>Listado</h3>
    <ul>
      <li v-for="(item, idx) in items" :key="idx">
        <strong>{{ item.name }}</strong> — <small>{{ item.desc }}</small>
        <button class="delete" @click="$emit('delete-item', idx)">Eliminar</button>
      </li>
    </ul>
    <p v-if="items.length === 0">No hay elementos aún.</p>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: { items: { type: Array, default: () => [] } }
}
</script>
