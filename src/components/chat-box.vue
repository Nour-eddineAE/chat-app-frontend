<template>
  <section class="chat-box">
    <div v-for="message in $store.state.messages">
      <SentMsg
        v-if="message.senderId === $store.state.user._id"
        :message="{ senderId: message.senderId, content: message.content }"
      />
      <ReceivedMsg
        v-else
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
  mounted() {
    // scroll to new messages
    const lastMsg =
      document.getElementsByClassName("chat-box")[0].lastElementChild;
    if (lastMsg) lastMsg.scrollIntoView(false);
  },
};
</script>
