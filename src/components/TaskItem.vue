<template>
  <div>
    <input type="checkbox" :checked="task.completed" @change="$emit('toggle-completion', task.id)" />
    <input v-model="taskDescription" @blur="updateTask" />
    <button @click="$emit('delete-task', task.id)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  },
  data() {
    return {
      taskDescription: this.task.description
    };
  },
  methods: {
    updateTask() {
      if (this.taskDescription.trim()) {
        this.$emit('update-task', { ...this.task, description: this.taskDescription });
      }
    }
  }
};
</script>
