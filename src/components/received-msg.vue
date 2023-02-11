<template>
  <div class="received-message">{{ content }}</div>
</template>

<script>
export default {
  name: "received-msg",
  props: {
    content: "",
  },
};
</script>
