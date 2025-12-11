import sampleItems from '../data/items.json'

class LocalStorageAdapter {
  constructor(key = 'tarea_items') {
    this.key = key
  }
  async getItems() {
    const raw = localStorage.getItem(this.key)
    if (!raw) return []
    try {
      return JSON.parse(raw)
    } catch (e) {
      console.error('Error parsing localStorage data', e)
      return []
    }
  }
  async saveItems(items) {
    localStorage.setItem(this.key, JSON.stringify(items))
  }
}

class JSONAdapter {
  constructor() {}
  async getItems() {
    // return bundled sample JSON
    return JSON.parse(JSON.stringify(sampleItems))
  }
  async saveItems(items) {
    // JSON adapter is read-only in this demo
    console.warn('JSONAdapter: saveItems called but adapter is read-only in demo')
  }
}

export default class DataFactory {
  static create(type = 'local') {
    if (type === 'local') return new LocalStorageAdapter()
    if (type === 'json') return new JSONAdapter()
    throw new Error('Unknown adapter type: ' + type)
  }
}
