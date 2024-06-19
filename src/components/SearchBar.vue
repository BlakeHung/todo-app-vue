<template>
  <div class="search-bar">
    <input v-model="query" @input="updateSearchQuery" placeholder="Search tasks..." />
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    };
  },
  methods: {
    updateSearchQuery() {
      this.$store.dispatch('setSearchQuery', this.query);
    }
  }
};
</script>

<style scoped>
.search-bar {
  margin-bottom: 20px;
}

input {
  width: calc(100% - 22px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

@media (max-width: 600px) {
  input {
    width: 100%;
  }
}
</style>
