<template>
  <div class="container">
    <div class="chat-container">
      <div class="list-header">
        <div class="receiver-name">Available users</div>
      </div>
      <div class="users-list">
        <ListItem v-for="user in $store.state.users" :user="user" />
      </div>
    </div>
  </div>
</template>
<script>
import ListItem from "@/components/list-item.vue";

export default {
  name: "users-list",
  components: {
    ListItem,
  },
};
</script>
