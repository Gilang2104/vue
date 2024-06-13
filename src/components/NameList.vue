<template>
  <table class="name-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Age</th>
        <th>Phone</th>
        <th>Edit/Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(name, index) in names" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ name }}</td>
        <td>{{ ages[index] }}</td>
        <td>{{ phones[index] }}</td>
        <td><button @click="$emit('edit', index)">Edit</button>
            <button @click="deleteName(index)">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const names = computed(() => store.getters.getNames)
    const ages = computed(() => store.getters.getAges)
    const phones = computed(() => store.getters.getPhones)

    const deleteName = (index) => {
      store.dispatch('deleteName', index)
    }

    return {
      names,
      ages,
      phones,
      deleteName
    }
  }
}
</script>

<style scoped>
.name-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.name-table th, .name-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.name-table th {
  background-color: #f4f4f4;
  text-align: left;
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

button:first-of-type {
  background-color: #ffc107;
  color: white;
}

button:last-of-type {
  background-color: #dc3545;
  color: white;
}
</style>
