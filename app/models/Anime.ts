interface AnimePaginatedResponse {
  pagination: Pagination;
  data: AnimeData[];
}

interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

interface AnimeData {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: null | string;
    url: null | string;
    embed_url: null | string;
    images: {
      image_url: null | string;
      small_image_url: null | string;
      medium_image_url: null | string;
      large_image_url: null | string;
      maximum_image_url: null | string;
    };
  };
  approved: boolean;
  titles: {
    type: string;
    title: string;
  }[];
  title: string;
  title_english: null | string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
    };
    string: string;
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: null | string;
  season: null | string;
  year: null | number;
  broadcast: {
    day: null | string;
    time: null | string;
    timezone: null | string;
    string: null | string;
  };
  producers: AnimeProducer[];
  licensors: AnimeLicensor[];
  studios: AnimeStudios[];
  genres: AnimeGenre[];
  explicit_genres: AnimeGenre[];
  themes: AnimeTheme[];
  demographics: AnimeDemographic[];
}

interface AnimeProducer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface AnimeLicensor {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface AnimeStudios {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface AnimeGenre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface AnimeTheme {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface AnimeDemographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
