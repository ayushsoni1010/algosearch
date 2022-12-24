import algoliaSearch from "algoliasearch/lite";
import algoliaSearchHelper from "algoliasearch-helper";

const applicationId: any = process.env.applicationId;
const adminKey: any = process.env.adminApiKey;

const algoliaClient = algoliaSearch(applicationId, adminKey);

const algoliaHelper = algoliaSearchHelper(algoliaClient, "people", {
  disjunctiveFacets: ["city", "name", "country", "company"],
  hitsPerPage: 7,
  maxValuesPerFacet: 20,
  attributesToRetrieve: [
    "id",
    "name",
    "city",
    "email",
    "designation",
    "gender",
    "image_url",
    "company",
    "country",
    "lng",
    "lat",
  ],
});

export const getAlgoliaClient = () => algoliaClient;
export const getAlgoliaHelper = () => algoliaHelper;
