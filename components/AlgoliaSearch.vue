<template>
  <div class="w-screen">
    <AisInstantSearch
      v-bind:search-client="searchClient"
      index-name="people"
      class="px-4 w-full pt-4"
    >
      <AisSearchBox />
      <AisStateResults>
        <!-- <div slot-scope="{ query }"> -->
        <!-- <div v-if="query.length" class="bg-white"> -->
        <div class="bg-white">
          <AisStats>
            <div
              slot-scope="{ nbHits }"
              class="text-sm flex font-light p-1 my-2"
            >
              <img
                src="~/assets/images/algolia-logo.svg"
                alt="Algolia"
                class="w-5 h-5 mr-2"
                width="20"
                height="20"
              />
              <span class="text-md text-gray-700"
                >Found {{ nbHits }} results</span
              >
            </div>
          </AisStats>
          <AisPagination class="my-2" />
          <AisHits>
            <div slot="item" slot-scope="{ item }">
              <ResultItem :item="item" />
            </div>
          </AisHits>
        </div>
      </AisStateResults>
    </AisInstantSearch>
  </div>
</template>

<script lang="js">
import algoliasearch from "algoliasearch";
import {
  AisInstantSearch,
  AisSearchBox,
  AisHits,
  AisStateResults,
  AisHighlight,
  AisPagination,
  AisStats
} from "vue-instantsearch";
import "instantsearch.css/themes/satellite-min.css";
import ResultItem from "./ResultItem.vue";
import { getAlgoliaHelper } from "@/services/algolia";

export default {
  name:"AlgoliaSearch",
  components: {
    AisInstantSearch,
    AisSearchBox,
    AisHits,
    AisHighlight,
    AisStateResults,
    AisStats,
    AisPagination,
    ResultItem,
  },
  data() {
    return {
      searchClient: algoliasearch(this.$config.APPLICATION_SECRET,this.$config.ADMIN_SECRET)
    };
  },
};
</script>

<style>
.ais-Hits-item,
.ais-InfiniteHits-item {
  padding: 0.7em !important;
}
</style>
