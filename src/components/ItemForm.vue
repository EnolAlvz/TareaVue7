<template>
  <form class="item-form" @submit.prevent="onSubmit">
    <input v-model="name" placeholder="Nombre" required />
    <input v-model="desc" placeholder="Descripción" />
    <button type="submit">Añadir</button>
  </form>
</template>

<script>
export default {
  name: 'ItemForm',
  data() {
    return { name: '', desc: '' }
  },
  methods: {
    onSubmit() {
      if (!this.name) return
      this.$emit('add-item', { name: this.name, desc: this.desc })
      this.name = ''
      this.desc = ''
    }
  }
}
</script>
