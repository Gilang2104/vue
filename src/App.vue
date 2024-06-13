<template>
  <div id="app">
    <input v-model="name" placeholder="Enter a name" />
    <input v-model="age" placeholder="Enter age" />
    <input v-model="phone" placeholder="Enter phone number" />
    <button @click="addName">Add Name</button>
    <NameList @edit="startEdit" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import NameList from './components/NameList.vue'

export default {
  components: {
    NameList
  },
  setup() {
    const store = useStore()
    const name = ref('')
    const age = ref('')
    const phone = ref('') 
    const editIndex = ref(-1)

    const addName = () => {
      if (editIndex.value === -1) {
        store.dispatch('addName', { name: name.value, age: age.value, phone: phone.value }) 
      } else {
        store.dispatch('editName', { index: editIndex.value, newName: name.value, newAge: age.value, newPhone: phone.value }) // Edit nama, umur, dan nomor telepon
        editIndex.value = -1
      }
      name.value = ''
      age.value = ''
      phone.value = '' 
    }

    const startEdit = (index) => {
      name.value = store.getters.getNames[index]
      age.value = store.getters.getAges[index]
      phone.value = store.getters.getPhones[index]
      editIndex.value = index
    }

    return {
      name,
      age,
      phone, 
      addName,
      startEdit
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369a6e;
}
</style>
