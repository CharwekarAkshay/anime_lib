import Image from "next/image";

interface AnimeCardProps {
  key: string | number;
  anime: AnimeData;
}

const AnimeCard = (props: AnimeCardProps) => {
  const { anime } = props;
  return (
    <div className="flex cursor-pointer flex-col  items-start justify-center space-y-2 rounded-md px-2 py-4">
      <Image
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
        width={200}
        height={300}
      />
      <div className="flex flex-col justify-start">
        <h3 className="text-lg font-bold">{anime.title}</h3>
        <p className="text-sm">{anime.title_japanese}</p>
      </div>
    </div>
  );
};
export default AnimeCard;
