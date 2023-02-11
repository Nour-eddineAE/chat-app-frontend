<template>
  <div class="container">
    <div class="chat-container">
      <ChatHeader />
      <ChatBox />
      <ChatForm />
    </div>
  </div>
</template>

<script>
import ChatHeader from "@/components/chat-header.vue";
import ChatBox from "@/components/chat-box.vue";
import ChatForm from "@/components/chat-form.vue";

export default {
  name: "app-vue",
  components: {
    ChatHeader,
    ChatBox,
    ChatForm,
  },
};
</script>
