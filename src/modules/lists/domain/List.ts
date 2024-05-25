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
}
