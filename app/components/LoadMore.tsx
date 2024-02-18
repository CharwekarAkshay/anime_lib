"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchAnime } from "../actions";
import AnimeCardGrid from "./AnimeCardGrid";

function LoadMore() {
  const { ref, inView } = useInView();
  const [animeData, setAnimeData] = useState<AnimeData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(2);

  useEffect(() => {
    if (inView) {
      fetchAnime(currentPage)
        .then((res: AnimePaginatedResponse) => {
          const animeDataResponse = res.data;
          setAnimeData([...animeData, ...animeDataResponse]);
          setCurrentPage(res.pagination.current_page + 1);
        })
        .catch(() => {
          console.log("Something went wrong!!!");
        });
    }
  }, [inView, animeData, currentPage]);

  return (
    <>
      <AnimeCardGrid animes={animeData} />
      <section className="flex w-full items-center justify-center">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
