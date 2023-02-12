<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "app-vue",
  async created() {
    await this.$store.dispatch("loadUsers");
    await this.$store.dispatch("loadMessages");
  },
};
</script>
