interface CharacterResponse {
  data: AnimeCharacter[];
}

interface ImageSet {
  image_url: string;
  small_image_url?: string; // Optional since it's not present in the 'jpg' type
}

interface Images {
  jpg: ImageSet;
  webp?: ImageSet; // Optional since it may not always be present
}

interface Character {
  mal_id: number;
  url: string;
  images: Images;
  name: string;
}

interface Person {
  mal_id: number;
  url: string;
  images: {
    jpg: ImageSet;
  };
  name: string;
}

interface VoiceActor {
  person: Person;
  language: string;
}

interface AnimeCharacter {
  character: Character;
  role: string;
  favorites: number;
  voice_actors: VoiceActor[];
}
