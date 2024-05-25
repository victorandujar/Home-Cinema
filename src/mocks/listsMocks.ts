import { FullList, List } from "@/modules/lists/domain/List";
import { mockMovies } from "./moviesMocks";

export const mockLists: List[] = [
  {
    name: "Lista de Películas Favoritas",
    description: "Una lista de mis películas favoritas de todos los tiempos.",
  },
  {
    name: "Películas para Ver",
    description: "Películas que quiero ver en el futuro cercano.",
  },
  {
    name: "Clásicos del Cine",
    description: "Una colección de películas clásicas imprescindibles.",
  },
  {
    name: "Películas de Ciencia Ficción",
    description: "Las mejores películas de ciencia ficción.",
  },
  {
    name: "Documentales Interesantes",
    description: "Documentales que considero interesantes y educativos.",
  },
];

export const mockFullList: FullList = {
  id: 123,
  name: "My List",
  description: "This is my list of favorite movies.",
  items: mockMovies,
  created_by: "",
  favorite_count: 0,
  item_count: 2,
  page: 1,
  poster_path: "",
  total_pages: 211,
  total_results: 1234,
};
