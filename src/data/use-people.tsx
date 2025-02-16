import useSWR from "swr";
import { BASE_URL, fetcher } from "../utils/utils";
import type { ListOfPeopleResponse } from "../utils/types";

const usePeople = (url = `${BASE_URL}/people/`) => {
  const { data, error, isLoading } = useSWR<ListOfPeopleResponse>(url, fetcher);

  return {
    people: data?.results,
    previous: data?.previous,
    next: data?.next,
    isLoading,
    isError: error,
  };
};

export default usePeople;
