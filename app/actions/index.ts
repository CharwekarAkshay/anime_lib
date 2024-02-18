import { BASE_URL } from "@/utils/constants";

export const fetchAnime = async (pageNumber: number) => {
  const response = await fetch(
    `${BASE_URL}/top/anime?page=${pageNumber}&limit=15`,
  );
  const data = await response.json();
  return data;
};
