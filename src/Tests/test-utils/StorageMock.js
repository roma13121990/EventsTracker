var StorageMock = {
  storage: {},

  setItem: function(key, value) {
    this.storage[key] = value || '';
  },
  getItem: function(key) {
    return key in this.storage ? this.storage[key] : null;
  }
}


export default StorageMock;