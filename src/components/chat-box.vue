<template>
  <section class="chat-box">
    <div v-for="message in $store.state.messages">
      <ReceivedMsg
        v-if="message.senderId !== $store.state.user._id"
        :message="{ senderId: message.senderId, content: message.content }"
      />
      <SentMsg
        v-if="message.senderId === $store.state.user._id"
        :message="{ senderId: message.senderId, content: message.content }"
      />
    </div>
  </section>
</template>
<script>
import SentMsg from "@/components/sent-msg.vue";
import ReceivedMsg from "@/components/received-msg.vue";

export default {
  name: "chat-box",
  components: {
    SentMsg,
    ReceivedMsg,
  },
};
</script>
