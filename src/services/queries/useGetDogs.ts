import { useQuery } from "@tanstack/react-query";
import { QUERYKEYS } from "../queryKeys";
import { AXIOS } from "../../config/axios";

export const queryFn = () =>
  AXIOS.get("breeds/image/random").then((res) => res.data);
export const useGetDogs = (id: number) => {
  return useQuery({
    queryKey: [QUERYKEYS.GetDogs, id],
    queryFn,
    staleTime: 60000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};
