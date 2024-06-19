<template>
  <div class="container">
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

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 8px;
}

input[type="text"] {
  width: calc(100% - 22px);
  padding: 10px;
  margin: 10px 0;
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
  .container {
    padding: 10px;
  }

  input[type="text"] {
    width: 100%;
  }

  button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
