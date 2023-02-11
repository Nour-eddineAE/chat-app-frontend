<template>
  <section class="chat-box">
    <SentMsg content="hello" />
    <SentMsg content="Sent" />
    <SentMsg
      content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo
            ab libero odit. Quia, suscipit? Rerum ea blanditiis cupiditate
            similique."
    />
    <ReceivedMsg content="Received" />
    <ReceivedMsg content="Received" />
    <ReceivedMsg content="Received" />
    <ReceivedMsg content="Received" />
    <ReceivedMsg content="Received" />
    <ReceivedMsg content="Received" />
    <ReceivedMsg content="Received" />
    <ReceivedMsg content="Received" />
    <ReceivedMsg content="Received" />
    <ReceivedMsg content="Received" />
    <ReceivedMsg content="Received" />
    <ReceivedMsg content="Received" />
    <ReceivedMsg content="Received" />
    <ReceivedMsg content="Received" />
    <ReceivedMsg
      content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt et
          inventore soluta? Quas ad ut dolorum fugiat voluptates voluptatem.
          Animi porro quo nemo, hic dicta voluptatem possimus eligendi
          distinctio error."
    />
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
