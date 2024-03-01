"use client";
import cx from "clsx";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import { fetchAnimes } from "./actions";
import AnimeCardGrid from "./components/AnimeCardGrid";
import FabThemeChanger from "./components/FabThemeChanger";
import Landing from "./components/Landing";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal", "italic"],
});

const themes = [
  "theme-stone",
  "theme-red",
  "theme-orange",
  "theme-amber",
  "theme-yellow",
  "theme-lime",
  "theme-green",
  "theme-emerald",
  "theme-teal",
  "theme-cyan",
  "theme-sky",
  "theme-blue",
  "theme-indigo",
  "theme-violet",
  "theme-purple",
  "theme-fuchsia",
  "theme-pink",
  "theme-rose",
];

export default function Home() {
  // Introduce state variables for anime data and loading state
  const [animeData, setAnimeData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState<string>("theme-orange");

  const onThemeChange = (theme: string) => {
    setTheme(theme);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const anime = await fetchAnimes(1);
        setAnimeData(anime.data);
      } catch (err: Error | any) {
        setLoading(false);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // TODO: Redirect to an error page
  return (
    <body
      className={cx(
        "relative min-h-screen bg-color-background leading-relaxed text-zinc-300 antialiased",
        roboto.className,
        theme,
      )}
    >
      <main>
        <div className="sm:px-10 md:px-20 lg:px-32 xl:px-40">
          <Landing />
          <AnimeCardGrid animes={animeData} />
        </div>
      </main>
      <FabThemeChanger themes={themes} onThemeChange={onThemeChange} />
    </body>
  );
}
