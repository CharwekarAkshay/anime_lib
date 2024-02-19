interface AnimeDetailPagePrams {
  params: { id: number };
}
export default function AnimeDetailPage({ params }: AnimeDetailPagePrams) {
  return <main>Hello World {params.id}</main>;
}
