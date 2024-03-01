"use client";
import { Roboto } from "next/font/google";
import cx from "clsx";
import { useEffect, useState } from "react";
import FabThemeChanger from "@/app/components/FabThemeChanger";
import { fetchAnime, fetchCharacters } from "@/app/actions";
import Image from "next/image";
import AnimeDataLoader from "@/app/anime/[id]/components/AnimeDataLoader";
import AnimeDataView from "./components/AnimeDataView";

interface AnimeDetailPagePrams {
  params: { id: number };
}

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

export default function AnimeDetailPage({ params }: AnimeDetailPagePrams) {
  const [theme, setTheme] = useState<string>("theme-orange");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | any>(null);
  const [animeData, setAnimeData] = useState<AnimeData | null>(null);
  const [characters, setCharacters] = useState<AnimeCharacter[] | null>(null);

  const onThemeChange = (theme: string) => {
    setTheme(theme);
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const [animeRes, charactersRes] = await Promise.all([
          fetchAnime(params.id),
          fetchCharacters(params.id),
        ]);

        const data = animeRes.data;
        const charactersData = charactersRes.data;
        console.log(charactersData);
        setAnimeData(data);
        setCharacters(charactersData);
      } catch (err: Error | any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [params.id]);

  return (
    <body
      className={cx(
        "relative min-h-screen bg-color-background leading-relaxed text-zinc-300 antialiased",
        roboto.className,
        theme,
      )}
    >
      <main>
        {isLoading ? (
          <AnimeDataLoader />
        ) : (
          animeData &&
          characters && (
            <AnimeDataView animeData={animeData} characters={characters} />
          )
        )}
      </main>
      <FabThemeChanger themes={themes} onThemeChange={onThemeChange} />
    </body>
  );
}
