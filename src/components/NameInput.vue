<template>
    <div class="input-container">
      <input v-model="name" placeholder="Enter a name" />
      <button @click="addOrEditName">{{ editIndex === -1 ? 'Add Name' : 'Edit Name' }}</button>
      
      
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    props: {
      editIndex: {
        type: Number,
        required: true
      }
    },
    emits: ['updateEditIndex'],
    setup(props, { emit }) {
      const store = useStore()
      const name = ref('')
  
      watch(() => props.editIndex, (newIndex) => {
        if (newIndex !== -1) {
          name.value = store.state.names[newIndex]
          name.value = store.state.ages[newIndex]
          name.value = store.state.phones[newIndex]

        } else {
          name.value = ''
        }
      })
  
      const addOrEditName = () => {
        if (props.editIndex === -1) {
          store.dispatch('addName', name.value, age.value, phone.value)
        } else {
          store.dispatch('editName', { index: props.editIndex, newName: name.value })
          emit('updateEditIndex', -1) // Reset edit index after editing
        }
        name.value = ''
      }
  
      return {
        name,
        addOrEditName
      }
    }
  }
  </script>
  
  <style scoped>
  .input-container {
    margin: 20px;
    display: flex;
    justify-content: center;
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
  