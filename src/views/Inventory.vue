<template>
  <section class="inventory">
    <h2>Inventario</h2>
    <item-form @add-item="addItem" />
    <item-list :items="items" @delete-item="deleteItem" />
  </section>
</template>

<script>
import ItemList from '../components/ItemList.vue'
import ItemForm from '../components/ItemForm.vue'
import DataFactory from '../services/dataFactory'

export default {
  name: 'Inventory',
  components: { ItemList, ItemForm },
  data() {
    return {
      items: [],
      adapter: null
    }
  },
  async created() {
    // Choose adapter type: 'local' uses LocalStorage, 'json' uses bundled JSON
    this.adapter = DataFactory.create('local')
    this.items = await this.adapter.getItems()
  },
  methods: {
    async addItem(item) {
      this.items.push(item)
      await this.adapter.saveItems(this.items)
    },
    async deleteItem(index) {
      this.items.splice(index, 1)
      await this.adapter.saveItems(this.items)
    }
  }
}
</script>
