import { BASE_URL } from "@/utils/constants";

export const fetchAnimes = async (pageNumber: number) => {
  const response = await fetch(
    `${BASE_URL}/top/anime?page=${pageNumber}&limit=15`,
  );
  const data = await response.json();
  return data;
};

export const fetchAnime = async (id: number) => {
  const response = await fetch(`${BASE_URL}/anime/${id}`);
  const data = await response.json();
  return data;
};

export const fetchCharacters = async (id: number) => {
  const response = await fetch(`${BASE_URL}/anime/${id}/characters`);
  const data = await response.json();
  return data;
};
