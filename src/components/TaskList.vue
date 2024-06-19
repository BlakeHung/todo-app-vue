<template>
  <div>
    <task-item v-for="task in tasks" :key="task.id" :task="task" @delete-task="deleteTask"
      @toggle-completion="toggleCompletion" @update-task="updateTask" />
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  components: {
    TaskItem
  },
  computed: {
    tasks() {
      return this.$store.getters.allTasks;
    }
  },
  methods: {
    deleteTask(taskId) {
      this.$store.dispatch('deleteTask', taskId);
    },
    toggleCompletion(taskId) {
      this.$store.dispatch('toggleTaskCompletion', taskId);
    },
    updateTask(updatedTask) {
      this.$store.dispatch('updateTask', updatedTask);
    }
  }
};
</script>
