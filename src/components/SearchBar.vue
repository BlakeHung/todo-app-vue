<template>
  <div>
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
