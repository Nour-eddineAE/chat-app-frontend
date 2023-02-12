<template>
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
};
</script>
