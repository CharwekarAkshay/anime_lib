import { fetchAnime } from "./actions";
import AnimeCardGrid from "./components/AnimeCardGrid";
import Landing from "./components/Landing";

export default async function Home() {
  const anime: AnimePaginatedResponse = await fetchAnime(1);
  const animeData: AnimeData[] = anime.data;
  return (
    <main>
      <div className="sm:px-10 md:px-20 lg:px-32 xl:px-40">
        <Landing />
        <AnimeCardGrid animes={animeData} />
      </div>
    </main>
  );
}
