import { Movie } from "@/modules/movies/domain/Movies";

export interface List {
  name: string;
  description: string;
}

export interface ListApiResponse {
  success: boolean;
  list_id: number;
}

export interface ListsSliceState {
  loading: boolean;
  list: List;
  listId: number;
  lists: FullList[];
  success: boolean;
}

export interface FullList {
  created_by: string;
  description: string;
  favorite_count: number;
  id: number;
  item_count: number;
  items: Movie[];
  name: string;
  page: number;
  poster_path: string | null;
  total_pages: number;
  total_results: number;
}
