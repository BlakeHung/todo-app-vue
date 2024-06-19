<template>
  <transition name="fade">
    <div class="task-item">
      <input type="checkbox" :checked="task.completed" @change="$emit('toggle-completion', task.id)" />
      <input v-model="taskDescription" @blur="updateTask" class="task-input" />
      <button @click="$emit('delete-task', task.id)">Delete</button>
    </div>
  </transition>
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

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.task-input {
  flex: 1;
  margin: 0 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #ff4d4d;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #e63939;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
