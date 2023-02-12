<template>
  <section class="chat-header">
    <div class="left-part">
      <div class="receiver-avatar">
        <img
          class="avatar"
          src="https://paimon.moe/images/characters/rosaria.png"
          alt="avatar"
        />
      </div>
      <p class="receiver-name">
        {{ $store.state.user.name }} {{ $store.state.user._id }}
      </p>
    </div>
    <div class="right-part">
      <div class="cancel-chat" @click="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "chat-header",
  methods: {
    close() {
      this.$router.back();
      this.$store.commit("closeWSConnection");
    },
  },
};
</script>
