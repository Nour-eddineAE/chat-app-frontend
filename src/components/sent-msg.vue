<template>
  <div class="sent-msg-container">
    <div class="sent-message">{{ message.content }}</div>
  </div>
</template>

<script>
export default {
  name: "sent-msg",
  props: {
    message: {
      senderId: "",
      content: "",
    },
  },
  mounted() {
    document
      .getElementsByClassName("chat-box")[0]
      .lastElementChild.scrollIntoView({ behavior: "smooth", block: "end" });
  },
};
</script>
