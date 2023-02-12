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
};
</script>
