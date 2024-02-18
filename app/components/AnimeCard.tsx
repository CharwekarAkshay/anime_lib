import Image from "next/image";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

interface AnimeCardProps {
  anime: AnimeData;
  className?: string;
}

const AnimeCard = (props: AnimeCardProps) => {
  const { anime, className } = props;
  return (
    <div className="relative z-20 h-full w-full overflow-hidden rounded-2xl p-4 group-hover:border-slate-700">
      <div className="z-50 flex gap-5">
        <Image
          src={anime.images.jpg.image_url}
          alt={anime.title}
          width={100}
          height={200}
        />
        <div className="flex flex-col gap-1">
          <div className="tracking-wide text-lime-300">{anime.title}</div>
          <div>{anime.rating}</div>
          <Rating
            readOnly
            value={anime.score}
            items={10}
            className="max-w-[50%]"
          />
          <div className="line-clamp-2">{anime.synopsis}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
