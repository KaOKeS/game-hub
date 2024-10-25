import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import genres from "../data/genres";

const apiClient = new ApiClient<Genre>('/platforms/lists/parents');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
  }

const useGenres = () =>  
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: {count: genres.length, results: genres}
  });


export default useGenres;