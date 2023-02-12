<template>
  <router-link to="/chat" class="list-item" @click="next">
    <div class="left-part">
      <div class="receiver-avatar">
        <img class="avatar" :src="user.avatar" alt="avatar" />
      </div>
      <p class="item-name">{{ user.name }}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "list-item",
  props: {
    user: {},
  },
  methods: {
    next() {
      this.$store.commit("setupWebSocket");
      this.$store.commit("setSender", this.user);
    },
  },
};
</script>
