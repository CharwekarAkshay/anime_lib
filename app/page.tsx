import { BASE_URL } from "../utils/constants";
import AnimeCardGrid from "./components/AnimeCardGrid";

const fetchAnime = async () => {
  const response = await fetch(`${BASE_URL}/top/anime?page=1&limit=20`);
  const data = await response.json();
  return data;
};

export default async function Home() {
  const anime: AnimePaginatedResponse = await fetchAnime();
  const animeData: AnimeData[] = anime.data;
  return (
    <main>
      <div className="sm:px-10 md:px-20 lg:px-32 xl:px-40">
        <AnimeCardGrid animes={animeData} />
      </div>
    </main>
  );
}
