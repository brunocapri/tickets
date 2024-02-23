export interface Event {
  name: string;
  images: Array<{
    ratio: string;
    url: string;
    width: number;
    height: number;
    fallback: boolean;
  }>;
  dates: {
    start: {
      localDate: string;
      localTime: string;
      dateTime: string;
    };
  };
  priceRanges:
    | Array<{
        type: string;
        currency: string;
        min: number;
        max: number;
      }>
    | undefined;
  _embedded: {
    venues: Array<{
      name: string;
      type: string;
      id: string;
      test: boolean;
      url: string;
      locale: string;
      images: Array<{
        ratio: string;
        url: string;
        width: number;
        height: number;
        fallback: boolean;
      }>;
      postalCode: string;
      timezone: string;
      city: {
        name: string;
      };
      state: {
        name: string;
        stateCode: string;
      };
    }>;
  };
}

export interface Pagination {
  number: number;
  page:
    | {
        size: number;
        totalElements: number;
        totalPages: number;
        number: number;
      }
    | undefined;
}
