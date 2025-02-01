export type Elements = {
  fire: number;
  water: number;
  earth: number;
  air: number;
};

export type AllPlanetDataType = {
  getPlanets: {
    edges: EdgesType[];
    pageInfo: {
      totalCount: number;
    };
  };
};

type EdgesType = {
  node: {
    planetID: string;
    name: string;
    image: string;
    planetType: string;
    listingInfo?: {
      startPrice: number;
    };
    priceInUSD: number;
  };
};

export type SinglePlanetDataType = {
  getPlanet: Elements & {
    name: string;
    image: string;
    planetType: string;
    planetID: string;
  };
};
