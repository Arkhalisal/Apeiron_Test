// this is a custom hook that fetches all planets

// system imports
import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

// type
import type { AllPlanetDataType } from "@/types";

export function useGetAllPlanets() {
  // initially load 500 planets
  const { loading, error, data, fetchMore } = useQuery<AllPlanetDataType>(GET_PLANETS, {
    variables: {
      filterInput: {},
      pagingInput: { first: 500 },
      sortInput: { sortBy: "PriceAsc" },
    },
  });

  // calculate total count
  const totalCount = data?.getPlanets?.pageInfo.totalCount || 0;

  // load extra planets if there are more than 500 planets
  useEffect(() => {
    // check if there are more than 500 planets
    if (data && data.getPlanets.edges.length < totalCount) {
      loadExtraPlanets();
    }
  }, [data, totalCount, fetchMore]);

  const loadExtraPlanets = async () => {
    // offset by 500 initially
    let offset = 500;

    // loop through all planets
    while (offset < totalCount) {
      // fetch more planets with offset
      const { data: fetchMoreResult } = await fetchMore({
        variables: {
          pagingInput: {
            first: 500,
            offset: offset,
          },
        },
        // merge the new data with the existing data
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;

          // ensure we return a new object and merge correctly
          return {
            getPlanets: {
              ...prev.getPlanets,
              edges: [...prev.getPlanets.edges, ...fetchMoreResult.getPlanets.edges],
              pageInfo: fetchMoreResult.getPlanets.pageInfo,
            },
          };
        },
      });

      // exit if no more data is fetched
      if (!fetchMoreResult || fetchMoreResult.getPlanets.edges.length === 0) {
        break;
      }

      // update offset
      offset += fetchMoreResult.getPlanets.edges.length; // Update offset for the next fetch
    }
  };

  // return loading, error, and data
  return { loading, error, data };
}

// gql query provided

const GET_PLANETS = gql`
  query GetPlanets($filterInput: GetPlanetsFilterInput!, $pagingInput: PagingInput, $sortInput: PlanetSortInput!) {
    getPlanets(filterInput: $filterInput, pagingInput: $pagingInput, sortInput: $sortInput) {
      edges {
        cursor
        node {
          ...PlanetLite
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        totalCount
        endCursor
        startCursor
      }
    }
  }

  fragment PlanetLite on Planet {
    ageDisplay
    name
    planetID
    air
    availableAttachTime
    bornTime
    breedCount
    breedCountMax
    childrenIDs
    coreType
    earth
    fire
    generation
    image
    lastBreedTime
    nftListingStatus
    planetClass
    planetCreateTime
    planetType
    priceInUSD
    stage
    status
    water
    listingInfo {
      currencyCode
      duration
      endPrice
      startDate
      startPrice
    }
    owner {
      avatar
      name
      tag
      walletAddress
      createdAt
    }
  }
`;
