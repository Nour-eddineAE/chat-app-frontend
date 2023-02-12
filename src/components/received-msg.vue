<template>
  <div class="other-msg">
    <div class="other-avatar">
      <img class="avatar" :src="user.avatar" alt="avatar" />
    </div>
    <p class="other-name">
      {{ user.name }}
    </p>
  </div>
  <div class="received-message">{{ message.content }}</div>
</template>

<script>
export default {
  name: "received-msg",
  props: {
    message: {
      senderId: "",
      content: "",
    },
  },
  data() {
    return {
      user: this.$store.getters.getUserById(this.message.senderId),
    };
  },
  mounted() {
    document
      .getElementsByClassName("chat-box")[0]
      .lastElementChild.scrollIntoView({ behavior: "smooth", block: "end" });
  },
};
</script>
