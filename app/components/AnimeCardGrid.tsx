"use client";

import { AnimatePresence, motion, useInView, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { fetchAnimes } from "../actions";
import AnimeCard from "./AnimeCard";
import Spinner from "./Spinner";

interface AnimeCardGridProps {
  animes: AnimeData[];
}

const AnimeCardGrid = (props: AnimeCardGridProps) => {
  const { animes } = props;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(2);
  const [animeData, setAnimeData] = useState<AnimeData[]>(animes);
  const [isError, setIsError] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const topTrendingRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: topTrendingRef,
    offset: ["end end", "start start"],
  });

  useEffect(() => {
    if (isInView && !isError) {
      fetchAnimes(currentPage)
        .then((res: AnimePaginatedResponse) => {
          const animeDataResponse = res.data;
          setAnimeData([...animeData, ...animeDataResponse]);
          setCurrentPage(res.pagination.current_page + 1);
          // * Testing purpose only. Rate limiter
          setIsError(true);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  }, [isInView, animeData, currentPage, isError]);

  return (
    <>
      <div className="bg-color-background sticky top-0 z-50 flex flex-row items-center gap-2 px-2 py-5">
        <div className="text-5xl">Top Trending</div>
        <motion.div
          className="bg-primary-500 h-2 flex-1 origin-left rounded-lg"
          ref={topTrendingRef}
          style={{ scaleX: scrollYProgress }}
        ></motion.div>
      </div>
      <div className="grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3">
        {animeData.map((anime, index) => (
          <Link
            href={`anime/${anime.mal_id}`}
            key={anime.mal_id}
            className="group relative block h-full w-full p-2"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-3xl bg-slate-700/40"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2,
                    },
                  }}
                />
              )}
            </AnimatePresence>
            <AnimeCard anime={anime} index={index} />
          </Link>
        ))}
      </div>
      <div className="flex w-full items-center justify-center py-10" ref={ref}>
        {isError ? (
          <div className="text-primary-300 flex items-center justify-center gap-2">
            <MdErrorOutline size={25} />
            <span>Something went wrong! Please try again.</span>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default AnimeCardGrid;
