<template>
  <AlgoliaSearch />
</template>

<script lang="ts">
import Vue from "vue";
import AlgoliaSearch from "@/components/AlgoliaSearch.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    AlgoliaSearch,
  },
});
</script>
