import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface AnimeDataViewProps {
  animeData: AnimeData;
  characters: AnimeCharacter[];
}

const AnimeDataView = (props: AnimeDataViewProps) => {
  const { animeData, characters } = props;
  const variants = {
    hidden: { y: 50 },
    visible: { y: 0 },
    exit: { y: 50 },
  };

  return (
    <div className="min-h-[100vh] min-w-[100vw] px-32 py-12">
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-10">
            <div className="text-5xl text-primary-500">
              {animeData.title_english}
            </div>
            <div className="flex flex-row justify-start gap-10">
              <Image
                src={animeData.images.jpg.large_image_url}
                alt={animeData.title}
                width={240}
                height={240}
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1">
                  <div className="font-bold text-primary-400">Name:</div>
                  <div className="text-zinc-200">{animeData.title}</div>
                </div>
                <div className="flex flex-row gap-1">
                  <div className="font-bold text-primary-400">English:</div>
                  <div className="text-zinc-200">{animeData.title_english}</div>
                </div>
                <div className="flex flex-row gap-1">
                  <div className="font-bold text-primary-400">Japanese:</div>
                  <div className="text-zinc-200">
                    {animeData.title_japanese}
                  </div>
                </div>
                <div className="flex flex-row gap-1">
                  <div className="font-bold text-primary-400">Synonym:</div>
                  <div className="text-zinc-200">
                    {animeData.title_synonyms}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimeDataView;
