import useSWR from "swr";
import { BASE_URL, fetcher } from "../utils/utils";
import type { ListOfPeopleResponse } from "../utils/types";

const usePeople = () => {
  const { data, error, isLoading } = useSWR<ListOfPeopleResponse>(
    `${BASE_URL}/people/`,
    fetcher
  );

  return {
    people: data?.results,
    isLoading,
    isError: error,
  };
};

export default usePeople;
