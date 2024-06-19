<template>
  <div>
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
