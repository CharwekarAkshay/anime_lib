"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import AnimeCard from "./AnimeCard";
import LoadMore from "./LoadMore";

interface AnimeCardGridProps {
  animes: AnimeData[];
}

const AnimeCardGrid = (props: AnimeCardGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { animes } = props;
  return (
    <div className="grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3">
      {animes.map((anime, index) => (
        <Link
          href={anime.title}
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
          <AnimeCard anime={anime} />
        </Link>
      ))}
    </div>
  );
};

export default AnimeCardGrid;
