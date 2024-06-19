<template>
  <div class="add-task">
    <input v-model="taskDescription" placeholder="Add a task" />
    <button @click="addTask">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskDescription: ''
    };
  },
  methods: {
    addTask() {
      if (this.taskDescription.trim()) {
        this.$store.dispatch('addTask', { description: this.taskDescription });
        this.taskDescription = '';
      }
    }
  }
};
</script>

<style scoped>
.add-task {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

input {
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #42b983;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369b74;
}

@media (max-width: 600px) {
  .add-task {
    flex-direction: column;
  }

  input {
    width: 100%;
    margin: 0 0 10px 0;
  }

  button {
    width: 100%;
  }
}
</style>
