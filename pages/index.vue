<template>
  <k-page>
    <k-navbar title="My App" />

    <k-block strong>
      <div class="font-bold text-2xl p-4">
        Here is your Nuxt & Konsta UI app. Let's see what we have here.
      </div>
    </k-block>
    <k-block-title>Navigation</k-block-title>
    <k-list>
      <k-list-item href="#about/" title="About" />
      <k-list-item href="#form/" title="Form" />
    </k-list>

    <k-block strong class="flex space-x-4">
      <k-button>Button 1</k-button>
      <k-button>Button 2</k-button>
    </k-block>
  </k-page>
</template>
<script>
// Konsta UI components
import {
  kPage,
  kNavbar,
  kBlock,
  kButton,
  kList,
  kListItem,
  kLink,
  kBlockTitle,
} from "konsta/vue";

export default {
  components: {
    kPage,
    kNavbar,
    kBlock,
    kButton,
    kList,
    kListItem,
    kLink,
    kBlockTitle,
  },
};
</script>
