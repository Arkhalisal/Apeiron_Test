// this is a custom hook that fetches one planets

// system imports
import { gql, useQuery } from "@apollo/client";

// type
import type { SinglePlanetDataType } from "@/types";

export function useGetOnePlanet(planetId: string) {
  const { loading, error, data } = useQuery<SinglePlanetDataType>(GET_PLANETS, {
    variables: {
      planetID: planetId,
    },
  });

  return { loading, error, data };
}

// gql query provided

const GET_PLANETS = gql`
  query GetPlanet($planetID: String!) {
    getPlanet(planetID: $planetID) {
      ...Planet
    }
  }

  fragment Planet on Planet {
    ...PlanetLite
    armor
    atkPow
    atkRange
    atkSpeed
    availableAttachTime
    bornTime
    critChance
    critDmg
    cSkill1
    cSkill2
    cSkill3
    energy
    health
    primevalLegacy
    pSkill1
    pSkill2
    weapon
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
