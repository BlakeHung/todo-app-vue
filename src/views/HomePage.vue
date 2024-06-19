<template>
  <div>
    <add-task />
    <task-list />
  </div>
</template>

<script>
import AddTask from '../components/AddTask.vue';
import TaskList from '../components/TaskList.vue';

export default {
  components: {
    AddTask,
    TaskList
  }
};
</script>
