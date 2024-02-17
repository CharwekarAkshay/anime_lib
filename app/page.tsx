import { BASE_URL } from "../utils/constants";
import AnimeCard from "./components/AnimeCard";

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
        <section className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {animeData.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </section>
      </div>
    </main>
  );
}
