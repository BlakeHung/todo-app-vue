<template>
  <div>
    <search-bar />
    <add-task />
    <task-list />
  </div>
</template>

<script>
import AddTask from '../components/AddTask.vue';
import TaskList from '../components/TaskList.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
  components: {
    AddTask,
    TaskList,
    SearchBar
  }
};
</script>

<style>
/* 添加響應式設計的樣式 */
@media (max-width: 600px) {

  /* 手機樣式 */
  div {
    padding: 10px;
  }

  input {
    width: 100%;
    margin-bottom: 10px;
  }

  button {
    width: 100%;
  }
}

@media (min-width: 601px) {

  /* 桌面樣式 */
  div {
    padding: 20px;
  }

  input {
    width: 50%;
    margin-right: 10px;
  }

  button {
    width: auto;
  }
}
</style>
