import { useQuery } from "@tanstack/react-query";
import Screenshoot from "../entities/Screenshot";
import ApiClient from "../services/api-client";

const useScreenshots = (gameId : number) => {
    const apiClient = new ApiClient<Screenshoot>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey: (['screenshots', gameId]),
        queryFn: apiClient.getAll,
    });
}

export default useScreenshots;
