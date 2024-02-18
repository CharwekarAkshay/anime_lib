import { motion } from "framer-motion";
import Image from "next/image";

interface AnimeCardProps {
  anime: AnimeData;
  className?: string;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AnimeCard = (props: AnimeCardProps) => {
  const { anime, className, index } = props;
  return (
    <motion.div
      className="relative z-20 h-full w-full overflow-hidden rounded-2xl p-4 group-hover:border-slate-700"
      initial="hidden"
      animate="visible"
      transition={{
        delay: Math.log(index + 1) * 0.75,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      variants={variants}
    >
      <div className="z-50 flex gap-5">
        <Image
          src={anime.images.jpg.image_url}
          alt={anime.title}
          width={100}
          height={200}
        />
        <div className="flex flex-col justify-evenly  gap-1">
          <div className="text-primary-400 tracking-wide">{anime.title}</div>
          <div className="text-slate-400">{anime.rating}</div>
          <div className="line-clamp-2">{anime.synopsis}</div>
          <div className="flex flex-row items-center gap-2">
            <div className="text-xl">⭐</div>
            <div className="text-primary-400">{anime.score}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimeCard;
