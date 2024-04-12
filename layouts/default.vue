<template>
  <!-- Wrap our app with App component -->
  <k-app theme="ios">
    <slot />
  </k-app>
</template>

<script>
import { kApp } from "konsta/vue";

export default {
  components: {
    kApp,
  },
};
</script>
